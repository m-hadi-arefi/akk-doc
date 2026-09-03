# Roadmap Stage 09: Core Platform Definition

## Purpose & Scope
Specify the shared foundational capabilities that comprise the **Arian Khodro Core Platform**, enabling business applications to focus exclusively on business domain logic.

## Fundamental Architectural Principle

```text
Core Platform ≠ ERP
```

The Core Platform is **not an ERP system**. It does not own automotive sales workflows, workshop billing logic, or inventory replenishment rules. Those belong in specific business applications.

The Core Platform provides the shared enterprise utilities that *all* business applications require:
- Identity & Single Sign-On
- Access Management & Permission Evaluation
- API Gateway & Traffic Routing
- Event Broker & Topic Registry
- Master Data Golden Records
- Immutable Audit Trail
- Multi-Channel Notification Engine
- Unified Observability & APM

## Associated Documents
- Comprehensive capability specifications are documented in the [Core Platform Pillar](../../platform/core-platform/overview.md).
