---
title: "Data Architecture & Master Data Hub"
lang: en
translation: /fa/initial-review/03-digital-and-software/data-architecture
---

# Data Architecture & Master Data Hub

## Executive Summary
This document establishes the enterprise data architecture and Master Data Management (MDM) strategy for Arian Khodro. At the center of this architecture sits the **VIN Golden Record Hub**, providing a single, authoritative source of truth for every vehicle from overseas proforma registration to final consumer warranty expiration. We detail PostgreSQL relational schema partitioning, data pipelines, retention policies, and encryption standards.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        ENTERPRISE DATA TOPOLOGY & PIPELINES                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  OPERATIONAL TRANSACTIONAL STORE (PostgreSQL 16+)                                      │
│  ├── [schema: vin_master]    ► Vehicle Golden Records, specifications, state machine   │
│  ├── [schema: parts_catalog] ► Canonical SKUs, OEM codes, pricing, supersessions      │
│  ├── [schema: dealership]    ► Partner profiles, warranty claims, credit ledgers       │
│  └── [schema: audit_trail]   ► Append-only statutory audit log of all record mutations │
│                                                                                        │
│  IN-MEMORY & OBJECT STORES                                                             │
│  ├── Redis 7+ Cluster        ► High-speed VIN reservation locks, session state         │
│  └── MinIO (S3-Compatible)   ► Customs invoices, vehicle inspection photos, PDFs       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. The Vehicle (VIN) Golden Record Schema
The Vehicle Identification Number (VIN) is the immutable primary identifier across all systems.
- **Primary Attributes:** 17-character alphanumeric string (ISO 3779 compliant), Engine Number, Transmission Code, Production Date, Model Code, Exterior Color Code, Interior Trim Code.
- **Operational Lifecycle State Machine:**
  `PROFORMA_ORDERED` ➔ `PORT_DISCHARGED` ➔ `CUSTOMS_CLEARED` ➔ `COMPOUND_INTAKE` ➔ `ALLOCATED_DEALER` ➔ `INVOICED_SOLD` ➔ `WARRANTY_ACTIVE` ➔ `RETIRED`.
- **Concurrency & Reservation Rules:** Reserving a VIN for a dealership requires an atomic distributed lock in Redis backed by an immediate PostgreSQL database row update (`SELECT ... FOR UPDATE`). Double-booking is mathematically impossible.

---

## 2. Canonical Parts Catalog & Master SKU Governance
Spare parts fragmentation is resolved through a unified master catalog:
- **Canonical SKU:** Standardized internal part number mapped to multiple foreign manufacturer OEM codes.
- **Supersession Chains:** Explicit modeling of obsolete parts replaced by newer revisions, preventing dead inventory stockpiles.
- **Unit Costing:** Real-time moving average cost calculated from customs tariffs, shipping freight, and purchase invoices.

---

## 3. Append-Only Audit Logging & Data Governance
Automotive compliance and statutory tax audits mandate immutable tracking:
- **Append-Only Ledger:** Any update to a VIN status, part price, or warranty claim writes a cryptographic record into the `audit_trail` schema containing: `timestamp`, `operator_user_id`, `ip_address`, `before_state_json`, `after_state_json`.
- **Zero Hard Deletes:** Deletion of operational records is architecturally prohibited. Records are transitioned to an `INACTIVE` or `ARCHIVED` status with full historical retention.
- **Data Encryption:** All data at rest is encrypted using AES-256; data in transit across web portals and APIs is strictly encrypted via TLS 1.3.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Declare the VIN Golden Record schema as the sole legal inventory truth; mandate append-only audit logging across all entities.
- **Open Questions:** Storage capacity provisioning for multi-year vehicle handover photographic records.
- **Next Actions:** Review [API & Integration Architecture](./api-and-integration) to explore interface standards.
