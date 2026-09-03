---
title: "Roadmap Stage 14: Development Standards & Engineering Guidelines"
lang: en
translation: /fa/roadmap/14-development-standards/
---

# Roadmap Stage 14: Development Standards & Engineering Guidelines

## Purpose & Scope
Establish engineering consistency, code hygiene, branch management, and testing rigor across all software projects at Arian Khodro.

## Core Engineering Standards

### 1. Git Branching & Commit Discipline
- **Branching Model**: **Trunk-Based Development** for fast-moving services (short-lived feature branches merged daily via PR), or **Git Flow** for scheduled enterprise releases.
- **Commit Convention**: Strict adherence to **Conventional Commits**:
  - `feat(auth): add OAuth2 token revocation endpoint`
  - `fix(workshop): resolve race condition in repair order state`
  - `refactor(pricing): decouple commission calculator from database`

### 2. Code Review & Pull Request Standards
- Every PR must have:
  1. Linked Jira issue or traceable business requirement.
  2. Description of changes and risk assessment.
  3. New automated unit/integration tests verifying the change.
  4. Passing CI pipeline (clean build, passing tests, zero linter errors).
  5. Mandatory sign-off from at least one Tech Lead or Senior Engineer.

### 3. Automated Testing Pyramid
```text
        ▲
       / \        E2E Tests (10% - Critical User Flows)
      /   \
     /─────\      Integration Tests (30% - API & Database Contracts)
    /       \
   /─────────\    Unit Tests (60% - Pure Domain Business Logic)
```

## Associated Documents
- [Technology Principles](/en/knowledge/standards/technology-principles.md) — Fundamental engineering rules and architectural disciplines.
- [Clean Code & Programming Standards](/en/knowledge/programming/overview.md) — SOLID, OOP, and code readability practices.

## AI in this Stage

### AI Assistance
- **Automated Code Review**: Check incoming pull requests against naming conventions, clean code principles, and formatting guidelines.
- **Documentation Enforcement**: Ensure public interfaces, classes, and REST endpoints have up-to-date documentation comments.
- **Dependency Health Checks**: Monitor npm/pip/nuget dependencies for security advisories and outdated versions.

### Human Decision
- **Standard Evolution**: Establishing and updating team coding conventions, Git branching models, and architectural linters.
- **Architectural Deviation Exceptions**: Approving justified exceptions to standard patterns when business realities demand.

### Human Approval
- **Required Sign-Off**: Engineering Guild Lead & Principal Engineers.

### Risks
- **Over-zealous Linting**: Imposing rigid syntactic rules that impede engineering throughput without improving software reliability.
- **Ignoring Architecture**: Focusing code reviews on formatting while overlooking fundamental architectural flaws.

### Required Evidence
- Automated CI/CD Linting and Static Analysis Pipeline Reports.
- Approved Git Branching & Contribution Guidelines.
- Published Engineering Standards and Coding Conventions Catalog.
