---
title: "01 — Executive Discovery Summary"
lang: en
translation: /fa/current-state/01-executive-summary
---

# 01 — Executive Discovery Summary

## Executive Perspective: What is Happening at Arian Khodro?
Arian Khodro is operating as a commercially vibrant automotive enterprise whose operational throughput has outgrown its underlying technology foundations. The company successfully imports, distributes, and services high-value vehicles and replacement parts. However, the operational machinery relies on extreme human effort, heroic individual intervention, and fragmented software tools rather than cohesive, automated enterprise platforms.

---

## Core Findings at a Glance

### 1. What is Working?
- **Commercial Momentum:** High market demand and active transactions across import and spare parts divisions.
- **Dedicated Personnel:** Teams demonstrate deep domain familiarity and compensate for software gaps through manual diligence.
- **Specialized Warehousing Foundation:** The specialized WMS product introduced by an external vendor shows rich domain features (GS1, multi-tier bin addressing, nested packaging).
- **Executive Willingness to Modernize:** Strong executive sponsorship from CEO Mr. Iranzadeh to establish order, governance, and scalable digital capabilities.

### 2. What is Most Risky?
- **Server Room Infrastructure Vulnerability:** A single 10kVA UPS powers servers and high-draw laser printers. During heating cycles, loads hit 120–130%, forcing automatic bypass to unstable city power. A power dip during bypass risks catastrophic server shutdowns.
- **Unverified Backup and Recovery:** Past storage failures (Samsung EVO 1TB SSD crash in RAID5) required weeks of painful manual restoration. Current backup schedules lack off-site replication and automated recovery testing.
- **Unregulated Hardware Purchasing:** Consumer gaming motherboards (ASUS ProArt with Intel Core i9-14900K and overclocking chipsets) are procured as production servers without ECC memory, dual redundant power supplies, or enterprise IPMI/iLO out-of-band management.
- **Ambiguous Inventory Truth:** Procurement software (Tadark) and WMS maintain parallel stock counts reconciled by fragile web service patches, leaving commercial stock availability prone to discrepancies.

### 3. What is Fragmented?
- **The Sales Journey:** Customer registration, document intake, financial credit approval, quotation issuance, warehouse delivery, truck dispatch, payment collection, and returns exist as isolated silos linked by phone calls and paper documents.
- **Data Repositories:** Customer profiles reside partially in accounting (Borhan), partially in Tadark, partially in Didar CRM, partially in the import platform, and partially in sales managers' private notes.

### 4. What is Dependent on Individuals?
- **Network & IT Support:** Heavily reliant on Mr. Habibi for all helpdesk, rack cabling, user provisioning, and operational fixes.
- **Database & Script Maintenance:** Certain critical operational databases depend on Mr. Khani (to the point where a dedicated standalone UPS was deployed specifically for his host).
- **Custom Internal Tools:** Development initiatives led by Mr. Zolfaghari and colleagues risk operating without formal software architecture oversight or shared code repositories.

### 5. What is Dependent on External Vendors?
- **WMS Codebase and Hosting:** Development occurs on the vendor's private infrastructure; source code resides on the vendor's private GitHub with unclear organizational escrow or disaster recovery rights.
- **Jahan Gostar Legacy Services:** Portions of the original B2B portal source code are inaccessible, requiring the new development team to reverse-engineer APIs and consider self-hosted Supabase backends.

---

## Where is the Biggest Business Impact?
The largest near-term business hemorrhage occurs in **Sales Operations & Receivables**:
1. **Unmonitored Sales Opportunities:** Because customer calls and quotation follow-ups are tracked manually on paper and PDFs, sales managers spend hours auditing call lists rather than closing deals. An estimated 25% of inbound follow-ups are delayed or lost.
2. **Delayed Cash Collection:** Delivery drivers lack digital tools to log why a customer failed to issue a check or provide card payment upon delivery, delaying accounts receivable recognition and escalating credit risk.
3. **Flawed Returns Processing:** Customer returns are handled via unstructured phone requests and physical notes, resulting in uninspected inventory re-entering the warehouse or lingering in logistical limbo.

---

## What Should Management Investigate First?

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        IMMEDIATE EXECUTIVE ACTION PRIORITIES                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  PRIORITY 1: ELECTRICAL & UPS ISOLATION                                                │
│  ► Immediately remove laser printers from the central server UPS circuit.              │
│  ► Eliminate immediate server-drop risk at near-zero capital expenditure.             │
│                                                                                        │
│  PRIORITY 2: SALES & CRM WORKFLOW STANDARDIZATION                                      │
│  ► Map end-to-end sales and receivables requirements; execute a controlled POC.        │
│  ► Do not sign long-term multi-seat SaaS contracts until workflow fit is proven.      │
│                                                                                        │
│  PRIORITY 3: WMS INVENTORY BOUNDARY DEFINITION                                         │
│  ► Legally and technically define whether WMS or Tadark owns inventory truth.         │
│  ► Secure organization-owned repository access and database backup rights from vendor. │
│                                                                                        │
│  PRIORITY 4: IT PROCUREMENT GOVERNANCE                                                 │
│  ► Halt procurement of consumer-grade gaming hardware for enterprise server roles.    │
│  ► Mandate: Business Need → Architecture Review → Standard Spec → Purchase.           │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
