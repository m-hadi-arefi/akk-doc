---
title: "Roadmap Stage 06: Data Architecture & Master Data Management"
lang: en
translation: /fa/roadmap/06-data-architecture/
---

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

## AI in this Stage

### AI Assistance
- **Data Dictionary Synthesis**: Scan legacy database schemas to extract field descriptions, data types, and foreign key relations.
- **Entity Matching & Deduplication**: Analyze customer, vehicle, and spare part records to identify duplication across siloed databases.
- **Data Lineage Mapping**: Trace data transformations from source systems through pipelines to analytics dashboards.

### Human Decision
- **System of Record (SoR)**: Designating the canonical master source for critical business entities (Vehicle, Customer, Parts).
- **Data Retention & Privacy**: Setting retention windows and compliance policies for financial and customer identity data.

### Human Approval
- **Required Sign-Off**: Chief Data Officer (CDO) & Enterprise Data Architect.

### Risks
- **Data Corruption**: Merging disparate legacy records with incorrect key matching, corrupting vehicle maintenance histories.
- **Taxonomy Desynchronization**: Misaligning spare part catalog hierarchies with international supplier catalogs.

### Required Evidence
- Enterprise Master Data Management (MDM) Entity Specifications.
- Enterprise Data Dictionary and Conceptual/Logical Data Models.
- Data Governance and Access Control Charter.
