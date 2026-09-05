---
title: "04 — Current Software Landscape"
lang: en
translation: /fa/current-state/04-software-landscape
---

# 04 — Current Software Landscape

## Software Inventory & Application Baseline
This document catalogs every known software system currently in operational use or active development across Arian Khodro.

---

## Master Systems Catalog

| System Name | Business Purpose | Business Owner | Technical Owner | Vendor / Team | Technology Stack | Runtime / Database | Hosting / Environment | Criticality | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Tadark** | Legacy procurement, supply chain tracking, commercial inventory logic. | Procurement Department | Unknown / Legacy Contractor | Legacy Delphi Vendor | Delphi (32-bit Win32) | Relational DB (SQL Server / Paradox legacy) | On-premise VM / Dedicated Windows host | Critical | Verified In-Use |
| **Borhan (برهان)** | Enterprise financial accounting, general ledger, treasury, tax invoicing. | Finance & Accounting | Mr. Khani / Accounting IT | Borhan System Vendor | .NET / Windows Client | Microsoft SQL Server | On-premise Virtual Machine (ESXi) | High | Verified In-Use |
| **Sepidar (سپیدار)** | Secondary / branch accounting and payroll processing. | HR & Branch Accounting | Accounting Support Staff | Sepidar System (System Group) | C# / Delphi / Desktop Client | Microsoft SQL Server | Local workstation / On-premise VM | Medium | Verified In-Use |
| **WMS (Warehouse System)** | Physical warehouse management, location addressing, picking, packing, putaway. | Warehouse Operations | External WMS Vendor Team | Independent Software Vendor (ISV) | .NET 10 (Modular Monolith) | SQL Server, MongoDB, Redis, RabbitMQ, EventStore | Vendor Staging Server (Dev) / On-premise Target (Prod) | Critical | Active Integration Review |
| **Jahan Gostar B2B Portal** | Online catalog and ordering portal for wholesale vehicle parts and import buyers. | Import Commercial Dept | External Contract Dev Team | Multi-vendor contract team | Web frontend (Vue/React legacy), REST APIs | MySQL / PostgreSQL legacy backend | Hosted VPS / External Cloud | High | Code Audit Required |
| **New Sales Platform** | Modernization initiative for the import parts ordering portal. | Commercial / Import | New Internal / Contract Dev Team | In-house / External Contractor | Modern Frontend, Supabase (self-hosted) | PostgreSQL (under Supabase), Ubuntu Linux | Internal / Dedicated Ubuntu Server | High | Active Planning / Prototype |
| **Didar CRM (دیدار)** | Sales lead management, customer contact logging (trial deployment). | Import Sales Team | Vendor SaaS / Import Specialist | Didar System (SaaS) | Multi-tenant SaaS Cloud Web/Mobile | Cloud-hosted multi-tenant database | Public Cloud (Vendor Data Center) | Medium | Active 15-day Trial |
| **Dana CRM (دانا)** | Evaluated CRM candidate for corporate sales automation. | Commercial Sales | Evaluated Vendor | Dana System | Web Application (.NET/Java) | SQL Server / Oracle | On-premise / Private Cloud | Low (Candidate) | Market Evaluation |
| **Issabel PBX (ایزابل)** | Corporate VoIP telephony, call routing, internal extensions. | IT / Administration | Mr. Habibi | Open Source Community | Asterisk / Linux CentOS / PHP Web UI | MySQL / MariaDB (Asterisk CDR) | On-premise Virtual Machine | High | Verified In-Use |
| **Internal CRM Prototype** | 1000-user internal CRM and workflow engine under development. | Enterprise Users | Mr. Zolfaghari | Internal Development Team | Web Framework / Custom Backend | Relational Database | Internal On-premise Test Environment | Medium | Under Active Development |
| **Corporate File Sharing** | Central storage of departmental spreadsheets, pricing PDFs, and scanned contracts. | All Departments | Mr. Habibi | Internal IT | Windows SMB / Network Shares | Windows NTFS File System | On-premise Server / Workstation Storage | High | Verified In-Use |

---

## Detailed System Profiles & Known Deficiencies

### 1. Tadark (تدارک)
- **Role:** Handles core procurement workflows and historical inventory balances.
- **Deficiencies:** The 32-bit architecture limits memory addressing. Upgrading to 64-bit has been informally debated, but the true deficiency is tight coupling between procurement business rules and physical warehouse updates.
- **Data Risk:** Acts as a de facto inventory manager without real-time physical bin validation.

### 2. Specialized WMS
- **Role:** Directs warehouse floor operators via handheld barcode scanners (Zebra/Newland).
- **Technology:** Modern .NET 10 architecture utilizing message queues (RabbitMQ) and polyglot persistence (SQL Server for relational structures, MongoDB for product metadata, Redis for caching, EventStore for immutable ledger).
- **Deficiencies:** Source code is not deposited in an Arian Khodro repository; deployment orchestration is controlled entirely by the vendor.

### 3. Jahan Gostar Portal
- **Role:** B2B wholesale parts ordering.
- **Deficiencies:** Missing source code for legacy backend APIs. Manual account creation required for verified buyers. Susceptible to numeric truncation errors (the unit pricing disaster resulting in 200,000 screws).

### 4. Didar CRM (Cloud SaaS Trial)
- **Role:** Piloted in the import department for tracking customer calls.
- **Deficiencies:** Cloud SaaS pricing scales aggressively at 60–70 seats. Lacks native integration with on-premise Tadark, Borhan, or WMS without custom middleware.
