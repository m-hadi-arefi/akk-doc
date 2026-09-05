---
title: "Step 1: Discovery, Requirements Engineering & Architecture Assessment"
lang: en
translation: /fa/roadmap/01-discovery
---

# Step 1: Discovery, Requirements Engineering & Architecture Assessment

> **Executive Summary:**  
> Digital transformation initiatives fail when organizations attempt to build or buy software based on assumptions rather than measured facts.  
> Step 1 is the mandatory, bounded prerequisite of the Arian Khodro transformation program. It conducts a comprehensive audit of existing workflows, spreadsheet workarounds, paper document chains, and legacy Tadark databases. The objective is not to write software, but to establish the empirical baseline required to make sound architectural, financial, and procurement decisions.

---

## 1. The Strategic Purpose of Discovery

Before committing substantial corporate capital to software licenses or engineering teams, senior leadership requires verified answers to core operational questions:
- How does work actually flow between Commercial, Finance, Customs, Warehousing, and Dealerships today?
- Where are the true operational bottlenecks, and how much do they cost in delayed cycles and manual labor?
- What are the undocumented dependencies, database schemas, and integration points of the legacy Tadark system?
- Which spreadsheets, shadow IT databases, and paper forms are keeping operations afloat?
- What specific business capabilities should be built in-house, purchased as commercial software, or outsourced?

Discovery replaces organizational speculation with an authoritative, auditable knowledge base.

---

## 2. Operational Discovery Methodology

Discovery is executed across five structured operational work streams:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              DISCOVERY AUDIT WORK STREAMS                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Stakeholder Interviews    ► Structured elicitations across all organizational tiers│
│  2. Process Flow Mapping      ► As-Is value stream modeling using international BPMN   │
│  3. Spreadsheet & Shadow IT   ► Auditing all offline Excel models, macros, and sheets │
│  4. Legacy Tadark Audit       ► Inspecting Delphi databases, schemas, and dependencies │
│  5. Paperless Transition      ► Cataloging physical forms, signatures, and archives   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Work Stream 1: Stakeholder Elicitation (Across All Organizational Tiers)
Structured interviews and observational shadowing sessions are conducted with:
- **Executive Leadership & CEO:** Strategic vision, margin priorities, regulatory compliance expectations.
- **Commercial & Foreign Procurement:** Vehicle purchase orders, foreign supplier correspondence, proforma management.
- **Customs Clearance Specialists:** Bill of lading (BOL) handling, customs duty calculation, chassis inspection reports.
- **Finance & Accounting:** General ledger postings in Tadark, 3-way invoice matching, banking reconciliation.
- **Central Spare Parts Warehousing:** Receiving receipts, parts binning, inventory counts, warranty parts returns.
- **Dealership Network & Workshops:** Vehicle handover logging, customer reception, warranty claims, service records.

### Work Stream 2: Current-State Process Modeling (BPMN 2.0)
Workflows are visually mapped using international **BPMN 2.0** standards to make handoffs, delays, and decision gates completely transparent:
- End-to-end vehicle import lifecycle: Purchase Order → Port Arrival → Customs Clearance → Central Yard → Dealership Handover.
- End-to-end spare parts lifecycle: Demand Forecasting → Foreign Order → Clearance → Warehousing → Workshop Distribution.
- After-sales warranty lifecycle: Workshop Claim → Technical Review → Parts Dispatch → Financial Settlement.

### Work Stream 3: Spreadsheet & Shadow IT Audit
A comprehensive census of all unofficial tools currently used to bridge software gaps:
- Cataloging every operational Excel workbook, Google Sheet, and Access database.
- Identifying data inputs, outputs, embedded VBA macros, and formula logic.
- Measuring the labor hours spent maintaining and manually synchronizing these sheets.

### Work Stream 4: Legacy Tadark Technical & Data Audit
A thorough engineering inspection of the legacy accounting environment:
- Extraction of underlying database tables, schemas, stored procedures, and triggers.
- Analysis of data volumes, index hygiene, and referential integrity.
- Mapping point-to-point batch scripts, data dumps, and external report queries.
- Identifying Delphi application boundaries to design clean, read-only Anti-Corruption Layer (ACL) adapters.

### Work Stream 5: Paper-Based Workflow & Signature Audit
Detailed mapping of physical documentation that introduces latency:
- Cataloging physical forms: customs clearance dossiers, vehicle inspection slips, warranty sign-off sheets.
- Identifying the physical signature chain and approval gates for each document.
- Measuring transit time, physical courier costs, and archiving overhead.

---

## 3. Requirements Engineering via the BABOK Guide

To ensure that requirements represent true business needs rather than superficial feature wishlists, requirements extraction strictly follows the **BABOK (Business Analysis Body of Knowledge)** framework:

```text
┌────────────────────────┐     ┌────────────────────────┐     ┌────────────────────────┐
│ Business Requirements  │ ──► │ Stakeholder Needs (UR) │ ──► │ Solution Requirements  │
│ (Strategic Enterprise) │     │ (Departmental Workflows│     │ (Functional & Non-Func)│
└────────────────────────┘     └────────────────────────┘     └───────────┬────────────┘
                                                                          │
                                                                          ▼
                                                              ┌────────────────────────┐
                                                              │ Transition Requirements│
                                                              │ (Legacy Coexistence)   │
                                                              └────────────────────────┘
```

### The Four BABOK Requirement Tiers
1. **Business Requirements (BR):** High-level corporate objectives defined by senior management (e.g., reduce vehicle import clearance cycle time by 40%, achieve real-time gross margin visibility per VIN, eliminate paper sign-offs across after-sales).
2. **Stakeholder Requirements (UR):** Operational needs of specific roles (e.g., workshop managers need to query parts availability across all branches instantly; accountants need automated 3-way matching of foreign invoices).
3. **Solution Requirements:**
   - *Functional Requirements (FR):* Detailed system behaviors, validation rules, screen flows, and calculations.
   - *Non-Functional Requirements (NFR):* System qualities such as response latency (<500ms), 99.9% uptime, role-based encryption, audit trail immutability, and disaster recovery recovery point objective (RPO < 1 hour).
4. **Transition Requirements (TR):** Temporary capabilities required exclusively during the cutover from legacy tools (e.g., historical data cleansing scripts, dual-running synchronization bridges, parallel ledger posting).

---

## 4. Baseline Architecture Mapping via TOGAF Standard

In accordance with **TOGAF ADM (Phases A and B)**, the baseline enterprise state is documented across four architectural domains:

| Architecture Domain | Current Baseline at Arian Khodro | Strategic Significance for Arian Khodro | Evidence Status |
| :--- | :--- | :--- | :--- |
| **Business Architecture** | Core automotive value streams (procurement, customs, warehousing, after-sales) operate in semi-isolated silos. | Mapping business capabilities independently of software ensures we modernize the operating model, not just the code. | **[FACT / CONFIRMED]** |
| **Data Architecture** | Master data (VIN, Customer, Parts) is fragmented across Tadark, CRM, and dozens of personal spreadsheets. | Establishing canonical data models prevents duplicate customer files and mismatched vehicle warranty histories. | **[OBSERVED / REPORTED]** |
| **Application Architecture** | Monolithic Delphi Tadark accounting system, standalone CRM instance, and multiple shadow IT spreadsheets. | Exposing application boundaries and technical debt informs where modern APIs and adapters must be built. | **[FACT / CONFIRMED]** |
| **Technology Architecture** | Fragmented on-premise servers, local network shares, absence of unified telemetry or centralized log auditing. | Evaluating hosting, network latency, and backup reliability ensures that future platforms run securely and stably. | **[FACT / CONFIRMED]** |

> **Pragmatic TOGAF Principle:**  
> Using TOGAF domains prevents modernization from becoming a purely technical exercise. For Arian Khodro, it ensures business processes, data ownership, application dependencies, and infrastructure constraints are evaluated as an integrated system before capital is committed.

---

## 5. Deliverables & Decision Gates of Step 1

Step 1 concludes with five authoritative, executive-ready deliverables that feed directly into the **Decision Cycle (Step 2)**:

1. **Business Requirements Document & Product Requirements Document (BRD / PRD):** Comprehensive, prioritized functional and quality specifications.
2. **Current-State Baseline Architecture Report:** Comprehensive technical catalog of Tadark schemas, application interfaces, and server topologies.
3. **Bottleneck & Friction Heatmap:** Quantified matrix of process delays, manual labor hours, and error frequencies across departments.
4. **Requirements Traceability Matrix (RTM):** Bidirectional linkages connecting every business problem to its corresponding requirement, capability, and test criteria.
5. **Paperless Transition Roadmap:** Prioritized schedule for replacing physical paper forms with digital workflows.

### Governance Exit Gate (Decision Gate 2)
At the conclusion of Step 1, executive leadership reviews the Discovery findings:
- **Decision Gate 2 Approval Criteria:** Formal sign-off on the BRD/PRD, baseline findings, and target architecture direction.
- **Subsequent Authorization:** Approval to proceed to Step 2 (Software Decision Framework: Build vs. Buy vs. Outsource) with verified requirements.

---

## 6. Related Documentation

- **[Executive Business Case →](/en/business-case/)** — Strategic and financial governance justification for the Discovery phase.
- **[Step 2: Software Decision Framework →](/en/roadmap/02-decision-cycle)** — Sourcing criteria for Build vs. Buy vs. Outsource.
- **[Standards & Reference Frameworks →](/en/knowledge/)** — International engineering benchmarks (BABOK, TOGAF, BPMN, ISO 42010).
