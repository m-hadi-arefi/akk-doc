---
title: "09 — Sales Process — As-Is"
lang: en
translation: /fa/current-state/09-sales-process-as-is
---

# 09 — Sales Process — As-Is

## Step-by-Step Breakdown of Current Operational Reality
This document exposes the actual manual handoffs, unrecorded communication channels, paper forms, and systemic failure points governing commercial operations at Arian Khodro.

---

## Detailed As-Is Stage-by-Stage Breakdown

| Stage | Responsible Role | Systems In Use | Primary Artifacts | Manual Interventions & Fragility | Failure Point & Business Impact |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Customer Intake** | Salesperson | Personal Notebook, Excel | Paper business cards, handwritten notes | Customer data is recorded in individual notebooks. No deduplication check. | Duplicate customer profiles created; sales leads lost when sales reps depart. |
| **2. KYC & Document Collection** | Salesperson & Customer | WhatsApp, Telegram, Email | Phone photos of licenses, checks, ID cards | Customer sends documents via unencrypted personal messaging apps. | Compliance risk; documents get buried in chat histories and are lost. |
| **3. Credit Approval** | Sales Director & Accounting | Paper memorandums, verbal calls | Physical signature slips | Sales rep walks to accounting to verbally ask if a customer's check has cleared. | Subjective credit decisions; sales reps bypass limits during rush orders. |
| **4. Stock Inquiry** | Salesperson | Tadark, Phone call to warehouse | Verbal confirmation, scrap paper | Sales rep logs into 32-bit Tadark; if numbers look questionable, calls warehouse worker to walk the aisles. | High latency (30–60 min to quote); quote issued on ghost stock already reserved by another branch. |
| **5. Quotation Issuance** | Salesperson | Microsoft Word / Excel | PDF quotation exported manually | Sales rep formats quote manually in Excel, saves as PDF, emails/whatsapps to client. | Calculation typos; outdated price tiers applied; zero systemic logging of issued quotes. |
| **6. Customer Confirmation** | Customer & Salesperson | Phone call, WhatsApp chat | Screenshot of approval message | Customer verbally confirms order over phone or sends a WhatsApp text. | Legal ambiguity; customer disputes quoted price after goods are loaded onto trucks. |
| **7. Invoice Creation** | Accounting Clerk | Borhan ERP | Paper sales invoice (3 copies) | Accounting manually re-keys customer details and item lines from salesperson's PDF into Borhan. | Data entry transcription errors; invoice pricing differs from quoted pricing. |
| **8. Warehouse Dispatch** | Warehouse Clerk | Tadark, Paper invoice printout | Physical paper picklist | Accounting prints invoice copy and hands it physically to warehouse runner. | Picklist lost or delayed in transit; warehouse picks wrong part variants. |
| **9. Vehicle Loading** | Warehouse Laborers | Physical loading dock | Paper manifest, pen checkmarks | Laborers manually load boxes onto truck; driver signs paper carbon copy. | No barcode scan validation; wrong quantities loaded into delivery truck. |
| **10. Route Delivery** | Delivery Driver | Paper delivery slips, GPS phone | Physical paper delivery slips | Driver plans delivery sequence mentally without route optimization software. | Inefficient delivery loops; late deliveries; damaged goods returned unrecorded. |
| **11. Doorstep Collection** | Delivery Driver | Mobile POS, Paper checks | Physical bank checks, paper receipts | Driver receives checks; if customer refuses payment, driver negotiates or phones sales rep. | Driver accepts invalid or unsigned checks; cash collection reconciliation takes days. |
| **12. Returns (RMA)** | Customer, Driver, Warehouse | Scrap paper, phone calls | None (informal return box) | Customer gives returned parts to driver without prior authorization slip. | Warehouse receives uninspected boxes; inventory counts desynchronize; financial credit notes stall. |

---

## Critical Manual Handoffs & Bottlenecks

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          THE CHAIN OF MANUAL DISCONNECTIONS                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Salesperson Notebook  ──►  WhatsApp Photo  ──►  Verbal Credit Check                  │
│            │                       │                      │                             │
│            ▼                       ▼                      ▼                             │
│  Excel Quotation       ──►  Printed PDF     ──►  Manual Borhan Re-keying               │
│            │                       │                      │                             │
│            ▼                       ▼                      ▼                             │
│  Paper Picklist        ──►  Manual Loading  ──►  Driver Memory Route                    │
│            │                       │                      │                             │
│            ▼                       ▼                      ▼                             │
│  Physical Check Drop   ──►  Accounting Desk ──►  Paper Return in Corner                 │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Summary of Direct Business Losses Caused by As-Is Process:
1. **Prolonged Order Cycle Time:** Taking up to 48 hours to progress from customer inquiry to warehouse picking.
2. **High Accounting Friction:** Over 30 hours per week spent re-entering quotation data into Borhan and cross-checking paper bank receipts.
3. **Inventory Leakage:** Uninspected returns accumulating in warehouse corners without entering the stock ledger.
