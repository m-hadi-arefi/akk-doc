---
title: "1-Year Transformation Roadmap"
lang: en
translation: /fa/roadmap/
---

# 1-Year Transformation Roadmap for Arian Khodro

This document outlines the actionable **1-year modernization plan structured into 3 four-month phases** for upgrading the enterprise software architecture of Arian Khodro. The chosen strategy is rooted in **iterative evolution with zero Big-Bang risk**, guaranteeing that financial, sales, inventory, and after-sales service operations remain fully functional without interruption.

---

## Three-Phase Delivery Matrix

| Phase | Timeframe | Phase Title | Key Milestones & Deliverables | Detailed Document |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1** | **Months 1–4** | **Discovery, Audit & Transition Architecture** | • Audit manual workflows and organizational bottlenecks<br>• Technical audit of Delphi-based Tadark system and database<br>• Mobilize compact agile team (Lead Architect + 2 Mid-level Developers)<br>• Design Anti-Corruption Layer (ACL) and Tadark Adapter | [Discovery & Bottlenecks](/en/roadmap/discovery)<br>[Tadark Legacy Strategy](/en/roadmap/legacy-tadark)<br>[Team Governance](/en/roadmap/team-governance) |
| **Phase 2** | **Months 5–8** | **Core Platform Engineering** | • Deploy centralized identity and Role-Based Access Control (RBAC)<br>• Establish API Gateway and event messaging backbone<br>• Implement Master Data Management (MDM) for vehicle and customer identities<br>• Pilot bi-directional data flow with Tadark without touching legacy code | [Core Platform Concept](/en/platform/core-platform/)<br>[Identity & RBAC](/en/platform/core-platform/identity-access)<br>[API Gateway & Messaging](/en/platform/core-platform/api-gateway)<br>[Master Data Management](/en/platform/core-platform/master-data) |
| **Phase 3** | **Months 9–12** | **CRM Integration, Migration & Rollout** | • Integrate CRM for unified customer and vehicle history<br>• Execute Strangler Fig pattern for autonomous financial and inventory modules<br>• Deploy full CI/CD pipelines, observability dashboards, and audit trails<br>• Operational handover and long-term organizational support | [CRM Integration & Security](/en/roadmap/integration-crm)<br>[Strangler Fig Pattern](/en/knowledge/patterns) |

---

## Executive Outcomes for the CEO

1. **Elimination of Data Silos**: Customer records and vehicle identification numbers (VIN) are unified across all systems, eliminating redundant manual entry and accounting discrepancies.
2. **Mitigated Legacy Dependency**: Critical dependency on the legacy Delphi system is decoupled via standard APIs, allowing business logic to migrate smoothly.
3. **Optimized Headcount and Costs**: By operating with a disciplined team of **one Lead System Architect** and **two Mid-level Developers**, costly team overhead is avoided while maximizing velocity.
4. **Foundation for AI Integration**: A clean, unified API architecture establishes the requisite prerequisite for automated invoice matching, customs OCR, and executive decision support.
