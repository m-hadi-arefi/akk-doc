---
title: "System Audit, Manual Workflows & Bottlenecks"
lang: en
translation: /fa/roadmap/discovery
---

# System Audit, Manual Workflows & Bottlenecks

This document details the operational baseline, manual processing bottlenecks, and organizational risks identified during Phase 1 discovery across Arian Khodro.

---

## 1. Current Systems Landscape Audit

The company currently relies on disconnected legacy systems:

| System / Domain | Underlying Technology | Current State | Operational Risk |
| :--- | :--- | :--- | :--- |
| **Tadark Accounting System** | Delphi / Legacy Relational Database | Core financial and warehouse ledger | No modern web APIs, heavy desktop client dependency, catastrophic failure risk |
| **Customer Relationship Management (CRM)** | Web / Disconnected Database | Leads, sales contracts, customer tracking | No real-time sync with accounting or workshop; duplicate customer data |
| **Customs & Clearance Processes** | Excel Sheets & Paper Forms | Manual circulation of shipping bills | Human errors entering VINs and invoices, severe settlement delays |
| **Dealership & Branch Portals** | Standalone Web Portals | Parts requests and warranty claims | Delays in ledger postings, zero real-time visibility into central inventory |

---

## 2. Operational Bottlenecks in Manual Workflows

```text
[Sales / Dealership] ──(Manual Excel Entry)──► [Finance / Tadark] ──(Paper Printout)──► [Central Warehouse]
        ▲                                              │                                        │
        └──────────────(Data Discrepancies & Days of Delay)─────────────────────────────────────┘
```

1. **Redundant Data Entry**: Customer details and vehicle specifications are retyped separately across sales, workshop reception, and finance, causing VIN mismatches.
2. **Delayed 3-Way Invoice Matching**: Reconciling foreign purchase orders, warehouse goods receipts, and payment vouchers takes multiple business days per consignment.
3. **Absence of Real-Time Executive Insights**: Generating gross margin reports per vehicle or real-time spare parts stock levels requires extracting and harmonizing multiple spreadsheet exports.

---

## 3. Phase 1 Action Plan

- [x] Document Tadark database schemas, financial transaction flows, and warehouse tables.
- [ ] Build a non-intrusive software Adapter Layer to query data without altering Delphi source code.
- [ ] Standardize digital forms to eliminate intermediate spreadsheets in order workflows.
- [ ] Implement OCR pilot for automated digitization of customs documentation and commercial invoices.
