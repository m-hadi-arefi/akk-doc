# Assumptions Registry

All assumptions made during the Architecture & Digital Transformation program are tracked here. Each assumption must be validated, retired, or upgraded to a decision.

## How to Use

| Status | Meaning |
|---|---|
| `[[NEW]]` | Recently identified, not yet validated |
| `[[VALIDATING]]` | Being investigated |
| `[[VALIDATED]]` | Confirmed with evidence |
| `[[REJECTED]]` | Found to be incorrect |
| `[[DECISION]]` | Accepted as the basis for an ADR |
| `[[RETIRED]]` | No longer relevant |

## Assumptions

### A-001: Team Size — 2 Mid-Level Developers

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** The initial implementation team consists of approximately 2 mid-level developers.
- **Validation Needed:** Is this realistic for the Phase 1 scope? What is the actual team composition?
- **Related:** ADR-001 (when created)

### A-002: 12-Month Timeline

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** The transformation can be completed in 3 phases of 4 months each (12 months total).
- **Validation Needed:** Is this timeline realistic given the actual scope and team?
- **Related:** ADR-002 (when created)

### A-003: Tadark Is the Primary Legacy System

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** Tadark is the main legacy system requiring modernization.
- **Validation Needed:** Are there other legacy systems not yet identified?
- **Related:** ADR-003 (when created)

### A-004: Core Platform ≠ ERP

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** The Core Platform should provide shared capabilities and must not become a giant container for all business logic.
- **Validation Needed:** This is a design principle, not a factual assumption. Must be enforced through governance.
- **Related:** ADR-001 (when created)

### A-005: Gradual Migration Approach

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** The organization should modernize gradually rather than replacing everything at once.
- **Validation Needed:** Is this aligned with business appetite and operational reality?
- **Related:** ADR-002 (when created)

### A-006: Anti-Corruption Layer Pattern Is Applicable

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** Legacy systems should be wrapped with Anti-Corruption Layers to protect the modern architecture.
- **Validation Needed:** Is this pattern needed for every legacy system, or only specific ones?
- **Related:** ADR-003 (when created)

### A-007: 32-Bit to 64-Bit Conversion Is Not Sufficient

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** Simply making Tadark 64-bit does not solve the larger architectural problem.
- **Validation Needed:** Confirm that Tadark's issues are architectural, not just technical.
- **Related:** ADR-003 (when created)

### A-008: Business Applications Should Not Depend on Legacy Implementations

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** Applications (Sales, Warehouse, Delivery, CRM) should not depend unnecessarily on legacy system implementations.
- **Validation Needed:** How are current applications coupled to legacy systems?
- **Related:** ADR-003 (when created)

### A-009: Minimal Technology Stack

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** Do not introduce microservices, Kubernetes, Kafka, or other advanced technologies unless they solve a real problem.
- **Validation Needed:** This is a guiding principle. Validate against actual requirements as they are discovered.
- **Related:** ADR-008 (when created)

### A-010: Existing Frameworks Provide Value When Applied Pragmatically

- **Status:** `[[NEW]]`
- **Source:** Initial project context
- **Description:** BABOK, TOGAF, UML, and other frameworks are useful when they provide real insight, not as bureaucratic overhead.
- **Validation Needed:** Monitor framework usage to ensure it adds value, not process burden.

## Summary

```text
Total Assumptions: 10
New: 10
Validated: 0
Rejected: 0
Decision: 0
Retired: 0
```

## Assumptions by Category

| Category | Count |
|---|---|
| Team & Resources | 1 |
| Timeline | 1 |
| Systems & Technology | 3 |
| Architecture Approach | 3 |
| Principles & Philosophy | 2 |

---

*This registry must be reviewed at the start of each phase. Assumptions that are validated should be moved to decisions. Assumptions that are rejected should be documented with reasoning.*
