# Roadmap Stage 06: Data Architecture & Master Data Management

## Purpose & Scope
Establish enterprise data modeling, Master Data Management (MDM), streaming pipelines, and analytical data architecture across Arian Khodro.

## Master Data Management (MDM) Domains

Authoritative golden records must be established with clear ownership:
- **Vehicle Domain**: VIN, Chassis Number, Engine Serial, Model, Trim, Year, Color, Registration Status.
- **Customer Domain**: National ID, Legal Entity, Full Name, Verified Phone, Billing Address, History.
- **Supplier & Dealership Domain**: Dealership Code, Authorized Brands, Spare Parts Suppliers, Contracts.
- **Product & Parts Catalog**: SKU, Part Number, OEM Equivalents, Pricing, Unit of Measure.

## Data Tiering & Pipelines

```text
Operational Store (OLTP)
PostgreSQL / MySQL
        │
        ▼ (Debezium Change Data Capture)
Kafka Event Stream (Domain Events)
        │
        ├─────────────────────────────┐
        ▼                             ▼
Analytical Store (OLAP)        Core Platform MDM
ClickHouse / Lakehouse         Golden Record Hub
```

## Associated Documents
- [Data Architecture Overview](./overview.md) — Enterprise data modeling, flows, and schemas.
- [Current Data Inventory](./current-data.md) — Legacy database schemas, Tadark tables, and integration issues.
