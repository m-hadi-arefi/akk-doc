---
title: "ADR-005: Hybrid Document OCR Pipeline with Human-in-the-Loop"
lang: en
translation: /fa/initial-review/07-appendix/adrs/adr-005-document-ocr-pipeline
---

# ADR-005: Hybrid Document OCR Pipeline with Human-in-the-Loop

## Status
**Accepted** (2026-09-04)

## Context & Problem Statement
Commercial importation involves collating multi-page foreign bills of lading, packing lists, and commercial proformas arriving in varied PDF formats across English and Chinese. Specialists spend hundreds of hours manually typing 17-character VINs and part numbers into systems, frequently causing costly errors that stall customs clearance at southern ports.

## Decision Drivers
1. **Extraction Accuracy:** Maximum precision in extracting alphanumeric VIN strings and line-item tables.
2. **Operational Safety:** Zero risk of incorrect VINs being committed to legal customs declarations without human verification.
3. **Data Sovereignty:** Protecting proprietary commercial purchase pricing from public AI model leaks.

## Considered Options
1. **Option 1: Fully Autonomous AI Ingestion** (Direct commit of model extractions into the database without human review).
2. **Option 2: Purely Manual Data Entry** (Continue typing data manually into spreadsheets and Tadark).
3. **Option 3: Hybrid OCR Pipeline with Deterministic Checksums and Human-in-the-Loop Review** (Automated extraction coupled with mandatory side-by-side operator verification).

## Decision Outcome & Rationale
**Chosen Option: Option 3: Hybrid OCR Pipeline with Human-in-the-Loop.**
- **Rationale:** Autonomous AI ingestion is dangerously irresponsible: an OCR character hallucination (such as mistaking 'B' for '8') creates severe regulatory penalties in customs declarations. Pure manual entry drains professional capacity. The hybrid model extracts tables automatically, verifies strings against ISO 3779 checksums, and surfaces a rapid side-by-side verification screen where human operators validate and sign off in seconds.

## Consequences
- **Positive:** Over 60% reduction in document ingestion time; complete elimination of malformed VIN typos; 100% legal compliance and trade secret isolation.
- **Negative:** Human operators must still review and approve every document.
- **Mitigation:** High-confidence records (≥ 95% confidence + valid checksum) are batched for single-click operator approval.
