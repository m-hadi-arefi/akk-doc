---
title: "Step 2: Software Decision Framework (Build vs Buy vs Outsource)"
lang: en
translation: /fa/roadmap/02-decision-cycle
---

# Step 2: Software Decision Framework (Build vs Buy vs Outsource)

Once business and technical requirements are codified during the Discovery phase, the organization avoids the naive false dichotomy of "either building everything from scratch or purchasing a monolithic, costly ERP package." In this step, an explicit, evidence-based architectural decision cycle is established: every required software capability is rigorously evaluated to determine whether to **Build in-house**, **Buy commercial off-the-shelf software (COTS/SaaS)**, or **Outsource custom contracting**.

---

## 1. The Three Branches of the Decision Cycle

```text
                                  ┌────────────────────────┐
                                  │  Required Capability   │
                                  └───────────┬────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
        ┌───────────────────────┐ ┌───────────────────────┐ ┌───────────────────────┐
        │  1. Build In-House    │ │  2. Buy COTS / SaaS   │ │  3. Outsource Custom  │
        │      (Build)          │ │       (Buy)           │ │     Contracting       │
        ├───────────────────────┤ ├───────────────────────┤ ├───────────────────────┤
        │ • Strategic moat and  │ │ • Commodity & generic │ │ • Well-defined,       │
        │   competitive edge    │   standard systems      │   fixed-scope modules   │
        │ • 100% code and data  │ │ • Zero competitive    │ │ • Rare, temporary     │
        │   ownership           │   advantage             │   engineering skills    │
        │ • Dynamic automotive  │ │ • Unjustifiable in-   │ │ • 100% source code    │
        │   business logic      │   house rebuild costs   │   and IP handover       │
        └───────────────────────┘ └───────────────────────┘ └───────────────────────┘
```

---

## 2. Decision Criteria & Operational Conditions

### Option 1: When Should We Build In-House? (Build)
The organization develops the software capability using internal engineering teams if and only if:
1. **Core Business Differentiator**: The capability is a primary source of competitive advantage (e.g., proprietary customs calculation algorithms, unique after-sales dealer warranty workflows, and customized vehicle margin tracking).
2. **Absence of Viable Market Alternatives**: No commercial software adequately accommodates local regulatory mandates, Iranian customs documentation, and Arian Khodro's dealership operating model.
3. **Data Sovereignty & Security Compliance**: Confidential accounting ledgers, supplier price catalogs, and customer contracts that cannot be entrusted to external vendors.
4. **Rapid, Continuous Evolution**: Systems that require weekly iterations in response to shifting commercial directives and operational demands.

---

### Option 2: When Should We Buy? (Buy - COTS / SaaS)
The organization avoids custom coding and purchases standard commercial packages if:
1. **Commodity Capability**: Generic functions that provide zero market differentiation (e.g., standard payroll, email infrastructure, office collaboration, or basic helpdesk ticketing).
2. **Prohibitive Total Cost of Ownership (TCO)**: Developing and maintaining an in-house payroll engine that continuously adapts to complex labor and tax laws consumes significant engineering capital without generating business value.
3. **Time-to-Market Urgency**: Immediate deployment is required within weeks, and proven off-the-shelf products are mature and well-tested.
4. **Guaranteed Regulatory Compliance**: Vendor-backed updates ensuring automatic adherence to national accounting and tax regulations.

---

### Option 3: When Should We Outsource? (Outsource / Custom Contracting)
The organization contracts external software specialists with precise specifications if:
1. **Well-Defined, Fixed-Scope Modules**: The boundaries, mockups, and integration contracts are clearly defined (e.g., roadside assistance driver mobile app, public dealer inquiry portal, or dedicated telemetry dashboards).
2. **Capacity Gaps or Niche Skillsets**: The core internal team is focused on foundational platform capabilities, while an initiative demands specialized temporary skills (such as native mobile development or hardware diagnostic protocols).
3. **Fixed-Term Deadline Constraints**: Accelerating delivery without expanding permanent internal headcount.

> ⚠️ **Non-Negotiable Contracting Constraints:**  
> - **100% Source Code & Documentation Handover**: No proprietary black-box software or obfuscated code is ever accepted.
> - **Strict Adherence to Engineering Standards**: External code must strictly comply with Arian Khodro's architectural patterns, automated test suites, and linting rules.
> - **No Vendor Lock-In**: The architecture must ensure that in-house engineers can seamlessly assume full ownership and maintenance at any time.

---

## 3. Decision Trade-Off Matrix

| Evaluation Dimension | In-House Build | Commercial Buy (COTS/SaaS) | Outsource / Contracting |
| :--- | :--- | :--- | :--- |
| **Initial Capital Expenditure** | Medium-High (team salaries) | High (upfront licensing & setup) | Medium (milestone-based contracts) |
| **Recurring Maintenance Cost** | Low and predictable internally | High (annual recurring licensing) | Dependent on SLA contract terms |
| **Customization Depth** | 100% aligned with company logic | Restricted to vendor configuration | High, constrained by initial contract |
| **Delivery Velocity** | Iterative (via agile sprint cadences) | Fast (weeks to a few months) | Moderate (governed by vendor SLAs) |
| **IP & Source Ownership** | 100% owned by Arian Khodro | 0% (vendor-owned) | 100% (mandated in contract) |
| **Modification Agility** | Maximum and continuous | Extremely slow and expensive | Requires contract amendments |

---

## 4. Formalization via Architecture Decision Records (ADR)

Every decision reached through this framework must be permanently documented as an **Architecture Decision Record (ADR)** to record context, evaluated alternatives, cost implications, and mitigation plans for institutional traceability.
