---
title: "Step 3: Development of Assessment Outcomes & Initial Core Platform"
lang: en
translation: /fa/roadmap/03-development-and-core-platform
---

# Step 3: Development of Assessment Outcomes & Initial Core Platform

> **Executive Summary:**  
> In Step 3, the transformation program transitions from discovery and decision governance into active engineering. Having validated business requirements in Step 1 and established sourcing strategies in Step 2, implementation focuses on two interconnected tracks:  
> 1. Delivering rapid, high-impact business applications to eliminate broken spreadsheets and paper bottlenecks.  
> 2. Establishing a lightweight, modular **Core Platform** to provide the shared identity, API integration, and master data backbone that prevents future software fragmentation.  
> **Strict Architectural Mandate: The Core Platform is a consequence of validated organizational requirements, not a developer's technology playground. It is NOT an ERP, NOT a replacement for business applications, and will NOT become a dumping ground for business logic.**

---

## 1. The Multi-Tier Architectural Model

To maintain clean separation of concerns and avoid building another monolithic system, the enterprise architecture is organized into four explicit tiers:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. BUSINESS APPLICATIONS TIER (Domain-Specific Workflows)                              │
│ [Customs Clearance] [Foreign Procurement] [Spare Parts Portal] [Dealer After-Sales]   │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Standard REST / JSON APIs & JWT Tokens
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 2. CORE PLATFORM TIER (Reusable Shared Capabilities)                                   │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Central Identity      │  │ API Gateway &         │  │ Master Data Management     │  │
│  │ (SSO, OAuth2, RBAC)   │  │ Traffic Governance    │  │ (Golden VIN, Customer, MDM)│  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Asynchronous Event    │  │ Immutable Audit Trail │  │ Unified Telemetry &        │  │
│  │ Bus (Kafka/RabbitMQ)  │  │ & Compliance Logging  │  │ Distributed Tracing        │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Standard Internal Interfaces
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 3. INTEGRATION LAYER & ANTI-CORRUPTION LAYER (Adapters & Gateways)                     │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────────┐  │
│  │ Tadark Legacy Adapter │  │ Banking & Payment     │  │ Customs & Government       │  │
│  │ (Anti-Corruption ACL) │  │ Settlement Connectors │  │ Regulatory Compliance APIs │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────────┘  │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Dedicated Database Drivers & Protocols
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 4. FOUNDATIONAL & LEGACY STORAGE TIER                                                  │
│ [Legacy Tadark Delphi Database] [PostgreSQL Services DB] [External Regulatory Systems] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. What the Core Platform IS vs. What It Is NOT

Executive leadership must understand the exact functional boundaries of the Core Platform:

| What the Core Platform IS | What the Core Platform IS NOT |
| :--- | :--- |
| **A shared capability foundation** providing single sign-on, API routing, master data, and event messaging to all consuming apps. | **It is NOT an enterprise ERP.** It does not contain pre-packaged accounting, payroll, or standard HR workflows. |
| **A lightweight integration backbone** enabling in-house, commercial COTS, and outsourced systems to communicate cleanly. | **It is NOT a replacement for business applications.** It does not host customs forms, sales portals, or workshop screens. |
| **A governance and security enforcer** ensuring all transactions are authenticated, rate-limited, and immutably audited. | **It is NOT a monolithic container for business logic.** Domain rules remain strictly inside their respective business apps. |
| **An incremental investment** where shared services are built only as real business applications require them. | **It is NOT a speculative, multi-year infrastructure project** built ahead of validated business demand. |

---

## 3. High-Priority Business Capabilities Engineered First

Guided by the bottleneck heatmap from Step 1, engineering delivers immediate operational relief to commercial and logistics operations:

1. **Spreadsheet Elimination & Validated Web Portals:**
   - Dedicated, validated web interfaces for foreign vehicle purchasing and proforma dossier management.
   - Eliminates disconnected Excel sheets, manual copy-pasting, and formula errors.
2. **Automated Customs Landed-Cost Calculation Engine:**
   - Automated computation of import customs duties, port handling surcharges, and landed costs per vehicle chassis.
   - Replaces multi-day manual spreadsheet computations with instant, auditable calculations.
3. **Spare Parts Requisition & Central Warehouse Ingestion:**
   - Digital parts receiving interface with barcoding/QR scanning support.
   - Eliminates paper-based warehouse intake slips and accelerates stock availability.

---

## 4. The Transition Architecture: Safe Coexistence with Tadark

To guarantee business continuity, modern applications interface with the legacy Tadark Delphi accounting core via the **Strangler Fig pattern** supported by an **Anti-Corruption Layer (ACL)**:

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ Modern Business Apps   │ ───► │ Anti-Corruption Layer  │ ───► │ Legacy Tadark System   │
│ (Clean JSON / REST)    │      │ • Schema translation   │      │ (Delphi Database Core) │
│                        │      │ • Read-through caching │      │                        │
│                        │ ◄─── │ • Data sanitization    │ ◄─── │                        │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### Key Coexistence Safeguards:
1. **Zero Direct Legacy Code Modification:** The legacy Delphi codebase remains untouched, preventing unintended regressions in core accounting.
2. **Read-Only Database Adapters:** Modern services read financial and warehouse states through optimized, read-only database views and triggers, isolating Tadark from heavy reporting queries.
3. **Graceful Degradation (Circuit Breaker):** If the Tadark database experiences high latency or downtime during month-end closing, modern web portals buffer user submissions locally, preventing user-facing crashes.

---

## 5. Core Platform Shared Pillars

The Core Platform is developed iteratively across four primary modules:

1. **[Centralized Identity & Access Management (SSO / IAM)](/en/platform/core-platform/identity-access):** Single sign-on using OpenID Connect (OIDC) and fine-grained Role-Based Access Control (RBAC).
2. **[API Gateway & Traffic Governance](/en/platform/core-platform/api-gateway):** Centralized SSL termination, token validation, rate-limiting, and distributed request routing.
3. **[Master Data Management (MDM)](/en/platform/core-platform/master-data):** Authoritative single source of truth for Vehicle (VIN), Customer (National ID), and Spare Parts entities.
4. **Immutable Audit & Telemetry:** Centralized logging of all transactions and system events, guaranteeing full regulatory and statutory auditability.

*For detailed architectural specifications, database schemas, and interface diagrams, see the [Core Platform Technical Blueprints →](/en/platform/core-platform/).*

---

## 6. Decision Gate 4 Approval

Step 3 implementation proceeds under **Decision Gate 4**:
- **Gate 4 Criteria:** Executive review of working prototypes, verified Tadark read-only adapter benchmarks, and the detailed sprint backlog.
- **Authorized Milestone:** Authorization to fund initial development sprints and transition verified capabilities toward in-house engineering governance (Step 4).

---

## 7. Related Documentation

- **[Step 2: Software Decision Framework →](/en/roadmap/02-decision-cycle)** — Sourcing choices governing what is built in Step 3.
- **[Step 4: In-House SDLC & Team →](/en/roadmap/04-internal-development-lifecycle)** — The engineering structure delivering these capabilities.
- **[Core Platform Technical Blueprints →](/en/platform/core-platform/)** — In-depth architectural designs for IAM, API Gateway, and MDM.
- **[Architecture Patterns & C4 Model →](/en/knowledge/patterns)** — Architectural reference patterns (Strangler Fig, ACL, Outbox).
