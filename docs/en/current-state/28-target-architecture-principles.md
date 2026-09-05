---
title: "28 — Target Architecture Principles"
lang: en
translation: /fa/current-state/28-target-architecture-principles
---

# 28 — Target Architecture Principles

## Guiding North Star for Digital Transformation
To ensure technical investments deliver enduring business value and prevent the recurrence of architectural anti-patterns, all future system designs at Arian Khodro must adhere strictly to these seven core principles.

---

## The Seven Core Architectural Principles

### Principle 1: Single Canonical Source of Truth (SoR)
Every business entity (Customer, Order, SKU, Inventory, Invoice) must have exactly one authoritative System of Record. Other systems may consume or reference this data via approved APIs, but direct duplicate writing or parallel ledger maintenance is strictly prohibited.

### Principle 2: Strict Separation of Concerns (Physical vs. Commercial)
Physical execution logic (warehouse rack addressing, picking paths, handheld barcode validation) belongs exclusively to specialized logistics engines (WMS). Commercial logic (pricing, discounts, payment terms, contracts, customer accounts) belongs exclusively to commercial sales engines and accounting ERPs.

### Principle 3: Zero Point-to-Point Coupling (API-First & Event-Driven)
Systems must not query each other's underlying database tables directly. All inter-system communication must occur via documented REST/GraphQL APIs or asynchronous event brokers (RabbitMQ/Kafka) utilizing versioned, idempotent contracts.

### Principle 4: Full Code, Schema & Infrastructure Sovereignty
Arian Khodro must maintain legal and technical custody over its software assets. Vendor agreements must mandate repository mirroring, raw data export utilities, DDL database schemas, and containerized deployment runbooks before operational acceptance.

### Principle 5: Enterprise-Grade Infrastructure Standards
Production enterprise workloads must run on enterprise-certified hardware featuring ECC memory, redundant hot-swap power supplies, enterprise storage endurance (DWPD), and remote out-of-band management. Consumer gaming components are formally retired from core infrastructure roles.

### Principle 6: Defense-in-Depth & Usable Security
Security controls must safeguard enterprise assets without paralyzing employee workflows: *"Security should protect the organization, not become a cage."* Implement centralized credential vaults, role-based access control, automated backups adhering to the 3-2-1 rule, and network segmentation.

### Principle 7: Empirical Proof Before Procurement (POC Mandatory)
No enterprise software platform (including CRMs or ERP extensions) may be procured based solely on marketing demonstrations. Commercial selection requires a mandatory 21-day live proof-of-concept testing actual orders, field drivers, and operational edge cases.
