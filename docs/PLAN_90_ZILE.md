# PLAN DE REALIZARE - FiiFit Online (90 Zile)

## FAZA 1: PLANNING (Zile 1-7)

### Zi 1-2: Audit
- [ ] Bază de date existentă (structure + volume)
- [ ] Videoclipuri existente (24 lecții + 1040 antrenamente)
- [ ] Utilizatori actuali (4500+ femei)
- [ ] Integrări curente (email, payment)

### Zi 3-4: Architecture
- [ ] Tech stack: Next.js + Node.js + PostgreSQL
- [ ] Database migration plan
- [ ] API design (REST endpoints)
- [ ] Security requirements (DRM, SSL, encryption)

### Zi 5-7: Wireframes
- [ ] Landing page
- [ ] Dashboard LMS
- [ ] Pricing/checkout
- [ ] Member area

---

## FAZA 2: FRONTEND MVP (Zile 8-28)

### Sprint 1 (Zile 8-14): Pages publice
- [ ] Next.js project init
- [ ] Landing page (hero + video player)
- [ ] Impact statistics (4500+, 50k kg, 81%)
- [ ] "De ce FiiFit?" section
- [ ] Founder story (Tanya -58kg)
- [ ] Social proof cards (Natalia, Cristina, Galina)

### Sprint 2 (Zile 15-21): Pricing + Auth
- [ ] Pricing plans (3/6/12 luni)
- [ ] Auth pages (signup/login)
- [ ] Stripe Checkout integration
- [ ] Form validation (Zod)
- [ ] Mobile responsiveness

### Sprint 3 (Zile 22-28): Member Dashboard
- [ ] Dashboard layout
- [ ] Academia section (24 lessons grid)
- [ ] Workout calendar
- [ ] Resources (PDFs, FAQs)
- [ ] Progress tracker mockup

---

## FAZA 3: BACKEND (Zile 29-42)

### Sprint 4 (Zile 29-35): Core API
- [ ] Express server setup
- [ ] PostgreSQL + migration
- [ ] User API (register, login, profile)
- [ ] Lesson API (list, track progress)
- [ ] Stripe webhook handlers
- [ ] JWT auth + refresh tokens

### Sprint 5 (Zile 36-42): Integrări
- [ ] Vimeo video uploads (DRM protected)
- [ ] SendGrid email templates
- [ ] Telegram Bot webhook
- [ ] Weight tracking API
- [ ] Referral code generation
- [ ] Session management (Redis)

---

## FAZA 4: CONTENT + MIGRATION (Zile 43-56)

### Zile 43-49: Content Upload
- [ ] 24 lecții în Vimeo (watermark)
- [ ] 1040 antrenamente în archive
- [ ] Thumbnails + metadata

### Zile 50-56: Data Migration
- [ ] Export bază de date veche
- [ ] Validation + cleanup
- [ ] Import staging environment
- [ ] Testing cu 50 sample users
- [ ] Rollback procedure

---

## FAZA 5: TESTING + SECURITY (Zile 57-70)

### Zile 57-63: QA
- [ ] Signup/login flow
- [ ] Payment flow (test cards)
- [ ] Video streaming
- [ ] Email delivery
- [ ] Mobile testing (iOS + Android)
- [ ] Cross-browser (Chrome, Safari, Firefox)

### Zile 64-70: Security
- [ ] OWASP Top 10 audit
- [ ] SQL injection tests
- [ ] XSS prevention
- [ ] Rate limiting
- [ ] SSL/TLS setup
- [ ] Sentry error tracking

---

## FAZA 6: OPTIMIZATION + LAUNCH (Zile 71-90)

### Zile 71-77: Performance
- [ ] Lighthouse score (90+)
- [ ] Video CDN optimization (Vimeo)
- [ ] Database indexing
- [ ] Cache strategy (Redis)
- [ ] Load testing (1000 users)

### Zile 78-84: Go-Live Prep
- [ ] Email campaigns (warm-up)
- [ ] Testimonial videos (5-10)
- [ ] Social content calendar
- [ ] Support runbook
- [ ] Monitoring alerts

### Zile 85-90: Post-Launch
- [ ] Monitor bugs (Sentry)
- [ ] User feedback survey (NPS)
- [ ] Performance tuning
- [ ] First members onboarding
- [ ] Referral system activation

---

## TECH STACK

**Frontend**: Next.js 14 | Tailwind CSS | Framer Motion  
**Backend**: Node.js | Express | PostgreSQL | Redis  
**Video**: Vimeo (DRM + watermark)  
**Payment**: Stripe  
**Email**: SendGrid  
**Notifications**: Telegram Bot  
**Hosting**: Vercel | AWS ECS  

---

## DELIVERABLES ZI 90

- ✅ Platform live (zero downtime)
- ✅ 150+ members noi
- ✅ LMS complet (24 lecții + archive)
- ✅ Checkout 1-click operational
- ✅ Email automation flows
- ✅ Telegram notifications
- ✅ Referral system active
- ✅ Weight tracking functional
- ✅ Monitoring + alerts
- ✅ Support documentation

---

## METRICS URMĂRITE

| KPI | Target |
|---|---|
| Conversion Rate | 5% |
| Members | 150+ |
| Monthly Revenue | €35,000+ |
| Retention (30 day) | 75%+ |
| Video Completion | 70%+ |
| Referral Rate | 25%+ |

---

**Status**: Ready for development start
