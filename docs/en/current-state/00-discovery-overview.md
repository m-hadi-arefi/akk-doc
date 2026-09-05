---
title: "00 — Arian Khodro Discovery Overview"
lang: en
translation: /fa/current-state/00-discovery-overview
---

# 00 — Arian Khodro Discovery Overview

## Purpose of the Discovery
The objective of this discovery phase is to establish a rigorous, evidence-based operational baseline of Arian Khodro's current business operations, IT landscape, software systems, infrastructure dependencies, data ownership, and organizational structures. Rather than formulating premature architectural prescriptions or prescribing off-the-shelf software packages, this documentation maps reality as it exists on the ground.

## Current Phase: Discovery & Assessment
This initiative is strictly in the **Discovery & Assessment** stage. The findings recorded herein serve to clarify:
- Which systems exist, who operates them, and who depends on them.
- How physical and commercial business processes actually flow from end to end.
- Where operational bottlenecks, manual handoffs, and error-prone interfaces occur.
- Where data is created, modified, reconciled, and whether an authoritative System of Record (SoR) exists.
- Structural risks across power, hardware, networking, person dependencies, and vendor lock-in.
- Prioritized investigation tracks for upcoming discovery cycles.

> ⚠️ **Notice of Working Document:**  
> This documentation represents the current operational understanding synthesized from interviews, site inspections, and reported statements. All findings are categorized by confidence level and are subject to ongoing technical and operational validation.

---

## Scope of Investigation
The discovery initiative encompasses all core corporate and operational units of Arian Khodro:
1. **Executive Leadership & Governance:** Strategic objectives, capital constraints, risk tolerance, and modernization imperatives.
2. **Sales & Commercial Operations:** Customer acquisition, onboarding, credit limits, quotations, order execution, payment collection, and returns.
3. **Warehouse & Logistics:** Warehouse Management Systems (WMS), material flow, packaging hierarchies, handheld operations, and inventory reconciliation.
4. **Procurement & Supply Chain:** Commercial procurement workflows, legacy ordering software (Tadark), and supplier tracking.
5. **Accounting & Finance:** General ledger, accounts receivable/payable, tax compliance, invoicing, and ERP dependencies (Borhan, Sepidar).
6. **IT Infrastructure & Networking:** Server room environment, power stability, virtualization, hardware procurement, network topology, firewalls, and telecom links.
7. **Custom & Vendor Software:** E-commerce platforms (Jahan Gostar), new sales portal initiatives, CRM tools (Didar), VoIP (Issabel), and internal utilities.

---

## Sessions Completed
The initial discovery sprint was conducted on:
- **Date:** 1405/06/14 — 5 September 2026 (Day 01)
- **Format:** In-person stakeholder interviews, walk-through audits, server room physical inspection, and technical architecture workshops.
- **Lead Investigator:** Mohammad Hadi Arefi (Enterprise Architect & Digital Transformation Lead).

### Main Areas Investigated
| Area | Key Counterparts | Topics Covered |
| :--- | :--- | :--- |
| **IT & Infrastructure** | Mr. Habibi (Network & Helpdesk Lead) | Server room, GE UPS, power outages, disk failures, workstation servers, virtualization. |
| **Corporate Leadership** | Mr. Iranzadeh (CEO) | Enterprise vision, business bottlenecks, transformation priorities, modernization guardrails. |
| **Warehouse Systems** | WMS Vendor Technical Team & Warehouse Supervisors | WMS architecture, .NET 10 stack, inventory ownership, handheld devices, physical addressing. |
| **Sales Operations** | Sales Management & Commercial Leads | Manual sales follow-up, quotation delays, paper returns, driver workflows, urgent CRM demand. |
| **Import & Digital Sales** | Jahan Gostar Engineering Team & External Devs | B2B sales portal, Supabase migration, legacy API dependencies, unit-conversion pricing incident. |
| **Internal Development** | Mr. Zolfaghari, Mr. Khani, Mr. Shamkhi, Mr. Mousavi, Mr. Nemati | Custom tools, legacy database management, standalone UPS setups, 1000-user internal CRM prototype. |

---

## Major Themes Discovered
1. **Software Fragmentation & Shadow Handoffs:** Business processes cross multiple disconnected systems without automated integration, forcing teams to bridge gaps via phone calls, printed PDFs, and unmonitored messaging.
2. **Reactive IT Mode:** Infrastructure operations are heavily consumed by emergency firefighting, hardware replacements, and ad-hoc developer requests rather than proactive architecture governance.
3. **Severe Single Points of Failure (SPOF):** Heavy reliance on individual key personnel for database maintenance, custom scripts, network credentials, and vendor communication.
4. **Physical vs. Commercial Inventory Disconnect:** Acute ambiguity between the procurement system (Tadark) and the warehouse management system regarding which system is the true source of inventory truth.
5. **Urgent Need for Sales Operational Discipline:** Sales leadership lacks real-time visibility into customer call completion, follow-up queues, quotation approvals, and outstanding collections.

---

## Current Limitations of the Assessment
- Direct code-level audits of vendor-hosted repositories (WMS, legacy portals) have not yet been completed.
- Electrical loads and thermal dynamics in the server room reflect reported operational incidents and visual inspection rather than permanent calibrated telemetry.
- Network throughput, bandwidth saturation, and firewall rule matrices require systematic packet capture and configuration verification in Day 2.

---

## Important Terminology
- **SoR (System of Record):** The authoritative data source for a given data element.
- **ACL (Anti-Corruption Layer):** An architectural translation layer preventing legacy semantics from polluting new systems.
- **WMS (Warehouse Management System):** Software governing physical warehouse movements, bin locations, and picking routes.
- **Tadark:** Legacy Delphi-based procurement and materials software operating on a 32-bit runtime.
- **Jahan Gostar:** B2B vehicle parts and import sales platform serving commercial partners.

---

## Index of Current State Discovery Documents

| Document | Title | Focus Area |
| :---: | :--- | :--- |
| **00** | [Discovery Overview](./00-discovery-overview) | Purpose, scope, methodology, and navigational map. |
| **01** | [Executive Discovery Summary](./01-executive-summary) | Management synthesis, primary bottlenecks, and executive decisions. |
| **02** | [Timeline & Session Log](./02-timeline-and-session-log) | Chronological session logs from Day 01 (1405/06/14). |
| **03** | [Organization, Stakeholders & Ownership](./03-organization-and-ownership) | Stakeholder map, role boundaries, and Person Dependency Risk. |
| **04** | [Current Software Landscape](./04-software-landscape) | Exhaustive inventory of active applications, databases, and owners. |
| **05** | [IT Infrastructure Assessment](./05-it-infrastructure) | Server room, UPS bypass incident, disk failures, and hardware governance. |
| **06** | [IT Operations & Governance](./06-it-operations-and-governance) | Operating culture, password management, and technology governance. |
| **07** | [Business Continuity & Disaster Recovery](./07-business-continuity-and-dr) | RTO/RPO exposure, backup veracity, power resilience, and failure modes. |
| **08** | [Sales & CRM Discovery](./08-sales-and-crm-discovery) | Operational CRM requirements, workflows, driver routing, and collections. |
| **09** | [Sales Process — As-Is](./09-sales-process-as-is) | End-to-end breakdown of current manual sales, quotations, and returns. |
| **10** | [Sales Process — To-Be Requirements](./10-sales-process-to-be) | Target business capabilities, required inputs, outputs, and KPIs. |
| **11** | [CRM Market & Vendor Discovery](./11-crm-market-and-vendors) | Didar, Dana, on-prem options, and internal 1000-user CRM prototype. |
| **12** | [CRM Evaluation Framework](./12-crm-evaluation-framework) | Systematic evaluation criteria, scoring dimensions, and POC protocol. |
| **13** | [Jahan Gostar / Import Sales Platform](./13-jahan-gostar-platform) | B2B portal assessment, unit truncation incident, and legacy APIs. |
| **14** | [New Sales Platform Architecture](./14-new-sales-platform-architecture) | Self-hosted Supabase migration, Ubuntu hosting, and code ownership. |
| **15** | [WMS Discovery](./15-wms-discovery) | WMS capabilities, .NET 10 stack, handheld devices, and deployment history. |
| **16** | [WMS Integration & Inventory Ownership](./16-wms-integration-and-inventory) | The core dilemma: Commercial vs. physical inventory source of truth. |
| **17** | [WMS Vendor Dependency & Exit Strategy](./17-wms-vendor-dependency-and-exit) | Vendor hosting, GitHub repositories, and Vendor Exit Checklist. |
| **18** | [Integration Landscape](./18-integration-landscape) | Map of inter-system connections, protocols, payload formats, and fragility. |
| **19** | [Data Ownership & Source of Truth](./19-data-ownership-and-source-of-truth) | Canonical data ownership matrix across 17 business entities. |
| **20** | [Network & Connectivity Assessment](./20-network-and-connectivity) | WAN links, ISP failover, Wi-Fi mesh, remote access, and firewalling. |
| **21** | [Security Assessment](./21-security-assessment) | Authentication, credential hygiene, open ports, and perimeter posture. |
| **22** | [Legacy Systems Assessment](./22-legacy-systems-assessment) | Tadark, Delphi 32-bit constraints, accounting ties, and modernization paths. |
| **23** | [Master Data Management & Data Quality](./23-master-data-and-quality) | Quality health, duplicate customers, SKU governance, and golden record pipelines. |
| **24** | [Architecture Decisions & Hypotheses](./24-architecture-decisions-and-hypotheses) | Formal ISO 42010 classification of verified facts, hypotheses, and ADRs. |
| **25** | [Technical Debt Ledger](./25-technical-debt-ledger) | Prioritized technical debt inventory, quantifying business tax and remediation effort. |
| **26** | [Risks, Assumptions, Issues & Dependencies](./26-raid-log) | Unified RAID register tracking existential transformation risks and dependencies. |
| **27** | [Capability Gap Analysis](./27-capability-gap-analysis) | Maturity gap assessment contrasting As-Is chaos with To-Be target capabilities. |
| **28** | [Target Architecture Principles](./28-target-architecture-principles) | Seven core principles guiding software, data, infrastructure, and vendor governance. |
| **29** | [Quick Wins & Immediate Actions](./29-quick-wins-and-actions) | High-impact zero/low-cost triage actions executable within 7–14 business days. |
| **30** | [Day 02 Validation Plan](./30-day-02-validation-plan) | Agenda, session schedules, and technical validation questions for Phase 2 discovery. |
| **31** | [Discovery Review & Executive Sign-off](./31-discovery-review-and-signoff) | Formal governance closure, executive gate sign-off, and transition to implementation. |
