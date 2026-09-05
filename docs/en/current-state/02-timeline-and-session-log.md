---
title: "02 — Discovery Timeline & Session Log"
lang: en
translation: /fa/current-state/02-timeline-and-session-log
---

# 02 — Discovery Timeline & Session Log

## Chronological Record of Discovery
This document logs the structured progression of discovery sessions, on-site inspections, and interviews conducted during the field assessment at Arian Khodro.

---

## Day 01: 1405/06/14 — 5 September 2026

::: tip 📋 Operational Work Log Reference
For the complete technical journal, stakeholder transcripts, and day-by-day notes recorded on this date, refer to the [Mohammad Hadi Arefi — Day 01 Operational Work Log](/en/work-log/arefi/day-01).
:::

### Session 1: Arrival, Objectives & Infrastructure Initial Review
- **Participants:** Mohammad Hadi Arefi (Lead Architect), Mr. Habibi (Network & Helpdesk Lead).
- **Location:** Arian Khodro Headquarters — IT Office & Server Room.
- **Topics Examined:**
  - Overall IT operational workload, helpdesk ticket distribution, and staffing ratios.
  - Physical inspection of the server room (cabling, cooling, raised floor absence, fire suppression).
  - Power supply topology: Industrial grid instability, diesel generator engagement speed, and UPS configuration.
  - The central General Electric (GE) 3-phase ~10kVA UPS and its connected loads.
  - Historical storage disaster: The Samsung 870 EVO 1TB failure in a RAID5 array, protracted data recovery, and current Lexar SATA SSD RAID10 configurations.
  - Non-standard server hardware: ProArt/Core i9 consumer rigs running virtualization nodes.
  - Password and credential storage practices across technical teams.

### Session 2: Enterprise Software Inventory & Application Map
- **Participants:** Mohammad Hadi Arefi, Mr. Habibi, Financial Systems Key Users.
- **Topics Examined:**
  - Active accounting systems: Borhan, Sepidar, and legacy custom tools.
  - Procurement software (Tadark): 32-bit Delphi architecture, maintenance status, and historical coupling to operations.
  - File servers and internal document repositories.
  - VoIP system: Issabel open-source PBX deployment and stability.
  - Communication channels between internal modules and third-party solutions.

### Session 3: Warehouse Operations & WMS Deep Dive
- **Participants:** Mohammad Hadi Arefi, WMS Vendor Technical Team, Warehouse Supervisors.
- **Topics Examined:**
  - WMS feature set: Inbound, Putaway, Location Hierarchy, Batch Picking, Nested Packaging, GS1, RFID support.
  - Technology stack: .NET 10 modular monolith, SQL Server, MongoDB, Redis, RabbitMQ, EventStore.
  - Hardware requirements: 20 to 45 handheld terminals (Zebra, Newland), thermal label printers, warehouse Wi-Fi mesh.
  - Deployment status: Product development history (originating circa 1400, ~8 client deployments; ~4–5 effective months at Arian Khodro after interruptions).
  - Integration with Tadark: Web service calls, inventory corrections, and the absence of a defined System of Record.
  - Vendor development hosting on vendor-owned servers and code control in vendor GitHub repositories.

### Session 4: Commercial Operations & CRM Requirements Workshop
- **Participants:** Mohammad Hadi Arefi, Sales Director, Commercial Team Supervisors.
- **Topics Examined:**
  - Why CRM has become the number-one executive urgency for commercial leadership.
  - Breakdown of customer onboarding, KYC document gathering, and credit limit approvals.
  - Quotation and pre-invoice generation bottlenecks.
  - Driver dispatch, multi-drop delivery sequences, and payment collection at the customer doorstep.
  - Paper-based customer return flows and lack of quality inspection gates.
  - Daily sales agent activity tracking (e.g. 20 assigned customer calls, 15 completed, 5 dropped).
  - Market options discussed: Didar CRM (trial demo in import dept), Dana CRM, on-prem solutions, and Mr. Zolfaghari's internal prototype.

### Session 5: Import Sales Platform (Jahan Gostar) Review
- **Participants:** Mohammad Hadi Arefi, Platform Development Team, Import Commercial Officers.
- **Topics Examined:**
  - The current B2B spare parts catalog, public pricing vs. authenticated commercial tier pricing.
  - Minimum Order Quantities (MOQ) and sales agent authorization rules.
  - Frontend rewrite progress and legacy backend API dependencies.
  - Evaluation of backend alternatives: Supabase, Hasura, Appwrite; current direction: self-hosted Supabase on Ubuntu.
  - Documented unit conversion incident: A 0.025 fractional quantity truncated to 0.02, causing an unintended ~200,000 screw purchase with approximately ~$1,000 direct financial loss.
  - Proprietary source code ownership, licensing, and code retrieval ethics.

---

## Synthesis of Day 01 Findings
1. **Infrastructure Stability is the Foundation:** Software modernizations cannot succeed on top of an infrastructure that experiences power cuts and unverified storage.
2. **Sales and CRM is the First Operational Lever:** The highest return on operational discipline will come from digitizing the sales, quotation, and collection workflows.
3. **Architecture Must Precede Code:** Clear data boundaries (especially physical vs. commercial inventory) must be formalized before signing vendor integration contracts.
