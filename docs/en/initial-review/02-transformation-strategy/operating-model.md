---
title: "Target Operating Model (TOM)"
lang: en
translation: /fa/initial-review/02-transformation-strategy/operating-model
---

# Target Operating Model (TOM)

## Executive Summary
An organization cannot execute a modern digital transformation through a 1990s functional silo structure. This document outlines the Target Operating Model (TOM) for Arian Khodro. It replaces disconnected departmental handoffs with cross-functional, product-oriented squads, defines the interaction model between business stakeholders and software engineers, and establishes the platform engineering team responsible for enterprise shared services.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TARGET OPERATING MODEL TOPOLOGY                                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [TRANSFORMATION STEERING COMMITTEE]  ► CEO, Transformation Leader, CFO, Business Heads│
│               │                                                                        │
│               ▼                                                                        │
│  ┌───────────────────────────────┐        ┌───────────────────────────────┐            │
│  │   VALUE STREAM SQUAD 1        │        │   VALUE STREAM SQUAD 2        │            │
│  │   (Customs & Procurement)     │        │   (Dealership & After-Sales)  │            │
│  │   • Product Manager           │        │   • Product Manager           │            │
│  │   • Business Analyst          │        │   • Business Analyst          │            │
│  │   • Full-Stack Engineers      │        │   • Full-Stack Engineers      │            │
│  │   • Commercial Champion       │        │   • Service Champion          │            │
│  └───────────────┬───────────────┘        └───────────────┬───────────────┘            │
│                  └────────────────┐      ┌────────────────┘                            │
│                                   ▼      ▼                                             │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   CORE PLATFORM & ARCHITECTURE SQUAD                                             │  │
│  │   • Lead Architect • DevOps/Infra • Data Engineer • IAM/Security Engineer        │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Cross-Functional Squad Topologies
Instead of business analysts writing 200-page requirement specifications that are tossed over the wall to programmers, Arian Khodro operates via cross-functional squads:
- **Squad Composition:** Each squad unites product management, business domain champions, software engineering, and quality assurance.
- **Autonomous Mission:** Squads are assigned enduring business missions (e.g., "Minimize port-to-warehouse clearance cycle time") rather than temporary technical feature lists.
- **Direct Business Access:** Engineers speak directly with warehouse operators, customs clearance brokers, and accountants daily.

---

## 2. Squad Definitions & Strategic Focus

### Squad 1: Commercial & Customs Value Stream Squad
- **Mission:** Streamline vehicle order intake, proforma tracking, currency allocation alerts, and customs dossier clearance pipelines.
- **Key Deliverables:** Digital Dossier Collation Module, OCR Ingestion Pipeline, Tadark Customs Adapter.

### Squad 2: Dealership Network & Warranty Squad
- **Mission:** Modernize interactions with authorized dealerships, accelerate spare parts dispatch, and automate warranty claims settlement.
- **Key Deliverables:** Dealership Partner Portal, Warranty Claim Pre-Approval Engine, Real-time Spare Parts Availability API.

### Squad 3: Core Platform & Shared Infrastructure Squad
- **Mission:** Provide reusable software building blocks, manage database reliability, govern CI/CD pipelines, and secure enterprise identities.
- **Key Deliverables:** IAM SSO / RBAC Engine, Anti-Corruption Layer, VIN Master Data Hub, Central Observability & Telemetry.

---

## 3. Interaction Rhythms & Delivery Cadence

| Ceremony / Event | Cadence | Purpose & Participants |
| :--- | :---: | :--- |
| **Sprint Planning** | Bi-weekly (Mondays) | Squad commits to 2-week deliverable increment based on prioritized business value. |
| **Daily Standup** | Daily (15 minutes) | Synchronize daily work, identify operational blockers, ensure immediate escalation. |
| **Sprint Review & Demo** | Bi-weekly (Fridays) | Live demonstration of working software to CEO, Department Heads, and users. |
| **Architecture Review** | Weekly | Lead Architect and tech leads review design proposals, ADRs, and schema changes. |
| **Steering Committee** | Monthly | Transformation Leader reports verified ROI, milestone progress, and budget burn to CEO. |

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Transition organizational technology delivery from project-based IT tickets to enduring product-oriented squads.
- **Open Questions:** Selecting dedicated departmental champions from Commercial and Dealership operations for full-time squad participation.
- **Next Actions:** Review the [Target State Architecture](./target-state) to examine the technical realization of this operating model.
