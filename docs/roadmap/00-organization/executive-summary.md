# Executive Summary

[[DRAFT]]

## Why This Transformation?

Arian Khodro operates multiple business and software systems, including a legacy accounting system called **Tadark** (Delphi-based, 32-bit). The current software ecosystem was built incrementally over time without a unifying architectural strategy.

The fundamental problem is not:

> "Build a new ERP."

The fundamental problem is:

> **How can Arian Khodro gradually modernize its software ecosystem and enterprise architecture without disrupting existing business operations?**

## The Proposed Direction

**Gradual modernization over Big Bang replacement.**

The organization will continue operating existing systems while building a **Core Platform** that provides shared enterprise capabilities. New business applications will be built on top of this platform, connected to legacy systems through an **Integration Layer** that includes **Anti-Corruption Layers** to protect the new architecture from legacy complexity.

```text
Business Applications
        |
        v
Core Platform
        |
        v
Integration Layer
        |
        v
Legacy / Existing Systems
```

## What the Core Platform Is — and Is Not

The Core Platform provides shared enterprise capabilities:

- Identity & Authentication
- Authorization & Permission Management
- API Management
- Event Platform
- Master Data
- Audit Logging
- Data Platform

### Critical Distinction

```text
Core Platform ≠ ERP
```

The Core Platform is **not** a container for all business logic. It does not replace business applications. Business applications (Sales, Warehouse, CRM, Delivery) own their business-specific behavior. The Core Platform provides the capabilities those applications need but do not want to build individually.

## Key Architectural Principles

1. **Gradual migration** — Old and new systems coexist; capabilities move one at a time.
2. **Anti-Corruption** — Legacy systems are wrapped to protect the modern architecture.
3. **Simplicity** — The simplest architecture that solves the actual problem.
4. **No unnecessary technology** — Every component must earn its place.
5. **Documentation-first** — Architecture is reviewed and agreed upon before implementation begins.

## What This Document Does Not Answer Yet

This is a **[[DRAFT]]** document. The following require answers from Arian Khodro stakeholders:

- What is the full inventory of current systems?
- What are the actual business capabilities and processes?
- What data does Tadark own and what depends on it?
- What is the budget and team composition?
- What are the regulatory and compliance requirements?
- What is the business case and expected ROI?

See `docs/19-discovery-questions/` for the complete list of questions that must be answered before the target architecture can be finalized.

## Success Criteria (Initial)

The transformation will be considered successful when:

- Business operations continue uninterrupted throughout migration.
- A Core Platform with shared capabilities is operational.
- Legacy systems are progressively decoupled through adapters.
- The organization has the knowledge and tooling to continue evolving the architecture independently.
- Business stakeholders can articulate the architecture and its benefits.

---

*This document is part of the Arian Khodro A&D project. It is a living document and will be updated as evidence is gathered and decisions are made.*
