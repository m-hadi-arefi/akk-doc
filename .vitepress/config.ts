import { defineConfig } from 'vitepress'
import postcssRtlcss from 'postcss-rtlcss'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arian Khodro',
  description: 'Software Engineering, Architecture & Digital Transformation Knowledge System',
  srcDir: 'docs',
  cleanUrls: true,
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000
    },
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
      description: 'Digital Transformation, Core Platform & AI Knowledge System',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Transformation Roadmap', link: '/en/roadmap/' },
          { text: 'AI Roadmap', link: '/en/ai-roadmap/' },
          { text: 'Core Platform', link: '/en/platform/core-platform/' },
          { text: 'Knowledge Base', link: '/en/knowledge/' }
        ],
        sidebar: {
          '/en/roadmap/': [
            {
              text: '1-Year Transformation Roadmap',
              collapsed: false,
              items: [
                { text: 'Roadmap Overview (3 Four-Month Phases)', link: '/en/roadmap/' },
                { text: 'Phase 1: Discovery, Audit & Bottlenecks', link: '/en/roadmap/discovery' },
                { text: 'Phase 1: Tadark Delphi Analysis & Adapter', link: '/en/roadmap/legacy-tadark' },
                { text: 'Phase 1: Technical Governance & Team', link: '/en/roadmap/team-governance' },
                { text: 'Phase 3: CRM Integration & Security', link: '/en/roadmap/integration-crm' }
              ]
            }
          ],
          '/en/ai-roadmap/': [
            {
              text: 'Operational AI Strategy',
              collapsed: false,
              items: [
                { text: 'AI Roadmap Overview', link: '/en/ai-roadmap/' },
                { text: 'Step 1: Management Enablement & Training', link: '/en/ai-roadmap/01-management-training' },
                { text: 'Step 2: Commercial Needs Assessment', link: '/en/ai-roadmap/02-usecase-discovery' },
                { text: 'Step 3: Departmental Tool Rollout', link: '/en/ai-roadmap/03-department-rollout' }
              ]
            }
          ],
          '/en/platform/core-platform/': [
            {
              text: 'Core Platform Architecture',
              collapsed: false,
              items: [
                { text: 'Core Platform Concept (vs ERP)', link: '/en/platform/core-platform/' },
                { text: 'Identity & Access Control (RBAC)', link: '/en/platform/core-platform/identity-access' },
                { text: 'API Gateway & Event Messaging', link: '/en/platform/core-platform/api-gateway' },
                { text: 'Master Data Management (MDM)', link: '/en/platform/core-platform/master-data' }
              ]
            }
          ],
          '/en/knowledge/': [
            {
              text: 'Engineering Knowledge Base',
              collapsed: false,
              items: [
                { text: 'Knowledge Base Overview', link: '/en/knowledge/' },
                { text: 'Architecture Frameworks (TOGAF, BABOK, BPMN)', link: '/en/knowledge/frameworks' },
                { text: 'Architecture Patterns (Strangler, Outbox)', link: '/en/knowledge/patterns' },
                { text: 'Project Delivery Methodologies (Scrum, RUP)', link: '/en/knowledge/project-methodologies' },
                { text: 'Architecture Decision Records (ADRs)', link: '/en/knowledge/adr-templates' }
              ]
            }
          ]
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        }
      }
    },
    fa: {
      label: 'فارسی',
      lang: 'fa',
      dir: 'rtl',
      link: '/fa/',
      title: 'آرین خودرو',
      description: 'داشبورد اجرایی تحول دیجیتال، سکوی مرکزی و هوش مصنوعی',
      themeConfig: {
        nav: [
          { text: 'صفحه اصلی', link: '/fa/' },
          { text: 'نقشه راه تحول', link: '/fa/roadmap/' },
          { text: 'هوش مصنوعی', link: '/fa/ai-roadmap/' },
          { text: 'سکوی مرکزی', link: '/fa/platform/core-platform/' },
          { text: 'پایگاه دانش', link: '/fa/knowledge/' }
        ],
        sidebar: {
          '/fa/roadmap/': [
            {
              text: 'نقشه راه تحول و گذار ۱ ساله',
              collapsed: false,
              items: [
                { text: 'نمای کلی نقشه راه (۳ فاز ۴ ماهه)', link: '/fa/roadmap/' },
                { text: 'فاز ۱: شناخت، ممیزی و گلوگاه‌ها', link: '/fa/roadmap/discovery' },
                { text: 'فاز ۱: تحلیل سیستم تادارک و آداپتور', link: '/fa/roadmap/legacy-tadark' },
                { text: 'فاز ۱: حاکمیت فنی و تیم توسعه', link: '/fa/roadmap/team-governance' },
                { text: 'فاز ۳: یکپارچه‌سازی CRM و امنیت داده', link: '/fa/roadmap/integration-crm' }
              ]
            }
          ],
          '/fa/ai-roadmap/': [
            {
              text: 'نقشه راه هوش مصنوعی بازرگانی',
              collapsed: false,
              items: [
                { text: 'نمای کلی استراتژی هوش مصنوعی', link: '/fa/ai-roadmap/' },
                { text: 'گام ۱: آموزش و توانمندسازی مدیران', link: '/fa/ai-roadmap/01-management-training' },
                { text: 'گام ۲: شناسایی فرآیندهای مستعد هوشمندسازی', link: '/fa/ai-roadmap/02-usecase-discovery' },
                { text: 'گام ۳: استقرار ابزارهای عملیاتی', link: '/fa/ai-roadmap/03-department-rollout' }
              ]
            }
          ],
          '/fa/platform/core-platform/': [
            {
              text: 'سکوی مرکزی (Core Platform)',
              collapsed: false,
              items: [
                { text: 'مفهوم سکوی مرکزی (تفاوت با ERP)', link: '/fa/platform/core-platform/' },
                { text: 'احراز هویت و سطوح دسترسی (RBAC)', link: '/fa/platform/core-platform/identity-access' },
                { text: 'مدیریت APIها و گذرگاه یکپارچگی', link: '/fa/platform/core-platform/api-gateway' },
                { text: 'مدیریت داده‌های مرجع (MDM)', link: '/fa/platform/core-platform/master-data' }
              ]
            }
          ],
          '/fa/knowledge/': [
            {
              text: 'پایگاه دانش مهندسی و الگوها',
              collapsed: false,
              items: [
                { text: 'نمای کلی پایگاه دانش', link: '/fa/knowledge/' },
                { text: 'چارچوب‌های معماری (TOGAF, BABOK, BPMN)', link: '/fa/knowledge/frameworks' },
                { text: 'الگوهای معماری (Strangler Fig, Outbox)', link: '/fa/knowledge/patterns' },
                { text: 'چارچوب‌های مدیریت پروژه (اسکرام، RUP)', link: '/fa/knowledge/project-methodologies' },
                { text: 'قالب‌های مستندسازی تصمیمات (ADR)', link: '/fa/knowledge/adr-templates' }
              ]
            }
          ]
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
