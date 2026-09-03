---
title: "Audit Service Specification"
lang: en
translation: /fa/platform/audit/overview
---

# Audit Service Specification

## Problem
Regulatory compliance, financial forensics, and security reviews require an immutable record of sensitive user actions, which legacy systems either logged inconsistently or stored in modifiable SQL tables.

## Purpose
Provide a centralized, tamper-evident, append-only audit trail capturing all critical business transactions and security events across Arian Khodro.

## Responsibilities
- Ingesting structured audit events via asynchronous Kafka topics.
- Ensuring immutable write-once storage (WORM storage / append-only logs).
- Providing authorized security and compliance officers with query and search capabilities.
- Enforcing retention policies (e.g. 7-year regulatory retention for financial and ownership mutations).

## Audit Event Schema
```json
{
  "event_id": "uuid-v4",
  "timestamp": "2026-09-03T10:00:00Z",
  "actor": {
    "user_id": "usr_9481",
    "username": "reza.ahmadi",
    "ip_address": "192.168.10.45",
    "user_agent": "Mozilla/5.0..."
  },
  "action": "VEHICLE_TITLE_TRANSFERRED",
  "resource": {
    "type": "vehicle",
    "id": "VIN_99482019482"
  },
  "changes": {
    "previous_owner_id": "cust_102",
    "new_owner_id": "cust_882"
  },
  "status": "SUCCESS"
}
```
