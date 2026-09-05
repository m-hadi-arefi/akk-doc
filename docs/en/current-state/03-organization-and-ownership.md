---
title: "03 — Organization, Stakeholders & Ownership"
lang: en
translation: /fa/current-state/03-organization-and-ownership
---

# 03 — Organization, Stakeholders & Ownership

## Stakeholder Landscape & Operational Roles
Understanding organizational boundaries, formal lines of authority, informal influence, and technical custodianship is essential to de-risking digital transformation at Arian Khodro.

---

## Stakeholder Mapping Matrix

| Stakeholder / Role | Primary Responsibilities | Systems Operated or Influenced | Technical vs. Business Ownership | Decision Influence | Key Dependency & Risk |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mr. Iranzadeh**<br>*(CEO & Managing Director)* | Executive governance, investment authorization, enterprise strategy, organizational alignment. | All enterprise applications; capital allocation across technology. | Business owner of enterprise transformation. | Final decision authority. | High strategic dependency. Needs clear, unbiased technical synthesis to make informed capital decisions. |
| **Mr. Habibi**<br>*(Network & Helpdesk Lead)* | Network infrastructure, server room physical maintenance, active/passive cabling, user endpoint support. | ESXi hypervisors, switches, routers, firewalls, GE UPS, Issabel VoIP. | Technical custodian of network and on-premise hardware. | High operational influence on hardware and network purchases. | Critical SPOF: All server room access, cabling diagrams, and daily network troubleshooting reside with him. |
| **Mr. Khani**<br>*(Database & Systems Specialist)* | Database operations, data extracts, legacy database querying, operational support. | Operational databases, reporting scripts, dedicated DB server host. | Technical owner of core operational database instances. | High influence on database access and data migration strategies. | Extreme Person Dependency: A dedicated independent UPS was deployed exclusively to safeguard his host database. |
| **Mr. Zolfaghari**<br>*(Software Development Lead)* | Internal application programming, custom tools, CRM prototyping. | Custom internal software tools, 1000-user CRM prototype. | Technical owner of custom internal utilities and codebases. | High influence on internal software build-versus-buy discussions. | High dependency for proprietary internal code maintenance; risks siloed architectures. |
| **Mr. Shamkhi**<br>*(Senior Developer / Tech Lead)* | Backend service development, database design, API design. | Internal platforms, database schemas, integration adapters. | Technical co-owner of internal software components. | Medium to High technical influence. | Knowledge of custom API specifications and legacy system workarounds. |
| **Mr. Mousavi**<br>*(Systems & Process Analyst)* | Process modeling, system requirements gathering, workflow design. | Cross-departmental workflows, business specifications. | Bridge between business process and technical requirements. | Medium influence on business process modeling. | Key custodian of undocumented business rules across commercial divisions. |
| **Mr. Nemati**<br>*(Software Engineer)* | Application logic implementation, user interface components. | Frontend modules, internal web forms, reporting dashboards. | Technical contributor to custom platforms. | Medium technical execution influence. | Development throughput and UI implementation continuity. |
| **Sales Management**<br>*(Commercial Directors & Supervisors)* | Customer acquisition, revenue targets, quotation oversight, sales agent task allocation. | CRM candidates (Didar demo), sales spreadsheets, pricing lists. | Primary business owner of CRM and Sales-to-Cash processes. | Very high business influence on CRM and quotation tools. | High business risk: Intense pressure to procure point solutions without architectural alignment. |
| **Accounting Department**<br>*(Financial Controller & Accountants)* | Financial ledgers, tax compliance, formal invoicing, debt collection validation. | Borhan ERP/Accounting, Sepidar, banking portals. | Business owner of chart of accounts, invoicing, and receivables. | Absolute veto authority on financial data models and invoicing logic. | High regulatory risk: Unwillingness to accept software that cannot guarantee auditable financial compliance. |
| **Procurement Department**<br>*(Purchasing & Supply Chain Officers)* | Vendor ordering, parts sourcing, commercial customs tracking. | Tadark legacy system, foreign supplier spreadsheets. | Business owner of procurement orders and replenishment. | High operational influence on material ordering workflows. | Deeply rooted operational habits in 32-bit Tadark; high resistance to abrupt changes. |
| **Warehouse Supervisors**<br>*(Logistics & Yard Managers)* | Physical material intake, inspection, putaway, picking, loading onto trucks. | WMS handheld terminals, paper manifests, physical bin locators. | Operational custodians of physical stock and warehouse yards. | High operational influence on WMS usability and device selection. | If handheld workflows are cumbersome, warehouse floor staff will bypass software. |
| **Import Department Team**<br>*(Customs & Vehicle Import Specialists)* | Import documentation, tariff classifications, vehicle clearance. | Jahan Gostar portal, customs portals, Didar CRM trial. | Business owner of imported vehicle and parts data. | High influence on B2B import portal specifications. | Parallel adoption of Didar CRM in isolation from corporate sales management. |
| **Jahan Gostar Dev Team**<br>*(External/Contract Developers)* | B2B spare parts portal maintenance, Supabase backend development. | Jahan Gostar website, Supabase on Ubuntu, legacy APIs. | Technical owners of the external B2B portal repository. | High influence on digital spare parts sales architecture. | Code custody risks: Working with legacy APIs where original backend code is unavailable. |
| **WMS Vendor Technical Team**<br>*(External Software Contractor)* | WMS product development, maintenance, and deployment. | WMS .NET 10 codebase, SQL/Mongo/RabbitMQ stack, vendor GitHub. | Technical owner of the specialized warehouse software product. | High technical influence within the warehouse domain. | Severe Vendor Lock-in: Source code, staging environments, and configuration blueprints reside with the vendor. |

---

## Person Dependency Risk Analysis
A major vulnerability discovered at Arian Khodro is the concentration of operational knowledge, administrative credentials, and unrecorded workflows in single individuals.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                             PERSON DEPENDENCY CONCENTRATION                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  INFRASTRUCTURE & HELP DESK   ► Concentrated in Mr. Habibi                             │
│  DATABASE KNOWLEDGE & ACCESS  ► Concentrated in Mr. Khani                              │
│  INTERNAL SOFTWARE LOGIC      ► Concentrated in Mr. Zolfaghari & team                  │
│  SALES PROCESS TACIT RULES    ► Concentrated in Sales Director's head & notes          │
│  IMPORT CATALOG RULES         ► Concentrated in individual import commercial officers  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Systemic Risks Created:
1. **The "Bus Factor" Vulnerability:** Key systems have a bus factor of exactly 1. If Mr. Habibi or Mr. Khani is unavailable during a critical failure, server recovery or database troubleshooting stalls completely.
2. **Shadow Architecture Emergence:** Individual developers create local workarounds (such as standalone database hosts or isolated UPS purchases) because formal enterprise processes do not exist to resolve technical roadblocks.
3. **Information Asymmetry:** Executive management must accept technical claims without independent verification because no codified system specifications or architecture blueprints exist.
