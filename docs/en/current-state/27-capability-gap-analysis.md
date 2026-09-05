---
title: "27 — Capability Gap Analysis"
lang: en
translation: /fa/current-state/27-capability-gap-analysis
---

# 27 — Capability Gap Analysis

## Enterprise Capability Maturity Assessment
This document evaluates the maturity of Arian Khodro's business and technical capabilities, contrasting current operational capabilities against target-state digital requirements.

---

## Capability Gap Comparison Matrix

| Business / Technical Domain | Current State Capability (As-Is) | Target State Capability (To-Be) | Gap Severity | Strategic Priority |
| :--- | :--- | :--- | :---: | :---: |
| **Customer Master Management** | Scattered across personal notebooks, Borhan accounts, and portal databases. | Centralized Golden Customer Record with mandatory National Tax ID deduplication. | **High** | Immediate |
| **Commercial Credit Governance** | Informal verbal approvals between sales reps and accountants; paper slips. | Automated multi-tier credit approval engine with hard system limits. | **High** | Immediate |
| **Quotation Turnaround** | Manual Excel generation and PDF export; turnaround takes 30–60 minutes. | Sub-5 minute quotation generation with instant SMS customer approval links. | **High** | Immediate |
| **Warehouse Execution (WMS)** | Transitioning from 32-bit Tadark to .NET 10; vendor-hosted development server. | Containerized on-premise WMS directing barcode scanning on rugged handhelds. | **Medium** | Phased Rollout |
| **Inventory Source of Truth** | Conflicting parallel balances in Tadark and specialized WMS. | Decoupled architecture: WMS owns physical inventory; Borhan owns financial valuation. | **Critical** | Immediate |
| **Dispatch & Delivery Logistics** | Paper delivery slips; drivers navigate by memory; cash collection unrecorded. | Driver mobile app with optimized multi-drop routes, digital POD, and check tracking. | **High** | Phase 2 |
| **Reverse Logistics (RMA)** | Uninspected boxes accumulating in warehouse corners without credit memos. | Structured digital RMA ticket, automated driver collection, and warehouse QA bench. | **High** | Phase 2 |
| **B2B E-Commerce Channel** | Legacy portal with missing backend code; manual customer provisioning. | Modernized Supabase/PostgreSQL platform with automated KYC and verified pricing tiers. | **High** | Active Build |
| **Enterprise Server Hardware** | Virtualization running on consumer desktop gaming PCs (Core i9, non-ECC). | Standardized enterprise rack servers (ECC memory, dual redundant PSUs, remote iLO). | **Critical** | Immediate |
| **Disaster Recovery & Backup** | Backups stored on local network shares; no automated off-site replication. | Automated 3-2-1 backup architecture with immutable, ransomware-proof off-site cold storage. | **Critical** | Immediate |
| **Identity & Access Governance** | Root passwords in notebooks and personal browser caches; no enterprise vault. | Enterprise self-hosted credential vault with role-based access control and MFA. | **High** | Immediate |

---

## Capability Maturity Radar Summary
```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              CAPABILITY MATURITY BENCHMARK                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Level 1: Ad-hoc / Chaotic    ► Quotations, Logistics, Customer KYC, DR Backups       │
│  Level 2: Repeatable / Manual ► Financial Accounting (Borhan), Purchasing (Tadark)     │
│  Level 3: Defined / Automated ► Physical Warehouse WMS (In Progress)                  │
│  Level 4: Managed / Measured  ► [TARGET STATE FOR ALL CORE PLATFORM CAPABILITIES]     │
│  Level 5: Optimized           ► Future Autonomous Supply Chain & AI Forecasting        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
