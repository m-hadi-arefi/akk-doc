---
title: "Business Processes & Value Streams"
lang: en
translation: /fa/initial-review/01-discovery/business-processes
---

# Business Processes & Value Streams

## Executive Summary
This document analyzes the primary operational value streams of Arian Khodro: Commercial Vehicle Importation, Customs Clearance & Dossier Reconciliation, Central Warehousing & Vehicle Allocation, and Dealership After-Sales Warranty Settlement. It identifies structural friction, cross-departmental handoff latencies, and heavy reliance on informal Shadow IT spreadsheets.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PRIMARY VEHICLE IMPORTATION VALUE STREAM                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Foreign Commercial Order   ► Proforma issued, currency allocation requested.       │
│  2. Shipping & Port Arrival    ► Bill of Lading received, containers discharge at port.│
│  3. Customs Declaration        ► Tariff calculation, physical inspection, duty payment.│
│  4. Central Warehouse Intake   ► Carrier discharge, physical VIN barcode audit.        │
│  5. Retail Allocation & Sale   ► Dealership assignment, consumer contract, handover.   │
│  6. After-Sales & Warranty     ► Periodic servicing, warranty claim audit, settlement. │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Analysis of Core Value Streams & Identified Friction

### Value Stream 1: Commercial Procurement & Currency Allocation
- **Current Flow:** Commercial managers negotiate foreign vehicle proformas, request currency quotas through government portals, and track approvals via standalone Excel workarounds.
- **Identified Friction:** When banking allocations are delayed or revised, updates are communicated via phone or chat groups. Finance and accounting teams lack real-time visibility into committed foreign currency exposures.
- **Target Improvement:** A single commercial intake portal linked directly to currency quota trackers and accounting commitment ledgers.

### Value Stream 2: Customs Clearance & Shipping Dossier Collation
- **Current Flow:** Customs clearance brokers collate physical paper dossiers (commercial invoices, certificates of origin, bills of lading, packing lists). Specialists manually re-calculate tariff rates on spreadsheets.
- **Identified Friction:** Missing paper documents or typographical errors in VIN strings lead to customs rejection, demurrage fines, and multi-week clearance delays at southern ports.
- **Target Improvement:** Digital dossier intake pipeline with OCR verification, automated chassis validation, and electronic sign-off gates.

### Value Stream 3: Central Warehousing & Vehicle Allocation
- **Current Flow:** Vehicles arriving on car-carriers are inspected on paper intake sheets. Staff manually enter chassis numbers into Tadark, while sales managers maintain their own vehicle allocation spreadsheets.
- **Identified Friction:** Vehicles physically present in the compound often appear "in transit" on sales reports, leading to delayed dealer deliveries or double-booking of high-demand vehicle models.
- **Target Improvement:** Mobile barcode intake with instantaneous VIN state synchronization across inventory and sales pipelines.

### Value Stream 4: Dealership After-Sales & Warranty Claims
- **Current Flow:** Dealerships replace defective parts, photograph damaged components, and submit paper or PDF claims monthly. Central technical auditors manually inspect invoices and dispute claims.
- **Identified Friction:** Warranty settlement cycles take months. Dealerships experience cash-flow strain, straining commercial relations and leading to customer dissatisfaction.
- **Target Improvement:** Dedicated Dealership Partner Portal with standardized photo upload, automated rule-based warranty pre-approval, and transparent credit note issuance.

---

## Shadow IT Spreadsheet Dependency Matrix

| Department | Spreadsheet Name / Purpose | Critical Risk Observed | Replacement Strategy |
| :--- | :--- | :--- | :--- |
| **Commercial** | `Shipments_Tracker_2026.xlsx` | Unversioned; single owner; formula corruption risks. | Commercial Module in Core Platform. |
| **Logistics** | `Customs_Tariff_Calc_v4_FINAL.xlsx` | Manual tariff entry; discrepancies with actual duty receipts. | Automated Customs Duty Calculation Engine. |
| **Sales** | `VIN_Allocation_Live.xlsx` | Multi-user editing collisions; simultaneous double-booking. | Real-time Inventory Reservation API. |
| **After-Sales** | `Dealer_Warranty_Disputes.xlsx` | Lost claim history; no audit trail for rejected parts. | Dealership Claims Workflow in Partner Portal. |

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Prioritize Value Stream 2 (Customs Dossier) and Value Stream 3 (Warehouse VIN Allocation) as Phase 1 digital transformation pilots.
- **Open Questions:** Standardize the formal business rules governing dealership warranty rejection thresholds.
- **Next Actions:** Review the [Technology Landscape](./technology-landscape) to examine how legacy systems currently support these flows.
