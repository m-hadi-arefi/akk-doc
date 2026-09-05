---
title: "Step 2: Enterprise Assessment & AI Opportunity Discovery"
lang: en
translation: /fa/ai-roadmap/02-usecase-discovery
---

# Step 2: Enterprise Assessment & AI Opportunity Discovery

> **Executive Summary:**  
> Rushing to deploy AI across an enterprise without auditing process suitability and data readiness leads to high costs, user disillusionment, and failed projects.  
> Step 2 establishes a systematic methodology to evaluate operational workflows across Commercial Procurement, Customs Clearance, Central Warehousing, and Dealership Operations. Using a rigorous **Four-Stage Evaluation Filter** and a **Go/No-Go Decision Matrix**, we identify high-impact, low-risk opportunities where AI delivers measurable operational value.

---

## 1. The Four-Stage AI Evaluation Filter

Every proposed AI application must successfully pass through four sequential evaluation filters before being considered for an engineering pilot:

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ 1. Business Pain       │ ───► │ 2. Process Fit         │ ───► │ 3. Data Readiness      │ ───► │ 4. Risk & Safeguards   │
│ • High manual labor    │      │ • Repetitive pattern   │      │ • Accessible documents │      │ • Tolerable error cost │
│ • Costly cycle delays  │      │ • Clear decision rules │      │ • High text legibility │      │ • Clear human review   │
│ • Frequent errors      │      │ • Semi-structured input│      │ • Historical examples  │      │   gate established     │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

1. **Business Pain & Economic Value:** Does this workflow consume significant clerical labor hours or cause multi-day delays in vehicle delivery? If the problem only costs 10 hours a month, engineering custom AI is financially irrational.
2. **Process Suitability:** Is the task pattern-based and repetitive? Tasks requiring deep political negotiation or complex strategic judgment are entirely unsuited for AI.
3. **Data Readiness & Document Hygiene:** Does the department possess readable, digital documents (PDFs, TIFFs, Excel files)? If the input consists of faded, handwritten paper slips with torn edges, optical character recognition (OCR) will fail.
4. **Risk & Human Verification Feasibility:** Can an error produced by the AI model be easily spotted and corrected by a human reviewer before causing regulatory or financial damage?

---

## 2. The Go / No-Go Decision Matrix

By plotting business value against implementation feasibility, proposed use cases are categorized into four distinct action quadrants:

```text
    ▲ High
    │
    │  [QUADRANT B: FIX PROCESS FIRST]        [QUADRANT A: IMMEDIATE PILOT]
    │  • High Value, but Low Feasibility       • High Value, High Feasibility
    │  • Action: Modernize data & process      • Action: Fast-track to Step 3 Pilot
    │    before applying AI.                   • Example: Customs BOL Document Ingestion
    │
 B  │
 U  │
 S  │
 I  │  [QUADRANT D: REJECT IMMEDIATELY]        [QUADRANT C: LOW-PRIORITY BACKLOG]
 N  │  • Low Value, Low Feasibility           • Low Value, High Feasibility
 E  │  • Action: Discard; avoid distraction.   • Action: Defer; do not divert resources.
 S  │  • Example: Autonomous Ledger Postings   • Example: Meeting Notes Summarization
 S  │
    └──────────────────────────────────────────────────────────────────────────►
     Low                         FEASIBILITY & DATA MATURITY               High
```

---

## 3. Auditing Data Quality & Document Hygiene

Before funding an AI pilot, the engineering team inspects the physical and digital artifacts of the target workflow:

| Data Hygiene Factor | Optimal Condition (Green Flag) | Hazardous Condition (Red Flag - Defer) |
| :--- | :--- | :--- |
| **Document Format** | Clean digital vector PDFs (e.g., computer-generated foreign proformas). | Low-resolution fax scans (<150 DPI) or skewed mobile camera photos. |
| **Typography & Text** | Standard Latin/Persian printed fonts; high contrast against background. | Faded dot-matrix printouts or cursive manual handwriting. |
| **Language Complexity** | Standardized international trade English with known HS tariff codes. | Colloquial slang, mixed unstructured commentary, un-indexed abbreviations. |
| **Volume of History** | At least 200–500 historical sample dossiers available for validation. | Fewer than 20 past examples; constantly changing document formats. |

---

## 4. Candidate Screening & Priority Heatmap

Applying this methodology to Arian Khodro's operations yields an initial screening heatmap:

| Opportunity Candidate | Target Department | Evaluated Fit | Decision Outcome & Rationale |
| :--- | :--- | :---: | :--- |
| **1. Customs BOL & Shipping Manifest Ingestion** | Customs Clearance | **High Value / High Feasibility** | **APPROVED FOR STEP 3 PILOT:** Foreign shipping manifests are computer-printed, tabular, and consume high manual re-keying hours. |
| **2. Automated 3-Way Supplier Invoice Matching** | Accounts Payable | **High Value / High Feasibility** | **APPROVED FOR STEP 3 PILOT:** Matching purchase orders, customs warehouse intake receipts, and vendor invoices follows clear deterministic rules. |
| **3. Spare Parts Catalog Normalization** | Central Warehousing | **Medium Value / High Feasibility** | **SECONDARY PILOT:** Cleanses OEM part numbers, descriptions, and compatibility matrices into standardized Master Data. |
| **4. Dealership Warranty Claim Duplicate Triage** | After-Sales Warranty | **High Value / Medium Feasibility** | **DEFERRED TO PHASE B:** Requires clean dealership service history; must follow deployment of modern workshop reception screens. |
| **5. Fully Autonomous General Ledger Posting** | Corporate Finance | **Unacceptable Risk / Negative Fit** | **STRICTLY REJECTED:** Violates financial governance; high risk of regulatory tax non-compliance; zero autonomous financial posting permitted. |

---

## 5. Related Documentation

- **[Step 1: AI Management Training →](/en/ai-roadmap/01-management-training)** — Executive literacy and governance foundation.
- **[Step 3: Departmental AI Rollout & Pilots →](/en/ai-roadmap/03-department-rollout)** — Operational deployment of approved candidates.
- **[Step 1: Discovery Guidelines →](/en/roadmap/01-discovery)** — Enterprise-wide workflow audits.
