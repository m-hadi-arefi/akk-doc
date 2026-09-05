---
title: "07 — Business Continuity, Disaster Recovery & Resilience"
lang: en
translation: /fa/current-state/07-business-continuity-and-dr
---

# 07 — Business Continuity, Disaster Recovery & Resilience

## Operational Resilience Baseline
Business Continuity Planning (BCP) and Disaster Recovery (DR) define an organization's capacity to withstand severe systemic disruptions and resume operations without catastrophic loss of revenue, customer trust, or corporate data. At Arian Khodro, resilience mechanisms are currently informal, unverified, and exposed to severe single points of failure.

---

## Current State Analysis

### 1. Power Instability & Electrical Resilience
- **Utility Grid:** Located in an industrial/commercial zone subject to frequent voltage sags, power surges, and rolling brownouts.
- **Generator Readiness:** The emergency diesel generator requires manual or delayed ATS engagement, leaving a vulnerable window during which batteries must absorb 100% of the load.
- **Central UPS:** The 10kVA GE UPS is overloaded by departmental laser printers, switching into bypass and exposing virtualization hosts directly to dirty power.

### 2. Backup Architecture & Storage Redundancy
- **Current Backup Procedures:** Backups are initiated manually or through local Windows schedules, copying snapshots to secondary internal hard drives or network shares.
- **Off-Site Storage Gap:** There is **no automated, encrypted off-site replication** to a secondary physical facility or compliant cloud repository.
- **Air-Gapped Protection Gap:** Backups reside on network-accessible storage, leaving them completely vulnerable to internal ransomware encryption or accidental administrative deletion.
- **RTO & RPO Reality:** 
  - **RPO (Recovery Point Objective):** Variable, ranging from 24 hours to several days depending on the system.
  - **RTO (Recovery Time Objective):** Days to weeks, as evidenced by the historical Samsung EVO SSD failure where manual reconstruction took weeks.

### 3. Server Room Environmental Vulnerability
- A localized physical disaster (e.g. electrical fire from overloaded printer circuits, water leakage from ceiling split ACs) would destroy all on-premise production hardware and co-located backup drives simultaneously.

---

## Known Operational Risks Matrix

| Risk Scenario | Likelihood | Impact | Severity | Current Mitigation | Residual Exposure |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Grid Outage During UPS Bypass** | High | Critical | **Catastrophic** | None (printers still on UPS circuit). | Complete shutdown of all virtual machines, corrupted SQL databases. |
| **Storage RAID Array Failure** | Medium | Critical | **Severe** | RAID10 on Lexar consumer SSDs. | Rebuild failure on consumer flash; weeks of downtime. |
| **Ransomware / Malware Infection** | Medium | Critical | **Severe** | Endpoint antivirus. | Network shares and local backups encrypted simultaneously. |
| **Key Personnel Sudden Absence** | Medium | High | **High** | Informal relationships. | Loss of administrative passwords, halted database queries. |
| **WMS Vendor Cloud Disruption** | Medium | High | **High** | None (code on vendor GitHub). | Inability to deploy fixes or operate warehouse if vendor server drops. |
| **ISP / Fiber Link Cut** | High | Medium | **High** | Backup ISP line (unverified failover). | Halting of online B2B sales and branch communications. |

---

## Recommended Recovery Controls
1. **Zero-Capital Electrical Segregation:** Instantly remove all non-server appliances (laser printers, desktop PCs) from the central UPS circuit.
2. **Implementation of the 3-2-1 Backup Rule:**
   - **3** copies of critical data.
   - **2** different storage media types (e.g., local NVMe + secondary NAS).
   - **1** copy located securely **off-site** (or cold cloud storage), with immutable/write-once-read-many (WORM) ransomware protection.
3. **Automated Monthly Recovery Rehearsals:** Backups are merely unverified assumptions until restored. IT must conduct scheduled mock restorations of Borhan SQL Server, Tadark databases, and WMS state onto isolated test machines.
4. **Standard Operating Procedure (SOP) Documentation:** Document administrative access procedures, network topology, and database restart scripts in an encrypted vault accessible to authorized senior executives.

---

## Open Disaster Recovery Questions Requiring Validation
- [ ] What is the exact fuel autonomy and switchover delay of the headquarters diesel generator?
- [ ] Where are the off-site backup drives physically stored, who transports them, and how often are they refreshed?
- [ ] Has a complete bare-metal restore of the primary Borhan accounting database ever been successfully executed and timed?
- [ ] If the WMS vendor's physical server experiences a total hardware loss, what is the vendor's documented RTO to restore Arian Khodro's environment?
