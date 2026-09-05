---
title: "Digital & Software Architecture"
lang: en
translation: /fa/initial-review/03-digital-and-software/
---

# Digital & Software Architecture

## Executive Summary
This section defines the technical and engineering foundation of Arian Khodro's Core Platform. We reject both the fragility of unmaintainable third-party software packages and the operational overhead of premature microservices. Instead, we establish a robust, in-house **Modular Monolith** architecture, safe legacy coexistence patterns with Tadark via an **Anti-Corruption Layer (ACL)**, unified Master Data pipelines, and an orderly migration plan to retire Shadow IT spreadsheets.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CORE DIGITAL PLATFORM ARCHITECTURAL FOUNDATION                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  • ARCHITECTURE STYLE  ► Pragmatic Modular Monolith (Single artifact, strict modules)  │
│  • TECHNOLOGY STACK    ► TypeScript/Node.js, Go, PostgreSQL, Redis, Docker, GitLab CI  │
│  • LEGACY INTEGRATION  ► Anti-Corruption Layer (Read-replica mirror, event-driven sync)│
│  • DATA MANAGEMENT     ► Authoritative VIN Golden Record, Canonical Parts Catalog      │
│  • SPREADSHEET MIGRATION► Phased Shadow IT retirement playbook with feature parity gates│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Documents in This Section

| Document | Technical Scope | Key Engineering Deliverable |
| :--- | :--- | :--- |
| **[Software Strategy](./software-strategy)** | Engineering philosophy, in-house capabilities, and standards. | Engineering Manifesto, code quality gates, and stack choice. |
| **[Modular Monolith](./modular-monolith)** | Monolith structure, module boundaries, and interface contracts. | Module architecture diagram, database boundary rules. |
| **[Coexistence & ACL](./coexistence-and-acl)** | Safe integration patterns with legacy Tadark Delphi. | Read-only adapter specs, CDC pipeline, data safety gates. |
| **[Data Architecture](./data-architecture)** | PostgreSQL schemas, VIN Golden Record, and pipelines. | Master Data schemas, migration DDLs, encryption policies. |
| **[API & Integration](./api-and-integration)** | REST standards, API Gateway, rate limiting, and webhooks. | OpenAPI 3.0 specification guidelines, gateway topology. |
| **[Shadow IT Migration](./shadow-it-migration)** | Orderly retirement playbook for 80+ active spreadsheets. | Spreadsheet audit matrix, deprecation timeline, data ETL. |

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Mandate the Modular Monolith pattern as the standard for all core software development; require 100% test coverage for financial data adapters.
- **Open Questions:** Selection of object storage (MinIO on-premise vs. S3-compatible cloud) for vehicle damage photos and customs PDF archives.
- **Next Actions:** Read [Software Strategy](./software-strategy) to review engineering standards.
