# Roadmap Stage 01: Business Analysis & Requirements Engineering

## Purpose & Scope
Standardize how software needs are discovered, analyzed, and translated into unambiguous engineering specifications using **BABOK v3** (Business Analysis Body of Knowledge) practices.

## Core BABOK Practices in Arian Khodro

### 1. Problem & Needs Discovery
- **Problem Statement Formulation**: Defining root issues rather than symptoms. For example, rather than saying "we need a new ERP", we define "workshop repair orders experience 48-hour accounting reconciliation lag due to manual batch exports from Tadark".
- **Current State Assessment**: Documenting system bottlenecks, data silos, and operational workarounds (see [Current State](./current-state.md)).
- **Gap Analysis**: Formulating the target capability delta between AS-IS reality and TO-BE requirements.

### 2. Requirements Engineering
- **Functional Requirements (FR)**: Precise behavioral specifications, state transitions, inputs, validations, and outputs.
- **Non-Functional Requirements (NFR)**: Quantified constraints covering performance (p99 latency < 200ms), availability (99.9% uptime during business hours), security (RBAC/ABAC enforcement), and recovery (RPO < 5m, RTO < 1h).
- **Requirements Traceability Matrix (RTM)**: Direct linkage ensuring every API endpoint, database column, or UI feature maps directly to a signed-off business need.

### 3. Solution Evaluation
- Validating whether proposed software options address the actual problem without introducing disproportionate complexity or technical debt.

## Associated Documents
- [Current State Analysis](./current-state.md) — Inventory of legacy systems, integrations, and operational pain points.
- [Systems Inventory](./systems-inventory.md) — Comprehensive catalog of systems in operation across Arian Khodro.
- [Business Requirements Template](../../knowledge/templates/overview.md#business-requirements-document-brd) — Copy/paste ready specification template.
