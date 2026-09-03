# Data Platform Specification

## Problem
Operational databases (OLTP) were strained by heavy analytical reporting queries, leading to slow application response times and an inability to conduct real-time business intelligence.

## Purpose
Decouple analytical, machine learning, and executive reporting workloads from operational systems through a modern Lakehouse architecture.

## Architecture Pipeline

```text
Operational Databases (PostgreSQL / MySQL / Tadark)
                  │
                  ▼ (Debezium Change Data Capture)
Kafka Ingestion Stream
                  │
                  ▼ (Vector / Spark Streaming)
Analytical Data Store (ClickHouse / MinIO Parquet Lakehouse)
                  │
                  ▼
BI Dashboards & Executive Analytics (Metabase / Superset)
```

## Responsibilities
- Real-time CDC data ingestion from all core relational databases.
- Automated data transformation and daily aggregation pipelines.
- Serving BI dashboards, financial reconciliation reports, and sales metrics.
