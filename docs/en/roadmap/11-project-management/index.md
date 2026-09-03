---
title: "Roadmap Stage 11: Software Project Management"
lang: en
translation: /fa/roadmap/11-project-management/
---

# Roadmap Stage 11: Software Project Management

## Purpose & Scope
Provide a comprehensive, objective analysis of software engineering and project delivery frameworks to ensure every initiative at Arian Khodro adopts the project management methodology best suited to its uncertainty, complexity, team size, and regulatory constraints.

## Project Management Methodologies Catalog

Arian Khodro recognizes that one size does not fit all. Different projects require different models:

| Methodology | Best Suited For | Governance / Planning Model | Key Strengths |
|---|---|---|---|
| **Scrum** | Product engineering with evolving requirements (e.g., Customer Portal, Workshop App) | Sprints (1-3 weeks), Product Backlog, Daily Scrum, Retrospective | Rapid feedback, iterative delivery |
| **Kanban** | Operational maintenance, DevOps, platform engineering, continuous bug fixes | Continuous flow, WIP (Work-In-Progress) limits, Cycle Time tracking | Bottleneck visibility, flow optimization |
| **RUP** | High-risk, architecture-heavy enterprise transformations | Inception, Elaboration, Construction, Transition phases | Architecture risk addressed early in Elaboration |
| **Extreme Programming (XP)** | High-complexity algorithmic or transactional software | TDD, Pair Programming, Continuous Integration, Refactoring | Extreme code quality, defect reduction |
| **Waterfall / Predictive** | Fixed-scope infrastructure migrations, hardware rollouts, strict third-party contracts | Sequential milestones (Requirements -> Design -> Dev -> Test -> Release) | Clear contractual predictability |
| **PRINCE2 / PMI** | Large multi-vendor organizational transformation programs | Project Board, Stage Gates, Business Case justification, Risk Register | Rigorous executive governance |
| **Hybrid** | Enterprise digital transformation (Agile execution inside Stage-Gate governance) | Stage-gated architecture and funding; sprint-based software development | Combines executive predictability with developer agility |

## Project Method Selection Guide

Use the following heuristic when kicking off an initiative:

```text
Requirements Uncertainty & Technological Risk:
- HIGH Uncertainty + Rapid User Feedback Needed ──► SCRUM
- Continuous Maintenance / Support Stream     ──► KANBAN
- Architecture Risk Dominates Outcome         ──► RUP (Elaboration Phase)
- High Algorithmic / Mission-Critical Quality ──► EXTREME PROGRAMMING (XP)
- Fixed Scope + Third-Party Regulatory Date   ──► HYBRID / PREDICTIVE STAGE-GATE
```

## Associated Documents
- Detailed methodology blueprints are available in the [Project Management Platform Section](/en/platform/project-management/).
- [Project Method Selection Guide](/en/platform/project-management/methodology-selection/overview.md) — Comprehensive selection matrix.

## AI in this Stage

### AI Assistance
- **Project Charter Scaffolding**: Generate draft project charters, milestone schedules, and Work Breakdown Structures (WBS).
- **Methodology Matching**: Compare project characteristics against methodology selection heuristics (Scrum vs Kanban vs RUP).
- **Risk Register Maintenance**: Identify recurring project risks based on historical delivery logs.

### Human Decision
- **Methodology Selection**: Committing to an iterative (Scrum), flow-based (Kanban), or predictive (RUP/Waterfall) approach per initiative.
- **Team Resourcing & Velocity**: Allocating engineering talent and setting sprint cadences.

### Human Approval
- **Required Sign-Off**: PMO Director & Engineering Delivery Lead.

### Risks
- **Methodology Dogmatism**: Forcing rigid Scrum on projects requiring Kanban support flows, or ignoring regulatory gates in Agile delivery.
- **Unrealistic Estimation**: Accepting optimistic AI-generated schedules without team sizing and capability validation.

### Required Evidence
- Signed Project Charter and Delivery Strategy.
- Documented Methodology Selection Rationale.
- Baselined Release Schedule with Milestone Gates.
