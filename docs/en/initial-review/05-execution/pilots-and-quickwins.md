---
title: "Tactical Pilots & Quick Wins (First 90 Days)"
lang: en
translation: /fa/initial-review/05-execution/pilots-and-quickwins
---

# Tactical Pilots & Quick Wins (First 90 Days)

## Executive Summary
To build organizational credibility and prove transformation momentum to executive leadership, Arian Khodro executes three tactical pilots during the first 90 days. Each pilot addresses a real, documented operational bottleneck, operates under tight scope boundaries, and features a clear, automated rollback contingency to guarantee zero business interruption.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE FIRST 90 DAYS PILOT LAUNCH SCHEDULE                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  PILOT 1 (Weeks 8 - 10)  ► Customs Manifest Ingestion & VIN Verification Pipeline      │
│  PILOT 2 (Weeks 10 - 12) ► Compound Mobile Barcode Vehicle Intake Scanner             │
│  PILOT 3 (Weeks 12 - 14) ► Dealership Warranty Claims Pre-Approval Portal              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Comprehensive Pilot Charters

### Pilot 1: Customs Manifest Ingestion & VIN Verification
- **Operational Problem:** Commercial and logistics specialists manually re-type hundreds of 17-character VINs from foreign bills of lading into spreadsheets and Tadark, taking hours per shipment with frequent transcription typos.
- **Solution Delivered:** Web-based document ingestion tool: specialists upload the PDF manifest; the system runs OCR, validates ISO 3779 checksums, and exports a verified CSV file formatted for direct intake.
- **Success Criteria:** ≥ 40% reduction in dossier processing time; 100% detection of malformed VINs.
- **Rollback Mechanism:** If the tool encounters an unparseable PDF layout, operators immediately download the original PDF and proceed via existing manual procedures without data loss.

### Pilot 2: Central Compound Mobile Barcode Vehicle Intake
- **Operational Problem:** Vehicles arriving on car-carriers are checked on paper slips; VINs are manually typed into Tadark hours or days later, causing inventory blind spots.
- **Solution Delivered:** Mobile web application for rugged handheld scanners. Warehouse staff scan the physical windshield barcode plate upon carrier discharge; intake timestamp and storage bay location are logged instantaneously.
- **Success Criteria:** Real-time visibility into compound arrivals within 15 minutes of carrier discharge.
- **Rollback Mechanism:** Physical paper clipboards remain stationed at the compound gate as an instant backup during the 4-week pilot window.

### Pilot 3: Dealership Warranty Pre-Approval Portal
- **Operational Problem:** Dealerships submit warranty dispute claims on scattered paper invoices and chat groups, resulting in disputes, lost photos, and months of settlement delays.
- **Solution Delivered:** Simple partner web portal deployed to the top 5 high-volume dealerships. Dealers enter the VIN, select standard repair codes, attach damage photos, and receive immediate preliminary status validation.
- **Success Criteria:** 50% decrease in warranty dispute turnaround time for pilot dealerships.
- **Rollback Mechanism:** If the portal is temporarily unavailable, dealerships submit invoices via their historical email channel with guaranteed priority processing.

---

## Selection Governance & Criteria
A pilot is approved for early execution only if it satisfies all 4 criteria:
1. **Time-to-Delivery:** Working software delivered in under 6 weeks.
2. **Contained Blast Radius:** A failure in the pilot cannot freeze statutory corporate accounting.
3. **High Operational Visibility:** Solves an active daily frustration for frontline employees.
4. **Immediate ROI:** Delivers measurable labor savings or eliminates recurring financial penalties.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Formally authorize the execution of Pilots 1, 2, and 3; appoint the Logistics Lead and Compound Manager as operational co-sponsors.
- **Open Questions:** Selecting the 5 pilot dealerships in Tehran and Karaj for Pilot 3.
- **Next Actions:** Review [Change Management & Organizational Enablement](./change-management) to plan stakeholder rollout.
