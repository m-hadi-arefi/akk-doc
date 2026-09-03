---
layout: page
title: "Arian Khodro Knowledge System"
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    const userLang = navigator.language || navigator.userLanguage || ''
    if (userLang.toLowerCase().startsWith('fa')) {
      window.location.replace('/fa/')
    } else {
      window.location.replace('/en/')
    }
  }
})
</script>

<div style="max-width: 900px; margin: 60px auto; padding: 0 24px; text-align: center;">
  <div style="font-size: 56px; margin-bottom: 20px;">🚗 🏛️</div>
  <h1 style="font-size: 2.4rem; font-weight: 800; margin-bottom: 16px; color: var(--vp-c-text-1);">
    Arian Khodro Knowledge System
  </h1>
  <p style="font-size: 1.2rem; color: var(--vp-c-text-2); margin-bottom: 40px;">
    سامانه دانش مهندسی، معماری سازمانی و تحول دیجیتال آریان خودرو<br>
    Enterprise Architecture • Digital Transformation • Engineering Standards
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 40px; text-align: left;">
    <div style="border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 24px; background: var(--vp-c-bg-soft);">
      <h2 style="font-size: 1.3rem; margin-top: 0; color: var(--vp-c-brand-1);">🇬🇧 English Documentation</h2>
      <p style="color: var(--vp-c-text-2); font-size: 0.95rem; min-height: 48px;">
        Complete enterprise architecture, 1-year transformation roadmap, core platform shared capabilities, and operational AI strategy.
      </p>
      <a href="/en/" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; font-weight: 600; text-decoration: none;">
        Enter English Portal →
      </a>
    </div>

    <div style="border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 24px; background: var(--vp-c-bg-soft); direction: rtl; text-align: right;">
      <h2 style="font-size: 1.3rem; margin-top: 0; color: var(--vp-c-brand-1);">🇮🇷 مستندات فارسی</h2>
      <p style="color: var(--vp-c-text-2); font-size: 0.95rem; min-height: 48px;">
        معماری جامع سازمانی، نقشه راه ۱ ساله تحول، سکوی مرکزی و استراتژی عملیاتی هوش مصنوعی آرین خودرو.
      </p>
      <a href="/fa/" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; font-weight: 600; text-decoration: none;">
        ورود به پورتال فارسی ←
      </a>
    </div>
  </div>

  <p style="font-size: 0.9rem; color: var(--vp-c-text-3);">
    Redirecting automatically based on browser preference... / انتقال خودکار بر اساس زبان مرورگر...
  </p>
</div>
