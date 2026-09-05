---
title: "Data Landscape & Information Architecture"
lang: en
translation: /fa/initial-review/01-discovery/data-landscape
---

# Data Landscape & Information Architecture

## Executive Summary
Data is the foundational lifeblood of modern automotive operations. In Arian Khodro, critical business data—specifically Vehicle Identification Numbers (VINs), spare parts catalogs, customs duty valuations, and dealership accounts—is fractured across isolated databases, unmanaged spreadsheets, and physical paperwork. This document audits our current information architecture, establishes data quality hypotheses, and defines the roadmap toward a unified Master Data model.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DATA FRAGMENTATION ACROSS VALUE STREAMS                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  DATA ENTITY       WHERE IT LIVES TODAY                  CHALLENGE & DRIFT             │
│  ───────────       ────────────────────                  ─────────────────             │
│  Vehicle (VIN)     Commercial Excel, Tadark, Warehouse   Chassis status mismatches     │
│  Spare Parts       Tadark Inventory, Dealership Portal   Part numbering divergences    │
│  Customer Record   Sales Contracts (Paper), CRM (Excel)  No single customer view       │
│  Customs Tariffs   Broker Forms, Logistics Spreadsheets  Inaccurate duty reconciliations│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. The Vehicle (VIN) Data Lifecycle & Information Drift
In an automotive enterprise, a vehicle is identified exclusively by its 17-character VIN. Today, the VIN undergoes significant information drift:
1. **Commercial Contract:** VINs are entered from foreign proforma packing lists into a commercial spreadsheet. Typographical errors occur frequently.
2. **Customs Clearance:** Clearance agents re-key the VIN into national customs manifests. Mismatches between customs manifests and commercial invoices stall port clearance.
3. **Warehouse Intake:** Warehouse staff visually inspect vehicles and manually record chassis numbers on intake slips, then re-enter them into Tadark.
4. **Sales Allocation:** Sales managers maintain an independent spreadsheet reserving VINs for dealerships, resulting in allocation collisions.
5. **Warranty Servicing:** Dealerships submit claims referencing VINs that sometimes do not match central records due to transcription errors.

---

## 2. Core Master Data Entities & Governance Hypotheses

| Master Data Domain | Primary Current Owner | Suspected Quality Issues (To Validate in Discovery) | Target Enterprise Master |
| :--- | :--- | :--- | :--- |
| **Vehicle Master (VIN)** | Commercial / Warehouse | Duplicate entries, missing build-specification metadata, delayed status transitions. | Central Core Platform VIN Hub (Golden Record). |
| **Part Master (SKU)** | Warehouse / After-Sales | Duplicate manufacturer codes, missing supersession chains, unstandardized descriptions. | Canonical Parts Catalog with universal OEM mapping. |
| **Customer Master** | Sales / Dealerships | Disconnected records per purchase; zero visibility into ownership transfers or service history. | Enterprise Customer 360 with statutory national ID validation. |
| **Dealership Master** | Commercial Network Dept | Fragmented contact sheets; unlinked credit lines; non-standardized facility ratings. | Unified Partner Master with integrated credit limits. |

---

## 3. Data Governance Baseline & Quality Dimensions
During Phase 1 Discovery, the data architecture team will assess current data quality across 5 formal dimensions:
- **Completeness:** Percentage of vehicle records with all required customs, tax, and specification fields populated.
- **Uniqueness:** Frequency of duplicate VINs or SKU records across distinct system tables.
- **Timeliness:** Latency elapsed between physical arrival and digital ledger visibility.
- **Accuracy:** Error rate between physical chassis plates and digital database strings.
- **Consistency:** Degree of agreement between Tadark accounting ledger quantities and physical warehouse counts.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Declare the 17-character VIN string as the immutable primary key across all operational and analytical systems; authorize construction of a VIN reconciliation utility.
- **Open Questions:** Extent of duplicate spare parts SKUs inherited from legacy vendor numbering schemes.
- **Next Actions:** Review [Organization & Capabilities](./organization-and-capabilities) to assess the human and cultural dimension of data ownership.
