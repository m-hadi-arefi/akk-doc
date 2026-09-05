---
title: "26 — Risks, Assumptions, Issues & Dependencies"
lang: en
translation: /fa/current-state/26-raid-log
---

# 26 — Risks, Assumptions, Issues & Dependencies

## Enterprise Governance RAID Register
The RAID Log provides a disciplined framework for tracking project risks, unverified assumptions, operational issues, and architectural dependencies governing enterprise modernization at Arian Khodro.

---

## 1. Risks (Future Events with Negative Impact)
- `[RISK-01]`: **Vendor Lock-In Escalation:** The WMS vendor maintains exclusive control over source code, staging servers, and DDL schemas, creating a single point of failure. *(Probability: High | Impact: Critical)*.
- `[RISK-02]`: **Premature CRM Procurement:** Procuring an off-the-shelf SaaS CRM without end-to-end integration with Borhan and WMS will reproduce fragmented data silos. *(Probability: High | Impact: High)*.
- `[RISK-03]`: **Electrical Failure During UPS Bypass:** A utility power dip while the server UPS is in bypass mode will crash all active virtual machines. *(Probability: High | Impact: Critical)*.
- `[RISK-04]`: **Internal User Resistance:** Warehouse handlers and sales representatives may resist mobile handheld workflows and return to paper notebooks. *(Probability: Medium | Impact: High)*.

---

## 2. Assumptions (Unverified Working Hypotheses)
- `[ASSUMP-01]`: The headquarters emergency diesel generator can reliably start, stabilize, and accept server room load within 60 seconds of a blackout.
- `[ASSUMP-02]`: The secondary backup internet connection will automatically route outbound corporate traffic if the primary fiber link drops.
- `[ASSUMP-03]`: The WMS vendor is contractually willing to deposit source code into an escrow repository or mirror code to an internal GitLab instance.
- `[ASSUMP-04]`: Accounting can legally accept digital quotation approvals and customer mobile confirmations for audit compliance.

---

## 3. Issues (Current Disruptive Realities)
- `[ISSUE-01]`: Parallel inventory balances in Tadark and the specialized WMS cause desynchronization and phantom stock reservations.
- `[ISSUE-02]`: Missing source code for legacy backend APIs on the B2B spare parts portal limits modernization velocity.
- `[ISSUE-03]`: Key administrative credentials and system passwords reside in personal memory and notebooks without centralized governance.
- `[ISSUE-04]`: Warehouse picking and loading handoffs rely 100% on printed paper manifests transported by foot.

---

## 4. Dependencies (Structural Inter-Relationships)
- `[DEP-01]`: Real-time quotation issuance in the CRM depends on reliable available-to-promise (ATP) inventory APIs exposed by the WMS.
- `[DEP-02]`: Production deployment of the specialized WMS on-premise depends on replacing consumer gaming PCs with enterprise-grade virtualization hardware.
- `[DEP-03]`: The new sales platform depends on establishing clean, auditable PostgreSQL schemas and Row-Level Security rules under Supabase.
