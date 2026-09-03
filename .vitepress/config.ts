import { defineConfig } from 'vitepress'
import postcssRtlcss from 'postcss-rtlcss'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arian Khodro',
  description: 'Software Engineering, Architecture & Digital Transformation Knowledge System',
  srcDir: 'docs',
  cleanUrls: true,
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssRtlcss({
            ltrPrefix: ':where([dir="ltr"])',
            rtlPrefix: ':where([dir="rtl"])'
          })
        ]
      }
    }
  },
  rewrites: {
    ':folder/README.md': ':folder/index.md',
    ':folder/:sub/README.md': ':folder/:sub/index.md',
    ':folder/:sub/:nested/README.md': ':folder/:sub/:nested/index.md'
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en/',
      title: 'Arian Khodro',
      description: 'Software Engineering, Architecture & Digital Transformation Knowledge System',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Roadmap',
            items: [
              { text: 'Roadmap Master Hub', link: '/en/roadmap/' },
              { text: '00 Organization & Context', link: '/en/roadmap/00-organization/' },
              { text: '01 Business Analysis (BABOK)', link: '/en/roadmap/01-business-analysis/' },
              { text: '02 Process Management (BPMN)', link: '/en/roadmap/02-process-management/' },
              { text: '03 Enterprise Architecture (TOGAF)', link: '/en/roadmap/03-enterprise-architecture/' },
              { text: '04 Architecture Description (ISO 42010)', link: '/en/roadmap/04-architecture-documentation/' },
              { text: '05 Software Architecture', link: '/en/roadmap/05-software-architecture/' },
              { text: '06 Data Architecture & MDM', link: '/en/roadmap/06-data-architecture/' },
              { text: '07 Integration Architecture', link: '/en/roadmap/07-integration-architecture/' },
              { text: '08 Security Architecture', link: '/en/roadmap/08-security-architecture/' },
              { text: '09 Core Platform Definition', link: '/en/roadmap/09-core-platform/' },
              { text: '10 Software Selection (Build vs Buy)', link: '/en/roadmap/10-software-selection/' },
              { text: '11 Project Management Methodologies', link: '/en/roadmap/11-project-management/' },
              { text: '12 Software Development Lifecycle (SDLC)', link: '/en/roadmap/12-sdlc/' },
              { text: '13 AI-Augmented Engineering', link: '/en/roadmap/13-ai-augmented-engineering/' },
              { text: '14 Development Standards', link: '/en/roadmap/14-development-standards/' },
              { text: '15 Software Quality & Gates', link: '/en/roadmap/15-software-quality/' },
              { text: '16 DevOps & Operations', link: '/en/roadmap/16-devops-operations/' },
              { text: '17 Architecture Governance (ARB)', link: '/en/roadmap/17-governance/' },
              { text: '18 Continuous Improvement', link: '/en/roadmap/18-continuous-improvement/' }
            ]
          },
          {
            text: 'Core Platform',
            items: [
              { text: 'Platform Architecture & Principles', link: '/en/platform/core-platform/' },
              { text: 'Identity Service (SSO)', link: '/en/platform/identity/overview' },
              { text: 'Authorization Service (RBAC/ABAC)', link: '/en/platform/authorization/overview' },
              { text: 'API Management & Gateway', link: '/en/platform/api-management/overview' },
              { text: 'Event Platform (Kafka)', link: '/en/platform/event-platform/overview' },
              { text: 'Master Data Management (MDM)', link: '/en/platform/master-data/overview' },
              { text: 'Audit Service (Immutable Log)', link: '/en/platform/audit/overview' },
              { text: 'Data Platform (Lakehouse)', link: '/en/platform/data-platform/overview' },
              { text: 'Integration & Adapters (ACL)', link: '/en/platform/integration/overview' },
              { text: 'Observability & APM', link: '/en/platform/observability/overview' },
              { text: 'Project Management Methodologies', link: '/en/platform/project-management/' }
            ]
          },
          {
            text: 'Knowledge Base',
            items: [
              { text: 'Knowledge Hub Index', link: '/en/knowledge/' },
              { text: 'Company & Business Overview', link: '/en/knowledge/company/overview' },
              { text: 'Architecture Concepts', link: '/en/knowledge/architecture/overview' },
              { text: 'Pattern Catalog', link: '/en/knowledge/patterns/overview' },
              { text: 'Standards Catalog', link: '/en/knowledge/standards/overview' },
              { text: 'Programming & Clean Code', link: '/en/knowledge/programming/overview' },
              { text: 'Document Templates Hub', link: '/en/knowledge/templates/overview' },
              { text: 'Decision Frameworks', link: '/en/knowledge/decision-frameworks/overview' },
              { text: 'AI in Software Engineering', link: '/en/knowledge/ai/overview' },
              { text: 'Technical Glossary', link: '/en/knowledge/glossary/overview' }
            ]
          }
        ],
        sidebar: {
          '/en/roadmap/': [
            {
              text: 'Roadmap Overview',
              items: [
                { text: 'Roadmap Index', link: '/en/roadmap/' },
                { text: 'Transformation Phases', link: '/en/roadmap/transformation-phases' }
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
                    { text: 'Stage Overview', link: '/en/roadmap/00-organization/' },
                    { text: 'Executive Summary', link: '/en/roadmap/00-organization/executive-summary' },
                    { text: 'Business Context', link: '/en/roadmap/00-organization/business-context' },
                    { text: 'Discovery Questions', link: '/en/roadmap/00-organization/discovery-questions' }
                  ]
                },
                {
                  text: 'Stage 01: Business Analysis (BABOK)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/01-business-analysis/' },
                    { text: 'Current State Analysis', link: '/en/roadmap/01-business-analysis/current-state' },
                    { text: 'Systems Inventory', link: '/en/roadmap/01-business-analysis/systems-inventory' }
                  ]
                },
                {
                  text: 'Stage 02: Process Management (BPMN)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/02-process-management/' }
                  ]
                },
                {
                  text: 'Stage 03: Enterprise Architecture (TOGAF)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/03-enterprise-architecture/' },
                    { text: 'Business Architecture', link: '/en/roadmap/03-enterprise-architecture/business-architecture' },
                    { text: 'Target Architecture', link: '/en/roadmap/03-enterprise-architecture/target-architecture' },
                    { text: 'Technology Infrastructure', link: '/en/roadmap/03-enterprise-architecture/technology-infrastructure' }
                  ]
                },
                {
                  text: 'Stage 04: Architecture Documentation (ISO 42010)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/04-architecture-documentation/' }
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
                    { text: 'Stage Overview', link: '/en/roadmap/05-software-architecture/' },
                    { text: 'Application Architecture', link: '/en/roadmap/05-software-architecture/application-architecture' }
                  ]
                },
                {
                  text: 'Stage 06: Data Architecture & MDM',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/06-data-architecture/' },
                    { text: 'Data Architecture Overview', link: '/en/roadmap/06-data-architecture/overview' },
                    { text: 'Current Data Assets', link: '/en/roadmap/06-data-architecture/current-data' }
                  ]
                },
                {
                  text: 'Stage 07: Integration Architecture',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/07-integration-architecture/' },
                    { text: 'Integration Overview', link: '/en/roadmap/07-integration-architecture/overview' },
                    { text: 'Current Integrations', link: '/en/roadmap/07-integration-architecture/current-integrations' }
                  ]
                },
                {
                  text: 'Stage 08: Security Architecture',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/08-security-architecture/' },
                    { text: 'Security Overview', link: '/en/roadmap/08-security-architecture/overview' }
                  ]
                },
                {
                  text: 'Stage 09: Core Platform Definition',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/09-core-platform/' }
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
                    { text: 'Stage Overview', link: '/en/roadmap/10-software-selection/' },
                    { text: 'Legacy Modernization Strategy', link: '/en/roadmap/10-software-selection/legacy-modernization-strategy' },
                    { text: 'Capability Migration Strategy', link: '/en/roadmap/10-software-selection/migration-strategy' }
                  ]
                },
                {
                  text: 'Stage 11: Project Management Methodologies',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/11-project-management/' }
                  ]
                },
                {
                  text: 'Stage 12: Software Development Lifecycle (SDLC)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/12-sdlc/' }
                  ]
                },
                {
                  text: 'Stage 13: AI-Augmented Software Engineering',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/13-ai-augmented-engineering/' }
                  ]
                },
                {
                  text: 'Stage 14: Development Standards',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/14-development-standards/' }
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
                    { text: 'Stage Overview', link: '/en/roadmap/15-software-quality/' }
                  ]
                },
                {
                  text: 'Stage 16: DevOps & Operations',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/16-devops-operations/' }
                  ]
                },
                {
                  text: 'Stage 17: Architecture Governance (ARB)',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/17-governance/' },
                    { text: 'Governance Process', link: '/en/roadmap/17-governance/overview' },
                    { text: 'Risks & Mitigations', link: '/en/roadmap/17-governance/risks-and-mitigations' }
                  ]
                },
                {
                  text: 'Stage 18: Continuous Improvement',
                  collapsed: true,
                  items: [
                    { text: 'Stage Overview', link: '/en/roadmap/18-continuous-improvement/' }
                  ]
                }
              ]
            }
          ],
          '/en/platform/': [
            {
              text: 'Core Platform',
              items: [
                { text: 'Platform Architecture & Principles', link: '/en/platform/core-platform/' },
                { text: 'Platform Architecture Overview', link: '/en/platform/core-platform/overview' }
              ]
            },
            {
              text: 'Platform Capabilities',
              collapsed: false,
              items: [
                { text: 'Identity Service (SSO)', link: '/en/platform/identity/overview' },
                { text: 'Authorization Service (RBAC/ABAC)', link: '/en/platform/authorization/overview' },
                { text: 'API Management & Gateway', link: '/en/platform/api-management/overview' },
                { text: 'Event Platform (Kafka)', link: '/en/platform/event-platform/overview' },
                { text: 'Master Data Management (MDM)', link: '/en/platform/master-data/overview' },
                { text: 'Audit Service (Immutable Log)', link: '/en/platform/audit/overview' },
                { text: 'Data Platform (Lakehouse)', link: '/en/platform/data-platform/overview' },
                { text: 'Integration & Adapters (ACL)', link: '/en/platform/integration/overview' },
                { text: 'Observability & APM', link: '/en/platform/observability/overview' }
              ]
            },
            {
              text: 'Project Management Methodologies',
              collapsed: false,
              items: [
                { text: 'Methodologies Hub', link: '/en/platform/project-management/' },
                { text: 'Methodology Selection Guide', link: '/en/platform/project-management/methodology-selection/overview' },
                { text: 'Scrum', link: '/en/platform/project-management/scrum/overview' },
                { text: 'Kanban', link: '/en/platform/project-management/kanban/overview' },
                { text: 'Rational Unified Process (RUP)', link: '/en/platform/project-management/rup/overview' },
                { text: 'Extreme Programming (XP)', link: '/en/platform/project-management/xp/overview' },
                { text: 'Predictive Waterfall', link: '/en/platform/project-management/waterfall/overview' },
                { text: 'PRINCE2', link: '/en/platform/project-management/prince2/overview' },
                { text: 'PMI PMBOK', link: '/en/platform/project-management/pmi/overview' },
                { text: 'Agile Engineering Mindset', link: '/en/platform/project-management/agile/overview' }
              ]
            }
          ],
          '/en/knowledge/': [
            {
              text: 'Knowledge Base',
              items: [
                { text: 'Knowledge Hub Index', link: '/en/knowledge/' },
                { text: 'Company & Business Overview', link: '/en/knowledge/company/overview' }
              ]
            },
            {
              text: 'Architecture & Patterns',
              collapsed: false,
              items: [
                { text: 'Architecture Concepts', link: '/en/knowledge/architecture/overview' },
                { text: 'Pattern Catalog', link: '/en/knowledge/patterns/overview' },
                { text: 'Decision Frameworks', link: '/en/knowledge/decision-frameworks/overview' }
              ]
            },
            {
              text: 'Standards & Engineering',
              collapsed: false,
              items: [
                { text: 'Enterprise Standards Catalog', link: '/en/knowledge/standards/overview' },
                { text: 'Technology Principles', link: '/en/knowledge/standards/technology-principles' },
                { text: 'Programming & Clean Code', link: '/en/knowledge/programming/overview' },
                { text: 'AI in Software Engineering', link: '/en/knowledge/ai/overview' }
              ]
            },
            {
              text: 'Templates & Reference',
              collapsed: false,
              items: [
                { text: 'Reusable Document Templates', link: '/en/knowledge/templates/overview' },
                { text: 'ADR Template', link: '/en/knowledge/templates/adr-template' },
                { text: 'Assumptions Registry', link: '/en/knowledge/governance/assumptions-registry' },
                { text: 'Technical Glossary', link: '/en/knowledge/glossary/overview' }
              ]
            }
          ]
        },
        footer: {
          message: 'Arian Khodro — Software Engineering, Architecture & Knowledge System',
          copyright: 'Internal documentation for Arian Khodro'
        }
      }
    },
    fa: {
      label: 'فارسی',
      lang: 'fa',
      dir: 'rtl',
      link: '/fa/',
      title: 'آریان خودرو',
      description: 'سامانه جامع مهندسی نرم‌افزار، معماری سازمانی و تحول دیجیتال شرکت آریان خودرو',
      markdown: {
        container: {
          tipLabel: 'نکته',
          warningLabel: 'هشدار',
          dangerLabel: 'خطر',
          infoLabel: 'اطلاعات',
          detailsLabel: 'جزئیات',
          noteLabel: 'یادداشت',
          importantLabel: 'مهم',
          cautionLabel: 'احتیاط'
        },
        codeCopyButton: {
          tooltipText: 'کپی کد',
          copiedText: 'کپی شد'
        }
      },
      themeConfig: {
        nav: [
          { text: 'صفحه اصلی', link: '/fa/' },
          {
            text: 'نقشه راه تحول',
            items: [
              { text: 'مرکز نقشه راه', link: '/fa/roadmap/' },
              { text: '۰۰ شناخت سازمان و مدل کسب‌وکار', link: '/fa/roadmap/00-organization/' },
              { text: '۰۱ تحلیل کسب‌وکار (BABOK)', link: '/fa/roadmap/01-business-analysis/' },
              { text: '۰۲ مدیریت فرآیندها (BPMN)', link: '/fa/roadmap/02-process-management/' },
              { text: '۰۳ معماری سازمانی (TOGAF)', link: '/fa/roadmap/03-enterprise-architecture/' },
              { text: '۰۴ توصیف معماری (ISO 42010)', link: '/fa/roadmap/04-architecture-documentation/' },
              { text: '۰۵ معماری نرم‌افزار و راهکار', link: '/fa/roadmap/05-software-architecture/' },
              { text: '۰۶ معماری داده و داده‌های مرجع', link: '/fa/roadmap/06-data-architecture/' },
              { text: '۰۷ معماری یکپارچه‌سازی', link: '/fa/roadmap/07-integration-architecture/' },
              { text: '۰۸ معماری امنیت (اعتماد صفر)', link: '/fa/roadmap/08-security-architecture/' },
              { text: '۰۹ سکوی مرکزی (Core Platform)', link: '/fa/roadmap/09-core-platform/' },
              { text: '۱۰ انتخاب نرم‌افزار (ساخت یا خرید)', link: '/fa/roadmap/10-software-selection/' },
              { text: '۱۱ متدولوژی‌های مدیریت پروژه', link: '/fa/roadmap/11-project-management/' },
              { text: '۱۲ چرخه حیات توسعه نرم‌افزار (SDLC)', link: '/fa/roadmap/12-sdlc/' },
              { text: '۱۳ مهندسی نرم‌افزار ارتقایافته با AI', link: '/fa/roadmap/13-ai-augmented-engineering/' },
              { text: '۱۴ استانداردهای توسعه نرم‌افزار', link: '/fa/roadmap/14-development-standards/' },
              { text: '۱۵ کیفیت نرم‌افزار و گیت‌های کیفی', link: '/fa/roadmap/15-software-quality/' },
              { text: '۱۶ دواپس، عملیات و SRE', link: '/fa/roadmap/16-devops-operations/' },
              { text: '۱۷ حاکمیت معماری (ARB)', link: '/fa/roadmap/17-governance/' },
              { text: '۱۸ بهبود مستمر و تکامل', link: '/fa/roadmap/18-continuous-improvement/' }
            ]
          },
          {
            text: 'سکوی مرکزی',
            items: [
              { text: 'معماری و اصول سکوی مرکزی', link: '/fa/platform/core-platform/' },
              { text: 'سرویس احراز هویت (SSO)', link: '/fa/platform/identity/overview' },
              { text: 'سرویس کنترل دسترسی (RBAC/ABAC)', link: '/fa/platform/authorization/overview' },
              { text: 'مدیریت و درگاه API', link: '/fa/platform/api-management/overview' },
              { text: 'پلتفرم رویدادها (Kafka)', link: '/fa/platform/event-platform/overview' },
              { text: 'مدیریت داده‌های مرجع (MDM)', link: '/fa/platform/master-data/overview' },
              { text: 'سرویس لاگ بازرسی (Audit)', link: '/fa/platform/audit/overview' },
              { text: 'سکوی داده (Lakehouse)', link: '/fa/platform/data-platform/overview' },
              { text: 'یکپارچه‌سازی و آداپتورها (ACL)', link: '/fa/platform/integration/overview' },
              { text: 'سکوی پایش‌پذیری و APM', link: '/fa/platform/observability/overview' },
              { text: 'متدولوژی‌های مدیریت پروژه', link: '/fa/platform/project-management/' }
            ]
          },
          {
            text: 'پایگاه دانش',
            items: [
              { text: 'فهرست پایگاه دانش', link: '/fa/knowledge/' },
              { text: 'معرفی شرکت و کسب‌وکار', link: '/fa/knowledge/company/overview' },
              { text: 'مفاهیم بنیادین معماری', link: '/fa/knowledge/architecture/overview' },
              { text: 'کاتالوگ الگوها', link: '/fa/knowledge/patterns/overview' },
              { text: 'کاتالوگ استانداردهای سازمانی', link: '/fa/knowledge/standards/overview' },
              { text: 'برنامه‌نویسی و کد تمیز', link: '/fa/knowledge/programming/overview' },
              { text: 'قالب‌های مستندسازی سازمانی', link: '/fa/knowledge/templates/overview' },
              { text: 'چارچوب‌های تصمیم‌گیری', link: '/fa/knowledge/decision-frameworks/overview' },
              { text: 'هوش مصنوعی در مهندسی نرم‌افزار', link: '/fa/knowledge/ai/overview' },
              { text: 'واژه‌نامه تخصصی اصطلاحات', link: '/fa/knowledge/glossary/overview' }
            ]
          }
        ],
        sidebar: {
          '/fa/roadmap/': [
            {
              text: 'نمای کلی نقشه راه',
              items: [
                { text: 'فهرست نقشه راه', link: '/fa/roadmap/' },
                { text: 'فازهای تحول معماری', link: '/fa/roadmap/transformation-phases' }
              ]
            },
            {
              text: 'مراحل ۰۰ تا ۰۴: شناخت و معماری',
              collapsed: false,
              items: [
                {
                  text: 'مرحله ۰۰: شناخت سازمان و بوم کسب‌وکار',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/00-organization/' },
                    { text: 'خلاصه مدیریتی طرح تحول', link: '/fa/roadmap/00-organization/executive-summary' },
                    { text: 'بوم و زمینه کسب‌وکار', link: '/fa/roadmap/00-organization/business-context' },
                    { text: 'پرسش‌های مرحله شناخت', link: '/fa/roadmap/00-organization/discovery-questions' }
                  ]
                },
                {
                  text: 'مرحله ۰۱: تحلیل کسب‌وکار (BABOK)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/01-business-analysis/' },
                    { text: 'تحلیل وضع موجود', link: '/fa/roadmap/01-business-analysis/current-state' },
                    { text: 'کاتالوگ سامانه‌ها', link: '/fa/roadmap/01-business-analysis/systems-inventory' }
                  ]
                },
                {
                  text: 'مرحله ۰۲: مدیریت فرآیندها (BPMN)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/02-process-management/' }
                  ]
                },
                {
                  text: 'مرحله ۰۳: معماری سازمانی (TOGAF)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/03-enterprise-architecture/' },
                    { text: 'معماری کسب‌وکار', link: '/fa/roadmap/03-enterprise-architecture/business-architecture' },
                    { text: 'معماری وضعیت مطلوب', link: '/fa/roadmap/03-enterprise-architecture/target-architecture' },
                    { text: 'معماری فناوری و زیرساخت', link: '/fa/roadmap/03-enterprise-architecture/technology-infrastructure' }
                  ]
                },
                {
                  text: 'مرحله ۰۴: توصیف و استانداردهای معماری (ISO 42010)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/04-architecture-documentation/' }
                  ]
                }
              ]
            },
            {
              text: 'مراحل ۰۵ تا ۰۹: معماری سیستم‌ها و سکو',
              collapsed: false,
              items: [
                {
                  text: 'مرحله ۰۵: معماری نرم‌افزار و راهکار',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/05-software-architecture/' },
                    { text: 'معماری برنامه‌های کاربردی', link: '/fa/roadmap/05-software-architecture/application-architecture' }
                  ]
                },
                {
                  text: 'مرحله ۰۶: معماری داده و مدیریت داده‌های مرجع',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/06-data-architecture/' },
                    { text: 'مرور کلی معماری داده', link: '/fa/roadmap/06-data-architecture/overview' },
                    { text: 'سیاهه دارایی‌های داده‌ای', link: '/fa/roadmap/06-data-architecture/current-data' }
                  ]
                },
                {
                  text: 'مرحله ۰۷: معماری و الگوهای یکپارچه‌سازی',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/07-integration-architecture/' },
                    { text: 'معماری یکپارچه‌سازی', link: '/fa/roadmap/07-integration-architecture/overview' },
                    { text: 'سیاهه یکپارچه‌سازی‌های فعلی', link: '/fa/roadmap/07-integration-architecture/current-integrations' }
                  ]
                },
                {
                  text: 'مرحله ۰۸: معماری امنیت و اعتماد صفر',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/08-security-architecture/' },
                    { text: 'معماری امنیت', link: '/fa/roadmap/08-security-architecture/overview' }
                  ]
                },
                {
                  text: 'مرحله ۰۹: تعریف سکوی مرکزی (Core Platform)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/09-core-platform/' }
                  ]
                }
              ]
            },
            {
              text: 'مراحل ۱۰ تا ۱۴: مهندسی و پیاده‌سازی',
              collapsed: false,
              items: [
                {
                  text: 'مرحله ۱۰: انتخاب نرم‌افزار (ساخت در برابر خرید)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/10-software-selection/' },
                    { text: 'استراتژی مدرن‌سازی سیستم‌های موروثی', link: '/fa/roadmap/10-software-selection/legacy-modernization-strategy' },
                    { text: 'استراتژی مهاجرت تدریجی', link: '/fa/roadmap/10-software-selection/migration-strategy' }
                  ]
                },
                {
                  text: 'مرحله ۱۱: مدیریت و تحویل پروژه‌ها',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/11-project-management/' }
                  ]
                },
                {
                  text: 'مرحله ۱۲: چرخه حیات توسعه نرم‌افزار (SDLC)',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/12-sdlc/' }
                  ]
                },
                {
                  text: 'مرحله ۱۳: مهندسی ارتقایافته با هوش مصنوعی',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/13-ai-augmented-engineering/' }
                  ]
                },
                {
                  text: 'مرحله ۱۴: استانداردهای توسعه و مهندسی',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/14-development-standards/' }
                  ]
                }
              ]
            },
            {
              text: 'مراحل ۱۵ تا ۱۸: عملیات، کیفیت و حاکمیت',
              collapsed: false,
              items: [
                {
                  text: 'مرحله ۱۵: کیفیت نرم‌افزار و گیت‌های کیفی',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/15-software-quality/' }
                  ]
                },
                {
                  text: 'مرحله ۱۶: دواپس، عملیات و SRE',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/16-devops-operations/' }
                  ]
                },
                {
                  text: 'مرحله ۱۷: حاکمیت معماری و کمیته ARB',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/17-governance/' },
                    { text: 'حاکمیت معماری سازمانی', link: '/fa/roadmap/17-governance/overview' },
                    { text: 'سیاهه ریسک‌ها و فرضیات تحول', link: '/fa/roadmap/17-governance/risks-and-mitigations' }
                  ]
                },
                {
                  text: 'مرحله ۱۸: بهبود مستمر و تکامل معماری',
                  collapsed: true,
                  items: [
                    { text: 'نمای کلی مرحله', link: '/fa/roadmap/18-continuous-improvement/' }
                  ]
                }
              ]
            }
          ],
          '/fa/platform/': [
            {
              text: 'سکوی مرکزی',
              items: [
                { text: 'معماری و اصول سکوی مرکزی', link: '/fa/platform/core-platform/' },
                { text: 'مرور کلی معماری سکو', link: '/fa/platform/core-platform/overview' }
              ]
            },
            {
              text: 'قابلیت‌های سکو',
              collapsed: false,
              items: [
                { text: 'سرویس احراز هویت (SSO)', link: '/fa/platform/identity/overview' },
                { text: 'سرویس کنترل دسترسی (RBAC/ABAC)', link: '/fa/platform/authorization/overview' },
                { text: 'مدیریت و درگاه API', link: '/fa/platform/api-management/overview' },
                { text: 'پلتفرم رویدادها (Kafka)', link: '/fa/platform/event-platform/overview' },
                { text: 'مدیریت داده‌های مرجع (MDM)', link: '/fa/platform/master-data/overview' },
                { text: 'سرویس لاگ بازرسی (Audit)', link: '/fa/platform/audit/overview' },
                { text: 'سکوی داده (Lakehouse)', link: '/fa/platform/data-platform/overview' },
                { text: 'یکپارچه‌سازی و آداپتورها (ACL)', link: '/fa/platform/integration/overview' },
                { text: 'سکوی پایش‌پذیری و APM', link: '/fa/platform/observability/overview' }
              ]
            },
            {
              text: 'متدولوژی‌های مدیریت پروژه',
              collapsed: false,
              items: [
                { text: 'مرکز متدولوژی‌ها', link: '/fa/platform/project-management/' },
                { text: 'راهنمای انتخاب متدولوژی', link: '/fa/platform/project-management/methodology-selection/overview' },
                { text: 'اسکرام (Scrum)', link: '/fa/platform/project-management/scrum/overview' },
                { text: 'کانبان (Kanban)', link: '/fa/platform/project-management/kanban/overview' },
                { text: 'فرایند یکپارچه رشنال (RUP)', link: '/fa/platform/project-management/rup/overview' },
                { text: 'برنامه‌نویسی مفرط (XP)', link: '/fa/platform/project-management/xp/overview' },
                { text: 'آبشاری / پیش‌بینانه', link: '/fa/platform/project-management/waterfall/overview' },
                { text: 'حاکمیت پروژه PRINCE2', link: '/fa/platform/project-management/prince2/overview' },
                { text: 'پیکره دانش PMI PMBOK', link: '/fa/platform/project-management/pmi/overview' },
                { text: 'اصول و نگرش چابک (Agile)', link: '/fa/platform/project-management/agile/overview' }
              ]
            }
          ],
          '/fa/knowledge/': [
            {
              text: 'پایگاه دانش سازمانی',
              items: [
                { text: 'فهرست پایگاه دانش', link: '/fa/knowledge/' },
                { text: 'معرفی شرکت و بوم کسب‌وکار', link: '/fa/knowledge/company/overview' }
              ]
            },
            {
              text: 'معماری و الگوها',
              collapsed: false,
              items: [
                { text: 'مفاهیم بنیادین معماری', link: '/fa/knowledge/architecture/overview' },
                { text: 'کاتالوگ الگوها', link: '/fa/knowledge/patterns/overview' },
                { text: 'چارچوب‌های تصمیم‌گیری', link: '/fa/knowledge/decision-frameworks/overview' }
              ]
            },
            {
              text: 'استانداردها و مهندسی',
              collapsed: false,
              items: [
                { text: 'کاتالوگ استانداردهای سازمانی', link: '/fa/knowledge/standards/overview' },
                { text: 'اصول فناوری', link: '/fa/knowledge/standards/technology-principles' },
                { text: 'برنامه‌نویسی و کد تمیز', link: '/fa/knowledge/programming/overview' },
                { text: 'هوش مصنوعی در مهندسی نرم‌افزار', link: '/fa/knowledge/ai/overview' }
              ]
            },
            {
              text: 'قالب‌ها و مراجع',
              collapsed: false,
              items: [
                { text: 'قالب‌های مستندسازی سازمانی', link: '/fa/knowledge/templates/overview' },
                { text: 'قالب سند تصمیم معماری (ADR)', link: '/fa/knowledge/templates/adr-template' },
                { text: 'دفتر ثبت فرضیات', link: '/fa/knowledge/governance/assumptions-registry' },
                { text: 'واژه‌نامه تخصصی اصطلاحات', link: '/fa/knowledge/glossary/overview' }
              ]
            }
          ]
        },
        footer: {
          message: 'شرکت آریان خودرو — سامانه دانش مهندسی نرم‌افزار، معماری سازمانی و تحول دیجیتال',
          copyright: 'کلیه حقوق این مستندات متعلق به شرکت آریان خودرو است'
        },
        docFooter: {
          prev: 'صفحه قبل',
          next: 'صفحه بعد'
        },
        outline: {
          label: 'در این صفحه'
        },
        darkModeSwitchLabel: 'حالت تاریک',
        lightModeSwitchTitle: 'تغییر به حالت روشن',
        darkModeSwitchTitle: 'تغییر به حالت تاریک',
        sidebarMenuLabel: 'فهرست منو',
        returnToTopLabel: 'بازگشت به بالای صفحه',
        langMenuLabel: 'تغییر زبان'
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          fa: {
            translations: {
              button: {
                buttonText: 'جستجو در مستندات',
                buttonAriaLabel: 'جستجو در مستندات'
              },
              modal: {
                noResultsText: 'نتیجه‌ای یافت نشد',
                resetButtonTitle: 'پاک کردن جستجو',
                footer: {
                  selectText: 'انتخاب',
                  navigateText: 'پیمایش',
                  closeText: 'بستن'
                }
              }
            }
          }
        }
      }
    }
  }
})
