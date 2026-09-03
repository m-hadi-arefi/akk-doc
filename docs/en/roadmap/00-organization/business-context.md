---
title: "Business Context"
lang: en
translation: /fa/roadmap/00-organization/business-context
---

# Business Context

[[DRAFT]]

## Purpose

This section captures the business context for the Architecture & Digital Transformation program. It describes the organization, its business capabilities, and the environment in which the software systems operate.

## Organization Overview

### Known Information

- Arian Khodro is an organization with multiple business and software systems.
- The organization currently operates a legacy accounting system called **Tadark** (Delphi-based, 32-bit).
- The organization has business capabilities that include at least: Sales, Warehouse, Delivery, CRM, Customer Management, Analytics, Accounting.

### Unknown Information

- Organization size, departments, and reporting structure.
- Number of employees using software systems daily.
- Geographic scope (single location, multiple branches, etc.).
- Business model and revenue streams.
- Industry-specific processes and regulations.
- Organizational culture and change readiness.
- Stakeholder map (who decides, who is impacted, who uses what).

> **These gaps must be filled before the business architecture can be finalized.** See `docs/19-discovery-questions/01-organization.md`.

## Business Capabilities

Business capabilities describe what the organization does to deliver value. The following is an **initial inventory** — it is incomplete and must be validated.

| Capability | Description | Status |
|---|---|---|
| Sales | Managing sales processes, orders, and pipelines | `[[QUESTION]]` |
| Customer Management | Managing customer records and relationships | `[[QUESTION]]` |
| Warehouse | Managing warehouse operations and storage | `[[QUESTION]]` |
| Delivery | Managing delivery and logistics operations | `[[QUESTION]]` |
| Accounting | Financial recording and reporting (Tadark) | `[[KNOWN]]` |
| CRM | Customer relationship management | `[[QUESTION]]` |
| Reporting & Analytics | Business reporting and data analysis | `[[QUESTION]]` |
| Inventory | Managing stock levels and inventory movements | `[[QUESTION]]` |
| Human Resources | Employee management and payroll | `[[QUESTION]]` |
| Procurement | Purchasing and supplier management | `[[QUESTION]]` |
| Production / Manufacturing | Production planning and execution | `[[QUESTION]]` |
| Quality Management | Quality control and assurance | `[[QUESTION]]` |
| Compliance & Regulatory | Regulatory compliance and reporting | `[[QUESTION]]` |

### Capability Mapping Notes

- Some capabilities may be combined or split as we learn more about the actual business processes.
- Each capability should have a **capability owner** identified during discovery.
- Capabilities should be ranked by **business criticality** and **current pain level**.

## Business Drivers

### Known Drivers

- Need to modernize the software ecosystem without disrupting operations.
- Tadark (legacy accounting system) is reaching end-of-life or is technically constrained.
- The organization wants a more coherent architectural foundation for future growth.

### Unknown Drivers

- What would happen if Tadark failed tomorrow?
- Are there competitive pressures driving this transformation?
- Are there regulatory requirements forcing modernization?
- What are the current pain points reported by business users?
- What are the current workaround processes and manual tasks?

## Business Processes

### Known Processes

- Accounting and financial reporting (via Tadark).
- Sales operations.
- Warehouse operations.
- Delivery operations.

### Unknown Processes

- End-to-end order-to-cash process.
- Procure-to-pay process.
- Inventory management process.
- Customer onboarding process.
- Reporting and analytics workflow.
- How data flows between systems today.

## Organizational Structure

### Unknown

- Who owns each business capability?
- Who owns each system?
- Is there an IT department? What is its size and structure?
- Who are the business stakeholders for this transformation?
- Who is the executive sponsor?
- Are there business process owners?

---

*This document is a `[[DRAFT]]`. All unknown items must be validated through discovery interviews and document review before proceeding.*
