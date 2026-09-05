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

## 2. Pragmatic Architecture: Modular Monolith + Integration Layer

Following our Architecture Audit and ADR Reset, we strictly rejected microservices and heavy distributed middleware for Phase 1. The Core Platform and business capabilities are structured as a **Modular Monolith + Integration Layer**:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        ARIAN KHODRO MODULAR ARCHITECTURE (PHASE 1)                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Nginx Reverse Proxy & TLS Termination (Rate Limiting, mTLS, Zero Cost)                │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Unified HTTP/REST + JWT Security Context
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ MODULAR MONOLITH APPLICATION (Single Deployable Binary / Container)                    │
│                                                                                        │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│  │ Customs & Dossier       │  │ Vehicle Inventory &     │  │ Spare Parts Catalog &   │ │
│  │ Management Module       │  │ VIN Lifecycle Module    │  │ Order Dispatch Module   │ │
│  └─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘ │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│  │ Dealership Commercial & │  │ Identity & RBAC Bridge  │  │ Transactional Database  │ │
│  │ Vehicle Handover Module │  │ (Keycloak / LDAP)       │  │ Outbox & Worker Queue   │ │
│  └─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘ │
│                                                                                        │
│  Domain-Owned Schemas & Shared Transactional PostgreSQL Database                       │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Bounded Context Interfaces / DB Outbox
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ INTEGRATION & ANTI-CORRUPTION LAYER (ACL)                                              │
│                                                                                        │
│  ┌──────────────────────────────────────────────────┐  ┌─────────────────────────────┐ │
│  │ Tadark Legacy Adapter (Read-Only Replica Reader  │  │ Tax Compliance Adapter       │ │
│  │ + Audited Financial Journal Posting Procedures)  │  │ (Samaneh Moadian API Bridge) │ │
│  └──────────────────────────────────────────────────┘  └─────────────────────────────┘ │
│  ┌──────────────────────────────────────────────────┐  ┌─────────────────────────────┐ │
│  │ Customs EDI & Scanned PDF OCR Pipeline Adapter   │  │ Bank Payment & Currency Sync │ │
│  │ (Side-by-side Human-in-the-Loop Extraction)      │  │ (NIMA Exchange Rates Adapter)│ │
│  └──────────────────────────────────────────────────┘  └─────────────────────────────┘ │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Read-Only SQL Queries / Legacy Delphi GUI
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ FOUNDATIONAL & LEGACY LEDGER SYSTEMS                                                   │
│ [Tadark Accounting Delphi Core] [Historical General Ledger] [Air-Gapped Bank Terminals]│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Business Capability Map (Strategic Sourcing Taxonomy)

Every capability is categorized into one of three architectural tiers to determine its sourcing model:

| Capability Tier | Scope & Business Function | Strategic Role | Governed Architecture Decision |
| :--- | :--- | :--- | :--- |
| **Core Differentiating** | Customs clearance dossier orchestration, VIN landed-cost calculation, dealer allocation rules. | Unique commercial advantage in Iranian automotive import market. | **BUILD IN-HOUSE** (Modular Monolith domains). Full IP ownership. |
| **Supporting** | Customer CRM lead capture, parts warehouse binning, dealership warranty intake forms. | Operational efficiency; standard workflows. | **BUY OR INTEGRATE** (Lightweight COTS or specialized web modules). |
| **Commodity** | General ledger accounting, payroll, employee single sign-on, server virtualization. | Standard non-differentiating overhead. | **WRAP & REUSE** (Retain Tadark for GL; connect Active Directory/Keycloak for SSO). |

---

## 4. Current State Reality Map (The As-Is Baseline)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               CURRENT STATE REALITY MAP                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   Commercial / Import Team                Logistics & Customs Team                     │
│   ┌──────────────────────────────┐        ┌──────────────────────────────┐             │
│   │ • 5 Master Excel Sheets      │        │ • Paper Bills of Lading (BOL)│             │
│   │ • Manual Proforma calculations│       │ • Manual clearance folders   │             │
│   │ • Phone calls for exchange rates      │ • Port demurrage tracking xls│             │
│   └──────────────┬───────────────┘        └──────────────┬───────────────┘             │
│                  │                                       │                             │
│                  ▼                                       ▼                             │
│     ┌─────────────────────────────────────────────────────────┐                        │
│     │ BOTTLENECK: Delayed VIN Handover & Landed Cost Disputes │                        │
│     └────────────────────────────┬────────────────────────────┘                        │
│                                  │ Manual paper vouchers & re-keying                   │
│                                  ▼                                                     │
│   Accounting & Finance               Dealership Network                                │
│   ┌──────────────────────────────┐   ┌──────────────────────────────┐                  │
│   │ • Legacy Tadark (Delphi/SQL) │   │ • Dealership orders via Fax  │                  │
│   │ • No external APIs or web UI │   │ • WhatsApp parts inquiries   │                  │
│   │ • Closed binary stored procs │   │ • Paper warranty claims      │                  │
│   └──────────────────────────────┘   └──────────────────────────────┘                  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Clear Responsibility Matrix: What Belongs in Each Layer

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
