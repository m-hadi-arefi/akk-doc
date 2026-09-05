---
title: "25 — Technical Debt Ledger"
lang: en
translation: /fa/current-state/25-technical-debt-ledger
---

# 25 — Technical Debt Ledger

## Technical Debt Inventory & Remediation Priorities
Technical debt represents deferred engineering decisions that impose operational taxes on daily business throughput. This ledger systematically categorizes technical debt at Arian Khodro, quantifying business friction and defining remediation urgency.

---

## Enterprise Technical Debt Register

| Debt ID | System / Component | Nature of Technical Debt | Underlying Root Cause | Business Operational Tax | Remediation Priority | Estimated Effort |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TD-01** | Electrical Distribution | Laser printers connected to server room GE UPS. | Unregulated office cabling during office expansion. | Constant threat of total database collapse during automatic bypass. | **P0 (Immediate)** | 2 Hours |
| **TD-02** | Server Virtualization | Production virtualization running on non-ECC desktop gaming hardware. | Ad-hoc developer requests optimized for raw clock speed. | High probability of silent memory bit-flips; no power/fan hardware redundancy. | **P1 (Urgent)** | 3 Weeks |
| **TD-03** | Core Procurement | 32-bit Delphi architecture in Tadark with unindexed tables. | 20 years of incremental patches without architectural refactoring. | Memory crashes on large reports; tight coupling with warehouse stock. | **P1 (Urgent)** | Phased ACL |
| **TD-04** | B2B Portal (Jahan Gostar)| Missing source code for legacy backend APIs. | Handover failure across multiple historical dev vendors. | Inability to patch security bugs; reverse engineering required for updates. | **P1 (Urgent)** | 4 Weeks |
| **TD-05** | Inventory Authority | Parallel inventory balances in Tadark and specialized WMS. | Implementation of WMS without retiring legacy Tadark inventory modules. | Phantom stockouts, delayed quotations, physical-to-digital inventory drift. | **P1 (Urgent)** | 3 Weeks |
| **TD-06** | Backup Infrastructure | Backups stored locally on networked SMB shares without air-gapping. | Lack of formal disaster recovery governance. | Complete vulnerability to enterprise-wide ransomware encryption. | **P1 (Urgent)** | 1 Week |
| **TD-07** | Commercial Sales | Entire quotation and credit lifecycle managed via paper and Excel. | Absence of an enterprise-wide integrated CRM platform. | Lost sales leads; up to 48-hour order turnaround; duplicate accounts. | **P2 (High)** | 6 Weeks |
| **TD-08** | Warehouse Logistics | Paper manifest handoff from accounting to warehouse dock. | Lack of digital integration between Borhan and WMS picking queues. | Packing errors, picking delays, lost paper invoices in physical transit. | **P2 (High)** | 3 Weeks |
| **TD-09** | Identity & Access | Shared passwords stored in plaintext across browsers and notes. | Absence of an enterprise single sign-on (SSO) or password manager. | Extreme person dependency; elevated insider threat and credential leakage. | **P2 (High)** | 2 Weeks |
| **TD-10** | Telecommunications | Wireless dead zones in metallic warehouse aisles. | Consumer-grade Wi-Fi APs deployed without industrial RF site survey. | Handheld terminal disconnections during active warehouse barcode picking. | **P2 (High)** | 2 Weeks |
| **TD-11** | Master Data Quality | Unverified customer tax IDs; untracked part dimensions. | Absence of data validation rules at point of customer/part creation. | WMS cannot calculate truck cubing; duplicate customer credit lines. | **P3 (Medium)** | Ongoing |

---

## Remediation Sequence Strategy
Remediation must execute in strict dependency sequence:
1. **Zero-Capital Immediate Triage (Days 1–3):** TD-01 (Printers off UPS), TD-06 (Air-gap offline backup drives), TD-09 (Rotate root passwords into a secure vault).
2. **Infrastructure Stabilization (Weeks 1–4):** TD-02 (Procure enterprise ECC server nodes), TD-10 (Industrial Wi-Fi mesh in warehouse aisles).
3. **Architectural Decoupling (Weeks 3–8):** TD-04 (Formalize API contracts for portal), TD-05 (Enforce WMS as physical inventory authority via ACL), TD-07 (Execute 21-day CRM POC).
