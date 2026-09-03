# Migration Strategy

[[DRAFT]]

## Purpose

This section defines how Arian Khodro will transition from its current state to its target architecture. The migration is gradual — old and new systems coexist, and capabilities move one at a time.

## Core Principle

```text
The migration is NOT:
Old System → DELETE → New System

The migration IS:
Existing Systems ──┬── Legacy Integration (continue operating)
                  │
                  └── New Applications (built on Core Platform)
                          │
                          v
                   Core Platform
```

## Migration Principles

1. **Never disrupt critical business operations.**
2. **Old and new systems coexist during migration.**
3. **Capabilities are migrated individually, not in bulk.**
4. **Each migration step is reversible or at least containable.**
5. **Every migration has a clear owner, timeline, and rollback plan.**
6. **Data is migrated before functionality, or simultaneously.**

## What the Migration Must Answer

For every capability and system, the migration strategy defines:

| Question | Meaning |
|---|---|
| **What stays?** | What continues to operate as-is? |
| **What changes?** | What is modified or wrapped? |
| **What is replaced?** | What is swapped for a modern implementation? |
| **What is wrapped?** | What gets an adapter/ACL? |
| **What is migrated?** | What capability moves to the new architecture? |
| **What is retired?** | What is decommissioned after migration? |
| **What is integrated?** | What new connection is established? |
| **In what order?** | What is the sequence of migrations? |
| **Why?** | What is the business justification for this order? |

## Migration Sequence (Initial Hypothesis)

```text
Phase 1 (Months 1-4): Foundation
  - Build Core Platform (identity, auth, API mgmt, audit)
  - Establish architecture standards
  - Begin Tadark discovery and adapter design
  - Build initial integrations

Phase 2 (Months 5-8): Validation & Expansion
  - More integrations
  - Application integration
  - Testing and operational validation
  - Second architecture review

Phase 3 (Months 9-12): Migration & Production
  - Begin capability migration
  - Legacy coexistence operations
  - Operational monitoring
  - Further modernization
```

> **This timeline is a hypothesis and must be redesigned after discovery.**

## Migration Patterns

### Pattern 1: Strangler Fig

Gradually replace a legacy system's functionality with new implementations, routing traffic to the new system as it becomes available.

```text
Old System ──→ Router ──→ Old Implementation
                    └──→ New Implementation (growing)
```

### Pattern 2: Parallel Run

Run old and new systems simultaneously, comparing results until confidence is established.

```text
Input ──→ Old System ──┐
        └──→ New System ──→ Comparison
```

### Pattern 3: Feature Toggle

Enable new functionality behind a toggle, allowing gradual rollout and instant rollback.

```text
Feature Flag ──→ [OFF] → Old Path
              ──→ [ON]  → New Path
```

### Pattern 4: Anti-Corruption Layer (Wrap)

Wrap the legacy system with an adapter. Modern applications use the adapter instead of the legacy system directly.

## Tadark Migration Strategy (Initial)

Tadark's migration path will be defined based on discovery findings. Possible paths include:

1. **Wrap:** Add an adapter, keep Tadark running, migrate capabilities away gradually.
2. **Replace:** Build a modern accounting system, migrate data and users, retire Tadark.
3. **Extend:** Keep Tadark running but extend it with modern interfaces.

> **The specific path depends on Tadark's actual condition, business requirements, and available budget.**

## Data Migration

### Principles

- Data is migrated before functionality where possible.
- Data migrations are tested and validated before going live.
- Data quality issues are fixed during migration.
- Rollback plans exist for every data migration.

### Questions

- [ ] What data needs to be migrated?
- [ ] What is the volume of data?
- [ ] What are the data quality issues?
- [ ] What is the migration window?
- [ ] How is data validated after migration?
- [ ] What is the rollback plan?

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Business disruption during migration | Coexistence, gradual rollout, feature toggles |
| Data loss during migration | Backup, validation, parallel run |
| User resistance | Training, change management, gradual adoption |
| Integration failures during migration | Monitoring, alerting, rollback plans |
| Scope creep | Strict migration sequencing, prioritization |

---

*This document is a `[[DRAFT]]`. The migration strategy must be refined after current-state discovery and ADR-002 (Migration Strategy).*
