---
title: "Technical Governance, Lead Role & Agile Delivery Team"
lang: en
translation: /fa/roadmap/team-governance
---

# Technical Governance, Lead Role & Agile Delivery Team

A common pitfall in digital transformation is recruiting oversized, costly engineering departments before the architectural foundation is stabilized. Arian Khodro adopts a **compact, high-velocity delivery team model**.

---

## 1. Phase 1 & 2 Team Topology

The initial implementation team consists of three core engineering roles:

```text
┌────────────────────────────────────────────────────────┐
│               Lead System Architect                    │
│    • Overall architectural vision and Core Platform    │
│    • Engineering standards, security audits, reviews   │
│    • Technical alignment with CEO and process owners   │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
┌───────────────────────────────┐ ┌───────────────────────────────┐
│ Mid-Level Developer 1         │ │ Mid-Level Developer 2         │
│ • Focus: Backend & APIs       │ │ • Focus: Full-Stack & UI      │
│ • Tadark Adapter & Identity   │ │ • Portals, Dashboards & CRM   │
└───────────────────────────────┘ └───────────────────────────────┘
```

---

## 2. Responsibilities Matrix (RACI)

| Milestone / Deliverable | Lead Architect | Mid Developer 1 (Backend) | Mid Developer 2 (Full-Stack) | CEO / Executive Sponsor |
| :--- | :--- | :--- | :--- | :--- |
| **Core Platform Architecture Design** | **A / R** (Accountable/Responsible) | C (Consulted) | C (Consulted) | I (Informed) |
| **Tadark Delphi Adapter Implementation** | A (Approver) | **R** (Implementer) | C (Integration Testing) | I (Informed) |
| **User Dashboards & CRM Integration** | A (Approver) | C (API Provider) | **R** (Implementer) | C (Feedback) |
| **Architecture Decision Records (ADRs)** | **A / R** (Finalizer) | C (Contributor) | C (Contributor) | I (Strategic Impact) |

---

## 3. Agile Operating Rhythms

1. **Two-Week Sprints**: Deliver tangible, testable software increments at the end of every two weeks.
2. **Mandatory Peer Reviews**: No code enters the trunk branch without Lead Architect review and automated test passage.
3. **Formal Decision Records**: Every architectural deviation or framework choice is documented as an ADR.
