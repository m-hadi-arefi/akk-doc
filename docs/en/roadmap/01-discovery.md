---
title: "Step 1: Discovery, Requirements Engineering & Architecture Assessment"
lang: en
translation: /fa/roadmap/01-discovery
---

# Step 1: Discovery, Requirements Engineering & Architecture Assessment

This document marks the mandatory starting point of the Arian Khodro transformation roadmap. Before writing a single line of code or purchasing commercial software, the organization must build an objective, evidence-based understanding of existing workflows, data silos, legacy applications, and operational bottlenecks.

---

## 1. Requirements Discovery Based on the BABOK Guide

To eliminate wasteful development and ensure strict business alignment, requirements extraction strictly follows the international **BABOK (Business Analysis Body of Knowledge)** framework:

```text
┌────────────────────────┐     ┌────────────────────────┐     ┌────────────────────────┐
│ Stakeholder Analysis   │ ──► │ Extraction & Scoping   │ ──► │ Validation & Ranking   │
│ • CEO & Executive Board│     │ • Business Req (BR)    │     │ • Value vs Cost Matrix │
│ • Commercial & Finance │     │ • Stakeholder Req (UR) │     │ • Formal Sign-Off      │
│ • Branches & Dealership│     │ • Functional Req (FR)  │     │ • Formulated PRD       │
└────────────────────────┘     └────────────────────────┘     └────────────────────────┘
```

### Four Categories of Discovered Requirements
1. **Business Requirements (BR)**: Strategic financial and operational objectives (e.g. accelerating customs clearing cycles, real-time VIN-level margin visibility, and eliminating inventory mismatches).
2. **Stakeholder Requirements (UR)**: Day-to-day operational needs of department heads, workshop managers, and accountants.
3. **Solution Requirements**: Functional capabilities (FR) and non-functional quality attributes (NFR) such as API latency, high availability, and role-based data security.
4. **Transition Requirements**: Temporary capabilities, adapters, and data hygiene needed during migration from legacy tooling.

---

## 2. Baseline Architecture Description via TOGAF Standard

In accordance with **TOGAF ADM (Phases A and B)**, the baseline enterprise state is documented across four architectural layers:

| Architecture Layer | Current State at Arian Khodro | Discovered Bottlenecks & Vulnerabilities |
| :--- | :--- | :--- |
| **Business Architecture** | Vehicle procurement, customs import, spare parts warehousing, and dealership after-sales | Heavy reliance on manual spreadsheets, paper memos, and unrecorded operational workarounds |
| **Data Architecture** | Disparate, disconnected databases across departments | No canonical vehicle (VIN) master record, duplicate customer identities, inconsistent parts taxonomy |
| **Application Architecture** | Legacy Tadark accounting (Delphi), standalone CRM, numerous standalone Excel sheets | Zero live integration between CRM and accounting; complete lack of modern REST/event APIs |
| **Technology Architecture** | Fragmented on-premise hardware, decentralized local networks | Unverified recovery points (RPO/RTO), lack of unified telemetry, audit logging, or central monitoring |

---

## 3. Legacy Audit & Core Operational Bottlenecks

```text
[Dealership/Sales] ──(Manual Excel Entry)──► [Finance/Tadark] ──(Paper Printout)──► [Central Warehouse]
         ▲                                           │                                      │
         └──────────────(Data Discrepancies & Multi-Day Clearing Delays)───────────────────┘
```

1. **Legacy Tadark Delphi Core**: The existing accounting core holds historical financial records but lacks modern APIs. Abrupt replacement risks immediate operational disruption across the dealership network.
2. **Manual 3-Way Invoice Matching**: Reconciling foreign purchase orders, customs warehouse receipts, and vendor invoices is performed manually, introducing multi-day delays and accounting errors.
3. **Absence of Executive Visibility**: Generating consolidated cash flow, margin per VIN, or inventory holding reports requires manual consolidation of disparate spreadsheets.

---

## 4. Deliverables of the Discovery Phase

The discovery phase formally concludes with three authoritative deliverables that serve as inputs to the next step (Decision Framework):
- **Business Requirements & Product Requirements Document (BRD / PRD)**: Documented and prioritized functional and non-functional specifications.
- **Baseline Audit & Bottleneck Heatmap**: Technical risk catalog covering legacy databases and process vulnerabilities.
- **Requirements Traceability Matrix (RTM)**: Traceable linkages connecting each business requirement to architectural solutions and acceptance tests.
