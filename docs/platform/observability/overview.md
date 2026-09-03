# Observability Platform Specification

## Problem
System failures previously required manual SSH access to individual servers and grepping through unformatted text log files, leading to high MTTR (Mean Time to Repair).

## Purpose
Provide end-to-end operational visibility across all applications, containers, core platform services, and infrastructure components.

## The Three Pillars of Observability

| Pillar | Technology Standard | Purpose |
|---|---|---|
| **Metrics** | Prometheus + Grafana | Tracking system vitals, request rates, error rates, p95/p99 latencies, CPU/Memory. |
| **Logs** | Fluentbit + OpenSearch | Structured JSON logging with standardized fields (`trace_id`, `service`, `level`, `msg`). |
| **Traces** | OpenTelemetry + Jaeger | End-to-end distributed transaction tracing across gateways, services, and databases. |

## Standard Log Format
All microservices must output structured JSON to `stdout`:
```json
{
  "timestamp": "2026-09-03T10:15:30Z",
  "level": "ERROR",
  "service": "workshop-service",
  "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736",
  "span_id": "00f067aa0ba902b7",
  "message": "Failed to reserve spare part SKU-994",
  "error": "InsufficientStockException"
}
```
