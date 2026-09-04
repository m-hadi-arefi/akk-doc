---
title: "Step 3: Development of Assessment Outcomes & Initial Core Platform"
lang: en
translation: /fa/roadmap/03-development-and-core-platform
---

# Step 3: Development of Assessment Outcomes & Initial Core Platform

In this third stage, the initiative transitions from analytical assessment and decision governance into active implementation and software engineering. All prioritized capabilities identified in Step 1 (Discovery) and designated for internal development through Step 2 (Decision Cycle) enter the software delivery pipeline.

---

## 1. Engineering the Priorities Discovered During Assessment

Guided by business needs and operational bottlenecks discovered in commercial and financial departments, implementation focuses on high-impact areas:
1. **Spreadsheet Elimination & Validated Web Interfaces**: Engineering responsive web interfaces for foreign procurement, customs dossier tracking, and spare parts requisition.
2. **Automated Document Reconciliations & Customs Calculation Engines**: Coding validation engines that compute currency conversion, import tariffs, and landed costs per vehicle chassis in real time.
3. **Integration Connectors**: Developing standardized integration adapters to pull siloed records from CRM instances and dealership portals into unified storage.

---

## 2. Our Initial Recommendation: Engineering the Core Platform

During architectural formulation, **our foundational recommendation was the implementation of a "Core Platform" to serve as the shared enterprise digital backbone.**

### What Is the Core Platform and Why Is It Vital?
The Core Platform is emphatically not a traditional, rigid ERP monolith. Instead, it is a **lightweight, modular shared capability layer** upon which all current and future business applications (whether built in-house, purchased as SaaS, or contracted to external vendors) securely connect.

Without a Core Platform, every newly introduced application inevitably degenerates into another disconnected data silo with its own fragmented logins and isolated databases.

```text
┌────────────────────────────────────────────────────────────────────────┐
│           Business Applications (CRM, Dealership Portal, Sales, App)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Core Platform                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │ Central SSO/IAM  │  │ API Gateway      │  │ Master Data (MDM)    │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐  │
│  │ Anti-Corruption  │  │ Message/Event    │  │ Centralized Audit &  │  │
│  │ Layer (ACL)      │  │ Streaming        │  │ Telemetry Logs       │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             Foundational & Legacy Systems (Tadark Delphi Database)     │
└────────────────────────────────────────────────────────────────────────┘
```

### Essential Capabilities of the Core Platform
1. **Centralized Identity & Access Management (SSO / IAM)**: A single enterprise identity provider supporting Role-Based Access Control (RBAC) across all administrative touchpoints.
2. **API Gateway & Event Streaming**: Standardized routing, rate limiting, and asynchronous message queues isolating downstream subsystems from cascading failures.
3. **Master Data Management (MDM)**: The definitive Single Source of Truth for canonical vehicle entities (indexed by VIN) and unified customer identities.
4. **Anti-Corruption Layer (ACL) & Legacy Tadark Adapter**: A resilient software bridge reading accounting and warehouse ledgers directly from Tadark databases without altering legacy Delphi code or risking operational downtime.

> 📚 **Detailed Technical Specifications:**  
> For complete architecture diagrams, database schemas, and interface specifications, explore the [Core Platform Architecture Documentation](/en/platform/core-platform/).
