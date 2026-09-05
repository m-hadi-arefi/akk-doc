---
title: "11 — CRM Market & Vendor Discovery"
lang: en
translation: /fa/current-state/11-crm-market-and-vendors
---

# 11 — CRM Market & Vendor Discovery

## Market Options Examined in Discovery
During the Day 01 discovery sprint, multiple commercial CRM options and deployment models were identified across active pilots, vendor proposals, and internal engineering initiatives.

---

## 1. Didar CRM (دیدار)
- **Current Operational Footprint:** Currently deployed on an active 15-day trial in the import sales department.
- **Observed Capabilities:** Clean visual sales pipeline (kanban view), fast contact logging, mobile accessibility, intuitive follow-up task creation.
- **Reported Commercial Pricing:** Negotiated multi-user subscription packages. For an enterprise-wide rollout across 60–70 sales and support users, estimated annual subscription costs become substantial.
- **Identified Architecture Risks:**
  - **SaaS Cloud Hosting:** Customer contact databases and quotation pricing histories reside on vendor-managed infrastructure.
  - **Integration Gap:** Lacks out-of-the-box integration adapters for on-premise 32-bit Tadark or Borhan SQL Server accounting without building custom middleware.
  - **Sales Claims vs. Operational Reality:** Sales representatives from cloud vendors frequently promise seamless API workflows that require extensive custom engineering during actual deployment.

---

## 2. Dana CRM (دانا)
- **Market Positioning:** Commercial enterprise CRM designed for domestic corporate workflows.
- **Deployment Model:** Offers private on-premise installation options as well as dedicated cloud hosting.
- **Reported Pricing:** Evaluated in discussions at an approximate permanent on-premise licensing tier around **500 million IRR (~$500M IRR)** plus implementation and support contracts. *(Marked as reported pricing during discovery, subject to formal quotation).*
- **Trade-offs:** Stronger workflow engine than lightweight SaaS tools, but heavier administrative overhead and longer deployment lifecycles.

---

## 3. Other Permanent / On-Premise Alternatives
- Evaluated options include domestic enterprise CRM software offering perpetual licensing.
- **Primary Advantages:** Data sovereignty (databases remain behind Arian Khodro firewalls), zero per-user monthly SaaS subscription inflation, easier local database linking with Borhan.
- **Primary Disadvantages:** Requires dedicated on-premise infrastructure, database administration, and ongoing internal software maintenance.

---

## 4. Internal CRM Initiative (Mr. Zolfaghari's Team)
- **Current Development Status:** An internal software initiative led by Mr. Zolfaghari is prototyping a custom CRM and workflow engine designed to support up to 1,000 internal users.
- **Potential Advantages:** Fully customized to Arian Khodro's exact organizational hierarchy, zero licensing fees, full source code ownership.
- **Identified Risks:**
  - Building an enterprise CRM requires immense development velocity: contact management, timeline tracking, mobile push notifications, SMS gateways, report builders, and role-based security.
  - Diverts internal engineering capacity away from core integration adapters and master data harmonization.
  - Creates extreme person dependency on internal developers for bug fixes and UI updates.

---

## The Recommended Market Evaluation Strategy
Rather than selecting a CRM platform based solely on slick sales demos or internal development pride, Arian Khodro must execute a disciplined two-step strategy:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        RECOMMENDED CRM BENCHMARKING PROTOCOL                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  STEP 1: BENCHMARK 5 INDUSTRY PEERS                                                    │
│  ► Identify 5 automotive or wholesale distribution enterprises of comparable scale.   │
│  ► Audit which CRM/ERP platforms they operate in production and their real pain points.│
│                                                                                        │
│  STEP 2: CONTROLLED WORKFLOW PROOF-OF-CONCEPT (POC)                                    │
│  ► Shortlist the top 2 candidates (including the internal prototype if mature).        │
│  ► Execute a 3-week test using REAL Arian Khodro orders, drivers, and quotations.      │
│  ► Base procurement on verified operational throughput, not vendor marketing claims.   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
