---
title: "24 — Architecture Decisions & Working Hypotheses"
lang: en
translation: /fa/current-state/24-architecture-decisions-and-hypotheses
---

# 24 — Architecture Decisions & Working Hypotheses

## ISO 42010 Architectural Governance Framework
Rigorous enterprise architecture requires an unambiguous distinction between **empirically verified facts**, **untested working hypotheses**, and **formally accepted architectural decisions**.

---

## Classification of Architectural Statements

### Category 1: Empirically Verified Facts [FACT]
- `[FACT-01]`: Central server room GE 10kVA UPS is overloaded to 120%–130% by laser printers, entering automatic bypass and exposing hosts directly to raw utility power.
- `[FACT-02]`: Historical storage failure on consumer Samsung 870 EVO SSD in RAID5 resulted in catastrophic array collapse and multi-week manual recovery.
- `[FACT-03]`: Production hypervisors are currently running on non-ECC consumer desktop gaming components (Intel Core i9-14900K, ASUS ProArt).
- `[FACT-04]`: Decimal truncation from 0.025 to 0.02 triggered an unintended order of ~200,000 screws with ~$1,000 direct financial loss.
- `[FACT-05]`: Active 15-day Didar CRM cloud SaaS trial is operational within the import department without enterprise ERP integration.
- `[FACT-06]`: The specialized WMS codebase is built on .NET 10 with RabbitMQ, SQL Server, MongoDB, and EventStore, residing on the vendor's private GitHub.
- `[FACT-07]`: Commercial operations currently rely on manual paper manifests and phone calls for customer credit approvals, quotes, picking, and delivery.

### Category 2: Working Hypotheses Requiring Validation [HYPOTHESIS]
- `[HYPO-01]`: Secondary backup ISP line will automatically absorb enterprise traffic without manual routing intervention during primary fiber cut.
- `[HYPO-02]`: Commercial off-the-shelf CRM solutions (e.g. Dana or customized Didar) will achieve higher user adoption than completing the internal 1000-user prototype.
- `[HYPO-03]`: The WMS vendor's .NET 10 modular monolith can be containerized and successfully hosted on Arian Khodro's on-premise infrastructure without performance degradation.
- `[HYPO-04]`: Replacing Tadark's direct warehouse updating with an asynchronous event-driven anti-corruption layer will not break historical financial reporting.

### Category 3: Formal Architectural Decisions [DECISION]
- `[ADR-01]`: **Decouple Printers from UPS:** Non-server electrical appliances must be physically disconnected from the server room UPS circuit immediately.
- `[ADR-02]`: **Halt 64-Bit Tadark Modernization:** Recompiling Tadark to 64-bit is rejected as an enterprise modernization strategy. Modernization will proceed via the Strangler Fig pattern.
- `[ADR-03]`: **Physical vs Commercial Inventory Separation:** WMS is formally designated as the sole authority for physical warehouse execution; Borhan and sales platforms own commercial/financial orders.
- `[ADR-04]`: **Mandatory Source Code Governance:** No external vendor platform will receive final operational acceptance without source code escrow, DDL scripts, and automated deployment blueprints.
- `[ADR-05]`: **Controlled POC for CRM:** CRM procurement is conditionally halted until a 21-day real-world proof-of-concept tests actual orders and delivery workflows.
