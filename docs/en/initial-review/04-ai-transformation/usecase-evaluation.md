---
title: "AI Use Case Evaluation Framework"
lang: en
translation: /fa/initial-review/04-ai-transformation/usecase-evaluation
---

# AI Use Case Evaluation Framework

## Executive Summary
To prevent speculative resource allocation, Arian Khodro evaluates every proposed AI use case through a standardized scoring matrix. Proposed initiatives are evaluated across five objective criteria: **Business Value**, **Technical Feasibility**, **Data Readiness**, **Risk & Compliance**, and **Implementation Effort**. Only initiatives scoring above our defined feasibility and ROI threshold advance to prototype funding.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        AI USE CASE SCORING METHODOLOGY (0 - 100)                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Business Value Impact (30%)   ► Direct labor hours saved, penalties eliminated.   │
│  2. Data Readiness (25%)          ► Available training/validation samples, cleanliness.│
│  3. Technical Feasibility (20%)   ► Proven model architecture, clear error bounds.     │
│  4. Risk & Compliance Guard (15%) ► Zero exposure to irreversible statutory damage.    │
│  5. Speed-to-Pilot Effort (10%)   ► Ability to demonstrate working POC in < 60 days.   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Prioritized Automotive AI Portfolio Matrix

| Rank | Proposed Use Case | Score | Horizon | Sourcing Approach | Verification Gate |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **1** | **Customs Dossier Multilingual OCR** | **88 / 100** | Horizon 3 (Days 61-90) | Hybrid (Local engine + API) | > 92% character accuracy on packing list VINs. |
| **2** | **Vehicle Body Handover Inspection** | **78 / 100** | Horizon 5 (Months 6-12)| In-House Mobile Vision Model| Field audit on 100 transport handovers. |
| **3** | **Spare Parts Demand Forecasting** | **71 / 100** | Horizon 6 (Months 12-24)| Scikit-Learn / LightGBM | Backtesting against 24 months of order history. |
| **4** | **AI-Powered Customer Voice Assistant**| **42 / 100** | **REJECTED** | N/A | High hallucination risk, low business urgency. |
| **5** | **Autonomous Financial Fraud Detection**| **38 / 100** | **REJECTED** | N/A | Insufficient historical labeled fraud datasets. |

---

## Detailed Evaluation of Top 3 Approved Initiatives

### Use Case 1: Customs Dossier Multilingual OCR Ingestion
- **Strategic Impact:** Eliminates hundreds of monthly person-hours retyping complex 17-character VINs and item codes from foreign shipping manifests into Tadark. Prevents demurrage fines caused by typographical errors.
- **Data Readiness:** Thousands of historical PDF shipping manifests and commercial proformas are readily available on company file shares for model tuning and regression testing.
- **Risk Mitigation:** Human-in-the-Loop review screen highlights extracted text directly beside the original PDF page; confidence score below 95% forces mandatory operator confirmation.

### Use Case 2: Vehicle Handover Compound Vision Inspection
- **Strategic Impact:** Dealerships frequently contest vehicle scratch damage, claiming flaws were caused by transport carriers rather than dealership handling. High-resolution mobile intake photos with automated dent bounding boxes establish irrefutable handover evidence.
- **Data Readiness:** Requires a dedicated image collection effort during Phase 1 Discovery to gather 1,000+ labeled vehicle surface photos across lighting conditions.
- **Risk Mitigation:** Vision models assist human compound inspectors; they do not replace the physical joint sign-off protocol.

### Use Case 3: Spare Parts Predictive Demand Forecasting
- **Strategic Impact:** Balances spare parts stock levels in central warehousing, reducing costly emergency airfreight orders while preventing stockouts of critical servicing components.
- **Data Readiness:** Relies on historical inventory sales ledgers extracted from Tadark and reconciled during Phase 2.
- **Risk Mitigation:** Forecast outputs serve as replenishment recommendations to the spare parts procurement manager, who retains final purchasing authorization.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Formally endorse Use Case 1 (Customs OCR) as the immediate Pilot for Horizon 3; reject high-risk autonomous financial and conversational voice bots.
- **Open Questions:** Collection protocol for training photos of vehicle scratch inspection.
- **Next Actions:** Review [OCR & Document AI Architecture](./ocr-and-document-ai) for technical pipeline specifications.
