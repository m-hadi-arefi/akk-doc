---
title: "Centralized Identity & Role-Based Access Control (RBAC)"
lang: en
translation: /fa/platform/core-platform/identity-access
---

# Centralized Identity & Role-Based Access Control (RBAC)

Presently, personnel at Arian Khodro juggle multiple credentials across Tadark, warranty tools, CRM, and sales interfaces. The Core Platform eliminates password sprawl and permission creep through standard identity protocols.

---

## 1. Single Sign-On (SSO) Foundation

- Standards-based **OAuth 2.0 / OpenID Connect (OIDC)** authentication server.
- Single authenticated session grants seamless access across authorized portals.
- Mandatory Multi-Factor Authentication (MFA / SMS OTP) for corporate accounting staff and administrative roles.

---

## 2. Role-Based Access Control (RBAC) Matrix

| User Role | Permitted Scope | Security Constraints |
| :--- | :--- | :--- |
| **CEO & Executive Board** | Enterprise analytical dashboards, consolidated sales volumes, margin analysis | Read-Only across individual vouchers, unrestricted across macro KPIs |
| **CRM Specialist** | Customer file creation/editing, initial vehicle pre-booking | Zero access to foreign import cost structures or tax configurations |
| **Workshop Receptionist** | License plate and VIN queries, warranty claim submission, maintenance logs | Scoped strictly to the specific dealership workshop |
| **Financial Accountant** | General ledger posting, payment verification, customer account settlement | Prohibited from altering Vehicle Identification Numbers (VIN) or customer identity |
