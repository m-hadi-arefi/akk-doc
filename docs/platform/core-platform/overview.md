# Core Platform

[[DRAFT]]

## Purpose

The Core Platform provides shared enterprise capabilities required by multiple business applications. It is **not** an ERP. It does not contain business-specific logic.

## What the Core Platform Provides

The Core Platform is intended to provide the following shared capabilities:

| Capability | Description | Status |
|---|---|---|
| **Identity** | User identity management (who are you) | `[[PENDING]]` |
| **Authentication** | Verifying user identity (login, sessions, tokens) | `[[PENDING]]` |
| **Authorization** | What users can do (permissions, roles, policies) | `[[PENDING]]` |
| **Permission Management** | Fine-grained access control | `[[PENDING]]` |
| **API Management** | Gateway, rate limiting, API documentation, versioning | `[[PENDING]]` |
| **Event Platform** | Event publishing and subscription between applications | `[[PENDING]]` |
| **Master Data** | Single source of truth for shared entities | `[[PENDING]]` |
| **Audit Logging** | Track who did what and when | `[[PENDING]]` |
| **Data Platform** | Shared data infrastructure (databases, data warehouse) | `[[PENDING]]` |

## What the Core Platform Does NOT Provide

The Core Platform explicitly does **NOT** provide:

| Not Provided | Reason |
|---|---|
| Business-specific logic | Business applications own their behavior |
| Sales workflows | That belongs to the Sales application |
| Warehouse operations | That belongs to the Warehouse application |
| Accounting processes | That belongs to (or is replaced from) Tadark |
| CRM-specific features | That belongs to the CRM application |
| A monolithic "everything platform" | This would recreate the very problem we are solving |

```text
Core Platform ≠ ERP
Core Platform ≠ Application Suite
Core Platform = Shared Enterprise Capabilities
```

## Architecture Position

```text
Sales Application    CRM Application    Warehouse Application
        |                    |                    |
        v                    v                    v
        +-------------------+-------------------+
        |                    |                    |
        |              Core Platform              |
        |                    |                    |
        |    +-- Identity    |                    |
        |    +-- Auth       |                    |
        |    +-- API Mgmt   |                    |
        |    +-- Events     |                    |
        |    +-- Master Data|                    |
        |    +-- Audit      |                    |
        |    +-- Data Platf.|                    |
        |                    |                    |
        +-------------------+-------------------+
                            |
                            v
                   Integration Layer
                            |
                            v
                    Legacy Systems (Tadark, etc.)
```

## Open Questions

- [ ] What is the minimum viable Core Platform for Phase 1?
- [ ] Which capabilities must be in the Core Platform from day one?
- [ ] Which capabilities can be added later?
- [ ] How do business applications depend on Core Platform capabilities?
- [ ] Should the Core Platform be a single deployable unit or a set of independent services?
- [ ] How is the Core Platform governed and versioned?
- [ ] Who owns the Core Platform?
- [ ] How does the Core Platform handle data ownership and data sovereignty?
- [ ] What is the failure mode of the Core Platform? Can applications operate without it?

## Constraints

The Core Platform must:

- Not become a dumping ground for business logic.
- Be designed so that its capabilities can be consumed by any application.
- Be independently deployable where possible.
- Have clear ownership and accountability.
- Be documented with clear APIs and contracts.

## Risks

- **Scope creep:** The Core Platform can easily become an ERP if not actively guarded against.
- **Premature abstraction:** Building shared capabilities before any application needs them risks building the wrong abstractions.
- **Single point of failure:** If the Core Platform goes down, multiple applications are affected.
- **Over-engineering:** The temptation to build a "perfect" platform can delay value delivery.

---

*This document is a `[[DRAFT]]`. The Core Platform scope must be validated through ADR-001 and initial discovery.*
