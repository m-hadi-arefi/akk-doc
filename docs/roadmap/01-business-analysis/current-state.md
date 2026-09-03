# Current State

[[DRAFT]]

## Purpose

This section documents the current state of Arian Khodro's software ecosystem. The goal is to build a complete, evidence-based inventory of systems, data, integrations, and problems **before** designing the target architecture.

**Principle: Understand before you design.**

## Systems Inventory

Each system must be documented with the following fields:

- **System Name** — Internal name and any aliases
- **Purpose** — What business capability it supports
- **Owner** — Who owns and maintains this system
- **Users** — Who uses it, how many, in what roles
- **Technology** — Programming language, framework, runtime
- **Database** — Database type, version, approximate size
- **APIs** — What APIs exist (internal/external, protocols, documentation status)
- **Integrations** — What other systems it connects to
- **Criticality** — Business criticality (critical / important / nice-to-have)
- **Known Problems** — Current issues, pain points, workarounds
- **Dependencies** — What does it depend on? What depends on it?

### Known System: Tadark

| Field | Value |
|---|---|
| **System Name** | Tadark |
| **Purpose** | Accounting |
| **Owner** | `[[QUESTION]]` |
| **Users** | `[[QUESTION]]` |
| **Technology** | Delphi, 32-bit |
| **Database** | `[[QUESTION]]` |
| **APIs** | `[[QUESTION]]` |
| **Integrations** | `[[QUESTION]]` |
| **Criticality** | Likely critical (accounting) |
| **Known Problems** | 32-bit, legacy technology stack |
| **Dependencies** | `[[QUESTION]]` |

> **Note:** Tadark is the only system currently documented. This is almost certainly incomplete.

### System Inventory Template

```markdown
## [System Name]

- **Purpose:** [Business capability supported]
- **Owner:** [Person/Team]
- **Users:** [Who, how many, roles]
- **Technology:** [Language, framework, runtime, version]
- **Database:** [Type, version, approximate size]
- **APIs:** [List of APIs, protocols, documentation status]
- **Integrations:** [List of connected systems and direction]
- **Criticality:** [Critical / Important / Nice-to-have]
- **Known Problems:** [Current issues and workarounds]
- **Dependencies:** [Upstream and downstream]
- **Deployment:** [On-premises / cloud / hybrid]
- **Availability:** [Current SLA, uptime history]
- **Cost:** [License, hosting, maintenance costs]
```

## Data Inventory

### Known Data Domains

- **Accounting** — Financial data managed by Tadark
- **Customer Data** — `[[QUESTION]]`
- **Product/Inventory Data** — `[[QUESTION]]`
- **Sales Data** — `[[QUESTION]]`
- **Warehouse Data** — `[[QUESTION]]`

### Data Quality Questions

- Where is the single source of truth for each data domain?
- Is data duplicated across systems? If so, where and how?
- What are the current data synchronization mechanisms?
- What data quality issues exist today?
- Are there manual data entry processes that could be automated?
- What are the data retention and compliance requirements?

### Master Data Questions

- What entities are considered master data?
- Who owns each master data entity?
- How is master data currently governed?
- Are there conflicting versions of master data across systems?

## Integration Inventory

Each integration must be documented with:

- **Source System** — Which system initiates the data flow
- **Target System** — Which system receives the data
- **Direction** — One-way or bidirectional
- **Protocol** — File transfer, database link, API, manual export/import, etc.
- **Frequency** — Real-time, scheduled, on-demand, manual
- **Data Exchanged** — What data is transferred
- **Owner** — Who maintains the integration
- **Failure Behavior** — What happens when it fails? Is there alerting?
- **Security** — How is the integration secured?
- **Reliability** — Is it reliable? Are there known issues?

### Known Integrations

- **Tadark Integrations:** `[[QUESTION]]` — What systems does Tadark currently connect to?

### Integration Diagram Template

```text
[System A] ---→ [System B]
     |                |
     +--→ [System C] ←--+
          |
          ↓
     [Tadark]
```

## Current Problems

### Known Problems

1. **Tadark is a 32-bit Delphi application** — Technically constrained, harder to maintain, harder to integrate.
2. **No unified architectural foundation** — Systems appear to have been built incrementally without a cohesive strategy.
3. **Unknown scope of the problem** — We don't yet know the full inventory of systems and integrations.

### Unknown Problems

- What are the most painful manual processes today?
- What breaks most often?
- Where is data duplicated or inconsistent?
- What takes the most time for IT to maintain?
- What business processes are bottlenecked by system limitations?
- What workarounds do users create?

## Current State Summary

```text
KNOWN FACTS:
- Tadark exists as a legacy accounting system (Delphi, 32-bit)
- Multiple business systems exist
- The organization has business capabilities in sales, warehouse, delivery, CRM, analytics

ASSUMPTIONS (needs validation):
- Tadark is the most critical legacy system
- Systems were built incrementally without architectural governance
- There is a desire to modernize

OPEN QUESTIONS:
- Complete system inventory
- Complete integration map
- Data ownership and quality baseline
- Business pain points and their root causes
- Budget, team, and constraints
```

---

*This section is foundational. All architecture decisions depend on the quality of the current-state documentation. Do not skip or rush this section.*
