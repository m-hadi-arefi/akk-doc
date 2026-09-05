---
title: "ADR-006: In-House Engineering Squad vs. Vendor Outsourcing"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-006-inhouse-engineering
---

# ADR-006: In-House Engineering Squad vs. Vendor Outsourcing

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
Arian Khodro requires modern digital platform capabilities across customs ingestion, inventory scanning, dealership portals, and reporting dashboards. Executive leadership must choose between outsourcing the entire project to an external turnkey commercial software vendor or establishing an autonomous internal software engineering capability.

## Decision Drivers
1. **Intellectual Property Ownership:** 100% control and ownership of source code, schemas, and proprietary business logic.
2. **Delivery Agility & Flexibility:** Ability to pivot sprint backlogs within days in response to Iranian regulatory and customs tariff revisions.
3. **Total Cost of Ownership (TCO):** Avoiding crippling multi-year recurring vendor maintenance fees and change-request surcharges.
4. **Historical Lessons:** Arian Khodro previously suffered multi-billion-Rial failures with commercial off-the-shelf software vendors who abandoned the project post-deployment.

## Considered Options
1. **Option 1: Turnkey Commercial Vendor Outsourcing** (Procuring off-the-shelf software packages with vendor customizations).
2. **Option 2: Low-Code / No-Code Commercial Platform** (Attempting to build enterprise workflows on closed proprietary low-code suites).
3. **Option 3: Autonomous In-House Engineering Squad** (Recruiting a dedicated internal team of 5-8 top-tier software engineers and product specialists).

## Decision Outcome & Rationale
**Chosen Option: Option 3: Autonomous In-House Engineering Squad.**
- **Rationale:** Automotive digital transformation is a core strategic differentiator, not a generic commodity. Commercial vendors provide rigid software that requires millions in expensive change-order fees whenever customs regulations shift. An in-house squad guarantees 100% IP ownership, absolute responsiveness to business changes, and builds enduring institutional engineering capability inside Arian Khodro.

## Consequences
- **Positive:** Total codebase ownership; sprint-level agility; zero vendor lock-in; institutional retention of architecture and business domain expertise.
- **Negative:** Arian Khodro must establish recruitment, competitive compensation banding, and engineering management practices.
- **Mitigation:** The Transformation Leader directly drives squad hiring and implements modern engineering practices (CI/CD, code reviews, automated testing) to ensure team retention and delivery excellence.
