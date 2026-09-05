---
title: "23 — Master Data Management & Data Quality"
lang: en
translation: /fa/current-state/23-master-data-and-quality
---

# 23 — Master Data Management & Data Quality

## Data Quality: The Silent Inhibitor of Automation
A recurring finding across all discovery workshops is that software failures at Arian Khodro are frequently symptoms of underlying data contamination rather than purely software coding defects. Duplicate customer records, inconsistent parts numbering, missing attribute standards, and unverified decimal multipliers systematically distort business operations.

---

## The Four Critical Master Data Domains

### 1. Customer Master Data (B2B & B2C)
- **Observed State:** Customer profiles exist concurrently across personal sales notebooks, Borhan accounting accounts, Didar trial leads, and the Jahan Gostar portal database.
- **Deduplication Gap:** There is no systemic enforcement of unique identifiers (National Tax ID / National Identification Code). A single commercial distributor may exist under three slightly different company titles across branches.
- **Impact:** Misallocated credit limits, bifurcated historical purchase volumes, and inability to calculate true customer lifetime value (LTV).

### 2. Product & Parts Master Data (SKU Governance)
- **Observed State:** Product numbers originated in legacy Tadark catalogs. When parts are imported, commercial teams assign descriptions without strict ISO 8000 / GS1 taxonomies.
- **Attribute Inconsistency:** Dimensions (length, width, height, weight), fragile packaging indicators, and hazardous material flags are absent in Tadark, forcing warehouse operators to re-measure parts upon intake.
- **Impact:** The specialized WMS cannot calculate volumetric bin packing or truck cubing algorithms without accurate master dimensional metadata.

### 3. Pricing & Discount Matrix
- **Observed State:** Official price updates are distributed via manual Excel sheets or memorandums.
- **The Decimal Risk:** As evidenced by the screw procurement disaster (where 0.025 was truncated to 0.02), precision formatting and numeric types lack rigorous validation at API entry points.
- **Impact:** Erroneous quotations and unbudgeted commercial margin erosion.

### 4. Financial & Chart of Accounts
- **Observed State:** High integrity maintained within Borhan by Mr. Khani and financial controllers; however, the chart of accounts is tightly coupled to manual data entry rather than automated programmatic journals.

---

## Master Data Quality Assessment

| Master Data Domain | Completeness | Uniqueness | Accuracy | Timeliness | Overall Health | Priority Action |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Customer Registry** | 60% | 45% | 70% | 50% | **Critical** | Enforce National ID as immutable primary key. |
| **Product Master (SKUs)**| 55% | 75% | 65% | 40% | **Severe** | Mandate dimensions and GS1 barcodes for all SKUs. |
| **Pricing & Margin Rules**| 85% | 90% | 80% | 85% | **Moderate** | Centralize price matrix with 4-decimal precision. |
| **Vendor & Supplier** | 80% | 85% | 85% | 70% | **Good** | Digitize customs clearance and foreign bank routing. |
| **Warehouse Locations** | 95% | 98% | 90% | 95% | **Strong** | Maintain WMS 3D location indexing. |

---

## Target Master Data Management (MDM) Architecture
```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TARGET MASTER DATA GOVERNANCE PIPELINE                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Data Ingestion ──► Quality Profiling ──► Deduplication ──► Golden Record ──► Synced   │
│  (Customer/SKU)     (Schema & Types)      (National ID)     (Single Source)   (Pub/Sub)│
└────────────────────────────────────────────────────────────────────────────────────────┘
```
