---
title: "Shadow IT & Spreadsheet Retirement Playbook"
lang: en
translation: /fa/initial-review/03-digital-and-software/shadow-it-migration
---

# Shadow IT & Spreadsheet Retirement Playbook

## Executive Summary
Enterprise reliance on informal spreadsheets—Shadow IT—is a symptom of unmet business needs, not employee negligence. However, untracked spreadsheets in Arian Khodro introduce catastrophic risks: corrupted financial macros, single points of human failure, data desynchronization, and zero regulatory auditability. This document provides a compassionate yet uncompromising **5-Step Spreadsheet Retirement Playbook**. We systematically transition business processes into the Core Platform while preserving business continuity.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE 5-STEP SPREADSHEET RETIREMENT PLAYBOOK                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  STEP 1: Catalog & Freeze    ► Inventory all sheets, formulas, owners, and update rhythms│
│  STEP 2: Feature Parity Spec ► Design platform screens matching essential spreadsheet logic│
│  STEP 3: Historical Data ETL ► Clean, validate, and import historical rows to PostgreSQL │
│  STEP 4: Dual-Running Period ► Run spreadsheet & software in parallel for 2-4 weeks     │
│  STEP 5: Decommissioning Gate► Lock spreadsheet permissions to read-only; celebrate owner│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Master Spreadsheet Retirement Matrix

| Critical Spreadsheet | Current Owner | Core Risk | Target Platform Capability | Target Retirement Date |
| :--- | :--- | :--- | :--- | :---: |
| `Shipments_Tracker_2026.xlsx` | Commercial Team | Single owner; corrupted proforma formulas. | Commercial Orders Module (`/commercial`) | Month 3 |
| `Customs_Tariff_Calc_v4.xlsx` | Logistics Specialists | Manual tariff entries; calculation drift. | Automated Customs Duty Calculation Engine | Month 4 |
| `VIN_Allocation_Live.xlsx` | Sales Managers | Double-booking vehicles; multi-user collisions. | Real-time VIN Master Reservation API | Month 5 |
| `Dealer_Warranty_Disputes.xlsx` | After-Sales Warranty | Missing audit trails; delayed credit settlements. | Dealership Partner Portal Claims Module | Month 7 |
| `Parts_Physical_Count_Diffs.xlsx`| Compound Warehouse | Unversioned stock adjustments; stock drift. | Mobile Barcode Compound Scanner Intake | Month 6 |

---

## Detailed Step-by-Step Migration Methodology

### Step 1: Catalog, Reverse-Engineer & Freeze
- Meet with the spreadsheet owner without blame. Map every macro, formula, lookup table, and external data feed.
- Establish a version freeze: no new VBA macros or columns may be added without notification.

### Step 2: Co-Design for Feature Parity
- Build web interfaces that match or exceed the speed and usability of spreadsheet keyboard workflows.
- Include auto-calculations, quick filters, and inline table editing so operators never feel slowed down.

### Step 3: Historical Data Extraction, Transformation & Loading (ETL)
- Write automated sanitization scripts: parse messy dates, resolve duplicate VIN entries, and flag missing mandatory fields.
- Load historical data into staging tables and run automated reconciliation checks against audited Tadark ledgers.

### Step 4: Dual-Running Verification Window (2 to 4 Weeks)
- Operators perform daily tasks simultaneously in the spreadsheet and the Core Platform.
- Weekly reconciliation meetings compare end-of-week balances. If discrepancies emerge, software bugs are immediately patched.

### Step 5: Formal Decommissioning & Cultural Closure
- Once the software passes two consecutive weeks of perfect reconciliation, the spreadsheet is converted to read-only and moved to the company historical archive.
- The spreadsheet creator is publicly celebrated in the company sprint review for partnering in enterprise transformation.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Mandate the 5-Step Retirement Playbook; prohibit unilateral spreadsheet bans without verified software feature parity.
- **Open Questions:** Data cleaning rules for unformatted historical vehicle options in sales spreadsheets.
- **Next Actions:** Transition to [04-ai-transformation/ai-strategy](../04-ai-transformation/ai-strategy) to examine intelligent automation boundaries.
