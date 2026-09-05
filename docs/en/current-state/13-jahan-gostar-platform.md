---
title: "13 — Jahan Gostar / Import Sales Platform"
lang: en
translation: /fa/current-state/13-jahan-gostar-platform
---

# 13 — Jahan Gostar / Import Sales Platform

## B2B E-Commerce & Parts Distribution Assessment
The Jahan Gostar platform functions as Arian Khodro's digital B2B channel for imported automotive parts and wholesale component distribution. Field discovery revealed an intricate web of legacy integrations, vendor shifts, database limitations, and an acute financial incident caused by decimal truncation.

---

## Core Business Model & Workflow
1. **Public Catalog vs. Authenticated Tiers:** Unregistered visitors browse a general parts catalog with marked-up retail prices. Verified B2B customers (dealerships, repair networks, wholesale distributors) log in to view negotiated tiered pricing.
2. **Minimum Order Quantities (MOQ):** Wholesale purchases enforce strict package/lot MOQs to prevent fractional inventory splitting.
3. **Manual Customer Provisioning:** B2B commercial accounts are currently vetted offline and manually provisioned in the database by technical or commercial operators rather than through automated onboarding.

---

## Technical Architecture & Legacy Debts
- **Frontend Layer:** Multi-generational web client built on modern JavaScript frameworks.
- **Backend Layer:** Connects to legacy REST APIs whose historical origin is fragmented across multiple prior software contractors.
- **Missing Source Code:** The current development team does not possess the complete, uncompiled source code for certain legacy backend API services, forcing reliance on API response sniffing and reverse-engineering.
- **Database Layer:** Hosted on external VPS/cloud infrastructure, historically decoupled from on-premise accounting (Borhan) and procurement (Tadark).

---

## The Decimal Truncation Incident & Financial Loss
A severe operational failure was documented during the platform discovery review:

### The Incident:
- A specific product unit quantity/multiplier was configured with fractional decimal precision: **0.025**.
- During processing in the legacy database schema or API parsing logic, the numeric field was truncated from **0.025** to **0.02** (a 20% systemic calculation error).
- **The Financial Impact:** The calculation discrepancy triggered an erroneous commercial order of approximately **200,000 screws**, causing an estimated direct financial loss of approximately **~$1,000 USD** alongside logistics overhead and dead warehouse stock.
- **Root Cause Assessment:** Unverified whether truncation occurred in the frontend input serializer, database decimal column precision (e.g. `DECIMAL(10,2)` instead of `DECIMAL(10,4)`), or an intermediary API type coercion script.

> ⚠️ **Verification Status:**  
> The financial loss and order distortion are verified business facts. The exact technical line of code responsible remains subject to upcoming code-level audit.

---

## Platform Criticality & Structural Risks
1. **Fragmented Vendor Pedigree:** The platform has passed through multiple software development contractors, resulting in undocumented architectural artifacts and missing API documentation.
2. **Fragile Authentication:** Session tokens and authentication mechanisms are maintained across legacy endpoints without centralized token expiration or single sign-on (SSO).
3. **Absence of Staging & Automated Tests:** Price calculations and catalog updates are applied with minimal automated regression test coverage, exposing the business to recurring calculation incidents.
