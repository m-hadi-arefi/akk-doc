---
title: "Step 2: Software Decision Framework (Build vs Buy vs Outsource)"
lang: en
translation: /fa/roadmap/02-decision-cycle
---

# Step 2: Software Decision Framework (Build vs Buy vs Outsource)

> **Executive Summary:**  
> A critical failure mode in corporate IT is assuming an all-or-nothing approach: either attempting to build an entire software universe from scratch, or purchasing a massive, monolithic commercial ERP.  
> Step 2 establishes an objective, evidence-based **Decision Framework**. Using requirements validated during Step 1 (Discovery), every enterprise capability is evaluated against a 12-factor decision matrix to determine whether to **Build in-house**, **Buy commercial off-the-shelf software (COTS/SaaS)**, or **Outsource custom development**.  
> **Strict Governance Mandate: We do NOT pre-decide the sourcing answer before Discovery. Sourcing decisions are the consequence of validated business requirements, not personal bias or vendor sales pitches.**

---

## 1. The Three Sourcing Branches & Strategic Philosophy

Modern enterprise architecture recognizes that different software capabilities serve different organizational purposes:

```text
                                  ┌────────────────────────┐
                                  │  Validated Capability  │
                                  │  (From Step 1 Discovery│
                                  └───────────┬────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
        ┌───────────────────────┐ ┌───────────────────────┐ ┌───────────────────────┐
        │   1. BUILD IN-HOUSE   │ │   2. BUY COTS / SAAS  │ │  3. OUTSOURCE CUSTOM  │
        │   (Strategic Moat)    │ │   (Commodity Service) │ │   (Specialized/Fixed) │
        ├───────────────────────┤ ├───────────────────────┤ ├───────────────────────┤
        │ • Competitive edge    │ │ • Non-differentiating │ │ • Well-bounded scope  │
        │ • Proprietary business│   industry standards    │ • Rare/temporary skills │
        │   rules & formulas    │ │ • Proven commercial   │ • Strict 100% IP and    │
        │ • 100% code and data  │   market maturity       │   source code handover  │
        │   sovereignty         │ │ • Unjustifiable in-   │ • No vendor lock-in     │
        │ • Rapid iterations    │   house rebuild costs   │                         │
        └───────────────────────┘ └───────────────────────┘ └───────────────────────┘
```

---

## 2. The 12-Factor Sourcing Evaluation Framework

Every capability extracted during Discovery is scored across twelve objective criteria:

| Factor | Description | Favors BUILD | Favors BUY | Favors OUTSOURCE |
| :--- | :--- | :---: | :---: | :---: |
| **1. Strategic Differentiation** | Does this capability provide competitive advantage against automotive rivals? | **High** | Low | Low |
| **2. Proprietary Business Rules** | Are workflows heavily customized to Arian Khodro's trade, import, or dealership model? | **Yes** | No | Partially |
| **3. Market Maturity** | Do mature, reliable commercial software packages already exist in the market? | No | **Yes** | No |
| **4. Total Cost of Ownership (TCO)** | What is the 5-year aggregate cost of build, licensing, maintenance, and hosting? | Favorable long-term | Favorable for commodities | Favorable for short-term |
| **5. Time to Market** | How urgently does the business require this operational capability? | Iterative | **Immediate** | Fast fixed-term |
| **6. Integration Complexity** | How deeply must this service integrate with local systems and Tadark? | **Deep** | Standard APIs | Defined interfaces |
| **7. Vendor Lock-In Risk** | What is the financial and operational risk if the software vendor alters terms or folds? | **Zero** | High | Low (with IP handover) |
| **8. Data Sovereignty & Security** | Can the data legally or commercially be hosted outside direct company control? | **Strict Control** | Vendor Cloud | Strict Control |
| **9. Customization Agility** | How frequently will commercial policies, pricing formulas, or workflows change? | **Continuous** | Infrequent | Contract amendments |
| **10. Internal Engineering Readiness**| Does the internal team possess the required domain and architectural skills? | **Yes** | Irrelevant | Missing internally |
| **11. Regulatory Compliance** | Does the software require specialized local tax, customs, or corporate compliance? | **Local Custom** | Vendor-backed standard | Contracted spec |
| **12. Long-Term Maintainability** | Can internal engineers sustainably maintain and support the software post-launch? | **High** | Vendor SLA | High (post-handover) |

---

## 3. Practical Application at Arian Khodro

To illustrate how the 12-factor framework operates in practice, typical automotive capabilities are evaluated below:

### Category A: Capabilities Favoring BUILD In-House
- **Customs Landed-Cost Calculation Engine:** Iranian import regulations, tariffs, currency exchange bands, and logistics surcharges are unique and change rapidly. Building in-house ensures 100% control over proprietary margin calculations.
- **Dealership After-Sales & Warranty Claim Portal:** The operational interactions between Arian Khodro headquarters, authorized service workshops, and parts dispatches are a primary customer satisfaction differentiator.
- **Core Platform Backbone (API Gateway, IAM, MDM):** The shared integration backbone must remain independent of external software vendors to prevent the entire enterprise architecture from being held hostage by proprietary vendor stacks.

### Category B: Capabilities Favoring BUY (Commercial Off-The-Shelf / SaaS)
- **Standard Corporate Email & Collaboration (e.g., Office / Google Workspace):** Zero competitive advantage; building internally would be an absurd waste of engineering capital.
- **Standard Financial Payroll & Employee Benefits:** Local commercial HR/payroll packages already comply with Iranian labor laws, social security deductions, and statutory reporting.
- **IT Service Desk & Infrastructure Monitoring (e.g., Jira, Zabbix, Grafana):** Highly mature, feature-rich commercial and open-source tools that can be configured in days.

### Category C: Capabilities Favoring OUTSOURCE (Custom Contracting)
- **Customer Roadside Assistance Mobile App (iOS / Android):** A well-defined, bounded project requiring specialized mobile UX and GPS dispatch integration. Can be contracted to a specialist mobile studio under strict engineering specifications.
- **Public Dealership Showroom Showcase Portal:** Bounded scope, marketing-driven, requiring creative agency design skills rather than deep core backend engineering.

### Category D: Legacy Core Systems (Tadark) → Integrate First, Modernize Gradually
- **Legacy Tadark Accounting & Inventory:** Neither immediately replaced nor prematurely rewritten. Ring-fenced via an Anti-Corruption Layer (ACL) adapter, allowing existing financial accounting to operate reliably while specific functional domains are peeled off via the **Strangler Fig pattern**.

---

## 4. Non-Negotiable Governance Rules for Outsourcing

When the decision framework determines that an initiative should be outsourced to external contractors, strict contractual safeguards are enforced:

1. **100% Intellectual Property & Source Code Ownership:** All source code, Git repositories, automated test scripts, documentation, and Docker build files belong exclusively to Arian Khodro from day one.
2. **Zero Proprietary Black-Boxes:** Contractors are strictly forbidden from embedding closed-source, obfuscated, or proprietary vendor runtime libraries.
3. **Strict Adherence to Arian Khodro Standards:** External code must pass internal linting rules, architectural design patterns (Clean Architecture / C4 Model), and automated CI/CD security pipelines.
4. **Mandatory Knowledge Transfer & In-House Onboarding:** Contract milestone payouts are tied directly to formal technical documentation and training of in-house engineers who will maintain the software.

---

## 5. Formalization via Architecture Decision Records (ADRs)

To prevent endless re-debating of past technical choices and maintain complete institutional transparency, every sourcing decision reached through this framework is recorded in a formal **Architecture Decision Record (ADR)**.

Each ADR explicitly documents:
- The business context and problem statement
- The decision drivers and evaluation criteria
- The considered options (Build, Buy, Outsource) and evaluated vendors
- The chosen decision outcome and justification
- The positive and negative consequences (accepted trade-offs)
- The compliance and validation method

*For complete templates and working examples, see [Architecture Decision Records (ADR) →](/en/knowledge/adr-templates).*

---

## 6. Decision Gate 3 Approval

The Step 2 Decision Cycle formally concludes at **Decision Gate 3**:

- **Review Package:** Presentation of the complete capability sourcing portfolio, signed ADRs, 5-year TCO comparisons, and vendor scorecards to executive leadership.
- **Executive Decision:** Senior management approves the sourcing strategy for each capability and authorizes the engineering budget and procurement requests for Step 3 (Development of Core Platform & Assessment Priorities).

---

## 7. Related Documentation

- **[Step 1: Discovery Guidelines →](/en/roadmap/01-discovery)** — Requirements extraction feeding the decision cycle.
- **[Step 3: Core Platform Concept →](/en/roadmap/03-development-and-core-platform)** — Development of internally built priorities and shared backbone.
- **[Core Platform Architecture Blueprint →](/en/platform/core-platform/)** — In-depth architectural design of the foundational shared layer.
- **[Architecture Decision Records (ADR) →](/en/knowledge/adr-templates)** — Formal decision templates and working automotive examples.
