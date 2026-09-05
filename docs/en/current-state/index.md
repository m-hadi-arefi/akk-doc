---
title: "Current State Baseline & Operational Discovery Repository"
lang: en
translation: /fa/current-state/
---

# Current State Baseline & Operational Discovery Repository

## Executive Overview
This section contains the comprehensive **Current State Documentation (Discovery Phase)** for Arian Khodro. Spanning 32 structured engineering and business documents, it records verified empirical observations, process workflows, software inventories, technical debt ledgers, vendor dependency audits, and immediate triage actions across the enterprise.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CURRENT STATE DISCOVERY KNOWLEDGE REPOSITORY                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. EXECUTIVE & FOUNDATIONS   ► Baselines, timelines, stakeholder matrix & roles       │
│  2. INFRASTRUCTURE & IT OPS   ► Server room audit, UPS overload, hardware governance   │
│  3. COMMERCIAL & SALES        ► As-Is paper workflows, CRM evaluation, B2B portals     │
│  4. WAREHOUSING & LOGISTICS   ► Specialized WMS, inventory authority, vendor lock-in  │
│  5. ARCHITECTURE & GOVERNANCE ► Data ownership, RAID log, technical debt, Quick Wins   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Master Index of Current State Documents (00 through 31)

### Section 1: Executive Overview & Organizational Foundations
- [00 — Discovery Overview & Executive Baseline](./00-discovery-overview): Executive summary, discovery scope, methodology, key findings, and immediate priorities.
- [01 — Executive Summary & High-Level Baseline](./01-executive-summary): Concise synthesis of operational realities, risks, and strategic opportunities.
- [02 — Timeline & Session Log](./02-timeline-and-session-log): Chronological log of discovery interviews, participants, inspected systems, and notes.
- [03 — Organization, Stakeholders & Ownership](./03-organization-and-ownership): Stakeholder map, operational roles, decision influence, and person dependency risks.

### Section 2: IT Infrastructure, Operations & Governance
- [04 — Current Software Landscape](./04-software-landscape): Comprehensive catalog of in-use applications, technologies, hosting, and deficiencies.
- [05 — IT Infrastructure Assessment](./05-it-infrastructure): Physical server room audit, UPS overload incident, storage failures, and hardware standards.
- [06 — IT Operations, Governance & Management](./06-it-operations-and-governance): IT operational culture, procurement standards, and credential management.
- [07 — Business Continuity, Disaster Recovery & Resilience](./07-business-continuity-and-dr): Power stability, backup architecture, RTO/RPO reality, and disaster recovery gaps.
- [20 — Network & Connectivity Assessment](./20-network-and-connectivity): WAN links, backup ISP failover, LAN topology, warehouse Wi-Fi, and monitoring gaps.
- [21 — Security Assessment](./21-security-assessment): Authentication, default credentials, perimeter exposure, least privilege, and backup immutability.
- [22 — Legacy Systems Assessment (Tadark)](./22-legacy-systems-assessment): 32-bit Delphi architecture, memory bottlenecks, and the phased Strangler Fig migration strategy.

### Section 3: Commercial Operations, Sales & CRM
- [08 — Sales & CRM Discovery](./08-sales-and-crm-discovery): Executive urgency for CRM, desired target workflows from onboarding to collection.
- [09 — Sales Process — As-Is](./09-sales-process-as-is): Detailed stage-by-stage mapping of manual handoffs, paper slips, and systemic failure points.
- [10 — Sales Process — To-Be Requirements](./10-sales-process-to-be): Target business capabilities: digital KYC, credit engine, SMS quotes, and driver mobile app.
- [11 — CRM Market & Vendor Discovery](./11-crm-market-and-vendors): Didar SaaS trial, Dana on-premise, internal 1000-user prototype, and peer benchmarking.
- [12 — CRM Evaluation Framework](./12-crm-evaluation-framework): 25-criteria scoring matrix, TCO calculation, and mandatory 21-day controlled POC protocol.
- [13 — Jahan Gostar / Import Sales Platform](./13-jahan-gostar-platform): B2B model, legacy APIs, missing code, and the 200,000-screw decimal truncation disaster.
- [14 — New Sales Platform Architecture Assessment](./14-new-sales-platform-architecture): Modernized Supabase/PostgreSQL on Ubuntu, business complexity, and code sovereignty rules.

### Section 4: Warehousing, Logistics & Master Data
- [15 — WMS Discovery](./15-wms-discovery): Specialized .NET 10 WMS, mobile handheld scanners, GS1/ISO standards, and vendor claims audit.
- [16 — WMS Integration & Inventory Ownership](./16-wms-integration-and-inventory): Resolving the inventory dilemma: WMS owns physical execution, ERP owns commercial orders.
- [17 — WMS Vendor Dependency & Exit Strategy](./17-wms-vendor-dependency-and-exit): Vendor hosting risks, remote access, and mandatory code escrow / exit checklist.
- [18 — Integration Landscape](./18-integration-landscape): Inter-system integration matrix, API protocols, direct DB coupling risks, and data flows.
- [19 — Data Ownership & Source of Truth](./19-data-ownership-and-source-of-truth): Canonical data ownership matrix across 17 business entities; System of Record definition.
- [23 — Master Data Management & Data Quality](./23-master-data-and-quality): Data quality health, duplicate customers, SKU inconsistency, and golden record pipelines.

### Section 5: Architecture Decisions, Strategy & Execution
- [24 — Architecture Decisions & Working Hypotheses](./24-architecture-decisions-and-hypotheses): Formal ISO 42010 classification of verified facts, hypotheses, and ADRs.
- [25 — Technical Debt Ledger](./25-technical-debt-ledger): Prioritized technical debt inventory, quantifying business tax and remediation effort.
- [26 — Risks, Assumptions, Issues & Dependencies (RAID Log)](./26-raid-log): Unified RAID register tracking existential transformation risks and dependencies.
- [27 — Capability Gap Analysis](./27-capability-gap-analysis): Maturity gap assessment contrasting As-Is chaos with To-Be target capabilities.
- [28 — Target Architecture Principles](./28-target-architecture-principles): Seven core principles guiding software, data, infrastructure, and vendor governance.
- [29 — Quick Wins & Immediate Actions](./29-quick-wins-and-actions): High-impact zero/low-cost triage actions executable within 7–14 business days.
- [30 — Day 02 Validation Plan](./30-day-02-validation-plan): Agenda, session schedules, and technical validation questions for Phase 2 discovery.
- [31 — Discovery Review & Executive Sign-off](./31-discovery-review-and-signoff): Formal governance closure, executive gate sign-off, and transition to implementation.

---

## Operational Documentation Authoring
- 📖 [New Document Authoring Guide & Template](./guide)
