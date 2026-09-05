---
title: "OCR & Document Intelligence Architecture"
lang: en
translation: /fa/initial-review/04-ai-transformation/ocr-and-document-ai
---

# OCR & Document Intelligence Architecture

## Executive Summary
This document specifies the technical architecture for Arian Khodro's **Document Intelligence & OCR Pipeline**. Focused initially on foreign shipping manifests, packing lists, commercial invoices, and customs declarations, this system extracts structured tables and Vehicle Identification Numbers (VINs) from noisy PDFs. It enforces automated validation against international VIN standards and delivers a side-by-side human review interface.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DOCUMENT INTELLIGENCE PIPELINE TOPOLOGY                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [MULTI-PAGE PDF / IMAGE] (Commercial Invoices, Bills of Lading, Customs Manifests)    │
│          │                                                                             │
│          ▼                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   STAGE 1: Pre-Processing & Layout Analysis (Deskew, Binarize, Bounding Boxes)   │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   STAGE 2: Multi-Lingual OCR Extraction (Tesseract / PaddleOCR / Document LLM)   │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   STAGE 3: Deterministic Rule Validation (ISO 3779 VIN Checksum, Proforma Match) │  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼                                                 │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │   STAGE 4: Confidence Scoring & Human-in-the-Loop Verification Workspace         │  │
│  │   • Confidence ≥ 95% AND Valid Checksum  ➔ Auto-Approved Candidate                  │  │
│  │   • Confidence < 95% OR Checksum Error   ➔ Mandatory Human Operator Review Screen│  │
│  └───────────────────────────────────┬──────────────────────────────────────────────┘  │
│                                      ▼                                                 │
│  [COMMITTED TO CORE PLATFORM] ➔ Commercial Ingestion Module / VIN Master Database      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Technical Pipeline Stages

### Stage 1: Document Pre-Processing & Normalization
- Converts raw scanned PDFs and mobile camera snapshots into normalized 300 DPI images.
- Performs automated deskewing, noise reduction, and table structure boundary segmentation.

### Stage 2: Multilingual Optical Character Recognition
- Extracts alphanumeric characters across English, Chinese, and Persian scripts.
- Detects table column structures (Item Description, Part Number, Quantity, Unit Price, VIN).

### Stage 3: Deterministic ISO 3779 VIN Validation
- The extracted 17-character VIN string is passed through a deterministic mathematical checksum validator (ISO 3779 algorithm).
- If the 9th character checksum fails, the string is immediately flagged as a transcription error, bypassing confidence thresholds and forcing human operator inspection.

### Stage 4: Human-in-the-Loop Review Interface
- Web-based side-by-side workspace: The original scanned PDF is rendered on the left; the extracted tabular records appear on the right.
- High-confidence fields (≥ 95%) appear highlighted in green; lower-confidence fields or checksum warnings appear in amber/red.
- Operators use keyboard navigation to verify and edit flagged rows in seconds without touching a mouse.

---

## 2. Confidence Thresholds & Routing Rules

| Confidence Band | Condition | System Action | Operator Experience |
| :---: | :--- | :--- | :--- |
| **High (≥ 95%)** | Valid ISO VIN Checksum; Exact match against approved foreign purchase order. | Flagged as Pre-Approved. | Operator performs single-click batch approval. |
| **Medium (75 - 94%)** | Ambiguous character detected (e.g., '0' vs 'O', '1' vs 'I'). | Routed to Human Review Queue. | Target bounding box highlighted on PDF for instant verification. |
| **Low (< 75%)** | Missing table borders, unreadable text, or failed checksum. | Mandatory Operator Re-Entry. | Operator types correct value directly into form. |

---

## 3. Data Privacy & Sovereignty
To safeguard commercial trade confidentiality:
- Customs invoices and pricing tables are processed exclusively on on-premise inference servers or contractually isolated, private enterprise cloud VPC instances.
- Commercial invoice documents are never transmitted to public multi-tenant AI APIs where data could be retained for third-party training.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Mandate ISO 3779 checksum validation before accepting any OCR-extracted VIN; enforce side-by-side human review screens.
- **Open Questions:** Selection of local inference hardware (Nvidia GPU workstation vs. CPU-optimized quantized models) for the staging environment.
- **Next Actions:** Review [AI Governance & Ethics](./ai-governance) to inspect model monitoring and audit rules.
