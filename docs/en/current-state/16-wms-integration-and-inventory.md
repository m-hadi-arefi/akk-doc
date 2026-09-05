---
title: "16 — WMS Integration & Inventory Ownership"
lang: en
translation: /fa/current-state/16-wms-integration-and-inventory
---

# 16 — WMS Integration & Inventory Ownership

## The Core Architectural Dilemma: Which System Owns Inventory Truth?
The most critical architectural question discovered at Arian Khodro is the unresolved conflict of inventory authority. Both the legacy procurement software (Tadark) and the specialized Warehouse Management System (WMS) maintain parallel inventory quantities, leading to desynchronization, phantom reservations, and operational friction.

---

## The Current Fragile Integration Mechanism
- **The Parallel Reality:** When procurement purchases goods, Tadark logs receipt and increments stock counters. Simultaneously, when physical pallets arrive at the warehouse, the WMS registers physical intake.
- **The Web Service Patch:** A set of custom web service calls periodically compares Tadark balances with WMS balances, forcibly overwriting or "correcting" counts when numbers drift.
- **The Failure Mode:** If network connectivity blinks, or an operator cancels an order mid-pick, Tadark reports items as available while the WMS has locked them in a staging bin.

---

## Deconstructing Inventory: Separation of Concepts
To solve this dilemma, enterprise architecture must rigorously decouple **physical execution state** from **commercial/financial accounting state**.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DECONSTRUCTING ENTERPRISE INVENTORY                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. PHYSICAL INVENTORY (WMS)       ► Actual boxes, shelf bins, serial numbers, lots    │
│  2. COMMERCIAL INVENTORY (Sales)   ► Total physical MINUS reserved orders              │
│  3. FINANCIAL INVENTORY (GL/ERP)   ► Asset valuation, cost-of-goods-sold (COGS)        │
│  4. PIPELINE INVENTORY (Supply)    ► Goods cleared at customs, in transit on vessels   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Detailed Conceptual Breakdown:
1. **Physical Warehouse State:** What physical objects exist on what steel shelf right now? *(Sole Owner: WMS).*
2. **Bin & Location State:** Is Aisle 4, Bay 12, Level 2 occupied or vacant? *(Sole Owner: WMS).*
3. **Receiving State:** Has the delivery truck been unloaded at the dock, but pending QA inspection? *(Sole Owner: WMS).*
4. **Picking & Packing State:** Has an item been removed from the shelf, but not yet loaded onto the outbound truck? *(Sole Owner: WMS).*
5. **Commercial Available-to-Promise (ATP):** How many units can sales legally commit to a new distributor right now? *(Calculated: Physical Unlocked Stock MINUS Active Approved Quotation Reservations).*
6. **Financial Valuation & Ledger:** What is the legal monetary inventory balance for corporate tax declarations? *(Sole Owner: Borhan Accounting).*

---

## The Emerging Architectural Principle
```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CANONICAL INVENTORY OWNERSHIP RULE                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  WMS MUST OWN WAREHOUSE EXECUTION STATE & PHYSICAL ACCURACY.                          │
│  Commercial & Financial Systems MUST OWN Orders, Pricing, Contracts & Financial Ledgers.│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Required Future Technical Investigations
1. **API Contracts & Idempotency:** Integration endpoints between WMS and commercial order engines must enforce idempotent request headers (e.g. UUID transaction tokens) to prevent duplicate inventory reservations during network retries.
2. **Event-Driven Asynchronous Contracts:** Move away from point-to-point database querying toward asynchronous domain events:
   - `InventoryReceivedAtDockEvent`
   - `GoodsClearedInspectionEvent`
   - `OrderStockReservedEvent`
   - `GoodsDispatchedFromBayEvent`
3. **Reconciliation Schedules:** Automated daily reconciliation jobs that flag numeric variances between WMS physical counts and accounting ledgers without executing blind, destructive automatic overwrites.
