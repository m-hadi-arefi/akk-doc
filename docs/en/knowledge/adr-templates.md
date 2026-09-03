---
title: "Architecture Decision Record (ADR) Templates"
lang: en
translation: /fa/knowledge/adr-templates
---

# Architecture Decision Record (ADR) Templates

Architecture Decision Records (ADRs) capture significant architectural choices, context, and consequences over time to prevent recurring debates and preserve institutional memory.

---

## 1. Canonical ADR Structure

```markdown
# ADR-[Number]: [Clear and Concise Decision Title]

- **Status**: [Proposed | Accepted | Deprecated | Superseded]
- **Date**: [YYYY-MM-DD]
- **Deciders**: [Lead System Architect, CEO, Engineering Lead]
- **Consulted / Informed**: [Key Domain Stakeholders]

## 1. Context & Problem Statement
[Describe the business or technical context, driving forces, and exact problem requiring a decision.]

## 2. Decision Drivers
- Driver 1: [e.g., maintainability, zero downtime, cost limits]
- Driver 2: [e.g., compatibility with Delphi Tadark database]

## 3. Considered Options
1. Option A: [Description, pros, and cons]
2. Option B: [Description, pros, and cons]

## 4. Decision Outcome & Rationale
[Which option was selected, and why is it superior in this specific context?]

## 5. Consequences
- Positive Impacts: [Performance gains, reduced maintenance costs]
- Negative Consequences / Accepted Technical Debt: [Temporary dual-maintenance overhead]

## 6. Validation & Compliance
[How will compliance and operational success be verified in staging and production?]
```
