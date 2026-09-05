---
title: "19 — Data Ownership & Source of Truth"
lang: en
translation: /fa/current-state/19-data-ownership-and-source-of-truth
---

# 19 — Data Ownership & Source of Truth

## Canonical Data Ownership Matrix
Ambiguity regarding which system or department authoritatively owns corporate data entities is the primary driver of software desynchronization and operational errors at Arian Khodro. This matrix formally defines the authoritative System of Record (SoR), System of Reference, data creators, and verification status across 17 core business entities.

---

## Master Data Ownership Matrix

| Business Entity | System of Record (SoR) | System of Reference | Business Data Owner | Technical Owner | Created By | Updated By | Primary Consumers | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| **Customer Master Record** | Not Yet Determined | Borhan, Didar, Tadark, Portal | Sales Management | IT / CRM Admin | Salesperson / Admin | Sales & Accounting | Finance, Logistics, Sales | **Ambiguous** |
| **Customer KYC Documents** | Not Yet Determined | Personal Chats, Local Files | Sales & Legal | IT Infrastructure | Sales Representative | Legal / Compliance | Management, Credit | **Critical Gap** |
| **Customer Credit Limit** | Finance / Borhan | Sales Spreadsheets, Memory | Financial Controller | Accounting IT / Mr. Khani | Accounting Director | Finance Department | Sales, Logistics | **Verified** |
| **Product Master (SKU)** | Not Yet Determined | Tadark, WMS, Jahan Gostar | Procurement & Parts | IT / Database Admins | Procurement Specialist | WMS / Catalog Admin| All Departments | **Severe Conflict** |
| **Product Attributes & Specs**| WMS / Catalog DB | Jahan Gostar Website | Engineering & Parts | WMS Vendor / Devs | Parts Cataloger | WMS Admin | Sales, Logistics | **Verified** |
| **Physical Inventory State** | Specialized WMS | Tadark, Physical Shelves | Warehouse Operations | WMS Vendor Team | Warehouse Laborer | Handheld Operators | Sales, Finance | **Verified** |
| **Warehouse Shelf Location** | Specialized WMS | Paper Aisle Labels | Warehouse Operations | WMS Vendor Team | WMS Supervisor | Handheld Operators | Warehouse Handlers | **Verified** |
| **Official Price Lists** | Sales Management | Borhan, Excel Lists | Commercial Director | Sales IT / Admin | Commercial Director | Commercial Director | Sales, Customers | **Verified** |
| **Sales Quotation** | Not Yet Determined | Excel Files, Sales Memory | Sales Representative | Local Workstation | Sales Representative | Sales Representative | Customer, Sales | **Severe Gap** |
| **Confirmed Sales Order** | Not Yet Determined | Borhan Invoice, Paper Slip | Sales Management | Accounting IT | Salesperson / Finance | Accounting | Warehouse, Logistics | **Fragmented** |
| **Official Sales Invoice** | Borhan Accounting | Physical Paper Invoices | Finance Department | Mr. Khani / Vendor | Accounting Clerk | Accounting Clerk | Tax Auditor, Customer | **Verified** |
| **Payment Receipt / Bank** | Borhan Accounting | Bank Portals, POS Slips | Treasury & Finance | Accounting Staff | Treasury Specialist | Cashier / Accountant | Finance, Sales | **Verified** |
| **Accounts Receivable** | Borhan Accounting | Sales Follow-up Spreadsheets | Credit Controller | Mr. Khani / Accounting | Invoicing Engine | Treasury Cashier | Sales, Management | **Verified** |
| **Delivery Manifest** | Not Yet Determined | Paper Slips, Driver Notes | Logistics Supervisor | Fleet Manager | Logistics Clerk | Delivery Driver | Driver, Warehouse | **Manual Paper** |
| **Product Returns (RMA)** | Not Yet Determined | Informal Warehouse Pile | Customer Service | Unknown | Customer Service Rep | Warehouse Inspector | Accounting, Sales | **Critical Gap** |
| **Supplier Master Record** | Tadark | Borhan Accounts Payable | Procurement Dept | Legacy Admin | Purchasing Officer | Purchasing Officer | Finance, Customs | **Verified** |
| **Import Vehicle Contract** | Commercial Legal | Physical Safe, Scans | Legal & Commercial | Corporate Secretary | Legal Officer | Executive Director | Management, Bank | **Verified** |

---

## Diagnostic Synthesis:
1. **The Three Critical Data Voids:** Customer Master Records, Product Master Catalog, and Returns (RMA) have **no authoritative System of Record**. They exist simultaneously in multiple competing software tables.
2. **Operational Consequence:** Because Product Master data is duplicated between Tadark and the WMS, new parts entered in Tadark often fail to inherit the multi-layer packaging and storage rules required by the WMS handhelds.
