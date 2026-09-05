---
title: "Pain Points & Hypotheses Registry"
lang: en
translation: /fa/initial-review/01-discovery/pain-points-and-hypotheses
---

# Pain Points & Hypotheses Registry

## Executive Summary
Strategic integrity requires clear separation between verified operational facts and unproven assumptions. This registry formalizes all observed operational friction points in Arian Khodro. Every item is categorized by its evidence status, business impact, and required discovery validation method, guaranteeing that capital expenditure is strictly tethered to proven reality.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                             EVIDENCE CLASSIFICATION TAXONOMY                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [FACT]               ► Verified reality confirmed by technical or physical audit.    │
│  [HYPOTHESIS]         ► Plausible operational pain point reported but not measured.    │
│  [TO BE DISCOVERED]   ► Parameter currently unmeasured; requires formal field study.   │
│  [PROPOSED]           ► Architectural or operational choice recommended for execution. │
│  [TARGET]             ► Desired post-transformation performance band.                  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Master Pain Points & Hypotheses Registry

| ID | Operational Pain Point | Evidence Status | Business Exposure / Risk | What Discovery Must Validate | Target Resolution |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **P-01** | Tadark runs on legacy Delphi with closed tables and zero modern APIs. | **[FACT]** | Extreme software brittleness; impossibility of direct third-party integration. | Extract full schema DDL, table relationships, and Stored Procedures. | Build read-only Anti-Corruption Layer adapter. |
| **P-02** | Heavy manual data re-entry between commercial proformas and Tadark. | **[HYPOTHESIS]** | Professional labor wasted on administrative data copying. | Measure person-hours spent per shipment across 20 sample files. | Digital customs ingestion pipeline. |
| **P-03** | Disconnected spreadsheets used for tracking customs dossier clearance. | **[FACT]** | Version collisions, unversioned calculations, formula corruption risks. | Catalog every active logistics spreadsheet, formulas, and owners. | Standardized Customs Module in Core Platform. |
| **P-04** | Significant customs demurrage costs incurred due to dossier delays. | **[TO BE DISCOVERED]** | Substantial capital drain at southern port terminals. | Audit historical port storage invoices over the trailing 12 months. | Automated document collation alerts. |
| **P-05** | Dealership warranty repair disputes cause months of settlement latency. | **[HYPOTHESIS]** | Dealership network cash-flow strain and customer friction. | Measure mean days elapsed between claim filing and credit issuance. | Dedicated Dealership Partner Portal. |
| **P-06** | VIN status discrepancies between sales allocations and compound stock. | **[HYPOTHESIS]** | Risk of double-selling vehicles or delayed customer delivery. | Run automated reconciliation diff between warehouse and sales sheets. | Immutable central VIN Master Data hub. |
| **P-07** | Absence of granular role-based access control (RBAC) in legacy tools. | **[FACT]** | Internal data security risk; non-compliance with audit rules. | Audit user access rights and shared credentials across departments. | Keycloak/OIDC Single Sign-On integration. |
| **P-08** | Inability to produce real-time executive profitability reports per model. | **[FACT]** | Executive leadership makes commercial decisions based on delayed data. | Measure elapsed days from month-end closing to executive pack release. | Unified analytical data warehouse reporting. |
| **P-09** | Key-person dependency on individual database and spreadsheet experts. | **[FACT]** | Operational paralysis if key spreadsheet owners depart. | Document single-person processes and interview key operators. | Codify business rules into software services. |
| **P-10** | High failure rate of previous off-the-shelf software purchase attempts. | **[FACT]** | Organizational cynicism and resistance to new digital initiatives. | Review autopsy reports of past software procurement failures. | Incremental modular delivery with quick wins. |

---

## Discovery Validation Workflow
1. **Assignment:** Each hypothesis is assigned to a Discovery Squad pairing (Business Analyst + Engineer).
2. **Field Investigation:** Teams spend full working days observing operators, auditing spreadsheets, and collecting raw files.
3. **Registry Update:** The hypothesis status transitions from `[HYPOTHESIS]` to `[FACT]` (with attached evidence) or is formally discarded.
4. **Architecture Gate:** Only validated facts form the basis of the subsequent Phase 2 Architecture & Build decisions.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Adopt the Pain Points Registry as the baseline governing document for all Discovery activities; mandate evidence attachment before prioritizing features.
- **Open Questions:** Authorization to audit historical financial demurrage penalties with the customs clearance department.
- **Next Actions:** Transition to [02-transformation-strategy/transformation-pillars](../02-transformation-strategy/transformation-pillars) to review the strategic response to these validated pain points.
