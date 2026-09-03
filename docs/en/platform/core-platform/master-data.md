---
title: "Master Data Management (MDM)"
lang: en
translation: /fa/platform/core-platform/master-data
---

# Master Data Management (MDM)

Master Data represents the shared, foundational business records that must remain consistent across the entire organization. The historical lack of centralized MDM at Arian Khodro caused duplicate customer entries, outdated phone records, and mismatched VIN numbers across warranty claims.

---

## 1. Three Core Master Entities

```text
┌───────────────────────────────┐ ┌───────────────────────────────┐ ┌───────────────────────────────┐
│     Customer Master (MDM)     │ │      Vehicle Master (MDM)     │ │    Spare Parts Master (MDM)   │
│ • Verified National ID / Tax  │ │ • 17-digit Standard VIN       │ │ • Manufacturer Part Number    │
│ • Validated Mobile Number     │ │ • Engine Number & Body Color  │ │ • Model Compatibility Schema  │
│ • Corporate / Individual Type │ │ • Production Year & Trim Spec │ │ • Approved Base List Price    │
└───────────────────────────────┘ └───────────────────────────────┘ └───────────────────────────────┘
```

---

## 2. Data Governance Golden Rules

1. **Golden VIN Authority**: The 17-character VIN is stamped at customs clearance. No downstream system or user may override or manually re-enter a VIN record without formal authorization.
2. **National ID as Primary Customer Key**: Customer profiles must link to verified national identity records, preventing duplicate accounts for single buyers with slight spelling variations.
3. **Single Price Source for Parts**: Spare parts pricing is maintained exclusively in MDM; all consuming applications (CRM, workshops, Tadark) synchronize from this authoritative repository.
