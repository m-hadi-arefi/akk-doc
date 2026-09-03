---
title: "Event Platform Specification"
lang: en
translation: /fa/platform/event-platform/overview
---

# Event Platform Specification

## Problem
Direct point-to-point HTTP integrations between systems create tight temporal coupling, leading to cascading failures when one system experiences high latency or downtime.

## Purpose
Provide a scalable, fault-tolerant, asynchronous event backbone enabling decoupled, event-driven architecture across Arian Khodro.

## Responsibilities
- High-throughput, distributed event streaming (Apache Kafka).
- Schema Registry enforcing JSON Schema / Protobuf event contracts and backward compatibility.
- Dead Letter Queue (DLQ) management for unprocessable messages.
- Topic governance, partitioning strategy, and consumer group offset monitoring.

## Non-Responsibilities
- Does not guarantee synchronous immediate response times (inherently asynchronous).
- Does not replace transactional databases for relational querying.

## Core Enterprise Topics
- `arian.vehicle.lifecycle` (registered, allocated, delivered, serviced)
- `arian.customer.lifecycle` (created, updated, verified)
- `arian.workshop.repairs` (order_opened, parts_requested, work_completed, invoice_ready)
- `arian.accounting.journal` (entry_posted, reconciliation_needed)
