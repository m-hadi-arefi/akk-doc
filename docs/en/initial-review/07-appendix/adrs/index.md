---
title: "Architecture Decision Records (ADRs) Index"
lang: en
translation: /fa/initial-review/07-appendix/adrs/
---

# Architecture Decision Records (ADRs) Index

## Executive Summary
Architecture Decision Records (ADRs) capture critical technical choices, their business context, alternatives considered, and long-term consequences. This registry documents the six foundational architectural decisions accepted for the Arian Khodro Core Platform.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        FOUNDATIONAL ARCHITECTURAL DECISIONS                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  ADR-001 ► Modular Monolith Architecture over Premature Microservices                  │
│  ADR-002 ► Anti-Corruption Layer (ACL) for Safe Legacy Tadark Coexistence              │
│  ADR-003 ► PostgreSQL 16+ as Primary Enterprise Database Engine                        │
│  ADR-004 ► Central VIN Golden Record & Master Data Management Architecture             │
│  ADR-005 ► Hybrid Document OCR Pipeline with Mandatory Human-in-the-Loop Review        │
│  ADR-006 ► In-House Engineering Squad over Turnkey Proprietary Vendor Outsourcing      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Approved Architectural Decisions Registry

| ADR Number | Title | Status | Date Accepted | Primary Driver |
| :---: | :--- | :---: | :---: | :--- |
| **[ADR-001](./adr-001-modular-monolith)** | Modular Monolith vs. Microservices | **Accepted** | 2026-09-04 | High operational velocity without distributed transaction complexity. |
| **[ADR-002](./adr-002-anti-corruption-layer)** | Anti-Corruption Layer for Tadark | **Accepted** | 2026-09-04 | Prevent legacy Delphi locks while ensuring financial consistency. |
| **[ADR-003](./adr-003-postgresql-primary-database)** | PostgreSQL as Primary Relational DB | **Accepted** | 2026-09-04 | Enterprise ACID reliability, advanced JSONB, and zero license fees. |
| **[ADR-004](./adr-004-vin-golden-record)** | VIN Golden Record & MDM | **Accepted** | 2026-09-04 | Immutable single source of truth for vehicles; zero double-booking. |
| **[ADR-005](./adr-005-document-ocr-pipeline)** | Hybrid Document OCR Pipeline | **Accepted** | 2026-09-04 | High accuracy on foreign manifests combined with human verification. |
| **[ADR-006](./adr-006-inhouse-engineering)** | In-House Squad vs. Outsourcing | **Accepted** | 2026-09-04 | Long-term IP ownership, agility, and ending costly vendor lock-in. |

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Enforce ADR-001 through ADR-006 as the binding architectural constitution for all platform code.
- **Open Questions:** Drafting ADR-007 for telemetry metrics exporter stack selection.
- **Next Actions:** Read [ADR-001 Modular Monolith](./adr-001-modular-monolith) to review the core architecture decision.
