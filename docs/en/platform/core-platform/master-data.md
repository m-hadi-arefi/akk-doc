---
title: "Master Data Management (MDM): Golden Records & Data Governance"
lang: en
translation: /fa/platform/core-platform/master-data
---

# Master Data Management (MDM): Golden Records & Data Governance

> **Executive Summary:**  
> A fundamental root cause of operational friction at Arian Khodro is fragmented master data. Today, a single vehicle's chassis number (VIN) is typed independently into customs dossiers, warehouse receiving spreadsheets, Tadark accounting ledgers, and dealership service books. When customer and part details diverge across systems, billing errors, shipment delays, and reconciliation disputes inevitably follow.  
> The Core Master Data Management (MDM) service establishes authoritative **Golden Records** for the company's core entities: **Vehicles (VIN)**, **Customers (National ID)**, and **Spare Parts (SKU)**, ensuring a single version of operational truth across the enterprise.

---

## 1. The Three Automotive Golden Records

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ 1. VEHICLE ENTITY      │      │ 2. CUSTOMER ENTITY     │      │ 3. SPARE PARTS ENTITY  │
│ (Golden VIN)           │      │ (Golden Customer)      │      │ (Golden Part / SKU)    │
├────────────────────────┤      ├────────────────────────┤      ├────────────────────────┤
│ • 17-char ISO 3779 VIN │      │ • National ID / Reg No │      │ • Global OEM Part No   │
│ • Engine & Chassis No  │      │ • Verified mobile & OTP│      │ • Internal Company SKU │
│ • Complete Lifecycle   │      │ • Single Customer View │      │ • Supersession chain   │
│   from Port to Retired │      │ • Fleet & Dealership   │      │ • Model compatibility  │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

---

## 2. Vehicle Entity: Complete Lifecycle State Machine

The **Vehicle Identification Number (VIN)** is the core identifier of the automotive enterprise. The MDM system enforces an authoritative, state-machine lifecycle:

```text
[Ordered at Factory] ──► [In Sea Transit] ──► [Port Arrival] ──► [Customs Clearance] ──► [Central Bonded Yard]
                                                                                              │
                                                                                              ▼
[Decommissioned / Scrapped] ◄── [In-Service / Warranty] ◄── [Customer Delivered] ◄── [Allocated to Dealer]
```

### Critical Vehicle Metadata Governed:
- **Identity:** 17-character ISO 3779 VIN, Engine Number, Transmission Serial Number.
- **Specification:** Model Code, Trim Variant, Exterior Paint Code, Interior Trim Fabric, Manufacture Year.
- **Financial & Regulatory:** Foreign Proforma Number, Customs Declaration Dossier, Duty Paid Date, Import Tariff Band.
- **Commercial:** Allocating Dealership Branch, Sale Contract ID, Customer Handover Date, Warranty Expiration Date.

---

## 3. Customer Entity: The Single Customer View

To prevent duplicate customer profiles across branches and enable group-wide relationship management, the MDM establishes a single identity profile:

1. **Deterministic Unique Identifiers:**
   - Individuals: Iranian National ID (10 digits, validated via mathematical checksum algorithm).
   - Corporations: National Legal Entity ID (11 digits) and Iranian Tax Administration Economic Code.
2. **Verified Communication Coordinates:**
   - Mobile telephone number verified via cryptographic SMS OTP.
   - National postal code validated against national address postal directories.
3. **Consolidated Relationship History:**
   - Complete record of all vehicles purchased across all authorized dealership branches.
   - Centralized warranty service history, workshop visits, and open customer service tickets.

---

## 4. Spare Parts Entity: Unified Automotive Parts Catalog

Managing automotive spare parts across procurement, customs, central warehousing, and dealership workshops requires rigorous catalog discipline:

1. **OEM Part Number Standardization:**
   - Canonical indexing by original manufacturer part number (e.g., Mitsubishi / JAC / GAC OEM Part No).
   - Internal Arian Khodro SKU mapping for barcode generation and warehouse bin location.
2. **Part Supersession Chains:**
   - Automotive parts are frequently redesigned or upgraded by manufacturers. When Part A is deprecated and replaced by upgraded Part B, the MDM catalog links them in an unbroken supersession chain, ensuring warehousemen never dispatch obsolete stock.
3. **Model & Engine Compatibility Matrix:**
   - Authoritative mapping indicating precisely which vehicle models, engine codes, and production years a specific component is engineered to fit.

---

## 5. Data Hygiene, De-duplication & Survivorship Rules

To resolve historical data conflicts inherited from Tadark and legacy spreadsheets, the MDM engine applies automated data quality rules:

```text
Incoming Conflicting Records ──► [Validation & Checksum] ──► [De-duplication Engine] ──► Authoritative Golden Record
(Tadark, CRM, Spreadsheets)      • National ID check         • Levenshtein distance      (Stored in Master Catalog)
                                 • VIN ISO 3779 syntax       • Survivorship weighting
```

- **Data Cleansing at the Edge:** Modern web portals validate National IDs and VINs immediately upon typing, preventing dirty data from ever entering the system.
- **Survivorship Weighting:** When reconciling records, fields from verified government systems (e.g., customs declarations) take precedence over manually typed spreadsheet rows.

---

## 6. Master Data Downstream Synchronization

Master data is maintained centrally and published automatically to consuming downstream applications:

- When a vehicle's customs clearance status changes to `CLEARED`, an event is emitted across the central API Gateway and Event Bus.
- Downstream systems (commercial sales, billing, central warehouse logistics) receive the notification and update their local caches automatically, guaranteeing enterprise-wide consistency.

---

## 7. Related Documentation

- **[Core Platform Architecture Overview →](/en/platform/core-platform/)** — The foundational integration layer.
- **[API Gateway & Event-Driven Messaging →](/en/platform/core-platform/api-gateway)** — Event streaming for master data updates.
- **[Step 3: Core Platform Development →](/en/roadmap/03-development-and-core-platform)** — Implementation plan for the golden catalog.
