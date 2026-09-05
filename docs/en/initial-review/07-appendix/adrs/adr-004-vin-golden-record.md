---
title: "ADR-004: Central VIN Golden Record & Master Data Management"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-004-vin-golden-record
---

# ADR-004: Central VIN Golden Record & Master Data Management

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
In Arian Khodro, vehicle inventory information is fragmented across commercial spreadsheets, Tadark accounting tables, customs manifests, and sales allocation sheets. This information drift leads to double-booking vehicles, delayed retail handovers, and inaccurate financial margins. The enterprise requires a single, authoritative master record for every vehicle.

## Decision Drivers
1. **Single Source of Truth:** One authoritative record per vehicle, eliminating conflicting spreadsheet claims.
2. **Deterministic Lifecycle States:** A standardized state machine tracking vehicles from foreign proforma to warranty retirement.
3. **Concurrency Protection:** Mathematical prevention of simultaneous vehicle reservation by competing dealerships.

## Considered Options
1. **Option 1: Maintain Spreadsheets with Central Network Drive Locking** (Continue using Excel with shared drive file permissions).
2. **Option 2: Tadark Database as VIN Master** (Attempt to force all vehicle metadata into legacy Tadark tables).
3. **Option 3: Central VIN Golden Record Hub inside Core Platform** (Dedicated `vin_master` schema in PostgreSQL with Redis distributed locking).

## Decision Outcome & Rationale
**Chosen Option: Option 3: Central VIN Golden Record Hub.**
- **Rationale:** Spreadsheets cannot provide atomic multi-user concurrency. Tadark's legacy database lacks support for detailed vehicle specification options and modern API events. The dedicated VIN Hub establishes an immutable golden record: 17-character ISO 3779 compliant primary key, explicit lifecycle state machines, and Redis-backed atomic reservation endpoints.

## Consequences
- **Positive:** 100% elimination of double-booked vehicles; complete transparency into port, customs, and compound inventory; authoritative base for vehicle margin analytics.
- **Negative:** Existing sales and warehouse managers must abandon private allocation spreadsheets and utilize the platform interface.
- **Mitigation:** The sales module is designed with spreadsheet-speed inline filtering and keyboard navigation to ensure a frictionless transition.
