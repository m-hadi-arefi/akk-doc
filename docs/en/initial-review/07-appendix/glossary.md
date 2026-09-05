---
title: "Comprehensive Bilingual Glossary"
lang: en
translation: /fa/initial-review/07-appendix/glossary
---

# Comprehensive Bilingual Glossary

## Executive Summary
A primary driver of cross-departmental friction is ambiguous terminology. Commercial, logistics, financial, and software engineering teams often use identical words with conflicting meanings. This glossary establishes the definitive bilingual definitions and context for all terms utilized in Arian Khodro's transformation blueprint.

---

## The Master Bilingual Terminology Matrix

| English Term | Persian Equivalent | Formal Definition | Context in Arian Khodro |
| :--- | :--- | :--- | :--- |
| **Vehicle Identification Number (VIN)** | شماره شناسایی خودرو (شاسی) | Unique 17-character alphanumeric string defined by ISO 3779 identifying a motor vehicle. | The immutable primary key across all operational and analytical systems. |
| **Bill of Lading (B/L)** | بارنامه دریایی / بین‌المللی | Legal contract between shipper and carrier detailing cargo type, quantity, and destination. | Core intake document scanned by the OCR pipeline to initiate clearance. |
| **Proforma Invoice** | پیش‌فاکتور (پروفرما) | Preliminary commercial invoice sent by foreign suppliers before vehicle manufacturing/dispatch. | Initiates domestic currency quota applications and commercial order tracking. |
| **Demurrage** | حق توقف کانتینر (دموراژ) | Penalty fee paid to shipping lines when cargo containers exceed free port storage days. | Primary cost-avoidance metric targeted by the Customs Dossier Pipeline. |
| **Anti-Corruption Layer (ACL)** | لایه ضدفساد | Domain-Driven Design pattern translating between two subsystems with differing data semantics. | Safety buffer isolating the modern platform from legacy Tadark Delphi schemas. |
| **Modular Monolith** | مونولیت ماژولار | Architecture pattern organizing a single deployable application into strictly encapsulated modules. | The chosen architectural style for the Arian Khodro Core Platform. |
| **Master Data Management (MDM)** | مدیریت داده‌های مرجع | Enterprise discipline creating a single, authoritative source of truth for critical entities. | Centers on the central VIN Golden Record Hub and Canonical Parts Catalog. |
| **Change Data Capture (CDC)** | ثبت تغییرات داده‌ها | Software pattern monitoring and capturing row-level database changes as streaming events. | Synchronizes legacy Tadark accounting changes into the modern platform. |
| **Human-in-the-Loop (HITL)** | انسان در چرخه تصمیم‌گیری | Machine learning governance pattern requiring human operator confirmation for automated decisions. | Mandatory safety gate for all customs OCR extractions below 95% confidence. |
| **Definition of Done (DoD)** | تعریف انجام‌شده | Agreed formal criteria determining when a software user story is ready for production release. | Governs bi-weekly sprint delivery quality across all engineering squads. |
| **Shadow IT** | فناوری سایه | Information technology systems, software, or spreadsheets utilized without official IT oversight. | The 80+ active operational spreadsheets systematically targeted for retirement. |
| **Single Sign-On (SSO)** | ورود یکپارچه | Authentication scheme allowing a user to log in once and access multiple independent applications. | Standard identity mechanism (Keycloak/OIDC) unifying all internal portals. |

---

## Terminology Governance Policy
- All internal technical specifications, database column comments, and business analyst requirements must use the exact terms defined in this glossary.
- Updates or additions to this glossary must be submitted as a pull request reviewed by the Transformation Steering Committee.

---

## Conclusion & Governance Checkpoint
- **Key Decisions:** Formally endorse the Bilingual Glossary as company-wide standard terminology.
- **Open Questions:** Translating niche automotive parts supersession terminology into standardized Persian.
- **Next Actions:** Review [Architecture Decision Records](./adrs/) to examine the technical justifications.
