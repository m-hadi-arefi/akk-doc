---
title: "15 — WMS Discovery"
lang: en
translation: /fa/current-state/15-wms-discovery
---

# 15 — WMS Discovery

## Warehouse Management System (WMS) Audit
During the Day 01 discovery sprint, an in-depth technical workshop was conducted with the technical team representing the external WMS software vendor and Arian Khodro warehouse supervisors.

---

## Product Capabilities & Domain Scope
The vendor's software represents an advanced, highly specialized logistics suite designed to bridge physical warehouse execution with enterprise planning:
1. **Layered Operational Triad:** Incorporates Warehouse Management System (WMS), Warehouse Execution System (WES), and Warehouse Control System (WCS) capabilities.
2. **Dynamic Item Coding & Standards:** Supports dynamic taxonomy, ISO 8000 master data quality standards, and GS1 global data standards.
3. **Storage & Compatibility Rules:** Multi-constraint storage graphs that prevent incompatible automotive chemicals or oversized components from sharing identical rack bays.
4. **Packaging & Nested Hierarchies:** Deep multi-level packaging hierarchies: Item Piece → Box → Carton → Master Pack → Pallet → Container, with full lot/batch traceability.
5. **Physical Warehouse Addressing:** Multi-tier 3D location indexing: Zone → Aisle → Bay → Level → Bin / Slot.
6. **Execution Algorithms:** Directed Putaway, Batch/Wave Picking optimization, travel path minimization, and cyclical inventory counting (Cycle Counting).
7. **Labor & Task Management:** Dynamic assignment of material handling tasks to floor operators via rugged mobile handheld terminals.

---

## Hardware Architecture & Field Infrastructure
- **Mobile Handheld Scanners:** Designed for rugged industrial Android handhelds (Zebra TC series or Newland terminals) equipped with long-range 1D/2D barcode imagers and RFID antennas.
- **Terminal Fleet Size:** 20 active handhelds currently planned for initial deployment, expanding to 45 terminals at full multi-warehouse capacity.
- **Thermal Printers:** Industrial Zebra thermal transfer barcode and shipping label printers positioned at inbound inspection and outbound staging docks.
- **Warehouse Wireless Infrastructure:** Industrial high-density Wi-Fi mesh network with seamless 802.11r/k roaming across warehouse aisles to prevent handheld disconnections.

---

## Technical Stack & Architecture
- **Application Core:** Developed on **.NET 10** utilizing a Modular Monolith architecture, with selective microservice boundaries for asynchronous event handlers.
- **Data Storage & Persistence:**
  - **Microsoft SQL Server:** Primary transactional relational store for inventory balances and warehouse topology.
  - **MongoDB:** Flexible document store for dynamic product catalogs, variable SKU attributes, and packaging graphs.
  - **Redis:** High-speed in-memory cache for handheld session states and bin lock reservations.
  - **EventStore:** Immutable append-only event log capturing every physical inventory movement.
  - **Cassandra:** Evaluated/selectively utilized for high-throughput time-series sensor or RFID telemetry.
- **Messaging & Integration:** **RabbitMQ** message broker for asynchronous event distribution and decoupled service communication.
- **API Interfaces:** RESTful HTTP endpoints and WebSocket streams for real-time mobile terminal communication.

---

## Deployment History & Engagement Status
- **Product Origin:** Software development originated around **1400 (circa 2021)**.
- **Industry Deployments:** Reported approximately **8 commercial enterprise deployments** across Iranian distribution and manufacturing firms.
- **Arian Khodro Timeline:** Engagement commenced in **Aban of the previous year**. Due to corporate interruptions, infrastructure reviews, and integration deliberations, effective operational progress represents approximately **4 to 5 net months**.

---

## Critical Distinction: Vendor Claims vs. Verified Facts

| Architectural Dimension | Vendor Claim | Independently Verified Fact | Confidence Level |
| :--- | :--- | :--- | :---: |
| **Architectural Depth** | Modular .NET 10 with CQRS and Event Sourcing | .NET stack and polyglot persistence confirmed in technical workshop | **High** |
| **Handheld Usability** | Zero latency, intuitive barcode picking | UI demonstrated in simulated staging; floor testing pending | **Medium** |
| **8 Client Deployments** | Proven production stability in 8 large enterprises | Reported by vendor; reference customer calls not yet conducted | **Low** |
| **Inventory Source of Truth** | WMS can effortlessly synchronize with Tadark | Integration currently relies on fragile custom web service patches | **Verified Risk** |
