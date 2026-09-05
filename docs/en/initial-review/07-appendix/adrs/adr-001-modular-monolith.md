---
title: "ADR-001: Modular Monolith vs. Microservices"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-001-modular-monolith
---

# ADR-001: Modular Monolith vs. Microservices

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
Arian Khodro is initiating the development of its modern Core Platform. Historically, operations relied on the legacy Tadark desktop application and 80+ isolated spreadsheets. When architecting the new system, enterprise engineering teams often face a choice: deploy dozens of independent microservices running in a container mesh, or build a unified monolith. Given our team size (initial squad of 5-8 engineers) and the tight transactional coupling between vehicle customs, inventory, and sales, how should we partition the software architecture?

## Decision Drivers
1. **Developer Velocity:** Rapid prototyping and delivery of working features in 2-week sprint cycles.
2. **Operational Simplicity:** Eliminating Kubernetes orchestration overhead, service mesh latency, and distributed tracing complexity.
3. **Data Integrity:** Supporting strict relational constraints between vehicle reservations, customs clearance dossiers, and sales contracts.
4. **Future Extensibility:** Ensuring individual sub-domains can be split into standalone services if specific scaling bottlenecks emerge later.

## Considered Options
1. **Option 1: Microservices Architecture** (Deploying separate Docker containers for Customs, Inventory, Dealerships, and Billing).
2. **Option 2: Unstructured Monolith** (Single codebase without domain boundaries; shared tables and open cross-module queries).
3. **Option 3: Modular Monolith** (Single deployable Node.js/Go process with strict internal domain encapsulation and schema isolation).

## Decision Outcome & Rationale
**Chosen Option: Option 3: Modular Monolith.**
- **Rationale:** Microservices introduce distributed transaction complexity (Saga patterns, eventual consistency hazards) that are fatal in automotive allocation. An unstructured monolith inevitably rots into "spaghetti code." The Modular Monolith provides the perfect balance: a single compile/deploy artifact, lightning-fast in-memory communications, transactional database consistency, and strictly enforced module interfaces.

## Consequences
- **Positive:** Deployment is simple (single container); local development setup takes minutes; transactional integrity is guaranteed by PostgreSQL; refactoring domain interfaces is checked at compile-time by TypeScript.
- **Negative:** Long-term discipline is required to prevent lazy developers from circumventing module interfaces.
- **Mitigation:** CI/CD pipelines enforce automated static analysis rules that fail builds if Module A directly queries Module B's database tables or internal classes.
