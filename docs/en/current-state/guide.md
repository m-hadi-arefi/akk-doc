---
title: "New Document Authoring Guide & Template"
lang: en
translation: /fa/current-state/guide
---

# New Document Authoring Guide & Template

## Purpose
This guide explains how to add new markdown documentation to the **Current State Documents** directory while maintaining strict English-Persian synchronization and VitePress compliance.

---

## Document Lifecycle Steps
1. **Create the English File:** Add `docs/en/current-state/<topic>.md`.
2. **Create the Persian File:** Add `docs/fa/current-state/<topic>.md`.
3. **Include Proper Frontmatter:** Ensure bidirectional links between both languages.
4. **Update Sidebar Navigation:** Add the document to `.vitepress/config.ts`.
5. **Verify Synchronization:** Run `npm run docs:check-sync`.

---

## Standard Markdown Template

### English Frontmatter & Header Template
```yaml
---
title: "Sample Process Document"
lang: en
translation: /fa/current-state/sample-process
---

# Sample Process Document

## Executive Summary
Brief summary of the document for executive review.

## Scope & Applicability
Departments and roles covered by this process.

## Detailed Workflow & Specifications
Process steps, roles, and inputs/outputs.
```

### Persian Frontmatter & Header Template
```yaml
---
title: "مستند نمونه فرآیند"
lang: fa
translation: /en/current-state/sample-process
---

# مستند نمونه فرآیند

## خلاصه مدیریتی
توضیح کوتاه و مدیریتی در مورد هدف و دستاورد این مستند.

## دامنه کاربرد
واحدها و نقش‌های سازمانی مرتبط با این رویه.

## شرح تفصیلی فرآیند
مراحل اجرایی، مسئولیت‌ها، ورودی‌ها و خروجی‌ها.
```
