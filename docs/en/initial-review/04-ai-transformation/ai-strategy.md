---
title: "Pragmatic AI Strategy: Value vs. Risk"
lang: en
translation: /fa/initial-review/04-ai-transformation/ai-strategy
---

# Pragmatic AI Strategy: Value vs. Risk

## Executive Summary
The primary hazard in enterprise AI adoption is "solution in search of a problem"—spending capital on generative AI demos that deliver zero measurable operational efficiency. At Arian Khodro, our AI strategy is anchored in three strict principles: **Problem-First, Not Tech-First**, **Deterministic Software by Default, Machine Learning by Exception**, and **Human-in-the-Loop by Mandate**.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE AI CAPABILITY FILTERING PIPELINE                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  CAN THIS BE SOLVED RELIABLY WITH A DATABASE CONSTRAINT OR SQL RULE?                   │
│  ├── YES ➔ BUILD WITH STANDARD DETERMINISTIC CODE. DO NOT USE AI.                      │
│  └── NO  ➔ Continue to Question 2.                                                     │
│  IS THE INPUT DATA STRUCTURED, MEASURABLE, AND HISTORICALLY ACCURATE?                  │
│  ├── NO  ➔ FIX DATA HYGIENE AND PROCESS DISCIPLINE FIRST. DO NOT USE AI.               │
│  └── YES ➔ Continue to Question 3.                                                     │
│  DOES ERRONEOUS OUTPUT CAUSE REGULATORY, LEGAL, OR IRREVERSIBLE FINANCIAL DAMAGE?      │
│  ├── YES ➔ ENFORCE MANDATORY HUMAN REVIEW GATE. ZERO AUTONOMOUS POSTING.               │
│  └── NO  ➔ QUALIFIED APPLICANT FOR SUPERVISED AUTOMATION.                              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Principles of Pragmatic AI Deployment
1. **Rule of Determinism:** If an outcome can be computed with 100% precision via an SQL formula or business rule engine (such as vehicle customs tariff calculation based on statutory HS codes), deploying machine learning is an architectural antipattern.
2. **Explainability is Mandatory:** Black-box statistical predictions cannot be used to reject dealership warranty claims or deny customer vehicle financing. The system must output the explicit feature weights and evidence that led to any recommendation.
3. **Graceful Degradation & Fallback:** If an AI service encounters an unexpected format or loses network connectivity, the business process must automatically fail back to human manual processing without crashing the application.

---

## 2. Where AI Creates Tangible Value in Arian Khodro

| Operational Domain | Targeted AI Solution | Why Traditional Code Fails | Measurable Value Metric |
| :--- | :--- | :--- | :--- |
| **Customs Logistics** | Document OCR & Table Extraction | Foreign bills of lading and proformas arrive in dozens of unstandardized PDF/image layouts. | 70% reduction in manual data entry hours. |
| **Dealership Handover** | Vehicle Body Scratch Detection Vision | Catching transport dents on high-resolution smartphone photos before dealer sign-off. | 50% decrease in contested post-delivery transport damage claims. |
| **Software Delivery** | AI-Assisted Test & Documentation | Generating boilerplate TypeScript types and integration test mocks from schemas. | 25% increase in squad engineering velocity. |
| **Spare Parts Supply** | Time-Series Demand Forecasting | Predicting seasonal consumption spikes for collision repair parts based on historical weather. | 15% reduction in dead warehouse inventory stock. |

---

## 3. Forbidden AI Use Cases (The "Never List")
- **Autonomous Financial Journal Entries:** An LLM or statistical model may never write directly to general ledger tables.
- **Autonomous Legal or Customs Filings:** Government portals must be submitted exclusively with human-verified records.
- **Biometric or Sentiment Surveillance:** No AI tools will be deployed to monitor employee keystrokes, facial expressions, or workspace behavior.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Enforce the AI Capability Filtering Pipeline across all proposed data science initiatives; establish the "Never List" as company policy.
- **Open Questions:** Data privacy agreement terms with external commercial cloud OCR providers.
- **Next Actions:** Review the [AI Use Case Evaluation Framework](./usecase-evaluation) to inspect the formal ranking matrix.
