---
title: "Engineering Philosophy & Open Standards"
lang: en
translation: /fa/initial-review/03-digital-and-software/software-strategy
---

# Engineering Philosophy & Open Standards

## Executive Summary
Arian Khodro's software strategy ends decades of vendor lock-in, black-box software dependencies, and fragile unversioned scripts. We establish an internal software engineering capability anchored in modern open-source stacks, strict engineering standards, automated testing, and transparent codebase ownership.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        ENGINEERING PRINCIPLES & STACK CHOICES                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  • CORE RUNTIME       ► Node.js / TypeScript (LTS) & Go for high-throughput pipelines  │
│  • WEB FRONTEND       ► Modern React, Tailwind CSS, TypeScript, Vite                   │
│  • DATA STORAGE       ► PostgreSQL 16+ (Relational), Redis (Caching), MinIO (Files)    │
│  • CI / CD PIPELINE   ► GitLab CI, Automated Linting, Unit/Integration Test Enforcement│
│  • CONTAINERIZATION   ► Docker, Docker Compose (Dev), Kubernetes / K3s (Production)    │
│  • CODE OWNERSHIP     ► 100% owned by Arian Khodro; zero proprietary vendor runtimes   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. The Engineering Manifesto
1. **Source Code is an Enterprise Asset:** Every line of code written for Arian Khodro resides in company-controlled Git repositories. Code must be self-documenting and accompanied by automated tests.
2. **Deterministic Over Magical:** We favor explicit, typed domain code (TypeScript/Go) over opaque magic frameworks. A new engineer must be able to spin up a local development environment in under 15 minutes.
3. **No Direct Production Database Writes:** Developers, administrators, and external scripts are strictly barred from updating production databases directly. All changes occur via versioned migration scripts applied through CI/CD pipelines.
4. **Automated Quality Gates:** Pull requests cannot be merged unless:
   - All unit and integration tests pass automatically.
   - Code adheres to strict ESLint and TypeScript compilation rules.
   - At least two senior engineers have formally reviewed and approved the pull request.

---

## 2. Standardized Enterprise Technology Stack

| Layer | Selected Technology | Rationale & Enterprise Benefit |
| :--- | :--- | :--- |
| **Backend Services** | Node.js (TypeScript) & Go | Fast developer velocity for business logic; Go used for high-concurrency ingestion and OCR workers. |
| **Frontend Applications**| React 18+, TypeScript, Vite | Industry-standard developer ecosystem, rich component libraries, and rapid rendering performance. |
| **Relational Database** | PostgreSQL 16+ | Enterprise-grade ACID compliance, powerful JSONB indexing for flexible document metadata, zero licensing costs. |
| **In-Memory Cache** | Redis 7+ | Session management, API rate-limiting token buckets, and distributed locking for warehouse allocations. |
| **Object Storage** | S3-Compatible (MinIO) | Standardized API for storing vehicle inspection photos, customs invoices, and warranty PDFs. |
| **API Protocol** | RESTful JSON & Webhooks | Universally understood, easy to debug, human-readable, and well-supported across all consumer platforms. |

---

## 3. Engineering Documentation & ADR Governance
Every non-trivial technical decision (selecting a database driver, altering an API contract, introducing a caching layer) must be codified in an **Architecture Decision Record (ADR)**. ADRs are reviewed weekly by the Architecture Review Board (ARB) and committed to the Git repository.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Standardize backend development on TypeScript and Go; mandate PostgreSQL as the sole primary database for the modern platform.
- **Open Questions:** Finalizing local server specifications for the staging and production PostgreSQL high-availability cluster.
- **Next Actions:** Review the [Modular Monolith Architecture](./modular-monolith) to inspect internal code partitioning.
