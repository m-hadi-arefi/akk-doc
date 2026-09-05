---
title: "The Enterprise Discovery Framework"
lang: en
translation: /fa/initial-review/01-discovery/discovery-framework
---

# The Enterprise Discovery Framework

## Executive Summary
This document defines the 30-to-60-day empirical discovery methodology executed by the incoming Transformation Leader. Grounded in TOGAF ADM Preliminary Phase and BABOK v3 guidelines, it establishes a disciplined audit trail connecting executive questions to physical evidence, empirical findings, and architectural decisions across the five discovery domains.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                             DISCOVERY EXECUTION PIPELINE                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  WEEKS 1-2: Context & Mapping    ► Departmental interviews, process walkthroughs.       │
│  WEEKS 3-4: Deep Data & Tech Dive► Tadark schema inspection, spreadsheet cataloging.   │
│  WEEKS 5-6: Synthesis & Sizing   ► Time-and-motion baseline, gap analysis, POC testing.│
│  WEEKS 7-8: Strategic Blueprint  ► Validated pain points, architecture roadmap publish.│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The 5-Domain Discovery Matrix: Question to Action

### 1. Business Processes
- **Question:** How does a vehicle order move from foreign commercial contract to customer registration? Where are cycle times delayed?
- **Evidence:** Physical customs dossier inspection, timestamp analysis of proforma approvals, paper signature counts.
- **Finding:** [HYPOTHESIS TO VALIDATE] High handoff latency between commercial logistics and finance due to missing digital notifications.
- **Decision:** Mandate unified digital workflow engine; eliminate multi-signature paper routing.
- **Action:** Pilot customs dossier tracking pipeline in Month 3.

### 2. Technology Landscape
- **Question:** What are the exact architectural limitations and database access boundaries of the legacy Tadark Delphi software?
- **Evidence:** Direct SQL database schema review, stored procedure profiling, server resource monitoring.
- **Finding:** [FACT] Tadark lacks web-service APIs; direct database writes bypass business validation rules and risk data corruption.
- **Decision:** Adopt an Anti-Corruption Layer with strictly read-only database views and external workflow adapters.
- **Action:** Build prototype read-only connector in Sprint 2 of Discovery.

### 3. Data & Information
- **Question:** How many distinct spreadsheets exist for tracking VIN numbers and parts stock, and how frequently do they diverge?
- **Evidence:** Organization-wide inventory of all active macro-enabled Excel sheets; diff audit between warehouse spreadsheets and Tadark ledger.
- **Finding:** [HYPOTHESIS TO VALIDATE] Discrepancies exist between customs clearance invoices and warehouse intake records.
- **Decision:** Establish central VIN Master Data Management (MDM) as a top architectural priority.
- **Action:** Codify VIN schema standard and deploy reconciliation script.

### 4. Organization & People
- **Question:** What are the internal software engineering skills, and where does resistance to modern tooling concentrate?
- **Evidence:** Team skill assessments, 1-on-1 confidential interviews, review of past software rollout adoption rates.
- **Finding:** [TO BE DISCOVERED] Existing IT staff primarily focus on hardware maintenance and desktop support; zero internal full-stack software development experience.
- **Decision:** Build a dedicated in-house transformation squad rather than forcing legacy support personnel into architecture roles.
- **Action:** Initiate recruitment for Lead Full-Stack Engineer and Senior Product Manager.

### 5. AI Readiness
- **Question:** Which manual document workflows possess sufficient volume, image quality, and structured layout to justify machine learning?
- **Evidence:** Sample collection of 500+ foreign bills of lading, customs declarations, and dealership warranty photos.
- **Finding:** [TO BE DISCOVERED] Commercial customs proformas have standardized tabular layouts suitable for OCR; handwritten warehouse notes are too noisy for reliable automated parsing.
- **Decision:** Restrict AI initiatives strictly to OCR of typed customs shipping manifests with mandatory human-in-the-loop validation.
- **Action:** Benchmark open-source and commercial OCR models against real anonymized documents.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Formally endorse the 5-Domain Discovery Framework as the sole prerequisite for capital expenditure approval.
- **Open Questions:** Access permissions for direct inspection of production Tadark database tables.
- **Next Actions:** Review [Business Processes](./business-processes) to examine initial workflow mapping.
