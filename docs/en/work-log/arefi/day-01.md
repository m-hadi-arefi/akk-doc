---
title: "Work Log — Day 01: Initial IT Infrastructure, Software & Process Discovery"
lang: en
translation: /fa/work-log/arefi/day-01
---

# Work Log — Day 01

## Initial Assessment of Organizational IT, Software Systems & Operational Processes

**Date:** September 5, 2026 (1405/06/14)  
**Workday:** Day 01  
**Core Focus:** Current-state discovery, identifying key operational needs, software dependencies, physical infrastructure & improvement opportunities  
**Author:** Mohammad Hadi Arefi

---

## 1. Day's Objective

The primary objective of Day 01 was to establish a grounded, first-hand understanding of the organization's information technology landscape, existing software platforms, operational teams, business workflows, and principal pain points.

The emphasis was strictly placed on **observation, active listening, and current-state discovery**, deliberately avoiding premature prescription or forcing final architectural solutions at this stage.

---

## 2. Activities & Discovery Sessions

### 2.1. Infrastructure & IT Operations Review

A comprehensive review of the physical infrastructure and day-to-day operational challenges was conducted with the Network and Help Desk Manager, Mr. Habibi.

Key Topics Examined:

* Current server room physical conditions and facility constraints
* Power supply stability, UPS units, and generator backup capabilities
* Power outage risks, brownouts, and historical equipment/storage drive damage
* Current server inventory and hardware specifications
* Use of non-standard, commodity desktop hardware serving as mission-critical servers
* Virtualization layer health and VMware ESXi setup
* Feasibility of migrating toward standardized, rack-mounted, and scalable infrastructure
* Backup routines and disaster recovery (DR) preparedness
* Infrastructure lifecycle maintenance and thermal management challenges
* Help desk workload, ticket backlog, and operational friction
* Password management, access hygiene, and credential sharing practices
* Strong coupling of legacy software to specific physical hardware and OS environments

**Initial Assessment:**

A significant portion of the internal IT team is currently tied down by tactical firefights, routine troubleshooting, and reactive operational maintenance.

There is a clear, urgent need to establish a structured technical governance model, standardize core infrastructure, and cleanly separate Help Desk support, Core Infrastructure operations, and strategic software development initiatives.

---

### 2.2. Organizational Software & Architecture Landscape

An initial walkthrough of active enterprise software systems across departments was conducted, including:

* Tadark ERP (Legacy core)
* Financial and accounting systems
* Warehouse management software
* Sales and order tracking systems
* CRM tools
* VoIP telephony system
* Web portals and external online services
* Internal micro-utilities and infrastructure services

System interoperability and existing integration methods were analyzed.

**Key Architecture Finding:**

Currently, critical enterprise workflows are fragmented across multiple discrete applications and disconnected teams. Clear boundaries regarding data ownership, canonical sources of truth, and system responsibilities require formal definition.

---

### 2.3. Working Session with Warehouse Management System (WMS) Team

An in-depth discovery session was held with the software development team responsible for the Warehouse Management System.

Topics Evaluated:

* WMS system architecture and domain models
* Functional distinction between WMS (operational execution) and IMS (inventory accounting)
* Inbound logistics, bin/pallet storage allocation, and outbound dispatch workflows
* Location, warehouse, and aisle hierarchy management
* Putaway strategies and pick workflows
* Batch picking and wave picking mechanics
* Packaging workflows and serial/batch traceability
* Barcode symbologies and RFID adoption feasibility
* Handheld barcode scanners and mobile rugged device support
* Warehouse floor operator task queues and assignments
* Cross-system integration touchpoints
* Microservices vs. Modular Monolith architectural models
* Datastores: relational SQL, MongoDB, Redis caching, and underlying infrastructure
* RabbitMQ message brokering and event-driven integration patterns
* Current deployment topologies and release pipelines
* Recommended server infrastructure for production workloads
* Backup strategies, point-in-time recovery, and disaster recovery
* High Availability (HA) clustering across multi-node server configurations
* Organizational requirements for internal DevOps capabilities

**Identified Architectural Risk:**

The WMS demonstrates robust functional domain depth for warehouse management. However, before designating it as a permanent enterprise pillar, strict boundaries of responsibility between WMS, Procurement (Tadark), Sales, and Accounting must be established.

Specifically, the following must be formally resolved:

* Which system is the canonical master (System of Record) for physical vs. financial inventory?
* Which system serves as the definitive Single Source of Truth?
* What specific data contracts and schemas are exchanged between systems?
* Are integrations orchestrated via well-defined REST APIs/Event streams or risky direct database queries?
* What is the fallback behavior during network partitions or downstream service outages?
* In the event of vendor replacement or contract termination, can the organization independently maintain and operate the solution?

---

### 2.4. Sales Operations Review & CRM Requirements Discovery

A session was conducted with the Head of Sales to inspect core sales funnels, daily operational routines, and procedural bottlenecks.

Key Operational Needs Identified:

* New customer registration and identity/credit verification
* Credit limit expansion workflows for existing commercial accounts
* Customer KYC documentation and license management
* Multi-tier managerial approval workflows
* Elimination of physical paper-based routing sheets
* Proforma invoice (پیش‌فاکتور) generation and lifecycle tracking
* Digital transmission of proformas to clients
* Capturing formal customer confirmations and e-approvals
* Real-time automated notifications to sales account managers
* Seamless handoff of confirmed orders to warehouse fulfillment
* Vehicle dispatch, staging, and loading coordination
* Driver delivery task management and route execution
* Proof of delivery (POD) capture and physical receipt registration
* Accounts receivable collection workflows
* Promissory note and post-dated check recording
* Handoff delivery remarks and customer sign-off capture
* Escalation and SLA tracking for outstanding/stalled tasks
* Reverse logistics and product return workflows
* Initial return triage and condition inspection
* Return approval or rejection authorization workflows
* Automated dispatch alerts for return pick-up drivers
* Final return inventory receipt and restocking confirmation

### Core Capability Gap Identified

The single most critical requirement voiced across the sales division is an **operational, process-driven CRM system**.

Principal Expectations from CRM:

* Task scheduling and assignment for sales representatives
* Automated reminders for follow-ups, calls, and client touchpoints
* Clear ownership mapping between accounts and individual sales reps
* Hierarchical, role-based visibility and access control
* Real-time performance dashboards for team leads and executive management
* Daily activity logs and KPI scorecard reporting
* Explicit visibility into completed versus overdue tasks
* Receivables follow-up triggers and debt collection reminders
* Customer call logs, interaction history, and audit trails
* Payment schedule tracking and maturity alerts
* Potential integration with VoIP PBX systems (call logging, click-to-dial)
* Standard API integration with warehouse, logistics, and financial backends

---

## 3. The Fundamental Sales Bottleneck

Currently, the vast majority of sales follow-up and pipeline governance is conducted entirely through manual, non-systematized methods.

For example, sales management is forced to manually review exported PDFs and static spreadsheet reports, followed by individual verbal check-ins with each sales rep to confirm follow-ups.

**Direct Operational Impact:**

* Severe waste of senior management time
* Excessive reliance on manual human vigilance
* Critically degraded operational visibility across pipelines
* High rate of forgotten follow-ups and missed sales conversions
* Inability to objectively measure individual sales representative performance
* Absence of a real-time, consolidated picture of client status and sales velocity

Consequently, CRM cannot be treated as a passive address book; it must be implemented as an **active sales process orchestration and pipeline execution engine**.

---

## 4. Preliminary CRM Options Assessment

Solutions such as Didar CRM alongside several off-the-shelf and custom alternatives were initially evaluated.

Two primary architectural deployment models were categorized:

### Model A — Cloud / SaaS

Advantages:

* Zero server maintenance overhead
* Eliminates internal infrastructure operational costs
* Rapid time-to-market and immediate mobile accessibility
* Automated platform upgrades, patches, and maintenance handled by vendor
* Reduces workload on internal IT staff

Risks & Drawbacks:

* Data residency and third-party hosting location
* Reduced organizational sovereignty and control over sensitive customer records
* Vendor dependency and lock-in
* Sensitivity to external internet connectivity fluctuations
* Recurring user-based subscription costs scaling with headcount
* Rigid constraints on core UI and workflow customization

### Model B — Self-Hosted / Dedicated Instance

Advantages:

* Complete organizational sovereignty over customer databases
* Full control over infrastructure, security parameters, and data residency
* High extensibility, database-level tuning, and customized business logic
* Freedom from recurring per-seat SaaS license fee models

Risks & Drawbacks:

* Significant upfront and ongoing server hardware infrastructure costs
* Ongoing maintenance overhead and operating system patch management
* Requirement for dedicated internal DevOps and database administration
* Organization bears sole responsibility for High Availability (HA), backups, and DR
* Elevated cybersecurity and network hardening responsibilities
* Reliance on internal staff or external specialized contractors for SLA support

**Day 01 Decision:**

No vendor selection or procurement commitment was finalized today.

A rigorous requirement matrix must first be completed, followed by a structured evaluation of shortlisted candidates against unified operational criteria.

---

## 5. Guiding Principle for CRM Selection

Prior to purchasing licenses or commissioning custom software, the following sequence was established:

1. Extract authentic, granular requirements directly from sales floor operations.
2. Prioritize capabilities using MoSCoW prioritization (Must-have vs. Nice-to-have).
3. Shortlist 3 to 5 qualified CRM candidates.
4. Benchmark real-world enterprise deployments of comparable scale.
5. Conduct interactive vendor demos using authentic, complex company scenarios.
6. Execute a timeboxed, controlled pilot in a single sales unit.
7. Explicitly document integration requirements (VoIP, Accounting, WMS).
8. Compare Cloud vs. Self-hosted Total Cost of Ownership (TCO) over 3 years.
9. Verify open API capabilities, automated backup routines, and data extraction guarantees.
10. Submit structured recommendation for executive approval.

### Decisive Criterion

CRM selection must not be driven by feature count or vendor sales brochures.

The governing evaluation benchmark is:

> *Does the software genuinely resolve the daily operational follow-up bottleneck of our sales team, or does it merely provide a disconnected list of generic features?*

---

## 6. Sales Portal Development Team Review

Following the sales operations review, the digital portal currently under construction by the dedicated development team associated with the import business line was reviewed.

Findings:

* Current frontend depends on legacy backend APIs
* Development of a modernized frontend interface is in progress
* Plans exist for an incremental, phased backend migration
* Exploring potential adoption of Supabase for backend services
* Reviewing source code ownership, repository governance, and commit histories
* Technical inspection of the active admin control panel
* Assessment of feasibility regarding frontend artifact and source code extraction

Regarding the legacy admin panel, while decompilation and client-side extraction are technically feasible, extraction was deliberately deferred. The team opted to pursue clean, formal repository access and source code handover through authorized management channels.

---

## 7. Key Day 01 Observations

### 7.1. The Root Bottleneck is Not Simply "Lack of Software"

Initial discovery confirms that organizational friction is not caused by an absence of software applications, but rather by:

* System fragmentation and isolated application islands
* Absence of standardized API and event integrations
* Prevalence of manual, paper-based, and spreadsheet-driven workarounds
* High dependency on key individuals and tribal knowledge
* Ambiguous and disputed data ownership
* Lack of enterprise architectural standards for vendor and software evaluation
* Uncontrolled vendor lock-in
* Infrastructure capacity constraints
* Overwhelming operational support burden on IT staff

### 7.2. Architecture Must Precede Software Development

In multiple operational units, it became apparent that before writing code or signing contracts, the following architectural questions must be answered:

* What is the precise bounded context and responsibility of each system?
* Which specific master entity does the application own?
* What are the downstream integration interfaces and protocols?
* Where is the authoritative Single Source of Truth?
* What is the failure and degradation mode during downstream outages?
* What is the exit strategy and data portability guarantee if the vendor is phased out?

### 7.3. Prioritization is Imperative

Attempting to modernize all business lines simultaneously is high risk and resource prohibitive.

Initial strategic sequencing:

**Sales Process Automation / CRM → Integration Bus & Data Hub → Operational Fulfillment & Warehouse**

Followed by gradual, phased modernization of remaining departments once core architecture standards stabilize.

---

## 8. Initial Risk Registry

| Domain | Identified Risk | Severity |
| :--- | :--- | :--- |
| **Infrastructure** | Vulnerability of server room facilities and power/UPS instability | High |
| **IT Operations** | IT capacity consumed entirely by reactive support and troubleshooting | High |
| **Software** | Proliferation of disparate software platforms without unified vision | High |
| **Integration** | Blurred boundaries of responsibility and data flow between platforms | High |
| **Data Governance** | Unclear data ownership and conflicting sources of truth | High |
| **Vendor Management** | Vendor lock-in and dependency on closed proprietary systems | High |
| **Sales Operations** | Absence of automated, verifiable pipeline follow-up mechanisms | High |
| **CRM Strategy** | Risk of purchasing software based on marketing claims rather than real needs | Medium/High |
| **Cybersecurity** | Absence of unified governance framework for Cloud vs. On-premise hosting | High |
| **Business Continuity** | Gaps in enterprise backup, disaster recovery, and high availability readiness | High |

---

## 9. Finalized Decisions

During Day 01, no binding purchase, development, or replacement commitments were made.

The guiding approach adopted:

> *First ground-truth discovery and rigorous requirements extraction, followed by objective evaluation of alternatives, leading to evidence-based decision making.*

---

## 10. Recommended Next Actions

### Priority 1 — CRM & Sales Operations

* Extract detailed functional requirements from sales operations
* Convert operational pain points into formal architectural Use Cases
* Define the Minimum Viable Product (MVP) scope for sales management
* Shortlist and benchmark 5–10 leading CRM platforms
* Investigate verified customer case studies from comparable industries
* Benchmark Cloud SaaS vs. Self-hosted Dedicated TCO
* Evaluate pricing models and seat expansion costs
* Inspect telephony / VoIP integration protocols
* Audit REST API and Webhook documentation
* Validate data export portability and schema ownership
* Execute a timeboxed, controlled pilot program

### Priority 2 — Enterprise Software Landscape

Formulate the baseline Software Landscape registry documenting:

* Application Name
* Business Owner
* Software Vendor
* Technology Stack
* Underlying Database
* Core Data Entities
* Inbound & Outbound Integrations
* Source of Truth designation
* Current Operational Health
* Architectural Risk Rating
* Modernization / Replacement Strategy

### Priority 3 — WMS & Procurement Interface

Conduct structured discovery on:

* Inventory data ownership
* Bounded context between WMS and Procurement (Tadark)
* API contracts and data interchange schemas
* Event streaming vs. request-response architecture
* Upstream/downstream service dependencies
* Vendor transition and exit strategy

### Priority 4 — Infrastructure Modernization

* Conduct comprehensive server room audit
* Inspect UPS battery banks and generator cutover reliability
* Audit backup storage configurations and test restore procedures
* Formulate Disaster Recovery (DR) plan
* Evaluate High Availability (HA) topologies for production databases
* Assess internet uplink redundancy
* Investigate hybrid cloud and secure co-location options

---

## 11. Day 01 Deliverables & Outcomes

Rather than executing rushed code changes, Day 01 successfully produced a **grounded assessment of operational reality and strategic friction points**.

Primary Outcomes:

1. Identification of CRM as the single most urgent, high-leverage requirement for the sales division.
2. Mapping of extensive manual and paper-dependent processes within the sales pipeline.
3. Establishing the concrete need for automated workflow orchestration and task scheduling.
4. Identification of integration gaps connecting Sales, Warehouse, Procurement, and Financial systems.
5. Recognition of vendor lock-in risks across existing software assets.
6. Identifying the critical necessity of assigning a Single Source of Truth for core enterprise entities.
7. Documenting physical infrastructure vulnerabilities and IT operational overload.
8. Initiating an architectural governance standard for software evaluation and procurement.
9. Initial comparative framing of Cloud SaaS vs. Self-hosted models for CRM.
10. Solidifying the requirement for hands-on pilot testing prior to procurement commitments.

---

## 12. Focus for Day 02

**Proposed Focus:**

> *Transform Day 01 field observations into an actionable, decision-ready transformation blueprint.*

Key Objectives:

* Continue discovery interviews with primary operational stakeholders
* Complete the comprehensive Enterprise Software Landscape matrix
* Formalize the detailed CRM functional requirements specification
* Separate true operational requirements from secondary wishlists
* Map mission-critical inter-system integration flows
* Conduct deeper technical due diligence on the sales portal and WMS codebase
* Initiate structured comparative scoring of CRM candidates based on verified enterprise criteria

---

### Day 01 Summary Status

* **Overall Status:** Discovery / Assessment (Active Ground-Truth Discovery)
* **Progress:** Successful launch of organizational discovery phase
* **Major Blocker:** None identified that would impede ongoing assessment
* **Major Risk:** Software fragmentation, vendor dependency, and ambiguous data ownership boundaries
* **Next Objective:** Complete discovery and synthesize findings into a phased, pragmatic execution roadmap
