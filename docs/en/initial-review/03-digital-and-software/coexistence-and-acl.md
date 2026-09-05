---
title: "Legacy Coexistence & Anti-Corruption Layer (ACL)"
lang: en
translation: /fa/initial-review/03-digital-and-software/coexistence-and-acl
---

# Legacy Coexistence & Anti-Corruption Layer (ACL)

## Executive Summary
Modernizing enterprise software in an operating company is analogous to replacing an aircraft engine mid-flight. Arian Khodro cannot shut down the legacy Tadark accounting system without freezing statutory tax reporting, invoicing, and corporate payroll. This document specifies our **Legacy Coexistence Architecture** anchored by an **Anti-Corruption Layer (ACL)**. The ACL translates legacy data structures into clean modern domain events, guarantees zero read/write locking contention on production databases, and safely orchestrates financial reconciliation.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        ANTI-CORRUPTION LAYER (ACL) TOPOLOGY                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [PRODUCTION TADARK DB]                                                                │
│  (Delphi / SQL On-Premise)                                                             │
│          │ Transactional Log Shipping / Read-Replica Synchronization                   │
│          ▼                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   READ-ONLY REPLICA DATABASE (Isolated Hardware / Virtual Machine)               │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼ SQL Polling / Change Detection                  │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   ANTI-CORRUPTION LAYER (ACL) ENGINE                                             │  │
│  │   ├── Schema Translator (Legacy Table Rows ➔ Canonical JSON Domain Entities)     │  │
│  │   ├── Validation & Sanitization Engine (Detect corrupted legacy dates/encodings) │  │
│  │   └── Outbox Publisher (Emits domain events: VehicleIntakeRecorded, PartAudited) │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼ Domain Events                                   │
│  [CORE PLATFORM MESSAGE BUS] ➔ Modern PostgreSQL / VinHub / Commercial Portals         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. The Core Hazards of Direct Legacy Database Coupling
Attempting to connect modern web applications directly to the legacy Tadark database causes three catastrophic failure modes:
1. **Database Table Locking:** Complex analytical queries or mobile barcode sweeps lock relational tables, freezing Tadark desktop clients across the accounting floor.
2. **Data Model Pollution:** Legacy naming conventions, cryptic field flags (`FLAG_X=3`), and Persian character-set encoding anomalies infect the clean TypeScript domain model.
3. **Accidental Integrity Corruption:** Direct SQL `INSERT` or `UPDATE` commands bypass the uncompiled stored procedures embedded inside Tadark, resulting in unbalanced general ledgers.

---

## 2. Anti-Corruption Layer (ACL) Architectural Components

### A. Read-Only Replica Database
- A physically isolated read-replica of Tadark is maintained via SQL replication or nightly transaction log shipping.
- The Core Platform connects exclusively to this replica for data ingestion. Production accounting performance is completely unaffected.

### B. Legacy Schema Translator & Canonical Mapper
- Reads legacy table structures (e.g., `TBL_KALA`, `SANAD_HEAD`) and maps them into strongly-typed TypeScript domain models (e.g., `PartSKU`, `FinancialVoucher`).
- Handles historical data anomalies: converts solar Shamsi character strings to ISO-8601 UTC timestamps; normalizes Persian/Arabic character discrepancies (ی and ک).

### C. Outbox Event Emitter
- When new inventory receipts or accounting vouchers are detected on the replica, the ACL emits structured domain events into the platform message bus.

---

## 3. Financial Reconciliation & Voucher Bridge
When new operational transactions occur in the modern platform (e.g., a Dealership Warranty Credit Note is approved):
1. The Core Platform validates the business transaction and generates an immutable financial event payload.
2. The ACL's **Voucher Bridge** formats the transaction into an audited batch file or compliant intermediate staging table.
3. A certified Tadark batch import utility reads the staging table, executes Tadark's internal validation rules, and commits the voucher to the official general ledger.
4. The system logs a two-way reconciliation audit token linking the Core Platform UUID with the Tadark Voucher Number.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Strict ban on direct SQL writes into production Tadark tables; mandate all integration through the ACL staging bridge.
- **Open Questions:** Replication lag threshold (target: < 5 minutes) between production Tadark and the read-replica.
- **Next Actions:** Review [Data Architecture](./data-architecture) to inspect modern schema designs.
