# Reusable Document Templates

All templates below are copy/paste ready and formatted for direct use in Arian Khodro initiatives.

---

## Business Requirements Document (BRD)
```markdown
# Business Requirements Document: [Project Name]

## 1. Executive Summary & Problem Statement
- **Business Need**: [Describe the organizational problem]
- **Impacted Stakeholders**: [Departments and users affected]
- **Target Business Outcome**: [Expected measurable improvement]

## 2. Scope
- **In-Scope**: [Explicit inclusions]
- **Out-of-Scope**: [Explicit exclusions]

## 3. Functional Requirements
| ID | Requirement Description | Priority (MoSCoW) | Acceptance Criteria |
|---|---|---|---|
| FR-01 | The system shall allow technicians to log repair hours | MUST | Hours recorded against work order |

## 4. Non-Functional Requirements
- **Performance**: [e.g. p99 response time < 250ms]
- **Availability**: [e.g. 99.9% during business hours]
- **Security**: [e.g. RBAC enforced per dealership]
```

---

## Architecture Decision Record (ADR)
See full template at [ADR Template](./adr-template.md).

---

## Business Process Definition
```markdown
# Process Definition: [Process Name]

## 1. Overview
- **Process ID**: PROC-001
- **Process Owner**: [Name / Role]
- **Trigger**: [What initiates this workflow]

## 2. Workflow Steps (BPMN 2.0 Mapping)
1. **Step 1**: [Actor] performs [Action] using [System].
2. **Step 2**: Gateway evaluates [Condition].

## 3. Key Performance Indicators (KPIs)
- **Target Cycle Time**: [e.g. < 30 minutes]
- **Success Rate**: [e.g. > 98%]
```

---

## Incident Postmortem Template
```markdown
# Incident Postmortem: [INC-XXX]

## Summary
- **Date / Time**: YYYY-MM-DD HH:MM
- **Duration**: [e.g. 42 minutes]
- **Impact**: [Number of dealerships or customers affected]

## Timeline (UTC)
- 10:00 - Anomaly detected by Prometheus alert.
- 10:15 - Incident response team assembled.
- 10:35 - Faulty pod rolled back; service restored.

## Root Cause
[Technical explanation of failure]

## Corrective Actions
| Action Item | Owner | Target Date |
|---|---|---|
| Add rate limiting to workshop API | Ali R. | 2026-09-10 |
```
