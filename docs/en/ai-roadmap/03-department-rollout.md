---
title: "Step 3: Implementation & Operational AI Rollout"
lang: en
translation: /fa/ai-roadmap/03-department-rollout
---

# Step 3: Implementation & Operational AI Rollout

> **Executive Summary:**  
> Once executive enablement is established in Step 1 and workflow suitability is confirmed in Step 2, implementation proceeds to **Controlled Operational Pilots**.  
> We do not attempt broad enterprise rollouts. Instead, engineering delivers tightly bounded, assistive tools that directly resolve audited operational friction points.  
> **Core Governance Mandates:**  
> 1. **Mandatory Human-in-the-Loop:** AI tools extract and propose; authorized personnel verify and sign off.  
> 2. **Empirical Validation:** All baseline cycle times, labor savings, and error rates are treated as **Target Hypotheses to be measured during the pilot**, never as fabricated facts.

---

## 1. Operational Pilot Architecture: The Human Validation Workbench

To ensure absolute operational safety, AI models are never connected directly to downstream production databases. They operate behind a **Human Validation Workbench**:

```text
Incoming Document ──► [AI Extraction Engine] ──► [Side-by-Side Workbench UI] ──► [Human Specialist Review]
(PDF / Scanned BOL)   • OCR text parsing         • Left: Original document PDF    • Specialist confirms / corrects
                      • Entity extraction        • Right: Extracted fields &      • Mandatory digital sign-off
                      • Confidence scoring (0-1)   confidence highlights (<90%)   • Verified JSON to API Gateway
```

1. **Extraction with Confidence Scoring:** The AI engine processes the document and attaches a mathematical confidence score (0% to 100%) to every extracted field.
2. **Visual Side-by-Side Review:** The web portal displays the original scanned PDF on the left and the extracted structured form on the right. Fields with confidence scores below 90% are highlighted in amber.
3. **Mandatory Human Sign-Off:** The specialist verifies the data, corrects any discrepancies, and clicks "Approve & Submit." Only verified records are committed to the Core Platform and Tadark.

---

## 2. Priority Operational Pilot 1: Customs Bill of Lading (BOL) Ingestion

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ PILOT SPECIFICATION: Customs Bill of Lading & Shipping Manifest Ingestion             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Business Problem: Foreign shipping manifests arrive as multi-page PDFs containing   │
│    dozens of 17-digit chassis VINs, weights, and HS codes. Specialists manually type   │
│    these into spreadsheets and Tadark, creating significant clerical bottlenecks.       │
│                                                                                        │
│ 2. Current Workflow: Clerks print foreign BOLs, highlight chassis numbers with pens,   │
│    and manually re-key each VIN into Tadark. Cycle times can extend across days during  │
│    vessel arrival peaks, introducing clerical typos and delayed customs filing.        │
│                                                                                        │
│ 3. Available Data: Digital PDF manifests from shipping lines (Maersk, Hapag, regional) │
│    and customs clearance inspection certificates from the port.                        │
│                                                                                        │
│ 4. Data Quality: High. Digital vector PDFs with standard printed Latin alphanumeric text│
│    and structured tabular layout.                                                      │
│                                                                                        │
│ 5. AI Capability: Optical Character Recognition (OCR), Layout-Aware Table Extraction,   │
│    and Regular Expression (RegEx) ISO 3779 VIN checksum verification.                  │
│                                                                                        │
│ 6. Human-in-the-Loop Requirement: MANDATORY. Customs specialist verifies all extracted │
│    chassis VINs on the validation screen before the dossier is submitted to customs.   │
│                                                                                        │
│ 7. Expected Benefit: Target hypothesis to be validated during pilot:                   │
│    • Elimination of clerical chassis VIN transcription errors.                        │
│    • Accelerated manifest ingestion cycle time (Target: < 1 hour per consignment).     │
│                                                                                        │
│ 8. Risks & Mitigations:                                                                │
│    • Risk: Misreading character 'O' as '0' or 'I' as '1' in VINs.                      │
│    • Mitigation: Automated ISO 3779 checksum validator flags invalid VINs immediately. │
│                                                                                        │
│ 9. Feasibility: High. Highly structured documents with standardized international formats│
│                                                                                        │
│ 10. Pilot Definition: 6-week pilot deployed to 2 customs clearance officers covering   │
│     the next 5 incoming vessel shipments.                                              │
│                                                                                        │
│ 11. Key Performance Indicators (KPI):                                                  │
│     • Measured cycle time per shipping manifest (minutes elapsed).                     │
│     • Character-level extraction accuracy rate (Target: > 98%).                        │
│     • Percentage of documents requiring zero manual clerical correction.               │
│                                                                                        │
│ 12. Go/No-Go Decision Criteria:                                                        │
│     • GO: Accuracy exceeds 98%, users confirm workflow speedup, zero corrupt VINs.     │
│     • NO-GO: Accuracy < 90%, staff report workbench slows down manual entry.           │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Priority Operational Pilot 2: Automated 3-Way Supplier Invoice Matching

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ PILOT SPECIFICATION: Automated 3-Way Foreign Supplier Invoice Reconciliation          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Business Problem: Reconciling foreign proforma purchase orders, customs warehouse   │
│    intake receipts, and final vendor billing invoices is a manual, paper-heavy chore.  │
│                                                                                        │
│ 2. Current Workflow: Accounts payable staff place printed copies of the Purchase Order,│
│    Warehouse Intake Receipt, and Vendor Commercial Invoice side-by-side on desks,      │
│    checking line items, quantities, and unit prices line-by-line with a calculator.     │
│                                                                                        │
│ 3. Available Data: Electronic Purchase Orders in database, digitized customs warehouse│
│    receiving receipts, and foreign supplier PDF invoices.                              │
│                                                                                        │
│ 4. Data Quality: Medium to High. Vendor invoice layouts vary between foreign suppliers  │
│    (e.g., Japan, China, UAE), but text is computer-printed.                            │
│                                                                                        │
│ 5. AI Capability: Entity extraction, line-item table parsing, and automated fuzzy      │
│    reconciliation logic (Part Number, Quantity, Currency, Price).                      │
│                                                                                        │
│ 6. Human-in-the-Loop Requirement: MANDATORY. Financial accountants must review all     │
│    flagged line discrepancies; payment vouchers require senior accountant digital sign-off│
│                                                                                        │
│ 7. Expected Benefit: Target hypothesis to be validated during pilot:                   │
│    • Rapid detection of billing discrepancies, duplicate invoices, or incorrect prices.│
│    • Significant reduction in invoice reconciliation cycle time.                       │
│                                                                                        │
│ 8. Risks & Mitigations:                                                                │
│    • Risk: Currency conversion errors or unrecognized shipping surcharge lines.        │
│    • Mitigation: Multi-currency conversion executed deterministically in code; AI only │
│      extracts raw currency codes and nominal values.                                   │
│                                                                                        │
│ 9. Feasibility: High. Deterministic matching rules govern post-extraction reconciliation.│
│                                                                                        │
│ 10. Pilot Definition: 8-week pilot across 100 foreign supplier commercial invoices in  │
│     Accounts Payable.                                                                  │
│                                                                                        │
│ 11. Key Performance Indicators (KPI):                                                  │
│     • Discrepancy detection rate (true positives identified).                          │
│     • Time required to reconcile an invoice dossier (minutes).                         │
│     • False positive rate on matching warnings (Target: < 5%).                         │
│                                                                                        │
│ 12. Go/No-Go Decision Criteria:                                                        │
│     • GO: Zero missed billing discrepancies, 100% auditable digital matching trails.   │
│     • NO-GO: High false alarm rate creates administrative friction for accountants.    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Priority Operational Pilot 3: Spare Parts Catalog Normalization

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ PILOT SPECIFICATION: Spare Parts Catalog Normalization & Supersession Matcher          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Business Problem: Spare parts catalogs from foreign vehicle manufacturers use       │
│    varying technical descriptions, legacy formatting, and complex supersession chains. │
│                                                                                        │
│ 2. Current Workflow: Warehousemen and workshop advisors spend substantial time search- │
│    ing multiple physical catalogs and disparate spreadsheets to identify correct part  │
│    numbers for warranty repairs.                                                       │
│                                                                                        │
│ 3. Available Data: Foreign OEM technical PDF catalogs, legacy Tadark spare parts       │
│    inventory tables, and manufacturer supersession bulletins.                          │
│                                                                                        │
│ 4. Data Quality: Moderate. Contains historical part numbers and varying abbreviations. │
│                                                                                        │
│ 5. AI Capability: Semantic entity normalization, embedding-based similarity search,    │
│    and automated supersession linking.                                                 │
│                                                                                        │
│ 6. Human-in-the-Loop Requirement: MANDATORY. Master Data Management (MDM) parts        │
│    administrator approves all catalog merges before updating the central repository.   │
│                                                                                        │
│ 7. Expected Benefit: Target hypothesis to be validated during pilot:                   │
│    • Elimination of obsolete parts dispatches to dealership workshops.                 │
│    • Faster workshop customer turnaround on warranty repairs.                          │
│                                                                                        │
│ 8. Risks & Mitigations:                                                                │
│    • Risk: Incorrectly equating two mechanically incompatible components.              │
│    • Mitigation: Strict mechanical compatibility matrix validation against engine code.│
│                                                                                        │
│ 9. Feasibility: High. Bounded technical catalog domain with definitive OEM numbers.    │
│                                                                                        │
│ 10. Pilot Definition: Normalizing the top 1,000 high-turnover fast-moving spare parts. │
│                                                                                        │
│ 11. Key Performance Indicators (KPI):                                                  │
│     • Catalog normalization speed and percentage of verified supersession links.       │
│     • Reduction in workshop parts re-orders due to incorrect SKU dispatch.             │
│                                                                                        │
│ 12. Go/No-Go Decision Criteria:                                                        │
│     • GO: 100% verified accuracy on top 1,000 fast-moving spare parts.                 │
│     • NO-GO: Ambiguous part matching requires manual verification for every line.      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Continuous Monitoring, Telemetry & Audit Trails

Every interaction with an operational AI pilot is permanently recorded in the **Core Platform Audit Log**:
- Document identification hash, raw input text, and extracted JSON payload.
- Model identifier, version, and execution timestamp.
- Field-level confidence scores.
- Reviewing user ID, modifications made during review, and timestamp of human sign-off.

This guarantees complete regulatory compliance, enables continuous model accuracy monitoring, and provides an auditable paperless trail for corporate and statutory auditors.

---

## 6. Related Documentation

- **[AI Strategic Roadmap Overview →](/en/ai-roadmap/)** — The 3-step AI modernization strategy.
- **[Step 2: AI Opportunity Discovery →](/en/ai-roadmap/02-usecase-discovery)** — Candidate screening and Go/No-Go framework.
- **[Core Platform Architecture Blueprint →](/en/platform/core-platform/)** — Integration through Gateway and Master Data.
