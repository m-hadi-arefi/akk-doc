---
title: "08 — Sales & CRM Discovery"
lang: en
translation: /fa/current-state/08-sales-and-crm-discovery
---

# 08 — Sales & CRM Discovery

## Why CRM is an Acute Executive Urgency
During Day 01 interviews with sales leadership, the lack of an operational CRM was articulated as the company's single greatest operational vulnerability. Commercial managers currently operate without systemic visibility into customer interactions, resulting in lost deals, unmonitored quotations, delayed cash collection, and untracked customer dissatisfaction.

---

## The Complete Target Business Workflow Discovered

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        END-TO-END COMMERCIAL & SALES LIFECYCLE                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. CUSTOMER ONBOARDING     ► Digital KYC, financial credentials & multi-tier credit   │
│  2. QUOTATION & SMS         ► Real-time stock check, SMS delivery, customer approval   │
│  3. ORDER & INVOICING       ► Financial signoff, official invoice, warehouse dispatch  │
│  4. LOGISTICS & LOADING     ► Yard dock scheduling, mobile task assignment, manifests  │
│  5. DELIVERY & ROUTING      ► Multi-drop driver dispatch, doorstep digital signoff     │
│  6. COLLECTION & CHECKS     ► Cash/check collection, POS receipt, dispute logging      │
│  7. RETURNS MANAGEMENT      ► Structured RMA, driver pickup, QA gate, credit note      │
│  8. ACTIVITY DISCIPLINE     ► Mandatory call quotas, EOD supervisor audit, reminders   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 1. Customer Onboarding & Credit Limit Approval
- **Registration Intake:** Capture corporate identity, commercial license, national tax ID, contact persons, and delivery addresses.
- **Document Management:** Upload scanned financial statements, business licenses, and bank references directly to the customer profile.
- **Credit Approval Workflow:** When a customer requests a credit line (or an increase in credit limit):
  - Regional sales manager reviews historical trade volume.
  - Accounting reviews payment punctuality and credit rating.
  - Commercial director executes digital authorization.
  - System enforces the credit ceiling across all future quotations automatically.

### 2. Quotation / Pre-Invoice Issuance
- **Real-Time Inventory Visibility:** Sales agents must see available physical stock vs. incoming shipments without switching between separate software windows.
- **Procurement Integration:** If an item is out of stock, the quote engine queries supply lead times from the procurement module.
- **Customer Digital Approval:**
  - Quotation is generated and a secure, time-stamped short-link is dispatched via automated SMS to the customer's verified mobile number.
  - Customer opens the quotation on their mobile device, reviews terms, and taps "Approve" (with OTP validation).
  - The sales agent instantly receives an in-app notification confirming quote approval.

### 3. Order → Invoice → Warehouse Handoff
- Upon customer approval and credit clearance, the quotation converts to a confirmed Order.
- Accounting generates the formal financial invoice.
- An automated dispatch event triggers a notification to the warehouse supervisor's terminal.
- Warehouse planning organizes loading schedules, bay assignments, and pallet staging based on delivery vehicle capacity.

### 4. Logistics, Delivery & Driver Mobile Workflow
- **Multi-Drop Routing:** Drivers receive an ordered delivery route on their mobile device covering multiple customer destinations.
- **Digital Proof of Delivery:** Upon physical arrival, the driver inspects goods with the customer, captures digital signatures on glass, and logs delivery status in real time.

### 5. Payment Collection at Doorstep
- Drivers handle multiple payment modalities: physical promissory checks, mobile POS card payments, or verified bank transfer receipts.
- **Dispute and Partial Payment Handling:** If a customer cannot pay or requests an unauthorized deferral:
  - Driver must log the structured refusal reason in the mobile interface.
  - Sales supervisor and credit manager receive immediate alerts.
  - The delivery is either placed on administrative hold or completed subject to formal override.

### 6. Returns Management (RMA)
- **Current As-Is Failure:** Customer calls salesperson → salesperson notes return on scrap paper → driver verbally instructed to collect item → driver drops unverified box in warehouse → credit memo issued without quality control.
- **Required To-Be Digital Workflow:** Customer or salesperson logs digital return request → Returns supervisor reviews warranty/terms → Approved return assigned to driver route → Driver collects and verifies serial/lot → Warehouse inspection executes technical audit → Finance releases credit note.

### 7. Daily Sales Activity & Follow-Up Discipline
- **The Quota Paradigm:** Sales management establishes clear daily call quotas (e.g., 20 calls assigned per rep per day).
- **Execution Tracking:** Dashboards display real-time progress (e.g. 15 completed, 5 remaining).
- **End-of-Day (EOD) Audit:** Supervisors review uncontacted leads, scheduled callbacks, and stalled opportunities before shift closure.

### 8. Receivable Reminders & Payment Tracking
- When a customer promises payment for a specific date (e.g. "Payment will be wired on Tuesday"):
  - Sales agent logs the scheduled payment commitment.
  - The system triggers automated SMS reminders to the customer 24 hours prior.
  - If unpaid by 14:00 on the due date, an escalation notification alerts the sales manager and credit controller.
