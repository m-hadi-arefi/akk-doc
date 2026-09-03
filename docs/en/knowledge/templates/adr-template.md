---
title: "Architecture Decision Records (ADR) Template"
lang: en
translation: /fa/knowledge/templates/adr-template
---

# Architecture Decision Records (ADR) Template

Every significant architectural decision must be recorded as an ADR. This template ensures consistency and traceability.

## ADR Format

```markdown
# ADR-[NNN]: [Descriptive Title]

**Status:** Proposed | Accepted | Deprecated | Superseded | Observed
**Date:** YYYY-MM-DD
**Deciders:** [Names or roles]

## Context

What is the problem we are solving? What is the broader context?
What business, technical, or organizational factors led to this decision?

## Problem

What specific problem does this decision address?
What would happen if we did nothing?

## Options Considered

### Option A: [Name]
- **Description:** [What this option entails]
- **Pros:** [Advantages]
- **Cons:** [Disadvantages]
- **Evidence:** [Data, experience, or reasoning supporting this option]

### Option B: [Name]
- **Description:** [What this option entails]
- **Pros:** [Advantages]
- **Cons:** [Disadvantages]
- **Evidence:** [Data, experience, or reasoning supporting this option]

### Option C: [Name]
- **Description:** [What this option entails]
- **Pros:** [Advantages]
- **Cons:** [Disadvantages]

## Decision

What are we proposing? What was actually decided?

## Rationale

Why was this option chosen over the alternatives?
What evidence supported this decision?
What trade-offs were accepted?

## Consequences

### What This Makes Easier
- [List of positive outcomes]

### What This Makes Harder
- [List of negative outcomes or new constraints]

### What We Are Committing To
- [List of commitments or constraints this decision introduces]

## Risks

- [List of risks introduced or mitigated by this decision]
- [How each risk will be monitored or addressed]

## Validation

How can we validate that this decision was correct?
What metrics or evidence would confirm or refute this decision?

## Related

- [Links to related ADRs, documents, or systems]
- [Link to the relevant section of the architecture documentation]

## Open Questions

- [Questions that remain after this decision]
```

## Example ADRs to Be Created

| ADR | Topic | Status |
|---|---|---|
| ADR-001 | Core Platform scope and boundaries | `[[PENDING]]` |
| ADR-002 | Gradual migration vs. Big Bang | `[[PENDING]]` |
| ADR-003 | Legacy adapter pattern | `[[PENDING]]` |
| ADR-004 | Master data management strategy | `[[PENDING]]` |
| ADR-005 | Identity and authentication approach | `[[PENDING]]` |
| ADR-006 | API management strategy | `[[PENDING]]` |
| ADR-007 | Event platform vs. direct calls | `[[PENDING]]` |
| ADR-008 | Technology stack for Core Platform | `[[PENDING]]` |
| ADR-009 | Integration protocol standards | `[[PENDING]]` |
| ADR-010 | Deployment and infrastructure model | `[[PENDING]]` |

## ADR Numbering Convention

- ADRs are numbered sequentially: ADR-001, ADR-002, etc.
- Each ADR gets its own Markdown file named `ADR-NNN-title.md`.
- ADRs are stored in `docs/17-decisions/`.
- When an ADR is superseded, create a new ADR that references the old one and explains the change.

## ADR Review Process

1. ADR is proposed by a team member.
2. ADR is reviewed by the architecture team.
3. ADR is discussed with stakeholders.
4. ADR status changes: Proposed → Accepted → (later) Superseded or Deprecated.
5. Every ADR must have at least one reviewer who challenges the decision.
