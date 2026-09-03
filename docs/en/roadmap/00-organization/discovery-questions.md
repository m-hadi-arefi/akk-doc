---
title: "Discovery Questions: Organization & Context"
lang: en
translation: /fa/roadmap/00-organization/discovery-questions
---

# Discovery Questions: Organization & Context

These questions must be answered before the target architecture can be finalized. They are organized by category.

**How to use:** Conduct interviews with stakeholders, review existing documentation, and record answers here. Mark each question as `[[ANSWERED]]`, `[[PARTIAL]]`, or `[[OPEN]]` as you gather information.

---

## Organization & People

- [ ] Who is the executive sponsor for this transformation?
- [ ] Who owns the IT department? What is their title and scope?
- [ ] How large is the IT team? What are their roles and skill sets?
- [ ] Who are the business stakeholders for each major capability area?
- [ ] Are there business process owners? Who are they?
- [ ] Who currently maintains Tadark? Is it an internal team or an external vendor?
- [ ] What is the reporting structure for technology decisions?
- [ ] Who makes final decisions on technology and architecture?
- [ ] Are there any external consultants or vendors currently involved?

## Business & Strategy

- [ ] What does Arian Khodro do as a business? (Industry, products, services, customers)
- [ ] How many employees does Arian Khodro have?
- [ ] Is the organization single-location or multi-location?
- [ ] What are the primary revenue streams?
- [ ] What are the top 3-5 business priorities for the next 1-3 years?
- [ ] Is digital transformation a strategic priority? Why or why not?
- [ ] What happens if we do nothing? What are the risks of no change?
- [ ] Are there competitive pressures driving modernization?
- [ ] Are there regulatory or compliance requirements that force certain capabilities?
- [ ] What is the budget or budget range for this transformation?
- [ ] What is the expected timeline? Is there a hard deadline?

## Systems & Technology

- [ ] What is the complete list of all software systems used by the organization?
- [ ] For each system: what technology stack is it built on?
- [ ] For each system: what database does it use?
- [ ] For each system: who is the owner (person or team)?
- [ ] For each system: how many users are there?
- [ ] Are there any cloud-based systems? Which ones?
- [ ] Are there any mobile applications?
- [] What are the current infrastructure details (servers, networking, hosting)?
- [ ] Are there any security certifications or compliance requirements (ISO, PCI, data privacy laws)?
- [ ] What is the current backup and disaster recovery setup?

## Tadark — Legacy Accounting System

- [ ] What specific accounting processes does Tadark support?
- [ ] Who uses Tadark? How many users, in what roles?
- [ ] What database does Tadark use? What is the approximate data size?
- [ ] Does Tadark have any APIs? What kind? (Database views, file exports, web services?)
- [ ] What systems does Tadark currently integrate with? How?
- [ ] What data does Tadark own (single source of truth)?
- [ ] What data do other systems depend on from Tadark?
- [ ] What are the known problems with Tadark? (Performance, bugs, limitations)
- [ ] Has anyone considered replacing Tadark? What happened?
- [ ] Is there documentation for Tadark's data model or business logic?
- [ ] What would happen if Tadark went down tomorrow? For how long could the business operate?
- [ ] Are there any third-party extensions or customizations built on top of Tadark?

## Business Capabilities & Processes

- [ ] What are the end-to-end business processes? (Order-to-cash, procure-to-pay, etc.)
- [ ] What are the most painful or manual processes today?
- [ ] Where do users create workarounds or duplicate data entry?
- [ ] What reporting and analytics are currently done? How?
- [ ] What data is duplicated across systems?
- [ ] What are the top 5 data quality issues?
- [ ] Who is responsible for each business capability area?
- [ ] What are the KPIs or metrics for each capability area?

## Integration & Data

- [ ] What integrations exist between systems today?
- [ ] Are integrations documented? Where?
- [ ] What protocols are used for integrations? (Database links, file transfer, APIs, email, manual)
- [ ] What happens when integrations fail? Is there monitoring?
- [ ] Is there any API management or gateway currently in place?
- [ ] Are there any message queues or event systems?
- [ ] How is data synchronized between systems today?

## Culture & Readiness

- [ ] How does the organization handle change?
- [ ] What is the tolerance for risk?
- [ ] Has there been prior large-scale IT transformation? What happened?
- [ ] How is technology debt viewed by management and staff?
- [ ] Is there a culture of documentation?
- [ ] Are there any known change resistance factors?
- [ ] What is the expected adoption style? (Top-down, bottom-up, collaborative)

---

*Record answers in `docs/02-business-context/` and `docs/03-current-state/` as they are discovered. Update this checklist as questions are answered.*
