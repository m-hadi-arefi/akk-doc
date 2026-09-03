---
title: "Roadmap Stage 09: Core Platform Definition"
lang: en
translation: /fa/roadmap/09-core-platform/
---

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
- Comprehensive capability specifications are documented in the [Core Platform Pillar](/en/platform/core-platform/overview.md).

## AI in this Stage

### AI Assistance
- **Platform Capability Scaffolding**: Generate client SDK libraries, documentation, and starter templates for Core Platform services.
- **Service Mesh & Gateway Config**: Draft API Gateway routing rules, rate limiting configurations, and authentication plugins.
- **Observability Metric Scaffolding**: Define standardized Prometheus metric names, OpenTelemetry spans, and Grafana dashboard templates.

### Human Decision
- **Platform vs Application Boundary**: Enforcing strict separation between shared platform services and automotive domain logic.
- **Technology Stack Standardization**: Selecting the supported enterprise runtime environments, databases, and message brokers.

### Human Approval
- **Required Sign-Off**: Core Platform Engineering Lead & Enterprise Architect.

### Risks
- **Platform Monolith**: Allowing domain-specific business rules into shared platform services, recreating a monolithic ERP.
- **Under-adoption**: Developing platform capabilities that internal application teams bypass due to friction or poor documentation.

### Required Evidence
- Core Platform Service Specifications (Identity, Audit, Events, MDM).
- Platform SLA/SLO and Operational Support Charters.
- Platform Client SDK Documentation and Golden Paths.
