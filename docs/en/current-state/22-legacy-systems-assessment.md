---
title: "22 — Legacy Systems Assessment"
lang: en
translation: /fa/current-state/22-legacy-systems-assessment
---

# 22 — Legacy Systems Assessment

## The Legacy Burden: Tadark & 32-Bit Delphi Architecture
For over two decades, the **Tadark** system has served as the backbone of procurement, supply chain tracking, and historical inventory balances at Arian Khodro. Understanding its technical constraints and operational coupling is vital to planning an orderly modernization path.

---

## Technical Constraints of Tadark
1. **The 32-Bit Win32 Architecture:** Compiled on legacy Borland/Embarcadero Delphi 32-bit toolchains, the application process is fundamentally constrained by a **2GB to 4GB virtual address space limit**. As historical transaction tables expand, the client application experiences out-of-memory crashes during large reporting queries.
2. **Database Schema & Data Model:** Relies on legacy schema patterns lacking foreign key constraints and transactional isolation, resulting in orphan purchase records and historical inconsistencies.
3. **Desktop Client Coupling:** Requires individual installation on Windows desktop endpoints with direct database driver configuration (BDE / ODBC / ADO), creating immense helpdesk maintenance overhead.

---

## The Strategic Modernization Fallacy

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CRITICAL MODERNIZATION DIRECTIVE                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Recompiling or migrating Tadark to a 64-bit binary MUST NOT be treated as the        │
│  enterprise modernization strategy.                                                    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Why 64-Bit Recompilation is an Anti-Pattern:
- **Masking the Root Architectural Flaw:** Converting Tadark to 64-bit merely grants the executable access to more system memory; it does **zero** to resolve the fundamental problem: *the improper coupling of commercial procurement logic with physical warehouse execution.*
- **Sunk Capital & Technical Debt:** Pouring substantial development investment into refactoring obsolete Delphi codebases preserves legacy architectural lock-in rather than establishing reusable, API-first enterprise services.
- **Absence of Modern Integration:** A 64-bit Tadark would still lack native REST/GraphQL APIs, webhook publishing, containerized deployment, and web/mobile interfaces.

---

## The Pragmatic Modernization Strategy
Rather than embarking on a risky "Big Bang" rewrite or a futile 64-bit compiler upgrade, Arian Khodro must execute a phased **Strangler Fig & Anti-Corruption Layer (ACL)** migration:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        STRANGLER MIGRATION LIFECYCLE FOR TADARK                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  PHASE 1: STABILIZE & ENCAPSULATE                                                      │
│  ► Freeze new business feature development inside Tadark.                              │
│  ► Deploy an Anti-Corruption Layer (ACL) wrapping Tadark's database in clean APIs.     │
│                                                                                        │
│  PHASE 2: DECOUPLE WAREHOUSE INVENTORY                                                 │
│  ► Transfer all physical bin tracking and picking execution to the specialized WMS.    │
│  ► Tadark receives stock decrements strictly via asynchronous completion events.       │
│                                                                                        │
│  PHASE 3: GRADUAL PROCUREMENT RETIREMENT                                               │
│  ► Build modern web-based procurement capabilities inside the new Core Platform.       │
│  ► Relegate Tadark to a read-only historical regulatory archive.                       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
