---
title: "Step 5: Production Launch, Deployment & Sustainable Operations"
lang: en
translation: /fa/roadmap/05-launch-and-operations
---

# Step 5: Production Launch, Deployment & Sustainable Operations

> **Executive Summary:**  
> The ultimate measure of a transformation program is not what is engineered in staging environments, but what functions reliably in daily production.  
> Step 5 governs the transition of validated software capabilities into **Live Operations**. It establishes zero-downtime cutover procedures, rigorous User Acceptance Testing (UAT), comprehensive change management for operational staff, 24/7 observability, and a permanent continuous improvement framework.

---

## 1. Zero-Downtime Phased Cutover & Canary Deployment

To protect Arian Khodro's revenue and operations from sudden system disruption, production deployment rejects risky "Big Bang" cutovers in favor of phased canary releases:

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ 1. User Acceptance     │ ───► │ 2. Canary Pilot        │ ───► │ 3. Full Production     │
│    Testing (UAT)       │      │    Deployment          │      │    Enterprise Cutover  │
│ • Commercial sign-off  │      │ • Single branch pilot  │      │ • Enterprise-wide      │
│ • Finance audit sign-off      │ • Single shipment batch│      │ • 24/7 Telemetry active│
│ • Parallel run verified│      │ • Micro-telemetry watch│      │ • Legacy sync live     │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### 1. User Acceptance Testing (UAT) & Parallel Run Validation
Before any capability goes live:
- Departmental specialists (Finance, Customs, Warehousing, Dealerships) execute real-world operational scenarios in a production-identical staging environment.
- For financial and inventory workflows, a **Parallel Run** is executed: transactions are entered into both the modern system and legacy Tadark simultaneously for a designated period to verify mathematical equivalence down to the exact rial.
- Formal UAT sign-off from departmental heads is mandatory before production scheduling.

### 2. Canary Dealership & Shipment Rollout
New capabilities are initially released to a limited operational slice:
- A new customs calculation engine is applied first to a single vehicle import shipment.
- A new dealership after-sales portal is deployed first to a single pilot workshop.
- System metrics, error rates, and user feedback are monitored closely before expanding deployment across all branches.

### 3. Tested & Automated Rollback Strategy
Every release includes an automated, pre-tested rollback script:
- If critical anomalies, database locks, or unexpected latency spikes occur during cutover, the system can revert to the previous stable state within under 10 minutes.
- Rollback drills are mandatory in staging prior to production cutover authorization.

---

## 2. Change Management & Operational User Enablement

Technological excellence produces zero business value if operational staff resist or misunderstand the software. Step 5 enforces an active change-enablement program:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                            CHANGE MANAGEMENT WORK STREAMS                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. Role-Based Workshops     ► Practical training tailored to accountants, warehousemen│
│  2. Visual Micro-Guides      ► Step-by-step SOPs embedded directly inside web portals  │
│  3. On-Site Floor Support    ► Technical specialists stationed alongside staff at launch│
│  4. Continuous Feedback Loop ► Direct bug reporting and feature refinement channel    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Targeted Training by Role:** Training is delivered through hands-on simulations of actual daily tasks (e.g., clearing a customs dossier, booking a vehicle service) rather than generic software tours.
- **Embedded Standard Operating Procedures (SOP):** Concise visual guides, tooltips, and video walkthroughs are accessible directly within each application screen.
- **On-Site Launch Assistance ("Floor Support"):** During the first 72 hours of any major release, software engineers and business analysts are physically co-located in the accounting and warehouse departments to resolve questions in real time.

---

## 3. Observability, Telemetry & 24/7 Site Reliability (SRE)

Once live, systems are continuously monitored using automated telemetry to identify issues before users experience disruption:

| Observability Domain | Metrics & Mechanisms | Executive Significance for Leadership |
| :--- | :--- | :--- |
| **System Uptime & Availability** | Prometheus health checks, Grafana dashboards | Continuous tracking toward **99.9% uptime** SLA targets. |
| **API Response Latencies** | Distributed tracing (OpenTelemetry) | Guarantees critical screen loads and queries complete in **< 500ms**. |
| **Immutable Audit Logging** | Centralized, tamper-proof audit trail | Legal auditability: every financial posting and VIN edit is permanently logged with user ID and timestamp. |
| **Real-Time Executive Dashboards** | Live business KPI analytics | Real-time visibility into cleared vehicle volumes, inventory turnover, and open dealership warranty tickets. |

---

## 4. Phase 6: Continuous Improvement & Architecture Evolution

Step 5 does not mark the end of modernization; it establishes the baseline for continuous, iterative enhancement:

1. **Monthly SRE & Incident Reviews:** Post-mortem analyses of any operational hiccups are conducted blamelessly to harden system resilience.
2. **Bi-Weekly Architecture Evolution Checks:** The Lead Architect reviews system load, database growth, and emerging business needs to refine the target architecture.
3. **Business Value Tracking:** Actual labor hours saved, cycle time reductions, and error-rate improvements are measured against the baseline established during Step 1 Discovery, providing executive leadership with validated ROI metrics.

---

## 5. Decision Gate 5 Approval

Operational cutover occurs strictly through **Decision Gate 5**:
- **Gate 5 Review Package:** Verified UAT sign-off certificates, parallel run reconciliation reports, rollback test logs, and staff training completion records.
- **Executive Authorization:** Formal sign-off by the CEO, Lead Architect, and Departmental Directors authorizing live production traffic cutover.

---

## 6. Related Documentation

- **[Roadmap Overview →](/en/roadmap/)** — The complete 5-step modernization lifecycle.
- **[Step 4: In-House SDLC & Team →](/en/roadmap/04-internal-development-lifecycle)** — The engineering governance enabling reliable releases.
- **[Core Platform Architecture Blueprint →](/en/platform/core-platform/)** — The shared infrastructure supporting live production operations.
