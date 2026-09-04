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
      description: 'Enterprise Architectural Assessment, Transformation Roadmap & Standards',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Roadmap', link: '/en/roadmap/' },
          { text: 'AI Roadmap', link: '/en/ai-roadmap/' },
          { text: 'Standards', link: '/en/knowledge/' }
        ],
        sidebar: {
          '/en/roadmap/': [
            {
              text: 'Transformation Roadmap (5 Steps)',
              collapsed: false,
              items: [
                { text: 'Roadmap Overview', link: '/en/roadmap/' },
                { text: 'Step 1: Discovery & Requirements (BABOK/TOGAF/PRD)', link: '/en/roadmap/01-discovery' },
                { text: 'Step 2: Decision Cycle (Build vs Buy vs Outsource)', link: '/en/roadmap/02-decision-cycle' },
                { text: 'Step 3: Development & Initial Core Platform', link: '/en/roadmap/03-development-and-core-platform' },
                { text: 'Step 4: In-House SDLC & Engineering Team', link: '/en/roadmap/04-internal-development-lifecycle' },
                { text: 'Step 5: Production Launch & Operations', link: '/en/roadmap/05-launch-and-operations' }
              ]
            }
          ],
          '/en/ai-roadmap/': [
            {
              text: 'AI Strategic Roadmap (3 Steps)',
              collapsed: false,
              items: [
                { text: 'AI Strategy Overview', link: '/en/ai-roadmap/' },
                { text: 'Step 1: AI Training for Executives', link: '/en/ai-roadmap/01-management-training' },
                { text: 'Step 2: Enterprise Assessment & AI Discovery', link: '/en/ai-roadmap/02-usecase-discovery' },
                { text: 'Step 3: Operational Tool Rollout', link: '/en/ai-roadmap/03-department-rollout' }
              ]
            }
          ],
          '/en/knowledge/': [
            {
              text: 'Standards & Architecture Frameworks',
              collapsed: false,
              items: [
                { text: 'Standards Overview', link: '/en/knowledge/' },
                { text: 'Architecture Frameworks (TOGAF, BABOK, BPMN, ISO 42010)', link: '/en/knowledge/frameworks' },
                { text: 'Architecture Patterns & C4 Model', link: '/en/knowledge/patterns' },
                { text: 'Project Delivery Methodologies (Scrum, Kanban, RUP)', link: '/en/knowledge/project-methodologies' },
                { text: 'Architecture Decision Records (ADR)', link: '/en/knowledge/adr-templates' }
              ]
            }
          ],
          '/en/platform/core-platform/': [
            {
              text: 'Core Platform Architecture',
              collapsed: false,
              items: [
                { text: 'Core Platform Concept (Step 3 Supporting Doc)', link: '/en/platform/core-platform/' },
                { text: 'Identity & Access Control (SSO/RBAC)', link: '/en/platform/core-platform/identity-access' },
                { text: 'API Gateway & Event Messaging', link: '/en/platform/core-platform/api-gateway' },
                { text: 'Master Data Management (MDM)', link: '/en/platform/core-platform/master-data' }
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
      title: 'بررسی وضعیت آرین خودرو',
      description: 'ارزیابی جامع سازمانی، نقشه راه تحول و استانداردهای مهندسی',
      themeConfig: {
        nav: [
          { text: 'صفحه اصلی', link: '/fa/' },
          { text: 'رودمپ', link: '/fa/roadmap/' },
          { text: 'رودمپ هوش مصنوعی', link: '/fa/ai-roadmap/' },
          { text: 'استانداردها', link: '/fa/knowledge/' }
        ],
        sidebar: {
          '/fa/roadmap/': [
            {
              text: 'رودمپ تحول سازمانی (۵ قدم)',
              collapsed: false,
              items: [
                { text: 'نمای کلی رودمپ', link: '/fa/roadmap/' },
                { text: 'قدم ۱: بررسی، استخراج نیازها و تحلیل معماری', link: '/fa/roadmap/01-discovery' },
                { text: 'قدم ۲: پیاده‌سازی چرخه تصمیم (بسازیم، بخریم، برونسپاری)', link: '/fa/roadmap/02-decision-cycle' },
                { text: 'قدم ۳: توسعه نتایج بررسی و کور پلتفرم', link: '/fa/roadmap/03-development-and-core-platform' },
                { text: 'قدم ۴: راه‌اندازی چرخه کامل توسعه داخلی', link: '/fa/roadmap/04-internal-development-lifecycle' },
                { text: 'قدم ۵: لانچ، استقرار نهایی و پایش پایدار', link: '/fa/roadmap/05-launch-and-operations' }
              ]
            }
          ],
          '/fa/ai-roadmap/': [
            {
              text: 'رودمپ هوش مصنوعی (۳ گام)',
              collapsed: false,
              items: [
                { text: 'نمای کلی استراتژی هوش مصنوعی', link: '/fa/ai-roadmap/' },
                { text: 'گام ۱: آموزش هوش مصنوعی برای مدیران', link: '/fa/ai-roadmap/01-management-training' },
                { text: 'گام ۲: بررسی کل سیستم و کشف سولوشن‌های AI', link: '/fa/ai-roadmap/02-usecase-discovery' },
                { text: 'گام ۳: راه‌اندازی و استقرار عملیاتی', link: '/fa/ai-roadmap/03-department-rollout' }
              ]
            }
          ],
          '/fa/knowledge/': [
            {
              text: 'استانداردها و چارچوب‌های مهندسی',
              collapsed: false,
              items: [
                { text: 'نمای کلی استانداردها', link: '/fa/knowledge/' },
                { text: 'چارچوب‌های معماری (TOGAF, BABOK, BPMN, ISO 42010)', link: '/fa/knowledge/frameworks' },
                { text: 'الگوهای معماری نرم‌افزار و C4 Model', link: '/fa/knowledge/patterns' },
                { text: 'متدولوژی‌های مدیریت پروژه (Scrum, Kanban, RUP)', link: '/fa/knowledge/project-methodologies' },
                { text: 'سوابق تصمیم‌گیری معماری (ADR)', link: '/fa/knowledge/adr-templates' }
              ]
            }
          ],
          '/fa/platform/core-platform/': [
            {
              text: 'معماری سکوی مرکزی (Core Platform)',
              collapsed: false,
              items: [
                { text: 'مفهوم کور پلتفرم (پشتوانه فنی قدم ۳)', link: '/fa/platform/core-platform/' },
                { text: 'احراز هویت و سطوح دسترسی (SSO / RBAC)', link: '/fa/platform/core-platform/identity-access' },
                { text: 'مدیریت APIها و گذرگاه یکپارچگی', link: '/fa/platform/core-platform/api-gateway' },
                { text: 'مدیریت داده‌های مرجع خودرو و مشتری (MDM)', link: '/fa/platform/core-platform/master-data' }
              ]
            }
          ]
        },
        docFooter: {
          prev: 'صفحه قبل',
          next: 'صفحه بعد',
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
