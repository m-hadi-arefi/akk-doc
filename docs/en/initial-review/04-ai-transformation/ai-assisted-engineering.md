---
title: "AI-Assisted Software Engineering"
lang: en
translation: /fa/initial-review/04-ai-transformation/ai-assisted-engineering
---

# AI-Assisted Software Engineering

## Executive Summary
Software engineering is a knowledge-intensive craft. At Arian Khodro, we empower our internal development squad with AI-assisted engineering tools to accelerate delivery, automate boilerplate generation, draft unit test suites, and assist architectural reviews. However, developer AI tools are tightly governed: human engineers maintain 100% intellectual accountability, and sensitive corporate credentials or proprietary business rules are never leaked to external public models.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        AI IN THE ENGINEERING LIFECYCLE                                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  • ALLOWED USE CASES   ► Boilerplate drafting, unit test mocks, regex, docs, refactor │
│  • FORBIDDEN ACTIONS   ► Pasting private keys, committing unreviewed AI code, IP leaks│
│  • HUMAN MANDATE       ► 100% human code review; the human author signs the commit    │
│  • AUTOMATED SCANNING  ► Automated secret scanning, SAST, and license compliance in CI│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Approved AI Engineering Use Cases
Internal developers are encouraged to utilize AI developer assistants for:
- **Unit & Integration Test Generation:** Synthesizing repetitive test fixtures, boundary mocks, and edge-case assertions.
- **Interface & Schema Translation:** Generating TypeScript type interfaces from PostgreSQL DDL schemas or OpenAPI specifications.
- **Documentation & Drafting:** Drafting initial markdown documentation, API usage summaries, and code comments.
- **Refactoring & Code Review Preparation:** Identifying potential memory leaks, unhandled promise rejections, or cyclomatic complexity hot spots.

---

## 2. Developer Guardrails & Data Leakage Prevention
To ensure enterprise intellectual property remains secure:
1. **Zero Secret Exposure:** API keys, database connection strings, passwords, and customer data must **never** be pasted into AI chat interfaces or completion prompts.
2. **Local Pre-Commit Secret Scanning:** Developer machines run automated pre-commit hooks (e.g., `gitleaks`) that detect and block any credential patterns before commits leave the local environment.
3. **No Unreviewed Commits:** Committing raw, unedited AI-generated code directly to branches is an engineering policy violation. Every line of code must be understood, verified, and defended by the human engineer during code reviews.

---

## 3. Impact on Engineering Velocity
When used responsibly, AI assistance increases squad velocity:
- Eliminates 40% of time spent writing repetitive CRUD boilerplate and mock data.
- Doubles integration test suite coverage by automatically surfacing edge-case boundary conditions.
- Accelerates onboarding of new engineers by providing instant natural-language explanations of complex modular domain logic.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Authorize governed AI developer tools for internal squad members; mandate automated pre-commit secret scanning.
- **Open Questions:** Standardizing IDE extension toolkits across the engineering team.
- **Next Actions:** Transition to [05-execution/sprint-rhythm](../05-execution/sprint-rhythm) to review execution mechanics.
