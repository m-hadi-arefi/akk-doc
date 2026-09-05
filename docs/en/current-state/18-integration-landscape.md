---
title: "18 — Integration Landscape"
lang: en
translation: /fa/current-state/18-integration-landscape
---

# 18 — Integration Landscape

## Enterprise Integration Architecture Audit
Business agility at Arian Khodro is constrained by fragile, point-to-point connections linking legacy software, specialized vendor modules, and commercial databases. This document maps active and proposed integrations, identifying failure modes and protocol fragility.

---

## Inter-System Integration Matrix

| Integration Link | Data Exchanged | Direction | Protocol / Format | Frequency | Sync / Async | Failure Behavior | Idempotency | Known Fragility |
| :--- | :--- | :---: | :--- | :--- | :---: | :--- | :---: | :--- |
| **Tadark ◄► WMS** | Stock balance adjustments, receipts | Bi-directional | Custom HTTP / XML Web Service | Periodic / Ad-hoc | Sync | Overwrite with drift | No | Critical: Desynchronization during network drops. |
| **Borhan ◄► Tadark** | Purchase orders, financial costs | Tadark ──► Borhan | Direct DB Table Query / Manual Export | Daily | Manual / Batch | Duplicate records | No | Severe: Manual Excel re-import and transcription errors. |
| **Jahan Gostar ◄► Legacy Backend** | Parts catalog, orders | Bi-directional | REST / JSON | Real-time | Sync | HTTP 500 error | Unknown | High: Missing source code for legacy backend APIs. |
| **Jahan Gostar ◄► Supabase** | Modernized user profiles, B2B cart | Bi-directional | PostgREST / WebSocket | Real-time | Sync | UI retry popup | Yes | Prototype stage; RLS policies require validation. |
| **Didar CRM ◄► VoIP (Issabel)** | Inbound caller ID lookup, call logs | Issabel ──► Didar | Webhook / Asterisk AMI | Real-time | Async | Dropped call logs | No | Fragile: Drops events if external cloud webhook fails. |
| **Sales ◄► SMS Gateway** | Quotation approval links, OTPs | Sales ──► SMS Provider | HTTPS REST API | Real-time | Sync | SMS queue timeout | Yes | High external dependency on telecom network delivery. |
| **Delivery ◄► Warehouse** | Invoiced picking tasks | Borhan ──► Warehouse | Printed Paper Manifests | Manual | Batch | Physical loss of slips| N/A | Total breakdown: 100% paper-based handoff. |
| **Customer ◄► Sales Rep** | Quotation requests, proofs of payment | Customer ◄► Rep | WhatsApp / Phone Call | Ad-hoc | Async | Ignored / buried chats| N/A | Severe commercial leakage and unlogged agreements. |

---

## Structural Integration Topology

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CURRENT FRAGILE POINT-TO-POINT TOPOLOGY                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   [ Jahan Gostar ] ──(Sniffed REST)──► [ Legacy Backend ]                             │
│                                               ▲                                        │
│                                               │ (Manual Export)                        │
│   [ Borhan Accounting ] ◄──(Direct SQL)───────┼───► [ Tadark Legacy (32-bit) ]         │
│           │                                   │             ▲                          │
│      (Paper Slip)                             │       (Fragile WS)                     │
│           ▼                                   ▼             ▼                          │
│   [ Warehouse Floor ] ◄───────────────────────────────► [ WMS (.NET 10) ]              │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Architectural Vulnerabilities in Current Integrations:
1. **Direct Database Coupling:** Systems querying underlying relational tables directly bypass business rule validations and cause locking deadlocks.
2. **Synchronous Point-to-Point Chains:** If Tadark or an external cloud webhook is unresponsive, the calling service blocks and fails rather than queuing messages.
3. **Absence of an Integration Bus (Enterprise Service Bus / Broker):** There is no centralized API gateway or event router enforcing authentication, throttling, schema validation, and retry queues.
