---
title: "Delphi Tadark System Analysis & Adapter Strategy"
lang: en
translation: /fa/roadmap/legacy-tadark
---

# Delphi Tadark System Analysis & Adapter Strategy

The "Tadark" accounting software has served as the core transactional engine for general ledger, inventory, and accounts payable/receivable at Arian Khodro for years. Built in Delphi with a legacy database structure, direct modification of its source code or database tables poses an unacceptable business risk.

---

## 1. Rejecting the Big-Bang Migration Strategy

Attempting an abrupt rewrite or immediate replacement of Tadark introduces severe threats:
- Disruptions or miscalculations in tax filings, VAT compliance, and payroll.
- Operational paralysis among finance staff accustomed to legacy desktop shortcuts.
- Uncontrollable budget overruns and uncertain delivery timelines.

**Architectural Solution**: The **Strangler Fig Pattern** combined with a dedicated **Anti-Corruption Layer (ACL)**.

---

## 2. Anti-Corruption Layer (ACL) and Tadark Adapter

Rather than allowing new cloud and web services to query the legacy database directly, a dedicated Adapter manages translation and isolation:

```text
┌────────────────────────┐         ┌─────────────────────────┐         ┌──────────────────────┐
│  Modern Microservices  │  JSON   │ Anti-Corruption Adapter │  SQL /  │    Tadark System     │
│ (Core Platform / CRM)  │ ◄─────► │  (Tadark ACL Adapter)   │ ◄─────► │   (Delphi / DB)      │
└────────────────────────┘  REST   └─────────────────────────┘  Events └──────────────────────┘
```

### Key Responsibilities of the Tadark Adapter:
1. **Safe Data Extraction (Read Replica / CDC)**: Extracting financial ledgers and stock levels without table locks on operational tables.
2. **Schema Translation**: Mapping cryptic legacy field names into clean, strongly typed JSON schemas.
3. **Controlled Write-Back**: When new transactions originate from modern CRM portals, the adapter validates business rules before posting carefully into Tadark.

---

## 3. Incremental Migration Milestones

| Milestone | Target Module | Technical Strategy | Business Impact |
| :--- | :--- | :--- | :--- |
| **Step 1** | Parts Catalog & Warehouse Inventory | One-way sync from Tadark to Core Platform | Real-time inventory visibility inside CRM and dealership portals |
| **Step 2** | Proforma Invoicing & Sales Orders | Create orders in modern platform and safely inject approved records into Tadark | Eliminates manual sales order queues in accounting |
| **Step 3** | Warehouse Accounting & Final Vouchers | Migrate inventory accounting logic to new service | Tadark is reduced strictly to a General Ledger system |
