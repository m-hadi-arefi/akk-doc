# Integration Platform & Adapters Specification

## Problem
Legacy systems like Tadark lack modern REST/gRPC APIs, relying on raw 32-bit Delphi interfaces, direct database table writes, or batch CSV file transfers.

## Purpose
Provide dedicated adapter services, Anti-Corruption Layers (ACL), and Strangler Fig proxies that bridge legacy systems with the modern Core Platform without polluting new software with legacy debt.

## Integration Strategies & Adapters

### 1. Tadark Modernization Adapter (ACL)
- A dedicated bridge microservice that reads/writes to Tadark through controlled stored procedures and translates them into modern REST and Kafka domain events.
- **Rule**: No new application may connect directly to the Tadark database. All interaction must pass through the Tadark ACL Adapter.

### 2. Banking & Payment Gateway Adapters
- Standardized payment bridge abstracting national payment gateways (Shaparak, PSPs) with automated reconciliation and idempotency keys.

### 3. SMS & Telephony Adapters
- Resilient notification dispatcher with automated multi-provider failover.
