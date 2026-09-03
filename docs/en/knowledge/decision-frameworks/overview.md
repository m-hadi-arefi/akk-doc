---
title: "Decision Frameworks"
lang: en
translation: /fa/knowledge/decision-frameworks/overview
---

# Decision Frameworks

Structured frameworks to guide objective architectural and technological choices.

---

## Build vs Buy
```text
                     Is the capability core to
                     Arian Khodro's competitive
                           differentiation?
                              │
               ┌──────────────┴──────────────┐
              YES                            NO
               │                             │
        CUSTOM BUILD               Does a mature COTS
                                   or SaaS product exist?
                                             │
                                  ┌──────────┴──────────┐
                                 YES                    NO
                                  │                     │
                             COTS / SAAS           CUSTOM BUILD
```
- **Criteria**: Differentiation, 5-Year TCO, vendor lock-in, data sovereignty, integration flexibility.

---

## Monolith vs Microservices
- **Default Choice**: **Modular Monolith**. Single deployable artifact, strict internal bounded contexts, zero network partition latency.
- **Choose Microservices ONLY when**:
  1. Independent scaling requirements differ by an order of magnitude.
  2. Multiple autonomous teams require independent release cadences.
  3. Technological heterogeneity is strictly necessary.

---

## REST vs gRPC
- **REST (JSON/HTTPS)**: Default for public APIs, browser clients, third-party integrations, and web portals.
- **gRPC (HTTP/2 + Protobuf)**: Default for internal service-to-service communication requiring sub-millisecond serialization and high throughput.

---

## Synchronous vs Asynchronous
- **Synchronous (Request/Response)**: When the caller cannot proceed without an immediate definitive answer (e.g. User Authentication, Payment Gateway Authorization).
- **Asynchronous (Event/Queue)**: When work can be processed in background, or when decoupling availability is essential (e.g. Email notifications, Audit logging, Inventory sync).
