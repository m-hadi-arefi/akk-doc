# Project Methodology Selection Guide

## Decision Matrix

| Project Characteristics | Recommended Methodology |
|---|---|
| Product features with evolving user feedback | **Scrum** |
| Continuous operational support, bug triage, SRE | **Kanban** |
| High architectural risk, core platform foundation | **RUP (Elaboration-focused)** |
| High mathematical/financial risk, strict zero-defect code | **Extreme Programming (XP)** |
| Fixed third-party vendor contract with static scope | **Waterfall / Predictive Stage-Gate** |
| Multi-department corporate program with heavy steering | **Hybrid (PRINCE2 / PMI Governance + Agile Sprints)** |

## Methodology Selection Heuristic
```text
Can requirements change during development?
 ├─► YES ──► Is work batch-based (Sprints) or continuous flow?
 │            ├─► Sprints ──────► SCRUM
 │            └─► Continuous ───► KANBAN
 │
 └─► NO  ──► Is technical/architectural risk high?
              ├─► YES ──────────► RUP (Focus on Elaboration phase)
              └─► NO  ──────────► HYBRID STAGE-GATE
```
