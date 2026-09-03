---
title: "Architectural & Integration Patterns"
lang: en
translation: /fa/knowledge/patterns
---

# Architectural & Integration Patterns

This document defines proven architectural patterns employed across the Core Platform and legacy system modernization at Arian Khodro.

---

## 1. Strangler Fig Pattern

- **Definition**: Gradually replacing specific functional components of a legacy system with modern microservices until the legacy system can be safely retired.
- **Application at Arian Khodro**: The Delphi Tadark system continues operating while specific modules (parts catalog, customer orders) are incrementally migrated.

---

## 2. Anti-Corruption Layer (ACL)

- **Definition**: An intermediary translation layer that prevents legacy domain models and naming quirks from contaminating the domain model of modern services.
- **Application at Arian Khodro**: Protects new microservices from Tadark's legacy database schemas via bidirectional translation adapters.

---

## 3. Transactional Outbox Pattern

- **Definition**: Persisting domain events inside the local database transaction before reliably publishing them to message brokers (Kafka / RabbitMQ).
- **Application at Arian Khodro**: Guarantees that when a vehicle order is created, downstream events for inventory and finance are delivered without distributed transaction failures.

---

## 4. Circuit Breaker Pattern

- **Definition**: Gracefully failing requests to a degraded dependency to prevent cascading outages across the entire application ecosystem.
- **Application at Arian Khodro**: If Tadark experiences high latency or downtime, modern web portals buffer incoming requests rather than crashing.
