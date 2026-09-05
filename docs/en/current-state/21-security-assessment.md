---
title: "21 — Security Assessment"
lang: en
translation: /fa/current-state/21-security-assessment
---

# 21 — Security Assessment

## Discovery-Level Cybersecurity Audit
A preliminary cybersecurity posture assessment was conducted during the Day 01 technical walkthrough. The evaluation categorizes findings across verified direct observations, reported stakeholder disclosures, and hypotheses requiring structured validation.

---

## 1. Authentication, Credentials & Access Management
- **Observed:** Passwords for key infrastructure components (ESXi hypervisors, switches, database SA accounts) are stored in unencrypted browser memories and personal notebooks.
- **Reported:** Vendor developers enjoy persistent VPN and SSH/RDP access to production hosts without time-limited sessions, multi-factor authentication (MFA), or session recording.
- **Needs Validation:** Whether default administrative credentials remain active on edge routers, network printers, or internal network surveillance cameras.

---

## 2. Principle of Least Privilege & Role Separation
- **Observed:** Internal developers operate with administrative privileges on database instances, enabling ad-hoc table schema modifications directly on live production tables.
- **Reported:** Customer provisioning on the B2B portal is executed by directly inserting database records using database management GUI tools rather than an auditable admin panel.
- **Needs Validation:** Whether database accounts used by custom applications restrict privileges (e.g. prohibiting `DROP TABLE` or `TRUNCATE` operations in production).

---

## 3. Perimeter Exposure & Open Ports
- **Observed:** Static public IP addresses host forwarded ports allowing direct remote access to internal web services and terminal endpoints.
- **Reported:** Occasional remote support sessions are initiated via consumer remote-desktop utilities (AnyDesk / RustDesk / UltraViewer) without centralized IT audit logging.
- **Needs Validation:** Comprehensive external network port scanning to detect unauthorized management interfaces exposed to the public internet.

---

## 4. Backup Security & Ransomware Defensibility
- **Observed:** On-premise backup destinations reside on SMB network shares connected directly to the corporate Active Directory domain or accessible with shared local credentials.
- **Technical Assessment:** If an internal workstation is compromised by enterprise ransomware, the malware can traverse the local network and encrypt production databases and local backup shares simultaneously.
- **Needs Validation:** Implementation of air-gapped, immutable (WORM), or off-site cloud object storage buckets.

---

## Tri-Level Confidence Categorization

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        SECURITY FINDINGS BY CONFIDENCE LEVEL                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  [OBSERVED / VERIFIED]                                                                 │
│  ► Unencrypted credential storage on personal workstations.                            │
│  ► Ad-hoc database alterations executed directly on live production hosts.             │
│  ► Laser printers overloading server UPS circuits.                                     │
│                                                                                        │
│  [REPORTED BY STAKEHOLDERS]                                                            │
│  ► Unrestricted, persistent remote VPN access granted to third-party vendor devs.      │
│  ► Manual database edits required to provision verified B2B portal accounts.          │
│                                                                                        │
│  [NEEDS FORMAL VALIDATION]                                                             │
│  ► Full external perimeter vulnerability scan and open port mapping.                   │
│  ► Verification of default credentials on edge switches and industrial Wi-Fi APs.      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
