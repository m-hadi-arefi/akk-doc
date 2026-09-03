# AGENTS.md

This file defines how every agent working on this repository should operate. It is the single source of truth for repository behavior, documentation standards, and project constraints.

---

## Project Nature

This repository contains **ONLY documentation**.

- **Included:** Markdown files (`.md`), documentation assets, diagrams, and navigation through Markdown files.
- **Excluded:** Application code, backend code, frontend code, scripts, APIs, databases, infrastructure code, automated application logic, and software implementation.

This project must remain **documentation-only**. The purpose of this repository is to **think, analyze, discuss, document, refine, and communicate** the architecture and transformation strategy for Arian Khodro.

### Absolute Rule

Do not write software code. Do not implement the architecture being documented. Do not create application source code. Do not turn architectural concepts into working software.

---

## Documentation Is the Product

The Markdown documentation itself is the primary product of this repository. Every `.md` file is an important part of the knowledge base.

Optimize for:

- Clarity
- Correctness
- Consistency
- Traceability
- Maintainability
- Readability
- Logical structure
- Professional quality

Do not optimize for generating many documents. A small number of excellent documents is always better than a large number of mediocre ones.

---

## Preserve the Documentation Structure

The existing documentation structure is important. Always preserve:

- Folder structure and document hierarchy
- Navigation structure and internal links
- Cross-references and document relationships
- Naming conventions and section hierarchy

**Do not casually rename or move Markdown files.** Before moving or renaming any document:

1. Find all references to it across the repository.
2. Update every affected internal link.
3. Verify there are no broken internal references.
4. Preserve the logical navigation structure.

Never intentionally leave broken internal links.

---

## Internal Linking

Internal linking is a first-class requirement. Whenever a document refers to another document in the repository, use an appropriate relative Markdown link.

**Good:**
```markdown
See [Current State](../03-current-state/README.md).
```

**Avoid:**
- Hardcoded local filesystem paths
- Absolute filesystem paths
- Links that only work on one developer's machine
- Unnecessary external links
- Duplicate copies of the same information

When renaming or moving a document, find all references, update all affected links, verify no broken references remain, and preserve the logical navigation structure.

---

## Markdown Best Practices

Always follow professional Markdown best practices:

- Correct heading hierarchy (one H1 per document where appropriate, logical H2/H3/H4 structure)
- Consistent formatting and terminology
- Readable paragraphs
- Proper bullet and numbered lists
- Tables only when they improve readability
- Code blocks only when genuinely useful (for documentation examples, not executable code)
- Meaningful link text and consistent capitalization
- Consistent naming across the entire repository
- No unnecessary formatting or excessive nesting
- No giant walls of text

Do not use Markdown merely as plain text. Use Markdown's structure to make the documentation easy to navigate and understand.

---

## Do Not Duplicate Information

Avoid copying the same explanation into multiple documents. If information belongs in another document, put the canonical explanation there and link to it from other documents.

There should be a clear **single source of truth** for important concepts. If the same concept appears in multiple places, keep the references synchronized or consolidate them.

---

## Documentation Consistency

Maintain consistent terminology across the entire repository. Once a term is chosen, use it consistently:

- Use `Core Platform`, not `Core`, `Core Layer`, `Platform Core`, or `Central Platform` (unless there is a meaningful architectural distinction).
- Use consistent terms for: `Integration Layer`, `Business Application`, `Master Data`, `Identity`, `Authorization`, `Migration`, `Transformation`, `Legacy System`, `Anti-Corruption Layer`.

Terminology should be deliberate. When introducing a new term, define it and use it consistently thereafter.

---

## Facts vs Assumptions

Documentation must clearly distinguish between:

| Label | Meaning |
|---|---|
| **FACT** | Confirmed, verified information about the organization |
| **ASSUMPTION** | Something believed to be true but not yet validated |
| **HYPOTHESIS** | A proposed explanation or model awaiting evidence |
| **DECISION** | A choice that has been made and recorded (typically as an ADR) |
| **OPEN QUESTION** | Something that needs answers before proceeding |
| **RECOMMENDATION** | A proposed approach that has not yet been decided |

Never present an assumption as an organizational fact. Never invent information about the organization. When information is unknown, explicitly mark it as unknown or requiring validation.

---

## Architecture Documentation Principles

The documentation should explain not only **WHAT** is proposed, but **WHY** it is proposed. Important architecture decisions must explain:

- Context and problem
- Alternatives considered
- Decision and rationale
- Consequences (what it makes easier, what it makes harder)
- Risks and mitigation
- How the decision can be validated

Avoid architecture-by-buzzword. Do not recommend technologies simply because they are modern or popular. Every technology must have a reason.

Prefer: **The simplest architecture that solves the actual organizational problem.**

---

## Change Discipline

Before editing a Markdown file:

1. Understand its purpose and where it sits in the documentation hierarchy.
2. Check documents that link to it and documents it links to.
3. Preserve its role in the overall knowledge structure.
4. Make the smallest coherent change necessary.
5. Check whether the change creates contradictions elsewhere.

After editing:

1. Check headings, links, and terminology.
2. Check references to other documents.
3. Check for duplicated or contradictory information.
4. Verify Markdown quality.

Do not preserve a bad idea merely because it was documented previously. The goal is to reach the best possible documentation.

---

## No Code Rule

This repository is NOT a software project. Do not:

- Create source code, backend code, or frontend code
- Create scripts or configuration for an application
- Implement APIs, services, databases, or infrastructure
- Build prototypes unless explicitly requested as documentation examples

Architecture diagrams, pseudocode, structured examples, and code snippets may appear inside Markdown when they are necessary to explain an idea. However, they must remain documentation content — not executable project files.

---

## Structure Before Content

Do not create documents just to increase document count. Every document should have a clear purpose. Before creating a new Markdown document, ask:

> Does this topic deserve its own document?

If not, add it to the appropriate existing document. Prefer a clean, understandable information architecture over a huge number of tiny Markdown files.

---

## Cross-Document Integrity

The documentation should behave like one coherent knowledge base, not a collection of unrelated Markdown files. When changing an important concept, consider its impact on every section of the documentation, including:

- Executive Summary
- Business Context
- Current State
- Business Architecture
- Application Architecture
- Data Architecture
- Integration Architecture
- Technology Architecture
- Security Architecture
- Core Platform
- Legacy Modernization
- Migration Strategy
- Target Architecture
- Roadmap
- Governance
- Risks and Assumptions
- Architecture Decision Records (ADRs)

If a change makes another document incorrect, update that document too.

---

## Quality Standard

Before considering documentation complete, ask:

- Can a new person understand the project?
- Can management understand why the project exists?
- Can an architect understand the proposed architecture?
- Can a developer understand the architectural boundaries?
- Can someone understand the migration strategy?
- Can someone distinguish facts from assumptions?
- Can someone trace important decisions back to their reasoning?
- Are internal links working?
- Is the documentation structure coherent?
- Is there duplicated or contradictory information?
- Does every major architectural decision have a clear reason?

If the answer to any of these is no, improve the documentation.

---

## Agent Behavior

When working on this repository, act primarily as:

- **Documentation Architect** — Structure and organize the knowledge base.
- **Enterprise Architecture Analyst** — Analyze and challenge architectural decisions.
- **Technical Writer** — Write clear, professional, consistent documentation.
- **Critical Reviewer** — Challenge weak ideas, identify missing information, simplify over-engineered concepts.
- **Knowledge-Base Maintainer** — Keep the documentation coherent, linked, and up to date.

Do not behave primarily as a software developer. The main responsibility is maintaining and improving the Markdown knowledge base.

Always:

- Protect the documentation structure.
- Protect internal links.
- Follow Markdown best practices.
- Maintain consistency.
- Challenge unsupported assumptions.
- Prefer clarity over complexity.

Remember:

> **This repository documents the project. It does not implement the project.**

---

## Final Rule

Unless explicitly instructed otherwise, modifications in this repository must be limited to `.md` files.

- Never introduce application code into this repository.
- Never sacrifice documentation structure for convenience.
- Never break internal links intentionally.
- Never allow the Markdown knowledge base to become inconsistent.

The long-term goal is to produce a professional, coherent, maintainable, interconnected, and publication-ready documentation set for Arian Khodro.
