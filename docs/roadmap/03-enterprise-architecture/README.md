# Roadmap Stage 03: Enterprise Architecture (TOGAF & ArchiMate)

## Purpose & Scope
Structure Arian Khodro's enterprise architecture using **TOGAF 10** (The Open Group Architecture Framework) and **ArchiMate 3.2** modeling notation, ensuring continuous alignment between business strategy, applications, data, and technology infrastructure.

## TOGAF B-D-A-T Architecture Stack

```text
Business Architecture (Capabilities, Organization, Value Streams)
                │
                ▼
Data Architecture (Master Data, Information Entities, Lineage)
                │
                ▼
Application Architecture (Services, Subsystems, Boundaries)
                │
                ▼
Technology Architecture (Kubernetes, Databases, Networks)
```

## TOGAF Architecture Development Method (ADM)
- **Phase A (Architecture Vision)**: Defining scope, business drivers, constraints, and stakeholder buy-in.
- **Phase B (Business Architecture)**: Mapping business capabilities to software services (see [Business Architecture](./business-architecture.md)).
- **Phase C (Information Systems Architecture)**: Formulating application boundaries and data models.
- **Phase D (Technology Architecture)**: Defining hosting platforms, Kubernetes clusters, and networks (see [Technology Infrastructure](./technology-infrastructure.md)).
- **Phase E & F (Opportunities, Solutions & Migration)**: Planning target transitions (see [Target Architecture](./target-architecture.md)).
- **Phase G & H (Implementation Governance & Architecture Change Management)**: Architecture Review Board (ARB) oversight.

## Associated Documents
- [Business Architecture](./business-architecture.md) — Capability mapping and service boundary definitions.
- [Target Architecture](./target-architecture.md) — Strategic end-state enterprise architecture.
- [Technology Infrastructure](./technology-infrastructure.md) — Hosting, cloud, platforms, and technical standards.
