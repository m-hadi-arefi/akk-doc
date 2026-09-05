import { defineConfig } from 'vitepress'
import postcssRtlcss from 'postcss-rtlcss'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arian Khodro',
  description: 'Enterprise Transformation Blueprint, Digital Core Platform & Pragmatic AI Strategy',
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
    fa: {
      label: 'فارسی',
      lang: 'fa',
      dir: 'rtl',
      link: '/fa/',
      title: 'آرین خودرو',
      description: 'سامانه جامع مستندات سازمانی، معماری سکوی مرکزی و نقشه راه تحول',
      themeConfig: {
        nav: [
          { text: 'صفحه اصلی', link: '/fa/' },
          { text: '📁 داکیومنت‌های اولیه', link: '/fa/initial-review/' },
          { text: '📂 داکیومنت‌های وضعیت فعلی', link: '/fa/current-state/' },
          { text: '📋 گزارش‌های روزانه (Work Log)', link: '/fa/work-log/' }
        ],
        sidebar: {
          '/fa/work-log/': [
            {
              text: '📋 گزارش‌های روزانه و یادداشت‌های کاری',
              items: [
                { text: 'نمای کلی گزارش‌های روزانه (Work Logs)', link: '/fa/work-log/' }
              ]
            },
            {
              text: '👤 گزارش‌های محمد هادی عارفی (Arefi)',
              collapsed: false,
              items: [
                { text: 'فهرست وقایع‌نگاری عارفی', link: '/fa/work-log/arefi/' },
                { text: 'روز ۰۱: شناخت IT، WMS و نیاز CRM (۱۴۰۵/۰۶/۱۴)', link: '/fa/work-log/arefi/day-01' }
              ]
            },
            {
              text: 'سایر بخش‌ها',
              items: [
                { text: '📁 ورود به داکیومنت‌های اولیه', link: '/fa/initial-review/' },
                { text: '📂 داکیومنت‌های وضعیت فعلی', link: '/fa/current-state/' },
                { text: '🏠 بازگشت به صفحه اصلی', link: '/fa/' }
              ]
            }
          ],
          '/fa/current-state/': [
            {
              text: '📂 مخزن داکیومنت‌های وضعیت فعلی',
              items: [
                { text: 'نمای کلی مستندات وضعیت فعلی', link: '/fa/current-state/' },
                { text: 'راهنمای افزودن مستند جدید و قالب خام', link: '/fa/current-state/guide' }
              ]
            },
            {
              text: 'دسته‌بندی‌ها (آماده ثبت مستند)',
              items: [
                { text: 'فرآیندهای عملیاتی جاری (آماده بارگذاری)', link: '/fa/current-state/' },
                { text: 'شناسنامه سیستم‌ها و نرم‌افزارها', link: '/fa/current-state/' },
                { text: 'رجیستری اکسل‌ها و پایگاه داده‌ها', link: '/fa/current-state/' }
              ]
            },
            {
              text: 'سایر بخش‌ها',
              items: [
                { text: '📁 ورود به داکیومنت‌های اولیه', link: '/fa/initial-review/' },
                { text: '🏠 بازگشت به صفحه اصلی', link: '/fa/' }
              ]
            }
          ],
          '/fa/initial-review/': [
            {
              text: '📁 داکیومنت‌های بررسی اولیه',
              items: [
                { text: 'فهرست کامل داکیومنت‌های اولیه', link: '/fa/initial-review/' }
              ]
            },
            {
              text: '۰۰. سند راهبردی مدیران ارشد',
              collapsed: false,
              items: [
                { text: 'خلاصه مدیریتی بخش', link: '/fa/initial-review/00-executive/' },
                { text: 'چشم‌انداز و ستاره قطبی تحول', link: '/fa/initial-review/00-executive/vision' },
                { text: 'تز بنیادین و داستان تحول', link: '/fa/initial-review/00-executive/transformation-thesis' },
                { text: 'یادداشت تصمیم‌گیری مدیرعامل', link: '/fa/initial-review/00-executive/ceo-memo' },
                { text: 'منشور اختیارات رهبر تحول', link: '/fa/initial-review/00-executive/transformation-charter' },
                { text: 'سنجه‌های کلان موفقیت', link: '/fa/initial-review/00-executive/success-metrics' }
              ]
            },
            {
              text: '۰۱. شناخت میدانی و واقعیت‌ها',
              collapsed: false,
              items: [
                { text: 'نمای کلی فاز شناخت', link: '/fa/initial-review/01-discovery/' },
                { text: 'چارچوب شناخت میدانی (۳۰ تا ۶۰ روز)', link: '/fa/initial-review/01-discovery/discovery-framework' },
                { text: 'جریان‌های فرآیندی کسب‌وکار', link: '/fa/initial-review/01-discovery/business-processes' },
                { text: 'معماری فنی سیستم‌های فعلی (تدارک)', link: '/fa/initial-review/01-discovery/technology-landscape' },
                { text: 'چشم‌انداز داده‌ها و جزایر اطلاعاتی', link: '/fa/initial-review/01-discovery/data-landscape' },
                { text: 'ساختار سازمانی و سرمایه انسانی', link: '/fa/initial-review/01-discovery/organization-and-capabilities' },
                { text: 'رجیستری نقاط درد و فرضیات', link: '/fa/initial-review/01-discovery/pain-points-and-hypotheses' }
              ]
            },
            {
              text: '۰۲. استراتژی جامع تحول',
              collapsed: false,
              items: [
                { text: 'نمای کلی استراتژی تحول', link: '/fa/initial-review/02-transformation-strategy/' },
                { text: 'ارکان سه‌گانه تحول سازمانی', link: '/fa/initial-review/02-transformation-strategy/transformation-pillars' },
                { text: 'چارچوب ساخت، خرید یا یکپارچه‌سازی', link: '/fa/initial-review/02-transformation-strategy/build-buy-integrate' },
                { text: 'مدل عملیاتی هدف (TOM)', link: '/fa/initial-review/02-transformation-strategy/operating-model' },
                { text: 'معماری وضعیت هدف سازمان', link: '/fa/initial-review/02-transformation-strategy/target-state' },
                { text: 'نقشه راه مرحله‌بندی‌شده تحول', link: '/fa/initial-review/02-transformation-strategy/transformation-roadmap' }
              ]
            },
            {
              text: '۰۳. معماری نرم‌افزار و داده',
              collapsed: false,
              items: [
                { text: 'نمای کلی معماری دیجیتال', link: '/fa/initial-review/03-digital-and-software/' },
                { text: 'استراتژی مهندسی نرم‌افزار', link: '/fa/initial-review/03-digital-and-software/software-strategy' },
                { text: 'معماری مونولیت ماژولار', link: '/fa/initial-review/03-digital-and-software/modular-monolith' },
                { text: 'همزیستی با تدارک و لایه ضدفساد', link: '/fa/initial-review/03-digital-and-software/coexistence-and-acl' },
                { text: 'معماری داده و هاب رکورد طلایی شاسی', link: '/fa/initial-review/03-digital-and-software/data-architecture' },
                { text: 'معماری APIها و شاهراه گذرگاهی', link: '/fa/initial-review/03-digital-and-software/api-and-integration' },
                { text: 'ساماندهی فناوری سایه و اکسل‌ها', link: '/fa/initial-review/03-digital-and-software/shadow-it-migration' }
              ]
            },
            {
              text: '۰۴. تحول عمل‌گرایانه هوش مصنوعی',
              collapsed: false,
              items: [
                { text: 'نمای کلی تحول هوش مصنوعی', link: '/fa/initial-review/04-ai-transformation/' },
                { text: 'استراتژی عمل‌گرایانه AI', link: '/fa/initial-review/04-ai-transformation/ai-strategy' },
                { text: 'چارچوب ارزیابی موارد کاربرد AI', link: '/fa/initial-review/04-ai-transformation/usecase-evaluation' },
                { text: 'پردازش هوشمند اسناد و OCR', link: '/fa/initial-review/04-ai-transformation/ocr-and-document-ai' },
                { text: 'حاکمیت، اخلاق و پایش انحراف مدل', link: '/fa/initial-review/04-ai-transformation/ai-governance' },
                { text: 'هوش مصنوعی در چرخه مهندسی', link: '/fa/initial-review/04-ai-transformation/ai-assisted-engineering' }
              ]
            },
            {
              text: '۰۵. اجرا، تحویل چابک و تغییر',
              collapsed: false,
              items: [
                { text: 'نمای کلی اجرا و تحویل', link: '/fa/initial-review/05-execution/' },
                { text: 'تحویل چابک و ریتم اسپرینت‌ها', link: '/fa/initial-review/05-execution/sprint-rhythm' },
                { text: 'پایلوت‌های تاکتیکی و دستاوردهای سریع', link: '/fa/initial-review/05-execution/pilots-and-quickwins' },
                { text: 'مدیریت تغییر سازمانی با مدل ADKAR', link: '/fa/initial-review/05-execution/change-management' },
                { text: 'مدیریت و مهار ریسک‌های سازمان', link: '/fa/initial-review/05-execution/risk-management' }
              ]
            },
            {
              text: '۰۶. حاکمیت سازمانی و سنجه‌های مالی',
              collapsed: false,
              items: [
                { text: 'نمای کلی حاکمیت و سنجش', link: '/fa/initial-review/06-governance/' },
                { text: 'چارچوب حاکمیت و کمیته راهبری', link: '/fa/initial-review/06-governance/governance-framework' },
                { text: 'حاکمیت معماری و فرآیند ADR', link: '/fa/initial-review/06-governance/architecture-governance' },
                { text: 'سنجه‌های کلیدی عملکرد و داشبوردها', link: '/fa/initial-review/06-governance/success-metrics-and-kpis' },
                { text: 'حاکمیت مالی و سنجش نرخ بازگشت (ROI)', link: '/fa/initial-review/06-governance/financial-governance' }
              ]
            },
            {
              text: '۰۷. پیوست‌ها، سوابق و مراجع',
              collapsed: false,
              items: [
                { text: 'نمای کلی پیوست‌ها', link: '/fa/initial-review/07-appendix/' },
                { text: 'واژه‌نامه تخصصی دوزبانه', link: '/fa/initial-review/07-appendix/glossary' },
                { text: 'فهرست سوابق تصمیمات معماری (ADRs)', link: '/fa/initial-review/07-appendix/adrs/' },
                { text: 'سند ADR-001: مونولیت ماژولار', link: '/fa/initial-review/07-appendix/adrs/adr-001-modular-monolith' },
                { text: 'سند ADR-002: لایه ضدفساد تدارک', link: '/fa/initial-review/07-appendix/adrs/adr-002-anti-corruption-layer' },
                { text: 'سند ADR-003: پایگاه داده PostgreSQL', link: '/fa/initial-review/07-appendix/adrs/adr-003-postgresql-primary-database' },
                { text: 'سند ADR-004: هاب رکورد طلایی شاسی', link: '/fa/initial-review/07-appendix/adrs/adr-004-vin-golden-record' },
                { text: 'سند ADR-005: خط لوله ترکیبی OCR', link: '/fa/initial-review/07-appendix/adrs/adr-005-document-ocr-pipeline' },
                { text: 'سند ADR-006: تیم مهندسی داخلی', link: '/fa/initial-review/07-appendix/adrs/adr-006-inhouse-engineering' },
                { text: 'استانداردها و مراجع قانونی', link: '/fa/initial-review/07-appendix/references' }
              ]
            }
          ],
          '/fa/': [
            {
              text: 'پایگاه مستندات سازمانی آرین خودرو',
              items: [
                { text: '📁 داکیومنت‌های اولیه (بررسی اولیه)', link: '/fa/initial-review/' },
                { text: '📂 داکیومنت‌های وضعیت فعلی', link: '/fa/current-state/' },
                { text: '📋 گزارش‌های روزانه و یادداشت‌های کاری (Work Log)', link: '/fa/work-log/' },
                { text: '📝 راهنمای افزودن مستند جدید', link: '/fa/current-state/guide' }
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
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'ltr',
      link: '/en/',
      title: 'Arian Khodro',
      description: 'Enterprise Transformation Blueprint, Architecture & Operational Strategy',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: '📁 Initial Documents', link: '/en/initial-review/' },
          { text: '📂 Current State', link: '/en/current-state/' },
          { text: '📋 Work Logs', link: '/en/work-log/' }
        ],
        sidebar: {
          '/en/work-log/': [
            {
              text: '📋 Transformation Work Logs & Journals',
              items: [
                { text: 'Work Logs Overview', link: '/en/work-log/' }
              ]
            },
            {
              text: '👤 Mohammad Hadi Arefi Logs',
              collapsed: false,
              items: [
                { text: 'Arefi Work Logs Index', link: '/en/work-log/arefi/' },
                { text: 'Day 01: IT Discovery, WMS & CRM (2026-09-05)', link: '/en/work-log/arefi/day-01' }
              ]
            },
            {
              text: 'Other Sections',
              items: [
                { text: '📁 Initial Review Documents', link: '/en/initial-review/' },
                { text: '📂 Current State Documents', link: '/en/current-state/' },
                { text: '🏠 Back to Home', link: '/en/' }
              ]
            }
          ],
          '/en/current-state/': [
            {
              text: '📂 Current State Intake Repository',
              items: [
                { text: 'Current State Overview', link: '/en/current-state/' },
                { text: 'Authoring Guide & Template', link: '/en/current-state/guide' }
              ]
            },
            {
              text: 'Intake Categories (Ready)',
              items: [
                { text: 'Operational Processes & SOPs', link: '/en/current-state/' },
                { text: 'In-use Applications Catalog', link: '/en/current-state/' },
                { text: 'Spreadsheet & Data Registry', link: '/en/current-state/' }
              ]
            },
            {
              text: 'Other Sections',
              items: [
                { text: '📁 Initial Review Documents', link: '/en/initial-review/' },
                { text: '🏠 Back to Home', link: '/en/' }
              ]
            }
          ],
          '/en/initial-review/': [
            {
              text: '📁 Initial Review Documents',
              items: [
                { text: 'Complete Documents Index', link: '/en/initial-review/' }
              ]
            },
            {
              text: '00. Executive Blueprint',
              collapsed: false,
              items: [
                { text: 'Executive Overview', link: '/en/initial-review/00-executive/' },
                { text: 'Vision & North Star', link: '/en/initial-review/00-executive/vision' },
                { text: 'Transformation Thesis', link: '/en/initial-review/00-executive/transformation-thesis' },
                { text: 'CEO Decision Memo', link: '/en/initial-review/00-executive/ceo-memo' },
                { text: 'Transformation Charter & Mandate', link: '/en/initial-review/00-executive/transformation-charter' },
                { text: 'Executive Success Metrics', link: '/en/initial-review/00-executive/success-metrics' }
              ]
            },
            {
              text: '01. Ground-Truth Discovery',
              collapsed: false,
              items: [
                { text: 'Discovery Overview', link: '/en/initial-review/01-discovery/' },
                { text: 'Discovery Framework', link: '/en/initial-review/01-discovery/discovery-framework' },
                { text: 'Business Processes Landscape', link: '/en/initial-review/01-discovery/business-processes' },
                { text: 'Technology Landscape (Tadark)', link: '/en/initial-review/01-discovery/technology-landscape' },
                { text: 'Data Landscape & Silos', link: '/en/initial-review/01-discovery/data-landscape' },
                { text: 'Organization & Capabilities', link: '/en/initial-review/01-discovery/organization-and-capabilities' },
                { text: 'Pain Points & Hypotheses', link: '/en/initial-review/01-discovery/pain-points-and-hypotheses' }
              ]
            },
            {
              text: '02. Transformation Strategy',
              collapsed: false,
              items: [
                { text: 'Strategy Overview', link: '/en/initial-review/02-transformation-strategy/' },
                { text: 'Three Transformation Pillars', link: '/en/initial-review/02-transformation-strategy/transformation-pillars' },
                { text: 'Build vs. Buy vs. Integrate', link: '/en/initial-review/02-transformation-strategy/build-buy-integrate' },
                { text: 'Target Operating Model', link: '/en/initial-review/02-transformation-strategy/operating-model' },
                { text: 'Target State Architecture', link: '/en/initial-review/02-transformation-strategy/target-state' },
                { text: 'Phased Transformation Roadmap', link: '/en/initial-review/02-transformation-strategy/transformation-roadmap' }
              ]
            },
            {
              text: '03. Digital & Software Architecture',
              collapsed: false,
              items: [
                { text: 'Architecture Overview', link: '/en/initial-review/03-digital-and-software/' },
                { text: 'Core Software Strategy', link: '/en/initial-review/03-digital-and-software/software-strategy' },
                { text: 'Modular Monolith Architecture', link: '/en/initial-review/03-digital-and-software/modular-monolith' },
                { text: 'Legacy Coexistence & ACL', link: '/en/initial-review/03-digital-and-software/coexistence-and-acl' },
                { text: 'Target Data Architecture & VIN Hub', link: '/en/initial-review/03-digital-and-software/data-architecture' },
                { text: 'API & Integration Architecture', link: '/en/initial-review/03-digital-and-software/api-and-integration' },
                { text: 'Shadow IT & Spreadsheet Migration', link: '/en/initial-review/03-digital-and-software/shadow-it-migration' }
              ]
            },
            {
              text: '04. Pragmatic AI Transformation',
              collapsed: false,
              items: [
                { text: 'AI Strategy Overview', link: '/en/initial-review/04-ai-transformation/' },
                { text: 'Pragmatic AI Strategy', link: '/en/initial-review/04-ai-transformation/ai-strategy' },
                { text: 'AI Use Case Evaluation', link: '/en/initial-review/04-ai-transformation/usecase-evaluation' },
                { text: 'OCR & Document Intelligence', link: '/en/initial-review/04-ai-transformation/ocr-and-document-ai' },
                { text: 'AI Governance, Ethics & Drift', link: '/en/initial-review/04-ai-transformation/ai-governance' },
                { text: 'AI in Engineering Lifecycle', link: '/en/initial-review/04-ai-transformation/ai-assisted-engineering' }
              ]
            },
            {
              text: '05. Execution & Delivery',
              collapsed: false,
              items: [
                { text: 'Execution Overview', link: '/en/initial-review/05-execution/' },
                { text: 'Agile Delivery & Sprints', link: '/en/initial-review/05-execution/sprint-rhythm' },
                { text: 'Tactical Pilots & Quick Wins', link: '/en/initial-review/05-execution/pilots-and-quickwins' },
                { text: 'Change Management (ADKAR)', link: '/en/initial-review/05-execution/change-management' },
                { text: 'Enterprise Risk Management', link: '/en/initial-review/05-execution/risk-management' }
              ]
            },
            {
              text: '06. Lean Governance & Financial ROI',
              collapsed: false,
              items: [
                { text: 'Governance Overview', link: '/en/initial-review/06-governance/' },
                { text: 'Governance Framework & Steering', link: '/en/initial-review/06-governance/governance-framework' },
                { text: 'Architecture Governance & ADRs', link: '/en/initial-review/06-governance/architecture-governance' },
                { text: 'Success Metrics & KPI Dashboard', link: '/en/initial-review/06-governance/success-metrics-and-kpis' },
                { text: 'Financial Governance & ROI Tracking', link: '/en/initial-review/06-governance/financial-governance' }
              ]
            },
            {
              text: '07. Appendix & Standards',
              collapsed: false,
              items: [
                { text: 'Appendix Overview', link: '/en/initial-review/07-appendix/' },
                { text: 'Comprehensive Bilingual Glossary', link: '/en/initial-review/07-appendix/glossary' },
                { text: 'Architecture Decisions (ADRs) Index', link: '/en/initial-review/07-appendix/adrs/' },
                { text: 'ADR-001: Modular Monolith', link: '/en/initial-review/07-appendix/adrs/adr-001-modular-monolith' },
                { text: 'ADR-002: Anti-Corruption Layer', link: '/en/initial-review/07-appendix/adrs/adr-002-anti-corruption-layer' },
                { text: 'ADR-003: PostgreSQL Database', link: '/en/initial-review/07-appendix/adrs/adr-003-postgresql-primary-database' },
                { text: 'ADR-004: VIN Golden Record Hub', link: '/en/initial-review/07-appendix/adrs/adr-004-vin-golden-record' },
                { text: 'ADR-005: Hybrid OCR Pipeline', link: '/en/initial-review/07-appendix/adrs/adr-005-document-ocr-pipeline' },
                { text: 'ADR-006: In-House Squad', link: '/en/initial-review/07-appendix/adrs/adr-006-inhouse-engineering' },
                { text: 'Standards & References', link: '/en/initial-review/07-appendix/references' }
              ]
            }
          ],
          '/en/': [
            {
              text: 'Arian Khodro Knowledge Portal',
              items: [
                { text: '📁 Initial Review Documents', link: '/en/initial-review/' },
                { text: '📂 Current State Documents', link: '/en/current-state/' },
                { text: '📋 Transformation Work Logs', link: '/en/work-log/' },
                { text: '📝 New Document Guide', link: '/en/current-state/guide' }
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
