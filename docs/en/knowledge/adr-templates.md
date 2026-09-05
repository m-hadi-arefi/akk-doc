---
title: "Architecture Decision Records (ADR) & Template"
lang: en
translation: /fa/knowledge/adr-templates
---

# Architecture Decision Records (ADR) & Template

> **Executive Summary:**  
> In multi-year enterprise transformations, technical and sourcing choices are often forgotten, misunderstood, or repeatedly re-debated as staff and leadership change.  
> An **Architecture Decision Record (ADR)** is an immutable, version-controlled document that captures a significant architectural decision, its business context, the considered alternatives, and the accepted trade-offs.  
> At Arian Khodro, every major decision—from sourcing choices (Build vs. Buy vs. Outsource) to integration patterns—must be documented as an ADR.

---

## 1. The Standard Enterprise ADR Template

Every ADR authored at Arian Khodro must adhere to the following standard structure:

```markdown
# ADR-[Number]: [Short Title of Decision]

## Metadata
- **Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-XXX]
- **Date:** [YYYY-MM-DD]
- **Decision Owner:** [Lead Enterprise Architect]
- **Stakeholders / Approvers:** [CEO, Department Heads, Technical Leads]

## 1. Context & Problem Statement
[Describe the business problem, operational context, and technical challenges necessitating a formal decision. Reference validated Discovery findings.]

## 2. Decision Drivers
- [Driver 1: e.g., Operational continuity with zero accounting disruption]
- [Driver 2: e.g., Elimination of manual spreadsheet data entry]
- [Driver 3: e.g., 5-year Total Cost of Ownership (TCO)]

## 3. Considered Options & Alternatives
- **Option 1:** [Description, Pros, Cons, Estimated Cost/Time]
- **Option 2:** [Description, Pros, Cons, Estimated Cost/Time]
- **Option 3:** [Description, Pros, Cons, Estimated Cost/Time]

## 4. Decision Outcome & Rationale
[State the chosen option clearly. Explain why this option was selected above the alternatives, referencing the decision drivers.]

## 5. Consequences & Trade-Offs
- **Positive Consequences:** [What benefits are unlocked?]
- **Negative Consequences / Trade-offs:** [What compromises or technical debt are accepted?]
- **Neutral Consequences:** [What operational changes are required?]

## 6. Risk & Mitigation Strategy
- **Risk:** [Identified technical or operational risk]
- **Mitigation:** [Pre-tested rollback, circuit breaker, or parallel run safeguard]

## 7. Validation & Compliance Method
[How will the architecture team verify that this decision is being adhered to? e.g., Automated CI/CD linting, UAT parallel reconciliation, load benchmarks.]
```

---

## 2. Practical Working Example: ADR-001

The following record demonstrates how a critical modernization decision is formally recorded for Arian Khodro:

### ADR-001: Integration Strategy for Legacy Tadark Delphi Accounting Core

#### Metadata
- **Status:** Accepted
- **Date:** 2026-09-04
- **Decision Owner:** Lead Enterprise Architect
- **Stakeholders / Approvers:** CEO, Chief Financial Officer, Head of Commercial Logistics

#### 1. Context & Problem Statement
Arian Khodro relies on the legacy Tadark Delphi application for financial accounting, tax reporting, and inventory ledger records. Modern web applications for customs clearance, foreign procurement, and dealership after-sales require real-time read and write access to financial vouchers and inventory states. However, Tadark provides no REST APIs, documentation is sparse, and direct concurrent database writes risk table locking and financial record corruption during month-end closing.

#### 2. Decision Drivers
1. **Zero Disruption to Core Accounting:** Financial ledgers and statutory tax reporting must remain 100% operational without regression.
2. **Modern Developer Agility:** New web applications must consume clean JSON/REST APIs without needing to understand legacy Delphi data structures.
3. **Data Integrity & Consistency:** Prevent race conditions, duplicate vouchers, and un-audited manual database edits.
4. **Gradual Modernization Pathway:** Support incremental transition under the Strangler Fig pattern.

#### 3. Considered Options & Alternatives
- **Option A: Direct SQL Connection from Web Applications to Tadark Database:**
  - *Pros:* Fast to develop initially; no additional middleware layer required.
  - *Cons:* Severe security hazard; high risk of table deadlocks; tightly couples new applications to obsolete legacy schemas.
- **Option B: Immediate Overnight Replacement of Tadark with Commercial ERP:**
  - *Pros:* Replaces legacy system completely.
  - *Cons:* Extreme cost; implementation timeline exceeding 24 months; massive risk of operational shutdown (>70% industry failure rate).
- **Option C: Anti-Corruption Layer (ACL) Adapter with Read-Only Database Views and Asynchronous Queue:**
  - *Pros:* 100% isolates Tadark from concurrent write locks; translates legacy schemas into modern JSON; exposes standardized REST APIs; enables gradual strangler migration.
  - *Cons:* Requires building and maintaining a dedicated integration adapter microservice.

#### 4. Decision Outcome & Rationale
**Selected: Option C (Anti-Corruption Layer Adapter).**  
Option C completely shields the live accounting core while providing modern engineering teams with standard, authenticated REST APIs. Writes back to Tadark are handled through validated, queued background jobs that execute during safe transactional windows.

#### 5. Consequences & Trade-Offs
- **Positive:** New web portals can be built rapidly in modern TypeScript/React without legacy constraints. Production Tadark database remains protected from query overload.
- **Negative:** Introduces a small near-real-time synchronization latency (< 2 seconds) between modern portal updates and Tadark reflection.
- **Neutral:** The internal engineering cell must take long-term ownership of the ACL adapter service.

#### 6. Risk & Mitigation Strategy
- **Risk:** Tadark database lockup during unexpected batch sync.
- **Mitigation:** Circuit Breaker pattern implemented in the API Gateway; all write requests are buffered in a persistent message queue (Outbox pattern).

#### 7. Validation & Compliance Method
- Validated via automated integration tests and a mandatory 30-day parallel run comparing vouchers generated in both systems down to the exact rial.

---

## 3. Related Documentation

- **[Architectural Design Patterns →](/en/knowledge/patterns)** — In-depth specifications of ACL, Outbox, and Circuit Breaker.
- **[Step 2: Software Decision Framework →](/en/roadmap/02-decision-cycle)** — Sourcing governance driving ADR authoring.
- **[Core Platform Architecture Blueprint →](/en/platform/core-platform/)** — The foundational platform governed by ADRs.
