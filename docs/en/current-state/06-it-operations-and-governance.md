---
title: "06 — IT Operations, Governance & Technology Management"
lang: en
translation: /fa/current-state/06-it-operations-and-governance
---

# 06 — IT Operations, Governance & Technology Management

## IT Operational Culture: The Reactive Trap
At Arian Khodro, the Information Technology function operates in an intensely reactive mode. Rather than steering enterprise architecture, establishing infrastructure roadmaps, or defining security standards, IT personnel spend the vast majority of their working hours responding to urgent, unplanned incidents:
- Physical cabling adjustments and network port drops.
- Endpoint troubleshooting (printers, Windows crashes, malware removal).
- Ad-hoc server provisioning triggered by urgent developer demands.
- Emergency manual recoveries following electrical brownouts.

---

## Governance Gaps in Hardware & Infrastructure
Decisions to acquire infrastructure components are largely driven by individual developer requests rather than formal enterprise architectural reviews.
- **Developer-Driven Requests:** When an internal developer or external contractor requests a host for a new service, they specify high desktop clock speeds (e.g. Core i9 enthusiast processors) rather than enterprise quality attributes (ECC memory, hot-swap SAS drives, dual redundant hot-plug power supplies, remote out-of-band management).
- **Absence of IT Review Standards:** IT approvals validate budget availability and market availability of requested desktop components, but do not evaluate total cost of ownership, mean time between failures (MTBF), rack space efficiency, or hypervisor hardware compatibility lists (VMware HCL).

---

## Password & Access Management: The Operational Dilemma
Interviews with technical staff revealed that administrative credentials, database connection strings, and server root passwords are often shared via unencrypted messaging apps, written notes, or stored in personal browser password managers.

### The Self-Hosted Password Manager Debate:
Discussions touched upon deploying a self-hosted enterprise password manager (e.g., Bitwarden / Vaultwarden) to centralize corporate credential governance.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CORE TECHNOLOGY GOVERNANCE PRINCIPLE                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│          "Security should protect the organization, not become a cage."                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Analytical Assessment:
1. **The Cage Risk:** If security policies impose cumbersome password rotation rules, mandatory desktop agents, and complex master vault logins without integrating smoothly into everyday employee workflows, technical staff will circumvent the system by keeping plaintext cheat-sheets.
2. **The Usability Imperative:** Centralized password management must be simple, mobile-accessible for on-call engineers, and integrated into single sign-on (SSO) or role-based directory services to achieve high adoption.
3. **The Current Reality:** At present, neither a self-hosted vault nor formal credential rotation exists. Operational passwords reside in the heads and personal notebooks of Mr. Habibi, Mr. Khani, and individual developers.

---

## Deployment & Software Ownership Friction
- **No Staging-to-Production Pipeline:** New software releases and database patches are frequently applied directly to live operational databases without staging environments, automated unit tests, or rollback scripts.
- **Lack of Code Repositories:** Code for internal utilities lives on individual developer workstations without a centralized GitLab or GitHub Enterprise server enforcing code reviews and branch protection.
- **Deployment Ownership Ambiguity:** When an internal tool fails, it is unclear whether the failure is an IT infrastructure outage, a network routing issue, or a software code bug, leading to circular finger-pointing between operations and development.

---

## The Strategic Shift: Objective Technical Decision-Making
Arian Khodro must transition from personality-driven IT decisions to an objective governance model governed by three non-negotiable rules:
1. **Architectural Evaluation Before Purchase:** No software license or hardware server may be purchased without an architectural review evaluating integration fit, security posture, and lifecycle maintenance.
2. **Separation of Concerns:** Helpdesk endpoint support must be operationally decoupled from core infrastructure architecture and development pipelines.
3. **Formalized Handover Standards:** External vendors (such as the WMS vendor or the portal team) must provide deployment automation, architecture diagrams, and disaster recovery manuals before final milestone payments are approved.
