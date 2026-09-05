---
title: "راهنمای افزودن مستند جدید و قالب استاندارد"
lang: fa
translation: /en/current-state/guide
---

# راهنمای افزودن مستند جدید و قالب استاندارد

## هدف راهنما
این راهنما نحوه افزودن مستندات جدید به پوشه **داکیومنت‌های وضعیت فعلی** را با رعایت کامل اصول تقارن دوزبانه (فارسی و انگلیسی) و استانداردهای ساخت VitePress شرح می‌دهد.

---

## گام‌های استاندارد ثبت مستند جدید
۱. **ایجاد فایل نسخه انگلیسی:** ایجاد فایل در مسیر `docs/en/current-state/<topic>.md`.
۲. **ایجاد فایل نسخه فارسی:** ایجاد فایل متناظر در مسیر `docs/fa/current-state/<topic>.md`.
۳. **تنظیم هدر فرانت‌متر (Frontmatter):** درج شناسه زبان و لینک ترجمه دوطرفه.
۴. **به‌روزرسانی منوی ناوبری:** افزودن پیوند فایل به سایدبار در `.vitepress/config.ts`.
۵. **اعتبارسنجی خودکار:** اجرای دستور `npm run docs:check-sync` جهت اطمینان از صحت پیوندها.

---

## قالب خام استاندارد برای مستندات جدید

### هدر و بدنه نسخه فارسی
```yaml
---
title: "عنوان مستند به فارسی"
lang: fa
translation: /en/current-state/topic-slug
---

# عنوان مستند به فارسی

## خلاصه مدیریتی
خلاصه کوتاه و روان از موضوع و اهمیت فرآیند برای مدیران.

## دامنه و متولیان فرآیند
واحدهای مرتبط، نقش‌های مجری و ناظرین کیفیت.

## شرح تفصیلی و رویه اجرایی
مراحل گام‌به‌گام فرآیند، استثنائات، فرم‌های مرتبط و شاخص‌های کنترلی.
```

### هدر و بدنه نسخه انگلیسی
```yaml
---
title: "Document Title in English"
lang: en
translation: /fa/current-state/topic-slug
---

# Document Title in English

## Executive Summary
Concise executive summary explaining the purpose.

## Scope & Roles
Applicable departments and responsible owners.

## Detailed Procedures
Step-by-step procedures, exception handling, and KPIs.
```
