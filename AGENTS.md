# Documentation Agent Rules & Governance Policy

This file defines the permanent governance, operating model, and quality standards for all AI agents and human contributors working on this repository. It is the single source of truth for repository behavior, documentation standards, and multi-language synchronization.

> **Absolute Permanent Rule:**  
> Every documentation change must be reflected in both **English (`docs/en/`)** and **Persian (`docs/fa/`)**.  
> A document is **never** considered complete if it exists in only one language.

---

## 1. Purpose
This repository is the canonical organizational knowledge system for **Arian Khodro**, covering:
- Enterprise & Solution Architecture
- Digital Transformation Roadmap (19 stages)
- Core Platform Shared Capabilities
- Engineering Standards, Patterns, and Decision Records

This repository contains **documentation only**. No software application code, infrastructure scripts, or executable business logic may be implemented here.

---

## 2. Repository Structure
The repository strictly enforces a dual-tree bilingual structure:

```text
docs/
├── index.md           # Root dual-language entry point and router
├── en/                # Complete English documentation tree
│   ├── index.md       # English home
│   ├── roadmap/       # Transformation roadmap (Stages 00 - 18)
│   ├── platform/      # Core platform & project delivery methodologies
│   └── knowledge/     # Architecture patterns, standards, templates, glossary
├── fa/                # Complete Persian documentation tree
│   ├── index.md       # Persian home
│   ├── roadmap/       # نقشه راه تحول (Stages 00 - 18)
│   ├── platform/      # سکوی مرکزی و متدولوژی‌های تحویل
│   └── knowledge/     # الگوها، استانداردها، قالب‌ها و واژه‌نامه
└── .vitepress/        # VitePress config, theme, and locales
```

Every meaningful file in `docs/en/` must have an identical relative counterpart in `docs/fa/`.

---

## 3. Language Policy
The repository supports two first-class official languages:
- 🇬🇧 **English (`en`)**: Primary international and technical engineering language (LTR).
- 🇮🇷 **Persian (`fa`)**: Primary organizational and regional operational language (RTL).

English and Persian are two language representations of the **exact same knowledge base**. Asymmetry (e.g. English having 100 documents while Persian has 70) is strictly prohibited.

---

## 4. English/Persian Synchronization
Every document must be linked to its corresponding translation via YAML frontmatter:

**English Document (`docs/en/path/file.md`):**
```yaml
---
title: Business Analysis
lang: en
translation: /fa/path/file
---
```

**Persian Document (`docs/fa/path/file.md`):**
```yaml
---
title: تحلیل کسب‌وکار
lang: fa
translation: /en/path/file
---
```

---

## 5. Creating New Documents
Whenever a new document is created, the contributor or agent must:
1. Create the English version in `docs/en/<path>/<name>.md`.
2. Create the Persian counterpart in `docs/fa/<path>/<name>.md`.
3. Add frontmatter with bidirectional translation links (`translation: /fa/...` and `translation: /en/...`).
4. Add the document to English navigation and sidebar in `.vitepress/config.ts`.
5. Add the document to Persian navigation and sidebar in `.vitepress/config.ts`.
6. Verify relative links in both versions.
7. Run `npm run docs:check-sync` and `npm run docs:build`.

---

## 6. Updating Documents
Whenever an existing document is modified:
1. Identify its translation counterpart using the frontmatter `translation` attribute.
2. Update the counterpart document to ensure semantic and technical equivalence.
3. If headings or anchors change, update all internal links referencing them in both languages.
4. If titles change, update navigation and sidebar labels in `.vitepress/config.ts`.
5. Run `npm run docs:check-sync`.

---

## 7. Deleting Documents
When removing obsolete or merged documents:
1. Identify both the English and Persian versions.
2. Search all documents for references/links to both paths.
3. Update or remove incoming links.
4. Remove both language files simultaneously.
5. Remove entries from both English and Persian navigation/sidebar in `.vitepress/config.ts`.
6. Run `npm run docs:check-sync` and `npm run docs:build`.

---

## 8. Moving/Renaming Documents
When moving or renaming a document:
1. Move the English file to its new path.
2. Move the Persian file to the matching path.
3. Update frontmatter `translation` paths in both files.
4. Update all internal links across the repository in both languages.
5. Update `.vitepress/config.ts` sidebar and navigation for both languages.
6. Verify no stale routes or broken links remain.

---

## 9. Translation Rules
- **Technical Accuracy**: Never summarize or omit technical details during translation. Code examples, tables, diagrams, and formulas must remain 100% equivalent.
- **Natural Persian**: Persian text must be fluent, idiomatic, and grammatically sound. Avoid clumsy machine translations.
- **Technical Terminology**: Keep official English terms in parentheses upon first or relevant mention (e.g. `معماری سازمانی (Enterprise Architecture)`, `الگوی شاخه خفه‌کننده (Strangler Fig Pattern)`).
- **Standards & Framework Names**: Preserve official names (e.g. BABOK, TOGAF, BPMN, ISO/IEC/IEEE 42010, RUP, Scrum, Kanban, Kafka, REST, GraphQL).
- **Code & Formats**: Code blocks, commands, and file paths must remain in English and rendered LTR (`dir="ltr"`).

---

## 10. VitePress Rules
- Configure all locales through `.vitepress/config.ts`.
- Set `dir: 'rtl'` for the `fa` locale and `dir: 'ltr'` for the `en` locale.
- Enable `cleanUrls: true`.
- Maintain directory index pages as `index.md` (e.g. `docs/en/roadmap/index.md`).
- Ensure local search is localized for both English and Persian users.

---

## 11. Navigation Rules
- The top navigation bar in `.vitepress/config.ts` must have matching menu items for both English and Persian.
- Top-level links for English must point to `/en/...`.
- Top-level links for Persian must point to `/fa/...`.
- A language switcher must be visible and functional on all pages.

---

## 12. Sidebar Rules
- Sidebars for `/en/` and `/fa/` must mirror each other exactly in hierarchy, collapse state, and ordering.
- Every page in `docs/en/` must be accessible from the English sidebar.
- Every page in `docs/fa/` must be accessible from the Persian sidebar.

---

## 13. Internal Link Rules
- English documents must link exclusively to other English documents (`/en/...` or relative links).
- Persian documents must link exclusively to other Persian documents (`/fa/...` or relative links).
- Never use hardcoded absolute filesystem paths (`C:\...` or `/home/...`).
- Broken links are considered build-breaking defects.

---

## 14. Document Templates
Standardize document structures. Standard types include:
- **Business Case & BRD**: Problem, Objectives, Stakeholders, Scope, Requirements (FR/NFR), Constraints.
- **Process Definition**: Process Goal, Trigger, Roles, BPMN Flow, Inputs/Outputs, KPIs, Automation candidates.
- **Solution Architecture**: Context, Quality Attributes, Component View, Sequence, Interfaces, Data Model, Deployment.

---

## 15. Architecture Documentation Rules
- Follow **ISO/IEC/IEEE 42010:2022** principles (Stakeholders, Concerns, Viewpoints, Views, Decisions).
- Clearly label statements:
  - `[FACT]`: Verified reality in Arian Khodro.
  - `[ASSUMPTION]`: Unverified belief recorded in Assumptions Registry.
  - `[DECISION]`: Formal choice recorded in an ADR.
  - `[OPEN QUESTION]`: Unanswered item requiring discovery.
  - `[RECOMMENDATION]`: Proposed architectural advice.

---

## 16. Pattern Documentation Rules
Architecture and design pattern documents must use the standard template:
1. **Title & English Name**
2. **Problem & Context**
3. **Solution & Architecture**
4. **How It Works**
5. **When to Use / When NOT to Use**
6. **Trade-offs (Pros & Cons)**
7. **Concrete Example**
8. **Relevance to Arian Khodro**
9. **Related Patterns & References**

---

## 17. Architecture Decision Record (ADR) Rules
All significant decisions must follow the ADR template:
- `Status`: Proposed | Accepted | Deprecated | Superseded
- `Context & Problem Statement`
- `Decision Drivers`
- `Considered Options & Alternatives`
- `Decision Outcome & Rationale`
- `Consequences (Positive, Negative, Neutral)`
- `Risk & Mitigation`
- `Validation Method`

Every ADR must exist in both `docs/en/` and `docs/fa/`.

---

## 18. AI Usage & Lifecycle Governance
AI is integrated directly into the engineering lifecycle. Every roadmap stage overview must explicitly document:
1. **AI Assistance**: Where LLMs and agents assist (e.g. code analysis, drafting specifications, test generation).
2. **Human Decision**: What judgments, architectural decisions, and trade-offs require human ownership.
3. **Human Approval**: The designated role (Lead Architect, Product Owner, CISO) who signs off.
4. **Risks**: Hallucinations, security vulnerabilities, ungrounded assumptions, compliance breaches.
5. **Required Evidence**: Measurable proof (tests, benchmarks, stakeholder sign-offs, ADRs) required before advancement.

---

## 19. Validation Rules
Before committing any changes:
1. Run `npm run docs:check-sync` to verify 1:1 language file parity, frontmatter mapping, and internal links.
2. Verify that no orphan documents or broken markdown links exist.
3. Verify that code blocks in Persian files maintain `dir="ltr"` formatting.

---

## 20. Build & Test Requirements
All documentation builds must execute cleanly without warnings or errors:
```bash
# Check parity and synchronization
npm run docs:check-sync

# Build VitePress production bundle
npm run docs:build
```
Never push changes if `docs:build` fails.

---

## 21. Definition of Done
A documentation task is complete ONLY when:
- [ ] Both English (`docs/en/`) and Persian (`docs/fa/`) documents are written and fully aligned.
- [ ] Bidirectional frontmatter `translation` metadata is established.
- [ ] Navigation and sidebars are updated in `.vitepress/config.ts` for both languages.
- [ ] Internal links are validated and functional in both language contexts.
- [ ] Technical terms are preserved in parentheses in Persian documentation.
- [ ] Roadmap stages include complete AI Lifecycle sections.
- [ ] `npm run docs:check-sync` passes with 0 errors.
- [ ] `npm run docs:build` completes with code 0.
