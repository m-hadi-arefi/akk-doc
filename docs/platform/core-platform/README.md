# Core Platform Pillar

The **Core Platform** provides reusable, enterprise-grade technical and business capabilities to all digital applications across Arian Khodro.

## Guiding Principle: Core Platform ≠ ERP

```text
┌─────────────────────────────────────────────────────────────┐
│                    Business Applications                    │
│   (Vehicle Sales, Workshop Ops, Spare Parts, Customer CRM)  │
└──────────────────────────────┬──────────────────────────────┘
                               │ consumes shared capabilities
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                        Core Platform                        │
│   Identity • Access • APIs • Events • MDM • Audit • Logs    │
└──────────────────────────────┬──────────────────────────────┘
                               │ connects via adapters
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   Legacy & External Systems                 │
│                (Tadark Accounting, Banks, SMS)              │
└─────────────────────────────────────────────────────────────┘
```

- **The Core Platform is NOT an ERP**: It does not own specific automotive sales funnels, dealership commission calculations, or workshop repair estimation logic.
- **Responsibilities**: Providing cross-cutting capabilities (Authentication, Authorization, API Gateway, Event Streaming, Master Data, Audit Trail, Observability).
- **Non-Responsibilities**: Domain-specific business logic, UI presentation layers, application-specific transaction processing.

## Platform Capabilities Directory
- [Core Platform Overview](./overview.md) — Architectural overview, principles, and roadmap.
- [Identity Service](../identity/overview.md) — Single Sign-On (SSO), OIDC/OAuth 2.0, and MFA.
- [Authorization Service](../authorization/overview.md) — Centralized RBAC and ABAC permission evaluation.
- [API Management](../api-management/overview.md) — Enterprise API Gateway, traffic routing, rate limiting.
- [Event Platform](../event-platform/overview.md) — Enterprise event broker, topic registry, pub/sub.
- [Master Data Management (MDM)](../master-data/overview.md) — Golden records for Vehicle, Customer, Supplier.
- [Audit Service](../audit/overview.md) — Immutable, tamper-evident audit logging.
- [Data Platform](../data-platform/overview.md) — Streaming CDC, Data Lakehouse, analytical reporting.
- [Integration Platform](../integration/overview.md) — Enterprise adapters, Anti-Corruption Layers, Strangler Fig.
- [Observability Platform](../observability/overview.md) — Centralized logging, distributed tracing, APM.
- [Project Management Methodologies](../project-management/) — Evaluation and selection of engineering delivery frameworks.
