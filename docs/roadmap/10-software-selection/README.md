# Roadmap Stage 10: Software Selection (Build vs Buy vs Extend vs SaaS)

## Purpose & Scope
Whenever a new business or technical requirement arises, Arian Khodro must follow a rigorous, objective decision process to determine whether to **Build custom software**, **Buy commercial off-the-shelf (COTS) software**, **Subscribe to SaaS**, **Extend an existing system**, or **Retain/Modernize a legacy application**.

## Software Evaluation Decision Funnel

```text
Business Need Identified
           │
           ▼
Stage 01: Business Analysis & Requirements Defined
           │
           ▼
Does an existing capability or system exist?
   ├─► YES ──► Can existing system be extended cleanly without excessive tech debt?
   │              ├─► YES ──► EXTEND existing system
   │              └─► NO  ──► Proceed to Evaluation
   │
   └─► NO  ──► Market & Solution Evaluation
                  │
                  ▼
          ┌───────────────────────┐
          │ Build vs Buy Analysis │
          └───────────────────────┘
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
Custom Build   COTS / Buy    SaaS
     │            │            │
     └────────────┬────────────┘
                  │
                  ▼
Technical & Architectural Evaluation
- Core Platform integration capability (SSO, APIs, Event Bus)
- Security, Compliance, and Data Sovereignty
- Vendor Viability & Lock-in Risk
- Total Cost of Ownership (TCO) & Return on Investment (ROI)
                  │
                  ▼
Formal ARB Architecture Decision (ADR)
```

## Evaluation Dimensions & Criteria

| Dimension | Key Assessment Factors |
|---|---|
| **Core Differentiation** | Is this capability unique to Arian Khodro's competitive advantage? (If YES -> Bias toward Custom Build). |
| **Commodity / Standard** | Is it a generic commodity capability like payroll or office productivity? (If YES -> Bias toward SaaS/COTS). |
| **Integration Flexibility** | Does the vendor provide webhooks, REST/gRPC APIs, Kafka events, and OpenID Connect SSO? |
| **Vendor Lock-in & Data** | Can Arian Khodro extract 100% of raw data at any time via automated pipelines? |
| **TCO (5-Year Model)** | Licensing fees + hosting + integration engineering + customization + maintenance + upgrade costs. |
| **Security & Compliance** | Auditability, vulnerability patching track record, encryption support. |

## Associated Documents
- [Legacy Modernization Strategy](./legacy-modernization-strategy.md) — Strategy for decoupling Tadark and legacy systems.
- [Migration Strategy](./migration-strategy.md) — Phased capability migration sequence.
- [Build vs Buy Decision Framework](../../knowledge/decision-frameworks/overview.md#build-vs-buy) — In-depth evaluation criteria.
- [Software Evaluation Template](../../knowledge/templates/overview.md#software-evaluation-checklist) — Copy/paste ready evaluation matrix.
