---
title: "Agile Delivery & Sprint Cadence"
lang: en
translation: /fa/initial-review/05-execution/sprint-rhythm
---

# Agile Delivery & Sprint Cadence

## Executive Summary
Traditional waterfall software projects fail in enterprises because requirements change faster than long development cycles can accommodate. Arian Khodro operates on a strict **2-Week Sprint Cadence** utilizing a **Dual-Track Agile** model. By running continuous discovery alongside continuous engineering delivery, we ensure the team is always building validated features while immediately testing working software with operational end-users.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DUAL-TRACK AGILE OPERATING MODEL                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  TRACK 1: CONTINUOUS DISCOVERY (Product Manager + Business Analyst + Lead Architect)   │
│  • Interview users  • Map edge cases  • Prototype UI screens  • Validate data samples  │
│          │                                                                             │
│          ▼ Validated User Stories & Acceptance Criteria (Definition of Ready)          │
│                                                                                        │
│  TRACK 2: CONTINUOUS DELIVERY (Full-Stack Engineering Squad)                           │
│  • Code features    • Write unit/int tests  • Peer review PRs  • Deploy to Staging     │
│          │                                                                             │
│          ▼ Tested & Verified Working Increment (Definition of Done)                    │
│  BI-WEEKLY STAKEHOLDER SPRINT REVIEW & LIVE DEMO (No slide decks; working software only)│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. The Bi-Weekly Sprint Rhythm

| Day of Sprint | Ceremony | Objective & Participants |
| :--- | :--- | :--- |
| **Day 1 (Monday 09:00)** | **Sprint Planning** | Squad commits to top-priority backlog items meeting the Definition of Ready. |
| **Daily (09:15 - 09:30)**| **Daily Standup** | 15-minute standing sync: What was done, what is next, what is blocked. |
| **Day 5 (Friday 14:00)** | **Backlog Refinement** | Refine and size upcoming user stories for the following sprint. |
| **Day 10 (Wednesday 15:00)**| **Sprint Review & Demo** | Live demonstration of working software to CEO, Department Heads, and users. |
| **Day 10 (Wednesday 16:30)**| **Sprint Retrospective** | Honest, blameless reflection on squad processes, tools, and collaboration. |

---

## 2. Quality Gates: Definition of Ready & Definition of Done

### Definition of Ready (DoR) — Entering the Sprint
A user story cannot enter sprint execution unless:
1. The business value and target outcome are stated in clear, human-readable language.
2. Acceptance criteria are codified in Given-When-Then format with zero ambiguity.
3. UI mockups and interaction states are reviewed and approved by the business champion.
4. Underlying database schema requirements and API dependencies are mapped and available.

### Definition of Done (DoD) — Releasing to Production
A feature is not complete until:
1. 100% of unit and integration tests pass automatically in the GitLab CI pipeline.
2. Code passes linting and static analysis security scans with zero vulnerabilities.
3. Peer-reviewed and approved by at least two senior engineers.
4. Deployed and verified on the staging environment with real, anonymized data.
5. User acceptance verified and signed off by the departmental process champion.
6. Documentation and operational release notes are published in both English and Persian.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Enforce DoR and DoD as non-negotiable software quality contracts; mandate live software demos over presentation slides.
- **Open Questions:** Finalizing sprint cycle start day alignment with national commercial work weeks.
- **Next Actions:** Review [Pilots & Quick Wins](./pilots-and-quickwins) to examine immediate deliverable increments.
