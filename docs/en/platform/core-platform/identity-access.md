---
title: "Centralized Identity & Access Management (SSO / RBAC)"
lang: en
translation: /fa/platform/core-platform/identity-access
---

# Centralized Identity & Access Management (SSO / RBAC)

> **Executive Summary:**  
> A major security and operational vulnerability at Arian Khodro is credential sprawl: personnel juggle multiple disconnected usernames and passwords across the legacy Tadark accounting system, standalone CRM tools, dealership warranty portals, and personal spreadsheets.  
> The Core Identity & Access Management (IAM) service establishes a unified, standards-based security backbone. It eliminates password proliferation, enforces fine-grained Role-Based Access Control (RBAC), mandates Multi-Factor Authentication (MFA), and guarantees strict Segregation of Duties (SoD) across all enterprise applications.

---

## 1. Single Sign-On (SSO) Architecture

Authentication is centralized using international open standards (**OAuth 2.0** and **OpenID Connect [OIDC]**):

```text
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ Business Application   │ ───► │ Central IAM Provider   │ ───► │ Cryptographic Session  │
│ (Customs / Dealership) │      │ • LDAP / Active Direct │      │ • Signed JWT Token     │
│                        │ ◄─── │ • Multi-Factor (MFA)   │ ◄─── │ • User Roles & Claims  │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

### Core Authentication Safeguards:
1. **Unified Enterprise Directory:** User identities are managed in a single authoritative directory, allowing immediate revocation of all system access upon employee departure or role transfer.
2. **Cryptographic JWT Tokens:** Services do not maintain user passwords. Applications validate short-lived, digitally signed JSON Web Tokens (JWT) containing verified claims.
3. **Mandatory Multi-Factor Authentication (MFA):** Mandatory for all administrative, financial, and customs clearance personnel via SMS One-Time Passwords (OTP) or hardware authenticator apps.

---

## 2. Role-Based & Attribute-Based Access Control (RBAC / ABAC)

Access rights are evaluated dynamically based on the user's formal organizational role and operational context:

| Organizational Role | Permitted Operational Scope | Data & Action Constraints |
| :--- | :--- | :--- |
| **CEO & Executive Board** | Enterprise analytical dashboards, consolidated sales volumes, landed-cost margin trends. | Read-only across individual accounting vouchers; unrestricted across aggregated macro KPIs. |
| **Commercial Procurement** | Foreign proforma management, purchase order generation, supplier price catalogs. | Zero access to internal general ledger postings or tax auditing records. |
| **Customs Specialist** | Customs consignment intake, Bill of Lading (BOL) verification, tariff duty calculation. | Scoped strictly to import shipments; cannot authorize payments to foreign vendors. |
| **Financial Accountant** | General ledger posting, voucher creation, 3-way invoice matching, payment approvals. | Prohibited from modifying vehicle VIN master records or altering inventory counts. |
| **Warehouse Manager** | Physical parts receiving, inventory counts, workshop dispatch, barcode scanning. | Cannot alter parts base purchase prices or modify commercial sales contracts. |
| **Workshop Service Advisor** | Dealership vehicle intake, warranty claim submission, customer service records. | Strictly scoped to their specific authorized dealership branch; cannot view other branches. |
| **Statutory Auditor** | Comprehensive, immutable read-only access to all transaction ledgers, audit logs, and sign-offs. | Absolute read-only; strictly prohibited from creating, updating, or deleting any operational record. |

---

## 3. Segregation of Duties (SoD) & Financial Governance

To prevent fraud, clerical collusion, and unauthorized expenditure, the IAM layer enforces automated Segregation of Duties:

```text
┌────────────────────────┐                                      ┌────────────────────────┐
│ Staff A: Initiator     │                                      │ Staff B: Approver      │
│ Creates Foreign PO     │ ──(System Prohibits Same User)──────►│ Reviews & Authorizes   │
│ Or Customs Voucher     │                                      │ Payment Voucher        │
└────────────────────────┘                                      └────────────────────────┘
```

1. **Four-Eyes Principle for Financial Disbursements:** The employee who enters a purchase order or supplier invoice is mathematically prohibited from approving the payment voucher.
2. **Master Data Modification Separation:** Dealership staff who enter customer service records cannot modify the master customer National ID or chassis VIN record without secondary administrative approval.

---

## 4. Security Auditability & Anomaly Telemetry

Every identity and authorization event is permanently logged into the central audit trail:
- **Failed Login Thresholds:** Repeated failed attempts automatically lock user accounts and trigger real-time alerts to the security administrator.
- **Privilege Escalation Auditing:** Any role modification, permission grant, or administrative delegation is logged with timestamp, authorizing user ID, and originating IP address.
- **Regulatory Compliance:** Audit logs are cryptographically hashed and preserved in append-only storage to satisfy national financial and corporate governance regulations.

---

## 5. Related Documentation

- **[Core Platform Architecture Overview →](/en/platform/core-platform/)** — The foundational shared services backbone.
- **[API Gateway & Traffic Governance →](/en/platform/core-platform/api-gateway)** — Token verification and access enforcement at the gateway.
- **[Master Data Management (MDM) →](/en/platform/core-platform/master-data)** — Authoritative data records secured by IAM.
