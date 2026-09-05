---
title: "API Gateway Management & Event-Driven Messaging"
lang: en
translation: /fa/platform/core-platform/api-gateway
---

# API Gateway Management & Event-Driven Messaging

> **Executive Summary:**  
> In a modern enterprise, systems must communicate cleanly without creating brittle, direct point-to-point dependencies. If the sales portal connects directly to the legacy Tadark database, a surge in vehicle registrations can crash corporate accounting.  
> The Core API Gateway and Event Messaging backbone serve as the central traffic manager and integration highway for Arian Khodro. They enforce perimeter security, throttle incoming traffic to protect fragile legacy software, route API calls intelligently, and enable decoupled, asynchronous event-driven workflows across commercial, customs, and dealership systems.

---

## 1. Core Functions of the API Gateway

The API Gateway acts as the single, hardened entry point for all internal and external software traffic:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Incoming Traffic: Dealership Portals, Mobile Apps, Customs Integrations│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS (TLS 1.3)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Core API Gateway Layer                         │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────┐  │
│  │ Cryptographic Token   │  │ Rate Limiting &       │  │ Response   │  │
│  │ Validation (JWT)      │  │ Legacy Protection     │  │ Caching    │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────┐  │
│  │ Request Routing &     │  │ Centralized TLS       │  │ Open       │  │
│  │ Load Balancing        │  │ SSL Termination       │  │ Telemetry  │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────┘  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Filtered, Authenticated Requests
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Downstream Microservices, Customs Engines & Legacy Tadark Adapters     │
└────────────────────────────────────────────────────────────────────────┘
```

### Essential Gateway Capabilities:
1. **Perimeter Security & Token Verification:** Validates digital signatures on incoming JWT access tokens issued by the Central IAM provider before routing requests to internal microservices. Unauthenticated requests are rejected at the edge.
2. **Rate Limiting & Legacy Shielding:** Protects legacy systems (such as Delphi Tadark) from crashing during peak vehicle sales registration windows by queuing and rate-limiting incoming traffic.
3. **Intelligent Read Caching:** Caches high-frequency, read-only master data (vehicle model catalogs, color codes, approved parts price lists, dealership branch directories) in memory, serving up to 80% of queries without touching backend databases.
4. **Distributed Tracing & Latency Telemetry:** Injects unique correlation IDs into every HTTP request, allowing engineers to trace transaction execution across services and detect bottlenecks instantly using OpenTelemetry and Grafana.

---

## 2. Event-Driven Architecture (EDA) & Messaging Backbone

Tightly coupled, synchronous HTTP integrations create severe operational vulnerabilities: if the banking gateway or customs portal experiences a 30-second delay, the user's web screen freezes, and dependent systems fail in a cascading outage.

To eliminate this vulnerability, Arian Khodro employs an asynchronous **Event-Driven Architecture** supported by an enterprise message broker (such as Kafka or RabbitMQ):

```text
[Commercial Sales Portal] ──► (Event: Vehicle Order Confirmed) ──► [Central Event Bus]
                                                                        │
                   ┌────────────────────────────────────────────────────┼────────────────────────────────────┐
                   ▼                                                    ▼                                    ▼
       [Inventory Service]                                      [Finance Service]                  [Notification Service]
   Assigns physical chassis VIN                             Generates pre-invoice draft            Dispatches confirmed SMS
   in central bonded yard                                   and reserves tax record                with tracking link to buyer
```

### Advantages of Asynchronous Event Streaming:
- **Decoupled System Availability:** If the finance accounting system is undergoing nightly backup maintenance, vehicle orders can still be accepted; events are buffered securely in the message queue and processed the moment the accounting service comes back online.
- **Auditable Transaction Streams:** Every business event (e.g., `VehicleImported`, `CustomsCleared`, `VINDelivered`, `WarrantyClaimApproved`) is permanently recorded as an immutable, timestamped event stream.

---

## 3. Distributed Data Reliability: The Transactional Outbox Pattern

A frequent defect in distributed architectures is the **dual-write failure**: a microservice updates its local database successfully, but crashes before it can publish the notification event to the message broker, leaving the organization with corrupted, out-of-sync records.

To guarantee 100% data consistency, Arian Khodro mandates the **Transactional Outbox Pattern**:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Microservice Local Database (Single ACID Transaction)                  │
│ ┌───────────────────────────────────┐ ┌──────────────────────────────┐ │
│ │ Business Entity Table             │ │ Outbox Event Table           │ │
│ │ (e.g., Order #1042 Inserted)      │ │ (e.g., OrderCreated Event)   │ │
│ └───────────────────────────────────┘ └──────────────┬───────────────┘ │
└──────────────────────────────────────────────────────┼─────────────────┘
                                                       │ Reliable CDC / Relay
                                                       ▼
                                      ┌──────────────────────────────────┐
                                      │ Message Broker (Kafka/RabbitMQ)  │
                                      └──────────────────────────────────┘
```

1. The business record and the outgoing event are saved in the **same local database transaction**.
2. A background message relay process reliably reads the outbox table and publishes events to the broker.
3. This mathematically guarantees **at-least-once message delivery** without distributed database locking.

---

## 4. Resilience via the Circuit Breaker Pattern

When integrating with external systems (such as national customs tax gateways or banking networks), the API Gateway enforces the **Circuit Breaker Pattern**:
- If an external dependency fails repeatedly (> 5 consecutive errors or timeouts), the circuit "trips open."
- Subsequent requests fail immediately with a friendly cached message or queued response rather than hanging user browser sessions for minutes.
- The gateway periodically tests the dependency with a single trial request ("half-open"); once healthy, normal traffic automatically resumes.

---

## 5. Related Documentation

- **[Core Platform Architecture Concept →](/en/platform/core-platform/)** — The shared infrastructure overview.
- **[Central Identity & Access Management (SSO) →](/en/platform/core-platform/identity-access)** — Gateway token validation.
- **[Architectural Design Patterns →](/en/knowledge/patterns)** — In-depth patterns for Outbox and Circuit Breaker.
