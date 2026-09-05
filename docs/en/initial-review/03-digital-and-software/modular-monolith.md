---
title: "Modular Monolith Architecture"
lang: en
translation: /fa/initial-review/03-digital-and-software/modular-monolith
---

# Modular Monolith Architecture

## Executive Summary
This document specifies the internal structural design of Arian Khodro's Core Platform. By choosing a **Modular Monolith** over microservices, we achieve the operational simplicity of a single deployable artifact while enforcing strict architectural domain encapsulation. Business domains are implemented as isolated modules communicating through well-defined in-process public interfaces and domain events, ensuring clean code, rapid refactoring, and zero distributed transaction overhead.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        MODULAR MONOLITH BOUNDARIES & CONTRACTS                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  CORE PLATFORM HOST PROCESS (TypeScript / Node.js Runtime)                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐ │
│  │   COMMERCIAL MODULE     │  │   CUSTOMS OCR MODULE    │  │   INVENTORY / COMPOUND  │ │
│  │   • Proforma Management │  │   • Dossier Ingestion   │  │   • Mobile Barcode Intake│ │
│  │   • Currency Quotas     │  │   • Line-Item Parsing   │  │   • Compound Locations  │ │
│  └───────────┬─────────────┘  └───────────┬─────────────┘  └───────────┬─────────────┘ │
│              │ In-Process Event Bus       │ Domain Contracts           │               │
│  ┌───────────┴─────────────┐  ┌───────────┴─────────────┐  ┌───────────┴─────────────┐ │
│  │   VEHICLE (VIN) HUB     │  │   DEALERSHIP PORTAL     │  │   TADARK ACL ADAPTER    │ │
│  │   • Golden Record       │  │   • Warranty Submission │  │   • Read-Only Mirror    │ │
│  │   • Allocation Logic    │  │   • Parts Order Dispatch│  │   • Voucher Bridge      │ │
│  └───────────┬─────────────┘  └───────────┬─────────────┘  └───────────┬─────────────┘ │
│              │                            │                            │               │
│  ════════════╪════════════════════════════╪════════════════════════════╪═════════════ │
│  DATABASE    ▼                            ▼                            ▼               │
│  SCHEMAS: [commercial.*]               [dealership.*]               [inventory.*]      │
│  (Strict logical isolation inside a single shared PostgreSQL 16+ instance)             │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Architectural Domain Modules

### Module 1: Commercial & Foreign Procurement (`modules/commercial`)
- **Domain Responsibilities:** Managing foreign supplier contracts, vehicle proforma dossiers, currency quota allocations, and shipment manifests.
- **Exposed Public Contract:** `CommercialService.getShipmentManifest(shipmentId)`, `CommercialService.verifyProformaStatus(proformaId)`.

### Module 2: Customs Dossier & Ingestion (`modules/customs`)
- **Domain Responsibilities:** Digital dossier collation, OCR queue management, tariff calculation rules, and clearance sign-off workflows.
- **Exposed Public Contract:** `CustomsService.ingestManifestPdf(stream)`, `CustomsService.getClearanceStatus(vin)`.

### Module 3: Vehicle Master Data & Allocation (`modules/vin-hub`)
- **Domain Responsibilities:** The authoritative enterprise Golden Record for all 17-character VIN entities, specification tracking, and dealership reservation state machines.
- **Exposed Public Contract:** `VinService.getVehicleByVin(vin)`, `VinService.reserveVinForDealer(vin, dealerId)`.

### Module 4: Central Compound & Inventory (`modules/inventory`)
- **Domain Responsibilities:** Physical vehicle storage compound grids, barcode scanner intake receipts, gate passes, and carrier dispatch manifests.
- **Exposed Public Contract:** `InventoryService.recordIntakeScan(vin, locationCode)`, `InventoryService.dispatchVehicle(vin)`.

### Module 5: Dealership Partner Ecosystem (`modules/dealership`)
- **Domain Responsibilities:** External dealer authentication, warranty repair claim filings, parts order dispatch, and credit line balance checks.
- **Exposed Public Contract:** `DealerService.submitWarrantyClaim(claimPayload)`, `DealerService.getOrderStatus(orderId)`.

### Module 6: Tadark Anti-Corruption Adapter (`modules/tadark-acl`)
- **Domain Responsibilities:** Managing read-only data queries against Tadark SQL tables, converting legacy rows to domain events, and publishing financial batch vouchers.
- **Exposed Public Contract:** `TadarkAclService.fetchLegacyInventoryBalances()`, `TadarkAclService.publishFinancialVoucher(voucherPayload)`.

---

## 2. In-Process Domain Isolation Rules
1. **Zero Direct Table Access:** Module A is strictly prohibited from executing SQL queries against tables owned by Module B. All inter-module queries must call the target module's exported Service interface.
2. **Asynchronous Decoupling via Domain Events:** Cross-module notifications (e.g., "Vehicle Customs Clearance Completed") are broadcast over an in-memory event bus (e.g., EventEmitter or Redis PubSub). The Commercial module does not block waiting for the Inventory module.
3. **Database Schema Partitioning:** Inside the single PostgreSQL database, each module owns its dedicated schema namespace (`commercial`, `customs`, `inventory`, `dealership`). Cross-schema SQL joins are rejected by continuous integration linting checks.

---

## 3. Migration Path to Independent Services (If Ever Required)
Because every module communicates via explicit service interfaces and strictly partitioned schemas, any individual module (such as Customs OCR) can be extracted into an independent microservice container in less than two sprint cycles if high transactional scaling demands it in the future.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Enforce schema isolation and service interfaces across all modules; mandate automated CI rules barring cross-module SQL joins.
- **Open Questions:** Standardizing the domain event serialization format (Protocol Buffers vs. JSON Schema).
- **Next Actions:** Review [Coexistence & ACL](./coexistence-and-acl) to examine legacy synchronization mechanisms.
