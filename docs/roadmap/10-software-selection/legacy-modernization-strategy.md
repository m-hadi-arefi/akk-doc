# Legacy Modernization

[[DRAFT]]

## Purpose

This section defines the strategy for handling legacy systems — starting with Tadark, the Delphi-based accounting system — within the gradual modernization approach.

## Core Principle

```text
Legacy systems are wrapped, not demolished.
```

The goal is to protect the modern architecture from legacy complexity while gradually migrating capabilities to modern implementations. Legacy systems are not deleted; they are progressively isolated and eventually retired when their capabilities have been fully migrated.

## Tadark — Legacy Accounting System

### Known Facts

- **Name:** Tadark
- **Technology:** Delphi, 32-bit
- **Purpose:** Accounting
- **Status:** Legacy, technically constrained

### Critical Questions

Before designing the Tadark adapter, the following must be answered:

#### About Tadark

- [ ] What specific accounting processes does Tadark support?
- [ ] What is the Tadark database structure?
- [ ] Does Tadark have any APIs? What kind?
- [ ] What is the Tadark data volume and growth rate?
- [ ] What are Tadark's known bugs, limitations, and performance issues?
- [ ] Is there Tadark documentation (data model, business logic, configuration)?
- [ ] Who maintains Tadark? Internal team or external vendor?
- [ ] Are there third-party extensions or customizations?

#### Business Dependencies

- [ ] Who uses Tadark? How many users?
- [ ] What business processes depend on Tadark?
- [ ] What data does Tadark own (single source of truth)?
- [ ] What data do other systems depend on from Tadark?
- [ ] What would happen if Tadark went down? For how long?
- [ ] Are there regulatory or audit requirements tied to Tadark?
- [ ] Are there manual workarounds if Tadark is unavailable?

#### Integration

- [ ] What systems currently connect to Tadark?
- [ ] How do they connect? (Database access, file exports, APIs)
- [ ] What data flows in each direction?
- [ ] How often does data need to be exchanged?
- [ ] Are integrations documented?
- [ ] What happens when Tadark integrations fail?

#### Migration Questions

- [ ] What parts of Tadark's functionality should remain in Tadark?
- [ ] What parts should move to a new system?
- [ ] What parts should be exposed through an adapter?
- [ ] What parts should eventually be retired?
- [ ] What is the target state for accounting: replace Tadark, wrap it, or extend it?
- [ ] Is converting Tadark to 64-bit sufficient, or is architectural replacement needed?
- [ ] What is the timeline for Tadark modernization?

## The Legacy Adapter / Anti-Corruption Layer

### Purpose

The Adapter / Anti-Corruption Layer (ACL) sits between the modern architecture and legacy systems. It:

1. **Translates** legacy data models and APIs into modern equivalents.
2. **Isolates** modern applications from legacy implementation details.
3. **Protects** the modern domain model from corruption by legacy concepts.

### Conceptual Model

```text
Legacy Model (Tadark)
     |
     v
Legacy Adapter / Anti-Corruption Layer
     |
     v
Modern Domain Model
     |
     v
Modern Application
```

### When to Use an ACL

An ACL is appropriate when:

- The legacy system's data model conflicts with the modern domain model.
- The legacy system's API is tightly coupled to its internals.
- The legacy system uses terminology that doesn't match modern business concepts.
- The legacy system is expected to be retained for a significant period.

### When NOT to Use an ACL

- The legacy system is being replaced immediately (no coexistence period).
- The legacy system is simple and well-documented with no conflicting concepts.
- The overhead of the ACL exceeds the benefit of isolation.

> **The ACL pattern must be validated per-system. It is not automatically applied to every legacy system.**

### Adapter Responsibilities

The Adapter should:

- Translate between legacy and modern data formats.
- Handle protocol differences.
- Provide a stable, modern interface to legacy functionality.
- Implement retry and error handling for legacy system failures.
- Log all interactions for debugging and audit purposes.
- Not contain business logic (only translation and isolation).

## Other Legacy Systems

Tadark is the only legacy system currently documented. It is almost certain that other legacy systems exist.

### Actions Required

1. Complete the system inventory to identify all legacy systems.
2. Evaluate each system for adapter/ACL requirements.
3. Prioritize legacy systems by business criticality and migration complexity.
4. Define a legacy system lifecycle for each (retain, wrap, migrate, retire).

## Legacy System Lifecycle

```text
           Retain          Wrap           Migrate          Retire
            ↓               ↓               ↓               ↓
        Keep running    Add ACL      Move capabilities    Decommission
        as-is           for isolation    to modern system     when safe
```

Each legacy system should be assigned a lifecycle state:

| State | Meaning | Action |
|---|---|---|
| **Retain** | Continue operating as-is | Monitor, maintain |
| **Wrap** | Add an adapter/ACL | Build the adapter |
| **Migrate** | Move capabilities to modern system | Implement migration |
| **Retire** | Decommission | Confirm all dependencies are migrated |

---

*This document is a `[[DRAFT]]`. The Tadark strategy must be validated through thorough discovery and ADR-003.*
