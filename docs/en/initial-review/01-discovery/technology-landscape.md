---
title: "Technology Landscape & Technical Debt"
lang: en
translation: /fa/initial-review/01-discovery/technology-landscape
---

# Technology Landscape & Technical Debt

## Executive Summary
This document audits the legacy technology foundation of Arian Khodro, centering on the aging Tadark enterprise accounting system. Built on legacy Delphi architecture and proprietary database patterns, Tadark runs daily general ledger and inventory operations but lacks modern integration interfaces. We examine the technical debt, infrastructural single points of failure, and security risks that dictate an incremental coexistence architecture.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        LEGACY SYSTEM TOPOLOGY & BOUNDARIES                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [AGING TADARK SYSTEM]            [SHADOW IT EXCEL NETWORK]       [MANUAL PAPERWORK]   │
│  • Delphi 7/2007 Client-Server    • 80+ Disconnected Spreadsheets • Physical Dossiers  │
│  • Closed Database Architecture   • Macro-heavy Calculations      • Ink Signatures     │
│  • No Public REST/Event APIs      • Zero Multi-User Concurrency   • Physical Archiving │
│  • Direct Desktop LAN Connection  • Silent Data Drift Across Units• Transit Delays     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Deep Dive into Legacy Core: The Tadark System
- **Runtime Environment:** 32-bit Windows desktop client-server application compiled in Delphi.
- **Data Persistence:** Relational database running on on-premise Windows servers with proprietary table conventions and Persian collation extensions.
- **Business Logic Distribution:** Business rules are heavily embedded inside client UI forms and uncompiled SQL stored procedures rather than a decoupled service tier.
- **Interface Limitations:** Complete absence of RESTful HTTP endpoints, gRPC interfaces, or asynchronous message queuing (RabbitMQ/Kafka). Data interchange historically relies on scheduled database export scripts or manual CSV file exports.

---

## 2. Technical Debt & Operational Risk Assessment

| Risk Vector | Current Condition | Business Exposure | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **System Brittleness** | Client software crashes under heavy multi-user reporting queries during month-end closing. | Accounting closure freezes; reporting delayed for days. | Deploy read-only replica database for analytical queries. |
| **Integration Hazard** | Third-party software attempting direct writes into Tadark tables risks corrupting referential integrity. | Ledger imbalances; invalid vehicle inventory quantities. | **Strictly prohibit direct database writes;** mandate Anti-Corruption Layer. |
| **Key-Person Dependency** | Only one senior technician possesses deep knowledge of the underlying Tadark database schema. | Severe institutional vulnerability if this individual departs. | Execute comprehensive schema reverse-engineering during Discovery. |
| **Hardware & OS Obsolescence** | Legacy database runs on aging on-premise physical servers approaching hardware end-of-life. | Unrecoverable hardware failure resulting in catastrophic data loss. | Virtualize servers and implement automated immutable cloud backups. |
| **Security & Access Control** | Authentication relies on shared administrative database credentials without granular RBAC or MFA. | Internal data tampering risk; zero statutory audit log of edits. | Enforce central SSO/LDAP integration via the new platform. |

---

## 3. Why We Refuse to "Rip and Replace" Tadark Overnight
Replacing an operational core accounting system without verified data models is an enterprise disaster. Tadark maintains the statutory accounting records required for tax audits and financial reporting. Therefore, our strategy is:
1. **Quarantine:** Surround Tadark with an **Anti-Corruption Layer (ACL)**.
2. **Synchronize:** Expose read-only database views to mirror data into the new platform.
3. **Decouple:** Build all new capabilities (dealership portals, customs OCR, vehicle margin pipelines) on the modern platform.
4. **Strangle:** Gradually migrate financial sub-ledgers domain-by-domain over 18 to 24 months.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Ban all direct database writes into production Tadark tables; commission an immediate read-only replication mirror for Discovery analysis.
- **Open Questions:** Availability of database backup credentials and server maintenance windows.
- **Next Actions:** Review the [Data Landscape](./data-landscape) to understand how data is organized across these systems.
