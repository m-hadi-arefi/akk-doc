---
title: "30 — Day 02 Validation Plan"
lang: en
translation: /fa/current-state/30-day-02-validation-plan
---

# 30 — Day 02 Validation Plan

## Objectives for Phase 2 Discovery Sprint
Building on the foundational findings of Day 01, Day 02 will focus on validating unverified technical assumptions, executing deep-dive code audits, and stress-testing integration boundaries.

---

## Detailed Day 02 Agenda & Schedule

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 DAY 02 TIMETABLE & AGENDA                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  09:00 – 10:30  ► Session 1: Network & Electrical Validation (Habibi)                  │
│  10:45 – 12:30  ► Session 2: Database Schema & Migration Feasibility (Khani)          │
│  13:30 – 15:00  ► Session 3: Sales Workflow Proof-of-Concept Scoping (Sales Leadership)│
│  15:15 – 16:45  ► Session 4: WMS API Contracts & Technical Handover (WMS Tech Lead)   │
│  17:00 – 18:00  ► Session 5: Executive Debrief & Architecture Gate Sign-Off (CEO)      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Priority Validation Questions by Session

### Session 1: Network, Infrastructure & Electrical (Mr. Habibi)
- [ ] Has the central UPS electrical circuit been physically segregated to exclude laser printers?
- [ ] What is the exact automatic failover latency between the primary fiber link and the secondary backup ISP?
- [ ] What is the status of the procurement requisition for enterprise server virtualization hardware?

### Session 2: Databases, Accounting & Legacy Integration (Mr. Khani)
- [ ] Can an automated read-only SQL view or Anti-Corruption Layer be attached to Tadark without table locks?
- [ ] What is the exact data structure linking Borhan sales invoices to warehouse dispatch records?
- [ ] Has a complete restoration of the Borhan SQL database ever been successfully executed and timed?

### Session 3: Sales Process & CRM Proof-of-Concept (Sales Leadership)
- [ ] Which sales sub-team (5 reps, 1 supervisor, 2 drivers) is officially designated for the 21-day CRM POC?
- [ ] What is the final agreed list of mandatory KYC documents required for digital onboarding?
- [ ] Can the accounting controller accept SMS quotation approval links as legally binding order commitments?

### Session 4: WMS Integration & Code Sovereignty (WMS Vendor Lead)
- [ ] What is the exact RabbitMQ message payload schema for the `InventoryStockReservedEvent`?
- [ ] When will the unencrypted database DDL migration scripts be officially transferred to Arian Khodro?
- [ ] What is the target timeline for containerizing the WMS Modular Monolith into Docker Compose manifests?

### Session 5: Executive Debrief (Mr. Iranzadeh)
- [ ] Formal presentation of the Discovery Findings & Current State Baseline.
- [ ] Approval of the Quick Wins mandate and formal authorization of the 21-day CRM POC protocol.
