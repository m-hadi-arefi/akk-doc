---
title: "Roadmap Stage 07: Integration Architecture & Patterns"
lang: en
translation: /fa/roadmap/07-integration-architecture/
---

# Roadmap Stage 07: Integration Architecture & Patterns

## Purpose & Scope
Define protocols, message brokers, and enterprise integration patterns for connecting internal microservices, core platform capabilities, and legacy systems.

## Key Integration Patterns

### 1. Legacy Integration & Anti-Corruption Layers
- **Anti-Corruption Layer (ACL)**: A dedicated translation adapter that wraps legacy systems (like Tadark) and translates Delphi/legacy tabular schemas into modern domain models without leaking legacy constraints.
- **Strangler Fig Pattern**: Incrementally intercepting and routing specific business capabilities to modern services until the legacy component can be decommissioned safely.

### 2. Distributed Consistency Patterns
- **Transactional Outbox**: Persisting domain events to an outbox table within the local database transaction, then publishing via CDC/relay to guarantee at-least-once delivery.
- **Saga Pattern**: Coordinating distributed business transactions across bounded contexts using Orchestration or Choreography, with explicit compensating actions on failure.
- **Idempotent Consumers**: Deduplicating message consumption using idempotency keys.

### 3. Communication Protocols
- Synchronous APIs: REST (JSON/OpenAPI) for public/client APIs; gRPC (Protobuf) for high-throughput internal microservice RPCs.
- Asynchronous Messaging: Kafka / RabbitMQ for event-driven decoupled choreography.

## Associated Documents
- [Integration Architecture Overview](./overview.md) — Enterprise integration model, topologies, and gateways.
- [Current Integrations](./current-integrations.md) — Legacy point-to-point connections catalog.

## AI in this Stage

### AI Assistance
- **Adapter Boilerplate Generation**: Scaffolding Anti-Corruption Layer (ACL) translation adapters and legacy connectors.
- **Contract Schema Validation**: Verifying schema backward-compatibility across Kafka event topics and REST APIs.
- **Integration Test Synthesis**: Generating mock servers, consumer-driven contract tests, and synthetic event payloads.

### Human Decision
- **Communication Protocol Selection**: Choosing between synchronous REST/gRPC vs asynchronous Kafka events for each integration flow.
- **Failure & Retry Policies**: Defining dead-letter queues, idempotent retry strategies, and circuit breaker thresholds.

### Human Approval
- **Required Sign-Off**: Integration Architecture Lead & Core Platform Lead.

### Risks
- **Distributed Cascade Failures**: Synchronous HTTP calls across legacy systems causing chained downtime and timeout storms.
- **Event Schema Evolution Drift**: Breaking downstream consumers through unversioned event schema mutations.

### Required Evidence
- Published OpenAPI and AsyncAPI Integration Contracts.
- Anti-Corruption Layer (ACL) Architecture Specifications.
- Consumer-Driven Contract Test Suite Verification.
