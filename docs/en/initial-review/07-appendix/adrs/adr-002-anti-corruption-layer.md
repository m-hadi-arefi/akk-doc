---
title: "ADR-002: Anti-Corruption Layer for Legacy Tadark Coexistence"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-002-anti-corruption-layer
---

# ADR-002: Anti-Corruption Layer for Legacy Tadark Coexistence

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
Arian Khodro relies on the legacy Tadark Delphi desktop application for core accounting and statutory financial reporting. Replacing Tadark immediately is financially and operationally impossible. However, allowing modern Core Platform services to query or mutate production Tadark SQL tables directly creates severe database locking contention, client crashes, and referential data corruption.

## Decision Drivers
1. **Operational Safety:** Zero database table locking on production Tadark accounting tables during business hours.
2. **Domain Cleanliness:** Preventing legacy 1990s table naming and schema quirks from polluting modern TypeScript domain code.
3. **Data Consistency:** Ensuring inventory adjustments and voucher creations in the new platform reflect accurately in Tadark's audited general ledger.

## Considered Options
1. **Option 1: Direct Database Integration** (Modern platform issues direct SQL SELECT/INSERT/UPDATE commands against production Tadark tables).
2. **Option 2: Big-Bang Immediate Replacement** (Decommission Tadark on Day 1 and build all accounting modules immediately).
3. **Option 3: Anti-Corruption Layer with Read-Only Replica & Staging Outbox** (Isolate Tadark behind a mediating adapter and replicated mirror).

## Decision Outcome & Rationale
**Chosen Option: Option 3: Anti-Corruption Layer (ACL).**
- **Rationale:** The ACL pattern (Eric Evans, Domain-Driven Design) provides complete isolation. The modern platform reads exclusively from a read-only replicated database mirror, completely eliminating table-locking risk. Write operations (financial vouchers) pass through validated staging tables and certified batch import utilities, preserving Tadark's internal business rules.

## Consequences
- **Positive:** 100% protection against production accounting lockups; clean modern data models in the Core Platform; verified audit trail of all synchronized vouchers.
- **Negative:** Minor replication lag (target < 5 minutes) between production Tadark entries and the read-replica mirror.
- **Mitigation:** Real-time monitoring of replication sync latency with automated alert thresholds.
