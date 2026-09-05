---
title: "Sourcing Strategy: Build vs. Buy vs. Integrate"
lang: en
translation: /fa/initial-review/02-transformation-strategy/build-buy-integrate
---

# Sourcing Strategy: Build vs. Buy vs. Integrate

## Executive Summary
Every enterprise modernization initiative faces the critical sourcing question: Should we write software in-house, purchase off-the-shelf commercial packages, integrate existing legacy systems, or outsource to third-party vendors? To eliminate guesswork, political bias, and vendor lobbying, Arian Khodro establishes a formal **8-Criteria Sourcing Decision Matrix**. This framework protects capital, guarantees intellectual property ownership, and aligns technology choices with strategic competitive differentiation.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                           SOURCING DECISION GATEWAY LOGIC                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Is this capability a strategic differentiator for Arian Khodro?                    │
│     ├── YES ➔ BUILD IN-HOUSE (Own 100% IP, source code, and agility).                  │
│     └── NO  ➔ Continue to Question 2.                                                  │
│  2. Does a mature, localized off-the-shelf product exist that fits our workflows?       │
│     ├── YES ➔ BUY / ADOPT (Strictly evaluate customization and open API requirements). │
│     └── NO  ➔ Continue to Question 3.                                                  │
│  3. Does an existing legacy tool (Tadark) currently perform this function reliably?    │
│     ├── YES ➔ INTEGRATE / COEXIST (Quarantine with Anti-Corruption Layer adapter).     │
│     └── NO  ➔ RE-ENGINEER PROCESS or OUTSOURCE under strict open-IP governance.        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## The 8 Weighted Sourcing Criteria

| # | Criterion | Weight | Definition & Strategic Boundary |
| :-: | :--- | :---: | :--- |
| **1** | **Strategic Differentiation** | 20% | Does this capability provide competitive advantage in the automotive market? If yes ➔ Strong bias to Build. |
| **2** | **Total Cost of Ownership (TCO)**| 15% | Includes multi-year licensing, mandatory maintenance fees, customization costs, and internal operational overhead. |
| **3** | **Time-to-Value & Speed** | 15% | Can the capability be operationalized within a 90-day horizon to unlock immediate business value? |
| **4** | **Iranian Context & Compliance** | 15% | Full compatibility with statutory Iranian tax (Taxpayer System), customs, and currency allocation regulations. |
| **5** | **IP Ownership & Vendor Lock-in** | 10% | Arian Khodro must own 100% of source code, schemas, and data pipelines. Zero proprietary black-boxes. |
| **6** | **Integration Complexity** | 10% | Does the solution provide open, documented REST/GraphQL APIs and event hooks without vendor gatekeeping? |
| **7** | **Scalability & Security** | 10% | Enterprise-grade access control (RBAC/OIDC), data encryption, and resilience under high transactional loads. |
| **8** | **Internal Team Capability** | 5% | Can our in-house engineering squad maintain, enhance, and debug the solution post-deployment? |

---

## Evaluation of Core Enterprise Capabilities

| Capability Domain | Sourcing Decision | Strategic Rationale & Governance Rule |
| :--- | :---: | :--- |
| **General Financial Ledger** | **KEEP LEGACY (Tadark)** | Statutory compliance and audited books run reliably today. Ripping it out creates extreme fiscal risk. |
| **Vehicle VIN Master & Allocation**| **BUILD IN-HOUSE** | Core competitive differentiator. Requires custom pricing logic, margins, and direct compound scanner integration. |
| **Customs Dossier Ingestion & OCR**| **INTEGRATE (Hybrid)** | Build the workflow orchestration in-house; integrate localized OCR engines via standard REST APIs. |
| **Dealership Partner Portal** | **BUILD IN-HOUSE** | Strategic relationship channel. Dealership adoption requires customized warranty claim and parts ordering interfaces. |
| **Single Sign-On & IAM** | **ADOPT (Keycloak / OIDC)**| Standard commodity capability. Building authentication from scratch violates security best practices. |
| **Container & CI/CD Platform** | **ADOPT (Docker/GitLab)** | Industry-standard open platform. Adopt managed open-source tooling with zero bespoke infrastructure code. |

---

## Rules for Third-Party Vendors & Contractors
If any component is outsourced or procured from external software vendors, the contract must legally mandate:
1. **100% Source Code Delivery:** Complete uncompiled source code, build scripts, and tests delivered into Arian Khodro's Git repository upon every milestone.
2. **Open API Contract:** Vendor cannot charge additional fees for exposing read/write APIs to the core platform.
3. **Independent Acceptance Testing:** Milestones are paid strictly after automated regression tests pass on Arian Khodro's staging servers.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Mandate the 8-Criteria Matrix for all software expenditure; declare VIN Master Data and Dealership Portals as Build-In-House domains.
- **Open Questions:** Formal vendor contract review of existing third-party IT support agreements.
- **Next Actions:** Review the [Target Operating Model](./operating-model) to understand how squads will execute these decisions.
