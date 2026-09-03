---
title: "API Gateway Management & Event-Driven Messaging"
lang: en
translation: /fa/platform/core-platform/api-gateway
---

# API Gateway Management & Event-Driven Messaging

The API Gateway and messaging backbone form the central nervous system connecting internal business tools, banking gateways, government compliance systems (customs/tax), and customer applications.

---

## 1. Core Functions of the API Gateway

1. **Rate Limiting & Throttling**: Protects legacy systems (such as Delphi Tadark) from crashing during peak vehicle sales registration windows.
2. **Token Verification & Security Enforcement**: Validates cryptographic signatures on JWT access tokens before routing requests to downstream microservices.
3. **Intelligent Caching**: Serves high-frequency, read-heavy queries (such as color codes, vehicle models, and dealership directories) without burdening transactional databases.

---

## 2. Event-Driven Architecture

To decouple systems from brittle point-to-point HTTP integrations, asynchronous event streaming is established:

```text
[CRM System] ──► (Event: Vehicle Order Confirmed) ──► [Event Bus]
                                                           │
                       ┌───────────────────────────────────┼───────────────────────────────────┐
                       ▼                                   ▼                                   ▼
             [Assign Chassis in Stock]           [Draft Finance Voucher]             [Send Welcome SMS to Buyer]
```
