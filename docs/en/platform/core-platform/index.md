---
title: "Core Platform Architecture Concept"
lang: en
translation: /fa/platform/core-platform/
---

# Core Platform Architecture Concept

A frequent strategic error in organizations is conflating a **Core Platform** with an enterprise **ERP**. This document clarifies the architectural boundary, guiding philosophy, and shared services provided by Arian Khodro's Core Platform.

---

## 1. Key Distinction: Core Platform vs. ERP

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   Application & Business Layer                         │
│       [CRM System]        [Tadark Accounting System]   [Dealer Portals] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Standard JSON / REST APIs
┌───────────────────────────────────▼────────────────────────────────────┐
│                    Arian Khodro Core Platform                          │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────┐  │
│  │ Central Identity      │  │ API Gateway           │  │ Master     │  │
│  │ (SSO & RBAC)          │  │ & Traffic Management  │  │ Data (MDM) │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────┐  │
│  │ Event Messaging Bus   │  │ Immutable Audit Trail │  │ APM        │  │
│  │ (Kafka / RabbitMQ)    │  │ & Security Logging    │  │ & Metrics  │  │
│  └───────────────────────┘  └───────────────────────┘  └────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

| Dimension | Enterprise ERP | Core Platform |
| :--- | :--- | :--- |
| **Definition** | A monolithic commercial software package for finance, HR, and inventory | A modular infrastructure layer connecting all software applications |
| **Workflow Coupling** | Forces the business to adapt to rigid, pre-built ERP workflows | Imposes no rigid business rules; offers reusable identity, data, and integration services |
| **Agility & Replaceability** | Migrating or replacing an ERP takes years with massive risk | Highly modular; apps like CRM or accounting can be swapped without touching shared services |

---

## 2. Four Pillars of the Core Platform

1. **[Centralized Identity & Access (SSO & RBAC)](/en/platform/core-platform/identity-access)**: Single login across all systems, eliminating fragmented credentials.
2. **[API Management & Integration Gateway](/en/platform/core-platform/api-gateway)**: Secure, rate-limited communication bridge between Tadark, CRM, and dealership networks.
3. **[Master Data Management (MDM)](/en/platform/core-platform/master-data)**: The definitive source of truth for Customer, Vehicle (VIN), and Spare Parts master entities.
4. **Immutable Audit & Observability**: Centralized transaction logging, tamper-proof audit trails, and distributed tracing.
