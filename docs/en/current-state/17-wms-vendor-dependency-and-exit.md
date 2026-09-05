---
title: "17 — WMS Vendor Dependency & Exit Strategy"
lang: en
translation: /fa/current-state/17-wms-vendor-dependency-and-exit
---

# 17 — WMS Vendor Dependency & Exit Strategy

## Evaluating External Software Dependency Risks
While the external WMS vendor provides high-caliber logistics functionality, the current engagement model leaves Arian Khodro exposed to severe operational and strategic vendor lock-in.

---

## Current Operational Dependencies
1. **Hosting & Development Infrastructure:** The active development and staging environments reside on a **physical server owned and hosted by the vendor**, physically external to Arian Khodro's data center.
2. **Vendor Hesitation on Internal Infrastructure:** The vendor has expressed legitimate concerns regarding the stability of Arian Khodro's internal server room (unstable power, UPS bypass incidents, non-standard consumer hardware), hesitating to deploy core services internally until physical infrastructure is stabilized.
3. **Remote Access & Operational Risk:** Vendor developers access corporate databases and test endpoints via remote VPN tunnels. Credentials are often persistent without session recording or just-in-time (JIT) access controls.
4. **Source Code Custody:** The application source code is maintained within the **vendor's private GitHub organization**. Arian Khodro possesses no mirrored repository, local compiled binaries, or automated deployment containers under corporate custody.

---

## Systemic Risks of Unmitigated Vendor Lock-In
- **Commercial Holdup Risk:** If contract renewal rates or maintenance fees escalate, Arian Khodro cannot transition maintenance to internal engineers or alternative vendors without abandoning months of operational customization.
- **Vendor Catastrophic Failure:** In the event of vendor insolvency, key developer departures, or server hardware loss at the vendor's facility, Arian Khodro's warehouse operations could grind to a halt without recourse.
- **Integration Choke-Point:** All modifications to API payloads or database models require vendor prioritization and billable change requests.

---

## The Mandatory Vendor Exit Checklist
To protect Arian Khodro's corporate sovereignty, commercial contracts and SLA agreements with the WMS vendor must enforce the following formal requirements before final acceptance:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                           MANDATORY VENDOR EXIT CHECKLIST                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [ ] 1. SOURCE CODE ESCROW / REPOSITORY MIRRORING                                      │
│      ► Contractual escrow deposit or automated monthly sync to internal GitLab.        │
│                                                                                        │
│  [ ] 2. DATABASE SCHEMA & DDL TRANSPARENCY                                             │
│      ► Complete, unencrypted SQL Server and MongoDB DDL migration scripts delivered.   │
│                                                                                        │
│  [ ] 3. FULL RAW DATA EXPORT GUARANTEE                                                 │
│      ► Native export utilities to extract all historical item movements in JSON/CSV.  │
│                                                                                        │
│  [ ] 4. FORMAL API & EVENT SPECIFICATIONS                                             │
│      ► OpenAPI (Swagger) documentation and RabbitMQ message payload schemas.          │
│                                                                                        │
│  [ ] 5. INFRASTRUCTURE & DEPLOYMENT RUNBOOK                                            │
│      ► Docker Compose / Kubernetes deployment manifests and environment configs.       │
│                                                                                        │
│  [ ] 6. DISASTER RECOVERY TIMELINES (SLA)                                              │
│      ► Contractually binding RTO (<4 hours) and RPO (<15 minutes) recovery covenants.   │
│                                                                                        │
│  [ ] 7. SECRETS & CREDENTIAL SOVEREIGNTY                                               │
│      ► All production cryptographic keys and database passwords owned by Arian IT.     │
│                                                                                        │
│  [ ] 8. FORMAL SUPPORT TRANSITION PLAN                                                 │
│      ► Contractual commitment to provide 90 days of transition support upon exit.       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
