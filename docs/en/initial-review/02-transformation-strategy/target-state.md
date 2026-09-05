---
title: "Target State Enterprise Architecture"
lang: en
translation: /fa/initial-review/02-transformation-strategy/target-state
---

# Target State Enterprise Architecture

## Executive Summary
This document defines the Target State Enterprise Architecture for Arian Khodro. It provides executive leadership and engineering architects with a clear, coherent blueprint of how systems, databases, integration adapters, and user interfaces interact. Grounded in C4 Model Level 2 (Container View) principles, it illustrates how the modern Modular Monolith core platform coexists gracefully with the legacy Tadark system while retiring departmental spreadsheet silos.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TARGET STATE CONTAINER ARCHITECTURE (C4 LEVEL 2)                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [USERS & PARTNERS]                                                                    │
│  • Commercial Staff    • Warehouse Operators   • Dealership Staff    • Executive Board │
│          │                      │                      │                      │        │
│          ▼                      ▼                      ▼                      ▼        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   SECURE API GATEWAY / REVERSE PROXY LAYER (Authentication, Rate-Limiting, TLS)  │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   MODULAR MONOLITH CORE PLATFORM (Node.js/Go Core Services)                      │  │
│  │   ├── Commercial Module       ├── Customs Ingestion Engine (OCR)                 │  │
│  │   ├── Vehicle (VIN) Hub (MDM) ├── Dealership Partner Portal API                  │  │
│  │   └── Inventory Reservation   └── Central Audit Logging Service                  │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      │                                                 │
│           ┌──────────────────────────┴──────────────────────────┐                      │
│           ▼                                                     ▼                      │
│  ┌───────────────────────────────┐        ┌─────────────────────────────────────────┐  │
│  │   MODERN DATA LAYER           │        │   ANTI-CORRUPTION LAYER (ACL)           │  │
│  │   • PostgreSQL Primary DB     │        │   • Read-Only Replication Mirror        │  │
│  │   • Redis Operational Cache   │        │   • Bidirectional Sync Pipeline         │  │
│  │   • S3-Compatible Object Store│        │   • Safety Adapters around Legacy Tables│  │
│  └───────────────────────────────┘        └─────────────────────┬───────────────────┘  │
│                                                                 ▼                      │
│                                           ┌─────────────────────────────────────────┐  │
│                                           │   LEGACY CORE (Tadark System)           │  │
│                                           │   • General Financial Ledger            │  │
│                                           │   • Statutory Accounting Sub-Ledgers    │  │
│                                           └─────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Architectural Style: Pragmatic Modular Monolith
Rather than introducing dozens of independent microservices with distributed transaction complexity, network latencies, and container orchestration overhead, Arian Khodro adopts a **Modular Monolith**:
- **Unified Deployment Artifact:** All core enterprise business logic compiles and runs within a single, highly performant application boundary.
- **Strict Domain Boundaries:** Code is partitioned into isolated modules with public API interfaces. Module A cannot directly query Module B's database tables.
- **Future Decomposition Ready:** If a specific sub-domain (e.g., Customs OCR Ingestion) requires distinct scaling in the future, its modular boundary allows seamless extraction into an independent service.

---

## 2. Key Architectural Subsystems

### A. The Secure API Gateway & Edge
- Central entrance point terminating TLS encryption, enforcing authentication tokens (JWT via Keycloak), verifying role-based permissions, and throttling abusive traffic.

### B. The Anti-Corruption Layer (ACL)
- Prevents legacy Tadark data models and idiosyncrasies from polluting the clean, modern domain models of the new platform.
- Connects to a read-only database replica of Tadark, transforming legacy schemas into modern JSON domain events without placing locking strain on production accounting operations.

### C. Master Data Management (MDM) Hub
- Establishes the authoritative "Golden Record" for all Vehicle Identification Numbers (VINs), spare parts codes, and dealership profiles.

### D. Document Intelligence & OCR Subsystem
- Ingests foreign commercial invoices, bills of lading, and customs manifests. Parses text, matches line items against approved purchase orders, and surfaces confidence scores for human verification.

---

## 3. Coexistence & The Strangler Fig Pattern
The architecture guarantees operational continuity:
1. Tadark continues to process daily accounting vouchers and statutory balance sheets uninterrupted.
2. High-friction operational workflows (customs tracking, compound inventory scanning, dealership warranty requests) are handled directly by the modern Core Platform.
3. Financial reconciliation data is bridged back to Tadark via governed batch adapters, eliminating manual staff data re-entry.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Formalize the Modular Monolith and Anti-Corruption Layer as mandatory architectural patterns; reject premature microservices.
- **Open Questions:** Selection of on-premise hardware vs. private cloud hosting for the new PostgreSQL cluster.
- **Next Actions:** Review the [Transformation Roadmap](./transformation-roadmap) to inspect the execution phases.
