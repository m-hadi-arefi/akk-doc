# Business Architecture

[[DRAFT]]

## Purpose

This section maps the organization's business capabilities to applications and defines the business context for the architecture.

## Business Capabilities

Business capabilities are what the organization does to deliver value. This section maps each capability to the applications and systems that support it.

### Initial Capability Map

| Capability | Description | Current System(s) | Target System(s) | Status |
|---|---|---|---|---|
| Sales | Sales processes, orders | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Customer Management | Customer records | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Warehouse | Warehouse operations | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Delivery | Delivery logistics | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Accounting | Financial management | Tadark | `[[QUESTION]]` | `[[QUESTION]]` |
| CRM | Customer relationships | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Analytics | Reporting & analysis | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |
| Inventory | Stock management | `[[QUESTION]]` | `[[QUESTION]]` | `[[QUESTION]]` |

### Capability Hierarchy

```text
Business Capabilities
    ├── Revenue Operations
    │   ├── Sales
    │   ├── Customer Management
    │   └── CRM
    ├── Fulfillment Operations
    │   ├── Warehouse
    │   ├── Inventory
    │   └── Delivery
    ├── Financial Operations
    │   └── Accounting (Tadark)
    └── Intelligence
        └── Analytics & Reporting
```

> **This hierarchy is a hypothesis and must be validated against actual business processes.**

## Business Capability Ownership

Each capability should have an owner who is responsible for:

- Defining the capability's scope and boundaries
- Ensuring the capability is adequately served by systems
- Representing the capability in architecture decisions
- Prioritizing capability improvements

### Ownership Template

```markdown
## [Capability Name]

- **Owner:** [Person or team]
- **Description:** [What the capability covers]
- **Sub-capabilities:** [Breakdown]
- **Current Systems:** [Systems supporting this capability]
- **Target Systems:** [Planned systems]
- **Criticality:** [Critical / Important / Nice-to-have]
- **Pain Level:** [Low / Medium / High]
- **Open Issues:** [Current problems]
```

## Business Process Mapping

### Known Processes

- **Order-to-Cash:** Sales → Order → Fulfillment → Delivery → Invoice → Payment
- **Procure-to-Pay:** Purchase Requisition → Approval → Purchase Order → Receipt → Payment
- **Accounting:** Transaction Recording → Financial Reporting

### Unknown Processes

- Customer onboarding
- Inventory replenishment
- Delivery scheduling
- Reporting and analytics workflow
- Compliance and audit processes
- Human resources processes
- Production/manufacturing processes

## Business Architecture — Open Questions

- [ ] What are all the business capabilities?
- [ ] What are the end-to-end business processes?
- [ ] Who owns each capability?
- [ ] What are the KPIs for each capability?
- [ ] What are the pain points in each capability?
- [ ] What are the regulatory requirements?
- [ ] What is the organizational structure that supports these capabilities?

---

*This document is a `[[DRAFT]]`. The business architecture will be refined as discovery reveals actual business capabilities and processes.*
