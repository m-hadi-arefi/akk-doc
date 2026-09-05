---
title: "Project Delivery Methodologies & Hybrid Agile Governance"
lang: en
translation: /fa/knowledge/project-methodologies
---

# Project Delivery Methodologies & Hybrid Agile Governance

> **Executive Summary:**  
> Dogmatic adherence to a single project management methodology invariably fails in enterprise modernization. Pure Waterfall is too rigid to accommodate evolving business insights, while dogmatic Scrum often lacks the upfront architectural discipline required to manage mission-critical legacy systems.  
> Arian Khodro implements a **Hybrid Agile Governance** model: combining the architectural rigor and milestone gates of **TOGAF/RUP** during discovery and design, with the iterative delivery velocity of **Scrum** during engineering, and the continuous flow of **Kanban** for post-launch operations.

---

## 1. Methodological Evaluation: When to Apply What

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        METHODOLOGICAL FIT ACROSS THE LIFECYCLE                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Discovery & Design (Step 1)    ► Structured, Milestone-Gated Analysis (BABOK / TOGAF) │
│  Active Engineering (Steps 3-4) ► Iterative 2-Week Sprints & Stakeholder Demos (Scrum) │
│  Live Operations (Step 5)       ► Continuous Flow, SLA & Defect Management (Kanban/SRE)│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

| Methodology | Best Suited Operational Domain | How It Is Applied at Arian Khodro | Strengths & Trade-Offs |
| :--- | :--- | :--- | :--- |
| **Structured Milestone (RUP / TOGAF)** | Enterprise Discovery, Regulatory Compliance, Target Architecture Blueprints. | Used during Step 1 (Discovery) to guarantee comprehensive data schema audits and legal/statutory alignment. | **High control & predictability;** heavier documentation overhead. |
| **Iterative Agile (Scrum)** | Feature development of modern web applications, microservices, and Core Platform services. | Two-week sprint cadences with working software demonstrated directly to business managers every 14 days. | **Rapid feedback & agility;** requires active, continuous business stakeholder involvement. |
| **Flow-Based (Kanban)** | Post-launch operations, emergency bug triage, IT infrastructure requests, and continuous SRE tuning. | Visual work-in-progress (WIP) limit boards managing operational support tickets and micro-enhancements. | **High responsiveness to real-time events;** less predictable long-term milestone planning. |

---

## 2. The Hybrid Agile Lifecycle at Arian Khodro

Arian Khodro's delivery framework combines upfront architectural safety with agile implementation flexibility:

```text
[Phase 1: Discovery & Architecture] ──► [Phase 2: Sprint Cycles] ──► [Phase 3: Canary Release]
• Structured stakeholder audits         • 2-Week time-boxed sprints  • Controlled operational pilot
• Baseline schema extraction            • Living product backlog     • UAT business sign-offs
• Formal Gate 2 Executive Sign-Off      • Automated CI/CD testing    • 24/7 SRE telemetry active
```

1. **Sprint Planning & Backlog Refinement:** The Product Owner and Lead Architect prioritize user stories based on the operational bottleneck heatmap established during Discovery.
2. **Definition of Ready (DoR):** No story enters a sprint without clear acceptance criteria (Given/When/Then), validated UI mockups, and identified database dependencies.
3. **Definition of Done (DoD):** No feature is merged without 100% passing automated unit/integration tests, zero security scan defects, peer code review, and automated API documentation updates.
4. **Bi-Weekly Stakeholder Demos:** At the end of every sprint, working software is demonstrated directly to Finance, Customs, and Warehouse managers to collect immediate feedback and prevent divergence.

---

## 3. Estimation Discipline: Eliminating Guesswork

To avoid unrealistic delivery promises, estimation follows structured quantitative techniques:

- **Story Point Relative Sizing:** Features are estimated in Fibonacci sequence story points (1, 2, 3, 5, 8, 13) based on complexity and risk, rather than fabricated developer hours.
- **Empirical Velocity Tracking:** Delivery forecasts are calculated strictly from measured historical team velocity across completed sprints.
- **Three-Point PERT Estimation for Fixed Deliverables:**
  $$\text{Expected Duration} = \frac{\text{Optimistic} + 4 \times \text{Most Likely} + \text{Pessimistic}}{6}$$

---

## 4. Related Documentation

- **[Step 4: In-House SDLC & Engineering Team →](/en/roadmap/04-internal-development-lifecycle)** — Team roles and engineering standards.
- **[Step 5: Production Launch & Operations →](/en/roadmap/05-launch-and-operations)** — Transition to live operations and SRE.
- **[Architecture Decision Records (ADR) →](/en/knowledge/adr-templates)** — Recording governance decisions.
