---
title: "14 — New Sales Platform Architecture Assessment"
lang: en
translation: /fa/current-state/14-new-sales-platform-architecture
---

# 14 — New Sales Platform Architecture Assessment

## Modernization Strategy & Architectural Direction
A new software engineering initiative is underway at Arian Khodro aimed at replacing the aging Jahan Gostar portal with a modern, high-performance sales platform. The discovery session analyzed the technology choices, hosting models, and architectural governance surrounding this new build.

---

## Technical Architecture & Stack Selection
1. **Frontend Architecture:** Modern, responsive component-based web framework (Next.js / React) providing optimized mobile experiences for dealership procurement managers.
2. **Backend Evaluation History:**
   - **Hasura:** Evaluated for instant GraphQL generation; discarded due to operational complexity and metadata lock-in.
   - **Appwrite:** Evaluated for open-source BaaS capabilities; discarded due to ecosystem maturity constraints.
   - **Supabase (Selected):** Selected for its Postgres-centric architecture, robust built-in authentication, row-level security (RLS), instant RESTful PostgREST APIs, and real-time subscription capabilities.
3. **Hosting Infrastructure:** A dedicated on-premise physical host running **Ubuntu Linux**, hosting self-hosted Supabase containers via Docker Compose.
4. **Target Development Timeline:** Estimated at **3 to 4 months** for initial MVP rollout.

---

## Business Complexity & Contractual Realities
Developing the platform is not merely a technical catalog-rendering exercise; it must model intricate enterprise automotive commercial rules:
- **Financial Multi-Stage Approvals:** Tiered approval workflows for commercial credit releases and bank guarantee verifications.
- **Contract Appendices & Terms:** Dynamic generation of legal contract appendices (شروط ضمن عقد و ضمائم قرارداد) tied to specific imported vehicle quotas.
- **Complex Input Parameters:** Vehicle identification numbers (VIN), engine numbers, customs declaration IDs, and customs release clearance certificates.

---

## Architectural Governance & Code Custody Audit

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CODE OWNERSHIP & ETHICAL GOVERNANCE RULE                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Proprietary enterprise source code must ALWAYS be acquired through formal contractual │
│  ownership, licensing agreements, and legal handover channels.                         │
│  ► Decompilation, unapproved client-side script extraction, or reverse-engineering     │
│    of vendor IP is STRICTLY PROHIBITED as an enterprise architecture strategy.         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Detailed Architectural Assessment Dimensions:
1. **Source Code Ownership:** The new team must maintain all code in an enterprise-managed GitLab/GitHub organization owned by Arian Khodro, with branch protection and mandatory code reviews.
2. **Database Schema Sovereignty:** The underlying PostgreSQL database under Supabase must be fully documented with versioned migration scripts (Flyway / Liquibase / Prisma / Drizzle) rather than ad-hoc dashboard mutations.
3. **Disaster Recovery & Backup:** The self-hosted Supabase instance requires automated WAL (Write-Ahead Logging) archiving and daily pg_dump backups replicated off-site.
4. **Security & Authentication:** Row-Level Security (RLS) policies must be strictly audited to prevent wholesale distributors from querying competitor volume discounts or proprietary import cost margins.
