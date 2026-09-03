import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const docsDir = path.join(rootDir, 'docs')
const enDir = path.join(docsDir, 'en')

const aiSections = {
  '00-organization': `
## AI in this Stage

### AI Assistance
- **Industry & Domain Benchmarking**: Synthesize automotive distribution, dealership network models, and supply chain best practices.
- **Document Synthesis**: Parse organizational charts, operational memos, and legacy documentation into initial capability drafts.
- **Discovery Interview Preparation**: Formulate tailored stakeholder inquiry questionnaires based on initial domain hypotheses.

### Human Decision
- **Commercial Validation**: Confirming revenue drivers, business model boundaries, and operational priorities.
- **Strategic Direction**: Approving which business capabilities are core competitive differentiators vs utility functions.

### Human Approval
- **Required Sign-Off**: Executive Leadership & Head of Enterprise Architecture.

### Risks
- **Context Hallucination**: AI assuming generic automotive dealership models that contradict Arian Khodro's actual supply and customs realities.
- **Unverified Assumptions**: Mistaking hypothetical operational workflows for actual business practices.

### Required Evidence
- Signed-off Business Model Canvas.
- Validated Capability Catalog & Organizational Boundaries document.
- Documented Stakeholder Discovery Interview Transcripts.
`,
  '01-business-analysis': `
## AI in this Stage

### AI Assistance
- **Requirements Extraction**: Analyze user interview transcripts and legacy system screens to extract functional and non-functional requirements.
- **Ambiguity Detection**: Highlight conflicting, vague, or untestable requirement statements in draft specifications.
- **User Story Scaffolding**: Draft user stories, acceptance criteria (Given/When/Then), and initial state machine diagrams.

### Human Decision
- **Scope & Priority Trade-offs**: Deciding which business needs are in-scope for immediate delivery vs deferred.
- **Business Rule Verification**: Confirming subtle organizational accounting rules and workshop warranty workflows.

### Human Approval
- **Required Sign-Off**: Business Domain Owner & Lead Product Owner.

### Risks
- **Tacit Knowledge Gap**: AI missing unwritten operational workarounds relied upon by workshop and parts managers.
- **Scope Creep**: Generative suggestions introducing unnecessary software complexity beyond actual business needs.

### Required Evidence
- Formally approved Business Requirements Document (BRD).
- Baselined Requirements Traceability Matrix (RTM).
- Signed Stakeholder Validation Records.
`,
  '02-process-management': `
## AI in this Stage

### AI Assistance
- **BPMN Generation**: Transform narrative process descriptions into structured BPMN 2.0 XML and diagram specifications.
- **Bottleneck Analysis**: Analyze historical service order and inventory logs to highlight operational bottlenecks.
- **Standardization Checks**: Verify swimlanes, event triggers, and gateway logic against BPMN 2.0 conventions.

### Human Decision
- **Process Re-engineering (TO-BE)**: Choosing which manual approval steps to eliminate or automate.
- **SLA & KPI Benchmarks**: Establishing acceptable operational timeframes for repairs, parts fulfillment, and invoicing.

### Human Approval
- **Required Sign-Off**: Head of After-Sales Operations & Process Governance Lead.

### Risks
- **Theoretical Optimization**: Modeling theoretical workflows that fail under actual dealership network connectivity or staffing constraints.
- **Role Misassignment**: Allocating critical authorization responsibilities to improper organizational roles.

### Required Evidence
- Validated BPMN 2.0 Process Models (AS-IS and TO-BE).
- Process Definition Document with identified KPIs and SLA thresholds.
- Signed Process Owner Sign-Off.
`,
  '03-enterprise-architecture': `
## AI in this Stage

### AI Assistance
- **Capability Mapping**: Map current software applications and databases against enterprise business capabilities.
- **TOGAF Artifact Drafting**: Generate drafts of Architecture Vision, Stakeholder Maps, and Architecture Principles.
- **Dependency Graphing**: Identify cross-domain couplings and shared data entity dependencies.

### Human Decision
- **Target State Architecture**: Selecting the architectural vision, evolutionary horizons, and target capability models.
- **Core vs Edge Boundaries**: Defining what belongs inside central platforms vs decentralized business units.

### Human Approval
- **Required Sign-Off**: Architecture Review Board (ARB) & Chief Technology Officer (CTO).

### Risks
- **Ivory Tower Architecture**: Designing disconnected, overly complex target states unachievable within organizational budget or timelines.
- **Legacy Erasure**: Assuming legacy systems (e.g. Tadark) can be turned off without multi-year transition phases.

### Required Evidence
- Approved Architecture Vision Document.
- Enterprise Target Architecture Blueprint (Business, Application, Data, Technology).
- Formal ARB Architecture Gate Review Record.
`,
  '04-architecture-documentation': `
## AI in this Stage

### AI Assistance
- **ISO 42010 View Alignment**: Check that architectural descriptions systematically address stated stakeholder concerns.
- **Consistency Verification**: Detect contradictory statements across architectural viewpoints and documentation pages.
- **ADR Structuring**: Format architecture decisions, alternatives considered, and consequences into standard ADR templates.

### Human Decision
- **Viewpoint Selection**: Determining which architectural viewpoints are necessary to communicate with engineering, business, and operations.
- **Decision Ratification**: Approving architectural trade-offs and formally recording them in the ADR repository.

### Human Approval
- **Required Sign-Off**: Lead Enterprise Architect.

### Risks
- **Superficial Documentation**: Generating voluminous architectural text that lacks rigorous technical substance or actionable constraints.
- **Stale Views**: Allowing architecture documentation to diverge from actual software implementation over time.

### Required Evidence
- ISO/IEC/IEEE 42010:2022 compliant Architecture Description.
- Catalog of accepted Architecture Decision Records (ADRs).
- Stakeholder Viewpoint Coverage Matrix.
`,
  '05-software-architecture': `
## AI in this Stage

### AI Assistance
- **Domain Modeling**: Analyze entity relationships and suggest Domain-Driven Design (DDD) aggregates, entities, and value objects.
- **Modular Monolith Boundaries**: Inspect module dependencies and detect illegal cross-boundary database queries or imports.
- **API Contract Drafting**: Generate initial OpenAPI and protobuf interface definitions from domain specifications.

### Human Decision
- **Architectural Style**: Choosing between Modular Monolith, Microservices, and Event-Driven styles for each subsystem.
- **Data Consistency Models**: Deciding where ACID consistency is mandatory vs where eventual consistency is acceptable.

### Human Approval
- **Required Sign-Off**: Principal Software Architect & Application Engineering Lead.

### Risks
- **Microservices Fragmentation**: Inadvertently introducing distributed system complexity, network latency, and partial failure modes.
- **Leaky Domain Abstractions**: Allowing infrastructure or database concerns to pollute core business domain logic.

### Required Evidence
- Software Architecture Document (SAD) with C4 Model diagrams.
- Domain Model Specification with explicit bounded contexts.
- Reviewed and Approved Interface Contracts.
`,
  '06-data-architecture': `
## AI in this Stage

### AI Assistance
- **Data Dictionary Synthesis**: Scan legacy database schemas to extract field descriptions, data types, and foreign key relations.
- **Entity Matching & Deduplication**: Analyze customer, vehicle, and spare part records to identify duplication across siloed databases.
- **Data Lineage Mapping**: Trace data transformations from source systems through pipelines to analytics dashboards.

### Human Decision
- **System of Record (SoR)**: Designating the canonical master source for critical business entities (Vehicle, Customer, Parts).
- **Data Retention & Privacy**: Setting retention windows and compliance policies for financial and customer identity data.

### Human Approval
- **Required Sign-Off**: Chief Data Officer (CDO) & Enterprise Data Architect.

### Risks
- **Data Corruption**: Merging disparate legacy records with incorrect key matching, corrupting vehicle maintenance histories.
- **Taxonomy Desynchronization**: Misaligning spare part catalog hierarchies with international supplier catalogs.

### Required Evidence
- Enterprise Master Data Management (MDM) Entity Specifications.
- Enterprise Data Dictionary and Conceptual/Logical Data Models.
- Data Governance and Access Control Charter.
`,
  '07-integration-architecture': `
## AI in this Stage

### AI Assistance
- **Adapter Boilerplate Generation**: Scaffolding Anti-Corruption Layer (ACL) translation adapters and legacy connectors.
- **Contract Schema Validation**: Verifying schema backward-compatibility across Kafka event topics and REST APIs.
- **Integration Test Synthesis**: Generating mock servers, consumer-driven contract tests, and synthetic event payloads.

### Human Decision
- **Communication Protocol Selection**: Choosing between synchronous REST/gRPC vs asynchronous Kafka events for each integration flow.
- **Failure & Retry Policies**: Defining dead-letter queues, idempotent retry strategies, and circuit breaker thresholds.

### Human Approval
- **Required Sign-Off**: Integration Architecture Lead & Core Platform Lead.

### Risks
- **Distributed Cascade Failures**: Synchronous HTTP calls across legacy systems causing chained downtime and timeout storms.
- **Event Schema Evolution Drift**: Breaking downstream consumers through unversioned event schema mutations.

### Required Evidence
- Published OpenAPI and AsyncAPI Integration Contracts.
- Anti-Corruption Layer (ACL) Architecture Specifications.
- Consumer-Driven Contract Test Suite Verification.
`,
  '08-security-architecture': `
## AI in this Stage

### AI Assistance
- **Threat Modeling (STRIDE)**: Analyze architecture diagrams to identify spoofing, tampering, information disclosure, and elevation risks.
- **Security Policy Formulation**: Draft OAuth2 scope definitions, RBAC role matrices, and network security policies.
- **Vulnerability Scanning Integration**: Scaffolding automated SAST/DAST scanner configurations in CI/CD pipelines.

### Human Decision
- **Risk Tolerance Acceptance**: Approving mitigations for identified architectural risks and granting explicit security waivers.
- **Identity Federation**: Deciding enterprise SSO providers, MFA requirements, and external partner access policies.

### Human Approval
- **Required Sign-Off**: Chief Information Security Officer (CISO) & Security Architecture Lead.

### Risks
- **False Sense of Security**: Assuming AI threat models catch bespoke business logic flaws or zero-day vulnerabilities.
- **Permission Bloat**: Granting over-permissive scopes or roles that violate the principle of least privilege.

### Required Evidence
- Comprehensive STRIDE Threat Model Report.
- RBAC/ABAC Role & Permission Matrix Specification.
- Security Assessment and Penetration Test Sign-Off.
`,
  '09-core-platform': `
## AI in this Stage

### AI Assistance
- **Platform Capability Scaffolding**: Generate client SDK libraries, documentation, and starter templates for Core Platform services.
- **Service Mesh & Gateway Config**: Draft API Gateway routing rules, rate limiting configurations, and authentication plugins.
- **Observability Metric Scaffolding**: Define standardized Prometheus metric names, OpenTelemetry spans, and Grafana dashboard templates.

### Human Decision
- **Platform vs Application Boundary**: Enforcing strict separation between shared platform services and automotive domain logic.
- **Technology Stack Standardization**: Selecting the supported enterprise runtime environments, databases, and message brokers.

### Human Approval
- **Required Sign-Off**: Core Platform Engineering Lead & Enterprise Architect.

### Risks
- **Platform Monolith**: Allowing domain-specific business rules into shared platform services, recreating a monolithic ERP.
- **Under-adoption**: Developing platform capabilities that internal application teams bypass due to friction or poor documentation.

### Required Evidence
- Core Platform Service Specifications (Identity, Audit, Events, MDM).
- Platform SLA/SLO and Operational Support Charters.
- Platform Client SDK Documentation and Golden Paths.
`,
  '10-software-selection': `
## AI in this Stage

### AI Assistance
- **Market & Vendor Research**: Aggregate market capabilities of commercial automotive DMS, CRM, and ERP products.
- **RFP Response Analysis**: Parse vendor proposals against weighted functional and non-functional requirements.
- **TCO Financial Modeling**: Build 5-year Total Cost of Ownership models comparing license fees, infrastructure, and custom development.

### Human Decision
- **Build vs Buy vs Extend Commitment**: Deciding whether to build custom software, purchase COTS, subscribe to SaaS, or extend legacy.
- **Vendor Selection**: Selecting strategic software vendors and evaluating long-term financial stability.

### Human Approval
- **Required Sign-Off**: Digital Transformation Steering Committee & Procurement Committee.

### Risks
- **Vendor Lock-In**: Buying proprietary software with closed databases, preventing custom integration and future migration.
- **Customization Trap**: Purchasing a COTS package and heavily modifying core code, destroying the upgrade path.

### Required Evidence
- Evaluated RFP Scoring Matrix with vendor responses.
- 5-Year Total Cost of Ownership (TCO) and ROI Analysis.
- Formally Approved Build vs Buy Architecture Decision Record (ADR).
`,
  '11-project-management': `
## AI in this Stage

### AI Assistance
- **Project Charter Scaffolding**: Generate draft project charters, milestone schedules, and Work Breakdown Structures (WBS).
- **Methodology Matching**: Compare project characteristics against methodology selection heuristics (Scrum vs Kanban vs RUP).
- **Risk Register Maintenance**: Identify recurring project risks based on historical delivery logs.

### Human Decision
- **Methodology Selection**: Committing to an iterative (Scrum), flow-based (Kanban), or predictive (RUP/Waterfall) approach per initiative.
- **Team Resourcing & Velocity**: Allocating engineering talent and setting sprint cadences.

### Human Approval
- **Required Sign-Off**: PMO Director & Engineering Delivery Lead.

### Risks
- **Methodology Dogmatism**: Forcing rigid Scrum on projects requiring Kanban support flows, or ignoring regulatory gates in Agile delivery.
- **Unrealistic Estimation**: Accepting optimistic AI-generated schedules without team sizing and capability validation.

### Required Evidence
- Signed Project Charter and Delivery Strategy.
- Documented Methodology Selection Rationale.
- Baselined Release Schedule with Milestone Gates.
`,
  '12-sdlc': `
## AI in this Stage

### AI Assistance
- **Phase Gate Compliance**: Verify that all mandatory deliverables (PRDs, SADs, test plans) exist before scheduling gate reviews.
- **Meeting Summarization**: Summarize Sprint Reviews, milestone evaluations, and deliverable handoffs.
- **Action Item Tracking**: Track completion of conditions and action items imposed during phase gate approvals.

### Human Decision
- **Gate Passage Determination**: Deciding whether a software project meets the quality and scope thresholds to advance to the next lifecycle phase.
- **Scope Truncation**: Cutting non-critical features to preserve release dates without sacrificing quality.

### Human Approval
- **Required Sign-Off**: Project Delivery Lead & Software Engineering Manager.

### Risks
- **Bypassing Gates**: Succumbing to commercial pressure and advancing immature software to Construction or Production.
- **Paper Compliance**: Checking boxes for gate reviews without genuine technical inspection of code and architecture.

### Required Evidence
- Phase Gate Review Records (Inception, Elaboration, Construction, Transition).
- Signed Milestone Deliverables and Quality Criteria Sign-Offs.
- Baselined Scope and Defect Density Reports.
`,
  '13-ai-augmented-engineering': `
## AI in this Stage

### AI Assistance
- **Code Generation & Scaffolding**: Generate boilerplate domain logic, repositories, unit test suites, and data transfer objects.
- **Refactoring & Optimization**: Identify code smells, recommend performance improvements, and modernize legacy code constructs.
- **Test Case Synthesis**: Generate edge cases, boundary condition tests, and fuzzing payloads for APIs and services.

### Human Decision
- **Architectural & Security Oversight**: Validating that generated code adheres to enterprise architectural rules and security standards.
- **Context Boundary Definition**: Formulating precise prompt templates, context constraints, and MCP tool boundaries.

### Human Approval
- **Required Sign-Off**: Technical Lead & Software Engineering Manager.

### Risks
- **Silent Logic Regressions**: Accepting generated code that compiles and passes superficial tests but contains subtle business logic errors.
- **License & IP Contamination**: Introducing copyrighted or unvetted code into enterprise repositories.

### Required Evidence
- 100% Peer Review and Human Sign-Off on all AI-assisted code.
- Automated Test Suite Execution Reports for all generated modules.
- Security and Dependency Vulnerability Scan Verification.
`,
  '14-development-standards': `
## AI in this Stage

### AI Assistance
- **Automated Code Review**: Check incoming pull requests against naming conventions, clean code principles, and formatting guidelines.
- **Documentation Enforcement**: Ensure public interfaces, classes, and REST endpoints have up-to-date documentation comments.
- **Dependency Health Checks**: Monitor npm/pip/nuget dependencies for security advisories and outdated versions.

### Human Decision
- **Standard Evolution**: Establishing and updating team coding conventions, Git branching models, and architectural linters.
- **Architectural Deviation Exceptions**: Approving justified exceptions to standard patterns when business realities demand.

### Human Approval
- **Required Sign-Off**: Engineering Guild Lead & Principal Engineers.

### Risks
- **Over-zealous Linting**: Imposing rigid syntactic rules that impede engineering throughput without improving software reliability.
- **Ignoring Architecture**: Focusing code reviews on formatting while overlooking fundamental architectural flaws.

### Required Evidence
- Automated CI/CD Linting and Static Analysis Pipeline Reports.
- Approved Git Branching & Contribution Guidelines.
- Published Engineering Standards and Coding Conventions Catalog.
`,
  '15-software-quality': `
## AI in this Stage

### AI Assistance
- **Test Suite Generation**: Generate unit, integration, and contract tests for uncovered domain methods.
- **Mutation & Defect Analysis**: Evaluate test suite strength by generating synthetic mutations and analyzing test failures.
- **Code Smell Trend Analysis**: Correlate SonarQube metrics and code complexity trends across sprints.

### Human Decision
- **Quality Gate Thresholds**: Setting mandatory coverage thresholds (e.g. 80%), cognitive complexity limits, and zero-defect rules.
- **Technical Debt Management**: Prioritizing refactoring backlogs against feature development sprints.

### Human Approval
- **Required Sign-Off**: Head of Quality Assurance & Lead Software Architect.

### Risks
- **Coverage Vanity**: Writing high numbers of shallow assertions to satisfy code coverage numbers without testing business invariants.
- **Flaky Test Degradation**: Allowing intermittent test failures to undermine developer confidence in CI pipelines.

### Required Evidence
- SonarQube / Static Analysis Quality Gate Pass Certificate.
- End-to-End Test Execution Logs and Code Coverage Reports.
- Baselined Technical Debt Register and Refactoring Plan.
`,
  '16-devops-operations': `
## AI in this Stage

### AI Assistance
- **Infrastructure as Code (IaC) Scaffolding**: Generate Terraform modules, Kubernetes manifests, and Helm charts.
- **Log Anomaly Detection**: Analyze aggregated container logs to detect error rate spikes, slow queries, and memory leaks.
- **Incident Summary Generation**: Synthesize alerts and event timelines into draft incident postmortem documents.

### Human Decision
- **Production Deployment Authorization**: Approving production releases following successful staging verification and smoke tests.
- **Disaster Recovery Strategy**: Committing to Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).

### Human Approval
- **Required Sign-Off**: DevOps/SRE Lead & IT Operations Director.

### Risks
- **Infrastructure Drift**: Generating unreviewed IaC configurations that create security misconfigurations or excessive cloud costs.
- **Automated Rollout Failures**: Deploying releases with hidden database migration failures that cannot be safely rolled back.

### Required Evidence
- Automated CI/CD Deployment Logs and Smoke Test Verification.
- Disaster Recovery (DR) and Backup Verification Reports.
- Monitored Production SLO/SLI Dashboards.
`,
  '17-governance': `
## AI in this Stage

### AI Assistance
- **Compliance Cross-Referencing**: Compare proposed RFCs and designs against enterprise standards, security policies, and ADRs.
- **Waiver Tracking**: Monitor granted architecture waivers and notify owners prior to deadline expiration.
- **Meeting Minutes Synthesis**: Transcribe and summarize Architecture Review Board (ARB) discussions and decision outcomes.

### Human Decision
- **Architecture Approval & Rejection**: Formally accepting or rejecting submitted system designs and technology selections.
- **Policy Waivers**: Granting time-bounded exemptions to architecture standards with mandatory remediation plans.

### Human Approval
- **Required Sign-Off**: Architecture Review Board (ARB) Chairperson & Chief Technology Officer.

### Risks
- **Governance Bottleneck**: Slowing down delivery velocity through unresponsive review queues and rigid bureaucratic barriers.
- **Rubber Stamping**: Approving complex proposals without thorough architectural inspection, compromising system integrity.

### Required Evidence
- Published and Signed ARB Meeting Minutes.
- Ratified Architecture Review Board Charter.
- Active Architecture Waiver & Risk Register.
`,
  '18-continuous-improvement': `
## AI in this Stage

### AI Assistance
- **DORA Metrics Aggregation**: Mine Git, CI/CD, and monitoring systems to calculate deployment frequency, lead time, and MTTR.
- **Incident Pattern Analysis**: Identify recurring root causes across postmortems and correlate them with specific components.
- **Technology Radar Suggestions**: Scan technology trends and organizational usage to draft candidate items for the Tech Radar.

### Human Decision
- **Continuous Improvement Priorities**: Deciding which organizational capabilities, tooling, or training to fund in subsequent quarters.
- **Retrospective Action Commitment**: Committing engineering capacity to execute postmortem recommendations.

### Human Approval
- **Required Sign-Off**: Director of Software Engineering & Chief Technology Officer.

### Risks
- **Blame Culture**: Conducting postmortems that assign personal fault rather than analyzing systemic technical and process weaknesses.
- **Action Item Abandonment**: Documenting corrective actions that are never scheduled into future delivery sprints.

### Required Evidence
- Published Blameless Incident Postmortems with tracked remediation tickets.
- Quarterly DORA Metrics and Engineering Health Reports.
- Annual Arian Khodro Technology Radar Publication.
`
}

function walk(dir) {
  let list = []
  if (!fs.existsSync(dir)) return list
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f)
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'en' && f !== 'fa') list = list.concat(walk(full))
    } else if (f.endsWith('.md')) {
      list.push(full)
    }
  }
  return list
}

const files = walk(docsDir)
console.log(`Found ${files.length} existing markdown files to migrate to docs/en/...`)

for (const f of files) {
  const rel = path.relative(docsDir, f).replace(/\\/g, '/')
  if (rel === 'index.md') continue // already created docs/en/index.md

  let targetRel = rel
  if (path.basename(targetRel) === 'README.md') {
    targetRel = path.dirname(targetRel) + '/index.md'
  }

  const targetPath = path.join(enDir, targetRel)
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })

  let content = fs.readFileSync(f, 'utf-8')

  // Extract or synthesize title
  let title = 'Document'
  const h1Match = content.match(/^#\s+(.+)$/m)
  if (h1Match) {
    title = h1Match[1].trim()
  }

  // Remove existing frontmatter if any
  if (content.startsWith('---')) {
    const endIdx = content.indexOf('---', 3)
    if (endIdx !== -1) {
      content = content.slice(endIdx + 3).trim()
    }
  }

  // Calculate translation path
  let transRel = targetRel
  if (transRel.endsWith('/index.md')) {
    transRel = transRel.slice(0, -8) + '/'
  } else if (transRel.endsWith('.md')) {
    transRel = transRel.slice(0, -3)
  }
  const translationLink = `/fa/${transRel}`

  // Rewrite internal links in content
  content = content
    .replace(/\]\(\/roadmap\//g, '](/en/roadmap/')
    .replace(/\]\(\/platform\//g, '](/en/platform/')
    .replace(/\]\(\/knowledge\//g, '](/en/knowledge/')
    .replace(/\]\(\.\.\/\.\.\/knowledge\//g, '](/en/knowledge/')
    .replace(/\]\(\.\.\/\.\.\/platform\//g, '](/en/platform/')
    .replace(/\]\(\.\.\/\.\.\/roadmap\//g, '](/en/roadmap/')
    .replace(/\]\(\.\.\/templates\//g, '](/en/knowledge/templates/')
    .replace(/\]\(\.\/README\.md\)/g, '](./)')
    .replace(/\]\(\.\.\/README\.md\)/g, '](../)')

  // Check if this is a roadmap stage overview (00 to 18 index.md)
  const stageMatch = targetRel.match(/^roadmap\/((\d{2})-[^/]+)\/index\.md$/)
  if (stageMatch) {
    const stageKey = stageMatch[1]
    // find key in aiSections
    for (const [key, section] of Object.entries(aiSections)) {
      if (stageKey.startsWith(key)) {
        if (!content.includes('## AI in this Stage')) {
          content += '\n' + section.trim() + '\n'
        }
        break
      }
    }
  }

  const frontmatter = `---
title: ${JSON.stringify(title)}
lang: en
translation: ${translationLink}
---

`

  fs.writeFileSync(targetPath, frontmatter + content, 'utf-8')
  console.log(`Migrated -> docs/en/${targetRel}`)
}

console.log('Migration to docs/en/ completed successfully!')
