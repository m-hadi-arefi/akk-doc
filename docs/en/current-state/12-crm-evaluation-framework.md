---
title: "12 — CRM Evaluation Framework"
lang: en
translation: /fa/current-state/12-crm-evaluation-framework
---

# 12 — CRM Evaluation Framework

## Multi-Dimensional Evaluation Methodology
To guarantee that CRM selection serves business operational needs rather than cosmetic preferences, candidates must be scored across 25 objective architectural and functional criteria.

---

## Comprehensive CRM Scoring Matrix

| Evaluation Domain | Specific Evaluation Criteria | Weight | Candidate A (Didar) | Candidate B (Dana) | Candidate C (Internal) | Target Baseline |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Customer Lifecycle** | Individual/corporate KYC, document uploads, deduplication rules. | 8% | High | High | Medium | Fast digital document intake |
| **Credit Workflow** | Multi-level credit ceiling approvals, financial signoff gates. | 10% | Low | High | High | Automated credit enforcement |
| **Quotation Engine** | Real-time stock queries, PDF creation, SMS approval links. | 10% | Medium | Medium | Medium | Sub-5 minute quote turnaround |
| **Order Handoff** | Conversion of quotes to invoices; warehouse notification dispatch. | 8% | Low | High | High | Automated dispatch to warehouse |
| **Driver & Logistics** | Mobile app support, multi-drop route lists, digital signature. | 8% | Low | Low | Medium | Mobile proof-of-delivery |
| **Collections & Check**| Tracking Sayad check numbers, POS slips, non-payment reasons. | 8% | Low | Medium | High | Daily cash & check reconciliation |
| **Returns (RMA)** | Structured return ticket, QA inspection gate, credit note link. | 6% | Low | Medium | Low | Full reverse logistics audit |
| **Daily Sales Tracking**| Mandatory call quotas, EOD supervisor audit, activity dashboards. | 8% | High | High | Medium | Real-time agent activity visibility |
| **Receivable Reminders**| Automated customer SMS reminders, supervisor escalations. | 6% | High | Medium | Medium | Zero missed payment follow-ups |
| **API & Integration** | REST/GraphQL APIs, webhooks, bi-directional sync with Borhan. | 8% | Medium | Medium | High | Reliable ERP synchronization |
| **Data Ownership** | Direct SQL/database access, raw JSON/CSV export, sovereignty. | 6% | Low | High | High | Absolute organizational ownership |
| **Deployment Model** | On-premise VM support, private cloud compatibility, offline resilience. | 4% | Low | High | High | Operable behind corporate firewall |
| **Security & RBAC** | Granular field-level permissions, 2FA, immutable audit trail. | 4% | High | High | Low | Enterprise security compliance |
| **TCO (Total Cost)** | 3-year projection: licenses, implementation, custom code, hosting. | 6% | High (Costly) | Medium | Variable | Predictable capital expenditure |

---

## The Non-Negotiable Principle: Controlled Proof of Concept (POC)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          MANDATORY CRM SELECTION RULE                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│          DO NOT SELECT A CRM BASED ONLY ON A VENDOR SLIDE DECK OR DEMO.                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### POC Protocol Execution Guidelines:
1. **Scope the Trial:** Select exactly one commercial sales sub-team (e.g., 5 sales reps, 1 supervisor, 2 logistics drivers).
2. **Inject Real Workflows:** Run real customer inquiries, real credit limit approvals, real quotation issuance, and real truck deliveries through the system for 21 consecutive business days.
3. **Measure Hard Metrics:**
   - How many minutes does a salesperson spend generating a quotation?
   - Did the customer successfully approve the quote via mobile SMS without technical confusion?
   - Did the delivery driver successfully log payment refusal reasons?
   - Did accounting receive clean, re-keying-free invoice data?
4. **Final Gate Review:** Only solutions demonstrating >85% operational compliance during the live POC may be submitted to executive management for commercial contract authorization.
