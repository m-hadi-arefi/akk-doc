---
title: "Application Architecture"
lang: en
translation: /fa/roadmap/05-software-architecture/application-architecture
---

# Application Architecture

[[DRAFT]]

## Purpose

This section defines the structure and boundaries of business applications in the Arian Khodro ecosystem. Applications own business-specific behavior and depend on the Core Platform for shared capabilities.

## Architecture Principle

```text
Business Applications own business logic.
Core Platform provides shared capabilities.
Integration Layer isolates legacy systems.
```

Applications should not depend on legacy system internals. They should depend on the Core Platform for shared services and on adapters for legacy system access.

## Known Applications

### Initial Inventory

| Application | Business Capability | Status |
|---|---|---|
| **Sales** | Sales processes, orders, pipeline | `[[QUESTION]]` |
| **Warehouse** | Warehouse operations, storage management | `[[QUESTION]]` |
| **Delivery** | Delivery scheduling and logistics | `[[QUESTION]]` |
| **CRM** | Customer relationship management | `[[QUESTION]]` |
| **Customer Management** | Customer records and profiles | `[[QUESTION]]` |
| **Analytics** | Business reporting and data analysis | `[[QUESTION]]` |
| **Accounting** | Financial management (Tadark) | `[[KNOWN]]` — legacy |

### Notes

- Some applications in the list above may overlap (e.g., CRM and Customer Management). These must be clarified during discovery.
- The list is incomplete. Other applications likely exist.
- Each application should be documented with its own architecture document once the application inventory is complete.

## Application Boundaries

### Boundary Principle

Each application has a clear boundary. Inside the boundary is business-specific logic. Outside the boundary are:

- Core Platform capabilities (identity, auth, API, events, master data)
- Integration layer (legacy adapters)
- Other applications (through events or APIs)

### Boundary Template

```markdown
## [Application Name] Boundary

**Inside the boundary (application-owned):**
- [Business logic specific to this application]
- [Business-specific data models]
- [User interfaces]
- [Application-specific rules and workflows]

**Dependencies on Core Platform:**
- [Identity, authentication]
- [Authorization]
- [API access]
- [Events]
- [Master data]
- [Audit logging]

**Dependencies on Integration Layer:**
- [Legacy system adapters used]

**Owned by:** [Person or team]
```

## Application Dependencies

### Current Dependencies (Unknown)

- How do current applications depend on each other?
- How do current applications depend on Tadark?
- What are the circular dependencies?
- What are the implicit dependencies (not documented)?

### Target Dependencies

In the target architecture:

- Applications depend on the Core Platform for shared capabilities.
- Applications depend on adapters for legacy system access.
- Applications communicate through events and APIs (not direct database access).
- No application should depend on another application's internals.

## Application Lifecycle

Each application should have:

- **Owner:** Person or team responsible
- **Lifecycle state:** Active, being modernized, deprecated
- **Technology:** Current and target technology
- **Migration plan:** How and when it moves

## Application Inventory Questions

- [ ] What applications are currently used by the organization?
- [ ] For each application: what does it do, who uses it, what technology is it built on?
- [ ] Are any applications bundled with legacy systems?
- [ ] Are there any shadow IT applications?
- [ ] What applications are most critical to daily operations?
- [ ] Which applications have the most technical debt?

---

*This document is a `[[DRAFT]]`. Application boundaries and dependencies will be clarified during discovery and refined in the target architecture.*
