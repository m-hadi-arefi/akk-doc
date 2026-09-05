---
title: "Enterprise Architecture Patterns & The C4 Model"
lang: en
translation: /fa/knowledge/patterns
---

# Enterprise Architecture Patterns & The C4 Model

> **Executive Summary:**  
> Modernizing legacy enterprise systems without operational disruption requires proven architectural patterns. Attempting to replace legacy software through ad-hoc rewrites invariably introduces data corruption and system outages.  
> This document details the software architecture patterns applied across Arian Khodro—including the **C4 Model**, the **Strangler Fig Pattern**, the **Anti-Corruption Layer (ACL)**, the **Transactional Outbox Pattern**, the **Circuit Breaker Pattern**, and the **Saga Pattern**.

---

## 1. The C4 Model for Visual Software Architecture

To communicate software architecture clearly without drowning in complex UML diagrams, Arian Khodro standardizes on the **C4 Model** developed by Simon Brown. The C4 model provides four hierarchical zoom levels:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                    THE C4 MODEL TIERS                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Level 1: System Context  ► Shows how Arian Khodro software fits in the wider world    │
│                             (Users, Dealerships, Customs, Banking, Legacy Systems)     │
│          ▼                                                                             │
│  Level 2: Container       ► Shows high-level executable units & data stores            │
│                             (Web App, Mobile App, API Gateway, DBs, Message Brokers)   │
│          ▼                                                                             │
│  Level 3: Component       ► Zooms into a single container to show internal modules     │
│                             (Controllers, Services, Repositories, Domain Adapters)     │
│          ▼                                                                             │
│  Level 4: Code            ► Implementation details (Classes, Interfaces, Schemas)      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. The Strangler Fig Pattern

### 1. Problem & Context
Arian Khodro operates on the legacy Delphi Tadark system. An overnight, "Big Bang" replacement would halt active operations, risk corrupting accounting records, and impose intolerable business risk.

### 2. Solution & Architecture
Named after Australian fig trees that seed in the canopy of host trees and gradually grow to replace the host from the outside, the **Strangler Fig Pattern** incrementally replaces specific functional slices of the legacy system with modern services until the old system can be safely decommissioned.

```text
[Phase 1: Intercept]        [Phase 2: Coexistence]         [Phase 3: Deprecation]
Incoming Requests           Incoming Requests              Incoming Requests
       │                           │                              │
       ▼                           ▼                              ▼
┌──────────────┐            ┌──────────────┐               ┌──────────────┐
│ API Gateway  │            │ API Gateway  │               │ API Gateway  │
└──────┬───────┘            └──────┬───────┘               └──────┬───────┘
       │                           ├───────────────┐              │
       │ (100% Legacy)             │ (New Slices)  │ (Legacy)     │ (100% Modern)
       ▼                           ▼               ▼              ▼
┌──────────────┐            ┌──────────────┐ ┌───────────┐ ┌──────────────┐
│ Legacy Core  │            │ Modern Micro │ │ Legacy    │ │ Modern Micro │
│ (Tadark)     │            │ Services     │ │ Tadark    │ │ Services     │
└──────────────┘            └──────────────┘ └───────────┘ └──────────────┘
```

### 3. How It Works
1. Place an API Gateway in front of the existing system.
2. Build a single new business capability (e.g., Customs Landed-Cost Calculation) as a modern service.
3. Route incoming requests for that capability to the new service while routing all remaining traffic to Tadark.
4. Synchronize data between the new service and Tadark using background integration bridges.
5. Repeat for subsequent business domains until the legacy system is empty.

### 4. Trade-Offs (Pros & Cons)
- **Advantages:** Zero operational downtime; continuous delivery of business value; localized risk.
- **Disadvantages:** Temporary architectural complexity; requires maintaining data synchronization bridges during coexistence.

### 5. Concrete Application at Arian Khodro
Tadark continues handling general ledger accounting and historical payroll. A modern web portal intercepts customs document intake and landed-cost calculation, writing summary vouchers back into Tadark via an adapter.

---

## 3. The Anti-Corruption Layer (ACL)

### 1. Problem & Context
The legacy Tadark database relies on outdated table structures, non-standard field names, legacy character encodings, and undocumented stored procedures. Directly connecting modern microservices to these legacy tables would infect the new clean codebase with technical debt.

### 2. Solution & Architecture
An **Anti-Corruption Layer (ACL)** acts as a bidirectional translation mediator between modern domain models and legacy data structures, ensuring that legacy quirks do not leak into modern software.

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ Modern Microservice    │ ───► │ Anti-Corruption Layer  │ ───► │ Legacy Delphi Tadark   │
│ (Clean JSON / Domain)  │      │ • Schema translation   │      │ (Non-standard tables,  │
│                        │ ◄─── │ • Data sanitization    │ ◄─── │  legacy encodings)     │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### 3. Trade-Offs & Application at Arian Khodro
The ACL isolates modern developers from Tadark's internals. If Tadark's underlying database changes or is eventually retired, only the ACL adapter needs modification; modern web applications remain completely unaffected.

---

## 4. The Transactional Outbox Pattern

### 1. Problem & Context
When a modern service updates its local database and publishes an event to a message broker (e.g., Kafka), a network failure between the two operations results in a "dual-write failure"—the database commits, but the event is never published, corrupting downstream systems.

### 2. Solution & Architecture
The **Transactional Outbox Pattern** saves the business entity record and the outgoing message into the **same relational database transaction**. A reliable background relay process then reads the outbox table and dispatches events to the message broker.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Microservice Local Database (Single ACID Transaction)                  │
│ ┌───────────────────────────────────┐ ┌──────────────────────────────┐ │
│ │ Business Entity Table             │ │ Outbox Event Table           │ │
│ │ (e.g. Order #1042 Inserted)       │ │ (e.g. OrderCreated Event)    │ │
│ └───────────────────────────────────┘ └──────────────┬───────────────┘ │
└──────────────────────────────────────────────────────┼─────────────────┘
                                                       │ Reliable CDC / Relay
                                                       ▼
                                      ┌──────────────────────────────────┐
                                      │ Message Broker (Kafka/RabbitMQ)  │
                                      └──────────────────────────────────┘
```

### 3. Relevance to Arian Khodro
Guarantees that when a commercial sales officer confirms a vehicle purchase contract, the inventory reservation and customer SMS notifications are mathematically guaranteed to fire without data loss.

---

## 5. The Circuit Breaker Pattern

### 1. Problem & Context
Synchronous integrations with external third-party systems (such as national customs tax gateways or bank settlement APIs) are prone to latency spikes and outages. If Arian Khodro's web servers wait synchronously on a hanging external API, system worker threads exhaust, crashing the internal application.

### 2. Solution & Architecture
A **Circuit Breaker** wraps external API calls with automated health monitoring:

```text
[Normal State: CLOSED] ──(Repeated Timeouts/Errors)──► [Fault State: OPEN]
Traffic flows normally                                 Calls fail fast immediately with cached response
        ▲                                                      │
        │                                                      ▼
        └─────────────────(Trial Request Succeeds)─────── [HALF-OPEN]
```

### 3. Relevance to Arian Khodro
Protects dealership workshop reception screens from freezing when government registration portals experience temporary network outages.

---

## 6. The Saga Pattern (Distributed Transactions)

### 1. Problem & Context
In a modular microservices architecture, a single business transaction spans multiple independent databases. For example, delivering a vehicle requires:
1. Updating Vehicle state to `DELIVERED` in Master Data.
2. Generating a Tax Invoice in Finance.
3. Decrementing stock in Central Warehouse.
Traditional two-phase commit (2PC) distributed database locking is brittle and slow.

### 2. Solution & Architecture
The **Saga Pattern** manages distributed transactions as a sequence of local transactions. Each step updates a local database and publishes an event triggering the next step. If a step fails, the Saga executes **Compensating Transactions** to reverse previous steps in reverse order.

```text
Forward Flow:   [1. Reserve VIN]  ──► [2. Authorize Payment] ──► [3. Issue Dispatch Slip]
Compensating:   [Cancel VIN Lock] ◄── [Refund Authorization] ◄── (Payment Fails at Step 2)
```

### 3. Orchestration vs. Choreography at Arian Khodro
Arian Khodro utilizes **Orchestrated Sagas** for complex automotive value streams: a centralized Saga Orchestrator coordinates transaction steps and compensatory actions, providing complete visibility into in-flight business processes.

---

## 7. Related Documentation

- **[Core Platform Architecture Blueprint →](/en/platform/core-platform/)** — Implementation of Gateway, IAM, and MDM patterns.
- **[Step 3: Core Platform Development →](/en/roadmap/03-development-and-core-platform)** — Incremental application of the Strangler Fig pattern.
- **[Architecture Decision Records (ADR) →](/en/knowledge/adr-templates)** — Recording pattern selections.
