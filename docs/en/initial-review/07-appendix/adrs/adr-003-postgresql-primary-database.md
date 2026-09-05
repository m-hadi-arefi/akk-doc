---
title: "ADR-003: PostgreSQL 16+ as Core Platform Database"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-003-postgresql-primary-database
---

# ADR-003: PostgreSQL 16+ as Core Platform Database

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
The modern Core Platform requires a robust, scalable, and fully ACID-compliant primary database. The system must support high-integrity vehicle financial ledgers, transactional VIN reservation locks, complex analytical queries, and flexible semi-structured JSON payloads for foreign customs declarations.

## Decision Drivers
1. **Transactional Integrity:** Absolute ACID guarantees for vehicle allocations and accounting sub-ledgers.
2. **Semi-Structured Data Handling:** Native, highly indexed JSONB support for varying foreign customs invoice layouts.
3. **Licensing & TCO:** Zero recurring enterprise software licensing fees.
4. **Ecosystem Maturity:** Deep compatibility with Node.js, Go, standard ORMs, and backup automation tooling.

## Considered Options
1. **Option 1: Microsoft SQL Server** (Familiar to legacy teams, but high licensing cost per core).
2. **Option 2: MongoDB / Document Database** (Flexible schemas, but lacks strict relational foreign keys and ACID multi-table guarantees).
3. **Option 3: PostgreSQL 16+** (Open-source relational database with enterprise ACID, JSONB indexing, and active global community).

## Decision Outcome & Rationale
**Chosen Option: Option 3: PostgreSQL 16+.**
- **Rationale:** PostgreSQL represents the gold standard of relational data engineering. It combines strict relational schema discipline with first-class JSONB querying for customs documents. It eliminates multi-thousand-dollar annual licensing fees and runs with exceptional reliability on standard Linux instances.

## Consequences
- **Positive:** Robust relational integrity; excellent JSONB document query performance; zero software licensing costs; rich open-source replication and backup ecosystem.
- **Negative:** Internal IT staff historically focused on Windows/SQL Server must be trained on PostgreSQL Linux administration.
- **Mitigation:** The Lead Software Architect establishes automated backup scripts and infrastructure-as-code runbooks during Horizon 1.
