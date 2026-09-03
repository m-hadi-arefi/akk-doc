import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arian Khodro',
  description: 'Software Engineering, Architecture & Digital Transformation Knowledge System',
  srcDir: 'docs',
  cleanUrls: true,
  rewrites: {
    ':folder/README.md': ':folder/index.md',
    ':folder/:sub/README.md': ':folder/:sub/index.md',
    ':folder/:sub/:nested/README.md': ':folder/:sub/:nested/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Roadmap',
        items: [
          { text: 'Roadmap Master Hub', link: '/roadmap/' },
          { text: '00 Organization & Context', link: '/roadmap/00-organization/' },
          { text: '01 Business Analysis (BABOK)', link: '/roadmap/01-business-analysis/' },
          { text: '02 Process Management (BPMN)', link: '/roadmap/02-process-management/' },
          { text: '03 Enterprise Architecture (TOGAF)', link: '/roadmap/03-enterprise-architecture/' },
          { text: '04 Architecture Description (ISO 42010)', link: '/roadmap/04-architecture-documentation/' },
          { text: '05 Software Architecture', link: '/roadmap/05-software-architecture/' },
          { text: '06 Data Architecture & MDM', link: '/roadmap/06-data-architecture/' },
          { text: '07 Integration Architecture', link: '/roadmap/07-integration-architecture/' },
          { text: '08 Security Architecture', link: '/roadmap/08-security-architecture/' },
          { text: '09 Core Platform Definition', link: '/roadmap/09-core-platform/' },
          { text: '10 Software Selection (Build vs Buy)', link: '/roadmap/10-software-selection/' },
          { text: '11 Project Management Methodologies', link: '/roadmap/11-project-management/' },
          { text: '12 Software Development Lifecycle (SDLC)', link: '/roadmap/12-sdlc/' },
          { text: '13 AI-Augmented Engineering', link: '/roadmap/13-ai-augmented-engineering/' },
          { text: '14 Development Standards', link: '/roadmap/14-development-standards/' },
          { text: '15 Software Quality & Gates', link: '/roadmap/15-software-quality/' },
          { text: '16 DevOps & Operations', link: '/roadmap/16-devops-operations/' },
          { text: '17 Architecture Governance (ARB)', link: '/roadmap/17-governance/' },
          { text: '18 Continuous Improvement', link: '/roadmap/18-continuous-improvement/' }
        ]
      },
      {
        text: 'Core Platform',
        items: [
          { text: 'Platform Architecture & Principles', link: '/platform/core-platform/' },
          { text: 'Identity Service (SSO)', link: '/platform/identity/overview' },
          { text: 'Authorization Service (RBAC/ABAC)', link: '/platform/authorization/overview' },
          { text: 'API Management & Gateway', link: '/platform/api-management/overview' },
          { text: 'Event Platform (Kafka)', link: '/platform/event-platform/overview' },
          { text: 'Master Data Management (MDM)', link: '/platform/master-data/overview' },
          { text: 'Audit Service (Immutable Log)', link: '/platform/audit/overview' },
          { text: 'Data Platform (Lakehouse)', link: '/platform/data-platform/overview' },
          { text: 'Integration & Adapters (ACL)', link: '/platform/integration/overview' },
          { text: 'Observability & APM', link: '/platform/observability/overview' },
          { text: 'Project Management Methodologies', link: '/platform/project-management/' }
        ]
      },
      {
        text: 'Knowledge Base',
        items: [
          { text: 'Knowledge Hub Index', link: '/knowledge/' },
          { text: 'Company & Business Overview', link: '/knowledge/company/overview' },
          { text: 'Architecture Concepts', link: '/knowledge/architecture/overview' },
          { text: 'Pattern Catalog', link: '/knowledge/patterns/overview' },
          { text: 'Standards Catalog', link: '/knowledge/standards/overview' },
          { text: 'Programming & Clean Code', link: '/knowledge/programming/overview' },
          { text: 'Document Templates Hub', link: '/knowledge/templates/overview' },
          { text: 'Decision Frameworks', link: '/knowledge/decision-frameworks/overview' },
          { text: 'AI in Software Engineering', link: '/knowledge/ai/overview' },
          { text: 'Technical Glossary', link: '/knowledge/glossary/overview' }
        ]
      }
    ],

    sidebar: {
      '/roadmap/': [
        {
          text: 'Roadmap Overview',
          items: [
            { text: 'Roadmap Index', link: '/roadmap/' },
            { text: 'Transformation Phases', link: '/roadmap/transformation-phases' }
          ]
        },
        {
          text: 'Stages 00 - 04: Discovery & Architecture',
          collapsed: false,
          items: [
            {
              text: 'Stage 00: Organization Context',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/00-organization/' },
                { text: 'Executive Summary', link: '/roadmap/00-organization/executive-summary' },
                { text: 'Business Context', link: '/roadmap/00-organization/business-context' },
                { text: 'Discovery Questions', link: '/roadmap/00-organization/discovery-questions' }
              ]
            },
            {
              text: 'Stage 01: Business Analysis (BABOK)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/01-business-analysis/' },
                { text: 'Current State Analysis', link: '/roadmap/01-business-analysis/current-state' },
                { text: 'Systems Inventory', link: '/roadmap/01-business-analysis/systems-inventory' }
              ]
            },
            {
              text: 'Stage 02: Process Management (BPMN)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/02-process-management/' }
              ]
            },
            {
              text: 'Stage 03: Enterprise Architecture (TOGAF)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/03-enterprise-architecture/' },
                { text: 'Business Architecture', link: '/roadmap/03-enterprise-architecture/business-architecture' },
                { text: 'Target Architecture', link: '/roadmap/03-enterprise-architecture/target-architecture' },
                { text: 'Technology Infrastructure', link: '/roadmap/03-enterprise-architecture/technology-infrastructure' }
              ]
            },
            {
              text: 'Stage 04: Architecture Documentation (ISO 42010)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/04-architecture-documentation/' }
              ]
            }
          ]
        },
        {
          text: 'Stages 05 - 09: System Architecture & Platform',
          collapsed: false,
          items: [
            {
              text: 'Stage 05: Software Architecture',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/05-software-architecture/' },
                { text: 'Application Architecture', link: '/roadmap/05-software-architecture/application-architecture' }
              ]
            },
            {
              text: 'Stage 06: Data Architecture & MDM',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/06-data-architecture/' },
                { text: 'Data Architecture Overview', link: '/roadmap/06-data-architecture/overview' },
                { text: 'Current Data Assets', link: '/roadmap/06-data-architecture/current-data' }
              ]
            },
            {
              text: 'Stage 07: Integration Architecture',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/07-integration-architecture/' },
                { text: 'Integration Overview', link: '/roadmap/07-integration-architecture/overview' },
                { text: 'Current Integrations', link: '/roadmap/07-integration-architecture/current-integrations' }
              ]
            },
            {
              text: 'Stage 08: Security Architecture',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/08-security-architecture/' },
                { text: 'Security Overview', link: '/roadmap/08-security-architecture/overview' }
              ]
            },
            {
              text: 'Stage 09: Core Platform Definition',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/09-core-platform/' }
              ]
            }
          ]
        },
        {
          text: 'Stages 10 - 14: Engineering & Implementation',
          collapsed: false,
          items: [
            {
              text: 'Stage 10: Software Selection & Build vs Buy',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/10-software-selection/' },
                { text: 'Legacy Modernization Strategy', link: '/roadmap/10-software-selection/legacy-modernization-strategy' },
                { text: 'Capability Migration Strategy', link: '/roadmap/10-software-selection/migration-strategy' }
              ]
            },
            {
              text: 'Stage 11: Project Management Methodologies',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/11-project-management/' }
              ]
            },
            {
              text: 'Stage 12: Software Development Lifecycle (SDLC)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/12-sdlc/' }
              ]
            },
            {
              text: 'Stage 13: AI-Augmented Software Engineering',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/13-ai-augmented-engineering/' }
              ]
            },
            {
              text: 'Stage 14: Development Standards',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/14-development-standards/' }
              ]
            }
          ]
        },
        {
          text: 'Stages 15 - 18: Operations & Governance',
          collapsed: false,
          items: [
            {
              text: 'Stage 15: Software Quality & Gates',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/15-software-quality/' }
              ]
            },
            {
              text: 'Stage 16: DevOps & Operations',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/16-devops-operations/' }
              ]
            },
            {
              text: 'Stage 17: Architecture Governance (ARB)',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/17-governance/' },
                { text: 'Governance Process', link: '/roadmap/17-governance/overview' },
                { text: 'Risks & Mitigations', link: '/roadmap/17-governance/risks-and-mitigations' }
              ]
            },
            {
              text: 'Stage 18: Continuous Improvement',
              collapsed: true,
              items: [
                { text: 'Stage Overview', link: '/roadmap/18-continuous-improvement/' }
              ]
            }
          ]
        }
      ],

      '/platform/': [
        {
          text: 'Core Platform',
          items: [
            { text: 'Platform Architecture & Principles', link: '/platform/core-platform/' },
            { text: 'Platform Architecture Overview', link: '/platform/core-platform/overview' }
          ]
        },
        {
          text: 'Platform Capabilities',
          collapsed: false,
          items: [
            { text: 'Identity Service (SSO)', link: '/platform/identity/overview' },
            { text: 'Authorization Service (RBAC/ABAC)', link: '/platform/authorization/overview' },
            { text: 'API Management & Gateway', link: '/platform/api-management/overview' },
            { text: 'Event Platform (Kafka)', link: '/platform/event-platform/overview' },
            { text: 'Master Data Management (MDM)', link: '/platform/master-data/overview' },
            { text: 'Audit Service (Immutable Log)', link: '/platform/audit/overview' },
            { text: 'Data Platform (Lakehouse)', link: '/platform/data-platform/overview' },
            { text: 'Integration & Adapters (ACL)', link: '/platform/integration/overview' },
            { text: 'Observability & APM', link: '/platform/observability/overview' }
          ]
        },
        {
          text: 'Project Management Methodologies',
          collapsed: false,
          items: [
            { text: 'Methodologies Hub', link: '/platform/project-management/' },
            { text: 'Methodology Selection Guide', link: '/platform/project-management/methodology-selection/overview' },
            { text: 'Scrum', link: '/platform/project-management/scrum/overview' },
            { text: 'Kanban', link: '/platform/project-management/kanban/overview' },
            { text: 'Rational Unified Process (RUP)', link: '/platform/project-management/rup/overview' },
            { text: 'Extreme Programming (XP)', link: '/platform/project-management/xp/overview' },
            { text: 'Predictive Waterfall', link: '/platform/project-management/waterfall/overview' },
            { text: 'PRINCE2', link: '/platform/project-management/prince2/overview' },
            { text: 'PMI PMBOK', link: '/platform/project-management/pmi/overview' },
            { text: 'Agile Engineering Mindset', link: '/platform/project-management/agile/overview' }
          ]
        }
      ],

      '/knowledge/': [
        {
          text: 'Knowledge Base',
          items: [
            { text: 'Knowledge Hub Index', link: '/knowledge/' },
            { text: 'Company & Business Overview', link: '/knowledge/company/overview' }
          ]
        },
        {
          text: 'Architecture & Patterns',
          collapsed: false,
          items: [
            { text: 'Architecture Concepts', link: '/knowledge/architecture/overview' },
            { text: 'Pattern Catalog', link: '/knowledge/patterns/overview' },
            { text: 'Decision Frameworks', link: '/knowledge/decision-frameworks/overview' }
          ]
        },
        {
          text: 'Standards & Engineering',
          collapsed: false,
          items: [
            { text: 'Enterprise Standards Catalog', link: '/knowledge/standards/overview' },
            { text: 'Technology Principles', link: '/knowledge/standards/technology-principles' },
            { text: 'Programming & Clean Code', link: '/knowledge/programming/overview' },
            { text: 'AI in Software Engineering', link: '/knowledge/ai/overview' }
          ]
        },
        {
          text: 'Templates & Reference',
          collapsed: false,
          items: [
            { text: 'Reusable Document Templates', link: '/knowledge/templates/overview' },
            { text: 'ADR Template', link: '/knowledge/templates/adr-template' },
            { text: 'Assumptions Registry', link: '/knowledge/governance/assumptions-registry' },
            { text: 'Technical Glossary', link: '/knowledge/glossary/overview' }
          ]
        }
      ]
    },

    footer: {
      message: 'Arian Khodro — Software Engineering, Architecture & Knowledge System',
      copyright: 'Internal documentation for Arian Khodro'
    }
  }
})
