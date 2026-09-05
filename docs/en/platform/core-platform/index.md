---
title: "Core Platform Architecture Concept & Boundaries"
lang: en
translation: /fa/platform/core-platform/
---

# Core Platform Architecture Concept & Boundaries

> **Executive Summary:**  
> A frequent failure mode in corporate technology modernization is attempting to build an all-encompassing "Core Platform" simply because it is technically interesting, or conversely, mistaking a Core Platform for a commercial ERP.  
> This document establishes the formal architectural boundaries, guiding philosophy, and structural separation of concerns for Arian Khodro's Core Platform.  
> **Core Principle: The Core Platform is a consequence of validated organizational integration and governance requirements, not a speculative technology experiment. It is NOT an ERP, NOT a replacement for business applications, and will NOT become a monolithic dumping ground for business logic.**

---

## 1. Why a Core Platform May Be Necessary & What Problem It Solves

### The Problem Today: Point-to-Point Chaos
In the absence of a shared platform, every new software tool introduced (whether built in-house, purchased as SaaS, or contracted) creates a separate, disconnected island of data:
- Dealerships use separate logins for warranty claims, sales reservations, and spare parts.
- Customer records in the CRM diverge from invoice records in the legacy Tadark accounting system.
- Vehicle Identification Numbers (VIN) are manually re-typed between customs spreadsheets, warehouse intake logs, and finance vouchers.
- Any change in one system requires fragile, custom point-to-point scripts that frequently break.

### The Solution: A Lightweight Shared Integration Backbone
A Core Platform resolves this friction by providing a **single, reusable layer of shared cross-cutting services** (Identity, API routing, Master Data, and Event Messaging). Instead of every application inventing its own login system, database connections, and logging mechanisms, consuming applications plug into this governed backbone via standard APIs.

---

## 2. Multi-Tier Architectural Boundaries: What Belongs Where

To prevent the Core Platform from mutating into an unmaintainable monolith, the enterprise enforces strict tier separation:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. BUSINESS APPLICATIONS TIER                                                          │
│ [Vehicle Sales & Pricing]  [Customs Clearance]  [Spare Parts Warehouse]                │
│ [Dealership Workshop CRM]  [Delivery Logistics] [Customer Portal] [Executive Analytics]│
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Standard REST / JSON APIs & JWT Tokens
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 2. CORE PLATFORM TIER (Shared Foundation & Governance)                                 │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Central Identity &    │  │ API Gateway &         │  │ Master Data Management     │  │
│  │ Access (SSO, RBAC)    │  │ Traffic Management    │  │ (MDM: VIN, Customer, Parts)│  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Asynchronous Event    │  │ Centralized Immutable │  │ Unified Telemetry &        │  │
│  │ Bus (Kafka/RabbitMQ)  │  │ Audit Logging         │  │ Distributed Tracing APM    │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Standard Internal Contracts & Events
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 3. INTEGRATION LAYER & ANTI-CORRUPTION LAYER (Adapters & Connectors)                   │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Tadark Legacy Adapter │  │ Banking & Payment     │  │ Government Customs & Tax   │  │
│  │ (Anti-Corruption ACL) │  │ Gateway Connectors    │  │ Regulatory Compliance APIs │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ CRM Data Connector    │  │ Dealership Network    │  │ Foreign Supplier EDI /     │  │
│  │ & Bi-directional Sync │  │ Integration Gateway   │  │ Electronic PO Exchange     │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Dedicated Drivers & Protocol Adapters
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 4. FOUNDATIONAL & LEGACY BUSINESS SYSTEMS TIER                                         │
│ [Legacy Tadark Delphi Core] [Enterprise Relational DBs] [External Government Systems]  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Clear Responsibility Matrix: What Belongs in Each Layer

| Architecture Layer | What Belongs Here | What Is Strictly Forbidden Here |
| :--- | :--- | :--- |
| **Business Applications** | Domain-specific user screens, pricing calculation logic, workshop appointment schedules, customs dossier workflows, dealer sales funnels. | Building independent user authentication tables; maintaining duplicate customer/VIN records; directly modifying legacy Tadark tables. |
| **Core Platform** | Reusable cross-cutting capabilities: Single Sign-On (SSO), RBAC access evaluation, API Gateway routing, Master Data golden records, Event bus, Audit trail. | Domain business logic; customs tariff computation; warehouse binning rules; user-facing application screens; monolithic ERP functions. |
| **Integration Layer (ACL)** | Adapters translating modern JSON/REST API calls into legacy Tadark database queries; banking protocol bridges; customs XML/SOAP gateways; data sanitization. | Storing permanent business data; hosting standalone business logic independent of adapters. |
| **Legacy & Business Systems** | Historical general ledger accounting; statutory payroll; core inventory tables during transition coexistence. | Direct unauthenticated network exposure; manual database edits bypassing the integration adapter. |

---

## 4. Fundamental Distinctions: Core Platform vs. Commercial ERP

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                         CORE PLATFORM vs. MONOLITHIC ERP                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Dimension            Enterprise ERP Package           Arian Khodro Core Platform      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Scope & Focus        All-in-one monolith covering     Lightweight infrastructure and  │
│                       HR, finance, sales, and supply.  shared integration services.    │
│                                                                                        │
│  Process Coupling     Forces business to conform to    Imposes no rigid business rules;│
│                       rigid, generic vendor workflows. connects best-of-breed apps.    │
│                                                                                        │
│  Vendor Dependency    Total dependency on single       Zero vendor lock-in; modular    │
│                       commercial vendor and integrator.components easily swapped.      │
│                                                                                        │
│  Delivery Velocity    18-36 months before initial      Iterative value delivery within │
│                       value; high failure risk (>70%). initial 8-12 weeks.             │
│                                                                                        │
│  Local Customization  Extremely costly to adapt to     100% tailored to Iranian customs│
│                       Iranian customs & regulations.   and local dealership workflows. │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Core Platform Evolution & Detailed Blueprints

The Core Platform is not constructed as a massive upfront investment. It evolves incrementally: services are developed only when active business applications require them.

Explore the in-depth architectural specifications of each foundational pillar:

1. **[Centralized Identity & Access Management (SSO / RBAC)](/en/platform/core-platform/identity-access):** Single authentication, token-based authorization, and segregation of duties.
2. **[API Gateway & Event-Driven Messaging](/en/platform/core-platform/api-gateway):** Secure traffic routing, rate limiting, and asynchronous event distribution.
3. **[Master Data Management (MDM)](/en/platform/core-platform/master-data):** Golden records for Vehicle (VIN), Customer (National ID), and Spare Parts entities.

---

## 6. Related Documentation

- **[Executive Business Case →](/en/business-case/)** — Strategic and financial rationale.
- **[Step 3: Core Platform Development Guidelines →](/en/roadmap/03-development-and-core-platform)** — Roadmap context and delivery plan.
- **[Architecture Decision Records (ADR) →](/en/knowledge/adr-templates)** — Decision records governing Core Platform architecture.
