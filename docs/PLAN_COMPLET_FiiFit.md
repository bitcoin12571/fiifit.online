# 📊 PLAN DE EXECUȚIE - FiiFit Online Platform
## 90 ZILE SPRE TRANSFORMARE DIGITALĂ

---

## 🎯 EXECUTIVE SUMMARY

**Obiectiv**: Lansare platformă LMS premium cu 150+ membri noi în 90 zile  
**Budget estimat**: 25,000-35,000€ (dev + marketing)  
**ROI așteptat**: 3-4x in first 180 days  
**Model**: Subscription SaaS + Referral Partnership  

---

## FAZA 1: STRATEGIE & AUDIT (Zile 1-7)

### 📋 Audit Client (Zi 1-2)
```
✅ Cine: Tanya Goncear (Fondatoare, autoritate -58kg)
✅ Problemă: Platformă fragmentată, fără LMS, fără automatizare
✅ Diferențiator: Metodă chimie+nutriție, 81% succes, 4500+ clienți
✅ Produse: 3 planuri (175€/275€/365€) cu 10% referral commission
✅ Piață: Femei 25-55, urbane, venituri medii-mari (RO + diaspora)
```

### 🎲 Analiza Competiție
| Competitor | Ofertă | Avantaj FiiFit |
|---|---|---|
| Fitness la mine acasă | App mobile | LMS + comunitate |
| Farmfit | Offline/Online | Scal cloud, suport 24/7 |
| Udemy/Skillshare | Cursuri generale | Personalizare + coaching |
| Instagram fitness | Gratuit | Premium + progres tracking |

### 🚀 Customer Acquisition Strategy
- **Social Proof (40%)**: Wall of Fame (Natalia -21kg, Cristina -31kg, Galina -40kg)
- **Referral (25%)**: 10% commission → Promotorii parteneri
- **Organic (20%)**: SEO nutriție + blog + YouTube snippets
- **Paid (15%)**: FB/IG re-targeting naar warm audience

---

## FAZA 2: DESIGN & ARCHITECTURE (Zile 8-21)

### 🎨 Wireframes Frontend
```
Landing Page:
├── Hero: Video Tanya + CTA "Înscrie-te"
├── Impact Bar: 4500+ femei | 50,000kg slăbite | 81% succes
├── "De ce FiiFit?": USP + metodă
├── Founder Story: -58kg Transformation
├── Social Proof: 3x customer stories (interactive cards)
├── Pricing Table: 3 planuri cu toggle year/month
└── Footer: Legal + Support

Member Dashboard (LMS):
├── Welcome: Progress bar (Days/Total)
├── Academia: 24 lecții video (progress tracking)
├── Workouts: Calendar + 1040+ arhivă
├── Resources: PDF menu, 14 FAQs, psyh sessions
├── My Progress: Weight tracking + photos
└── Messages: Telegram integration alert

Testimonials Page:
├── Filter: -10kg, -20kg, -40kg categories
├── Cards: Foto inițial → final, poveste, video clip
└── Sortare: Recent, most popular, biggest loss
```

### 🏗️ Tech Stack Final
```
Frontend:
- Framework: Next.js 14 (SSR + Static Gen)
- Styling: Tailwind CSS + Framer Motion
- State: Zustand (lightweight)
- Forms: React Hook Form + Zod validation
- Video: Vimeo SDK (DRM protected)

Backend:
- Runtime: Node.js 20 LTS
- Framework: Express.js
- Database: PostgreSQL 15 + TimescaleDB (weight tracking)
- Cache: Redis (session + video CDN)
- Jobs: Bull Queue (email, telegram notif)

Infrastructure:
- Frontend: Vercel (auto-deploy + edge caching)
- Backend: AWS ECS (containerized)
- Database: AWS RDS PostgreSQL (multi-AZ)
- CDN: Cloudflare (DDoS + WAF)
- Video: Vimeo On Demand (watermark + DRM)

Integrări:
- Payment: Stripe (Checkout API)
- Email: SendGrid (transactional + marketing)
- Notifications: Telegram Bot API
- Analytics: Mixpanel + Sentry
- Auth: Auth0 (SSO ready)
```

### 📐 Database Schema (Key Tables)
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  password_hash VARCHAR,
  full_name VARCHAR,
  birth_date DATE,
  initial_weight DECIMAL,
  target_weight DECIMAL,
  phone VARCHAR,
  stripe_id VARCHAR,
  referrer_code VARCHAR UNIQUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  plan_id VARCHAR (3mo|6mo|12mo),
  price_eur DECIMAL,
  stripe_subscription_id VARCHAR,
  started_at TIMESTAMP,
  ends_at TIMESTAMP,
  auto_renew BOOLEAN,
  status VARCHAR (active|cancelled|expired)
);

-- Lessons (Academia)
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  order INT,
  title VARCHAR,
  description TEXT,
  vimeo_id VARCHAR,
  duration_minutes INT,
  category VARCHAR
);

-- Lesson Progress
CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  lesson_id UUID REFERENCES lessons,
  watched_percentage INT,
  completed BOOLEAN,
  completed_at TIMESTAMP
);

-- Weight Tracking
CREATE TABLE weight_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  weight_kg DECIMAL,
  logged_at TIMESTAMP
);

-- Referrals
CREATE TABLE referrals (
  id UUID PRIMARY KEY,
  referrer_id UUID REFERENCES users,
  referred_id UUID REFERENCES users,
  commission_percentage DECIMAL,
  commission_paid BOOLEAN,
  created_at TIMESTAMP
);
```

---

## FAZA 3: MVP BUILD (Zile 22-42)

### Sprint 1 (Zile 22-28): Frontend Foundation
- [ ] Next.js project setup + CI/CD pipeline
- [ ] Landing page (hero + pricing)
- [ ] Auth system (signup/login)
- [ ] Responsiv design (mobile-first)
- [ ] Stripe Checkout integration

### Sprint 2 (Zile 29-35): Backend Core
- [ ] Express server + PostgreSQL
- [ ] User API (CRUD)
- [ ] Subscription API (Stripe webhooks)
- [ ] Email transactional (SendGrid)
- [ ] Telegram Bot webhook

### Sprint 3 (Zile 36-42): LMS & Content
- [ ] Upload 24 lecții în Vimeo
- [ ] Lesson progress API
- [ ] Dashboard LMS (mockup data)
- [ ] Weight tracking module
- [ ] Testimonials gallery

---

## FAZA 4: INTEGRĂRI & AUTOMATION (Zile 43-56)

### Email Automation Flows
```
1. Welcome Series (3 emails):
   - Day 0: Acces platform + first lesson
   - Day 3: Success story (Natalia)
   - Day 7: Check-in: Cum te simți?

2. Engagement (Weekly):
   - Monday: New lesson alert
   - Wednesday: Live session reminder
   - Friday: Progress check-in

3. Milestone (Automated):
   - Day 30: Weigh-in + Psychologist link
   - Day 60: Midpoint review + bonus content
   - Day 90: Results showcase + testimonial request
```

### Telegram Notifications
```
- New lesson published → group notification
- Live session in 1 hour → reminder
- User abandoned checkout → reminder
- Referral bonus earned → instant alert
```

### Referral System
```
API: /api/referral/generate-link
- Unique code per user (UTM param)
- Tracking: Cookie + server-side match
- Commission: 10% auto-calculated in Stripe
- Payout: Monthly via bank transfer
```

---

## FAZA 5: TESTING & SECURITY (Zile 57-70)

### QA Checklist
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile responsiveness (iPhone 12/13 mini/max)
- [ ] Payment flow (test cards: 4242 4242)
- [ ] Email delivery (SendGrid sandbox)
- [ ] Video streaming (Vimeo protection)
- [ ] Load testing (1000 concurrent users)

### Security Audit
- [ ] OWASP Top 10 review
- [ ] SQL Injection tests
- [ ] XSS vulnerability scan
- [ ] CSRF protection
- [ ] Rate limiting on APIs
- [ ] SSL/TLS certificate (auto-renew)
- [ ] GDPR compliance (privacy policy)

### Performance Targets
- Lighthouse Score: 90+
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- API response: <200ms (p95)

---

## FAZA 6: DATA MIGRATION (Zile 71-77)

### Migration Plan
```
1. Export old database → CSV
2. Validate: duplicate emails, format checks
3. Import → PostgreSQL staging
4. Map old IDs → new UUIDs (referential integrity)
5. Test: 10 sample users full flow
6. Production import: off-peak (23:00 CET)
7. Verify: row count + sample checks
```

### Rollback Plan
- Keep old system live 7 days in parallel
- DB snapshots every 6 hours
- Automated backup to S3

---

## FAZA 7: MARKETING LAUNCH (Zile 78-84)

### Pre-Launch (Zile 78-80)
- [ ] Email list (4500 existente): "Coming soon" campaign
- [ ] Testimonial videos: 5-10 clips from wall of fame
- [ ] Landing page traffic (organic + paid)
- [ ] Press release → tech/health blogs

### Launch Day (Zi 81)
- [ ] Email: "Platform LIVE" la lista + referrers
- [ ] Social blitz: Instagram/Facebook posts (5x pe zi)
- [ ] Influencer seeding (5 micro-influencers)
- [ ] Monitoring: Uptime + server metrics

### Post-Launch (Zile 82-84)
- [ ] Early adopter perks (3x referral bonus)
- [ ] Live Q&A with Tanya (Telegram/YouTube)
- [ ] Case study: First 50 members

---

## FAZA 8: OPTIMIZATION (Zile 85-90)

### KPI Tracking
| Metric | Week 1 | Week 2 | Week 3 | Target |
|---|---|---|---|---|
| Members | 20 | 60 | 150 | 150+ |
| Conversion Rate | 1.2% | 2.8% | 5% | 5%+ |
| Churn Rate | 5% | 3% | 2% | <2% |
| Avg LTV | €400 | €450 | €500 | €500+ |
| Referral % | 10% | 18% | 25% | 25%+ |

### Bug Fixes & UX Improvements
- [ ] Monitor Sentry for errors
- [ ] User feedback survey (NPS)
- [ ] A/B test checkout CTA
- [ ] Optimize email send times
- [ ] Video bitrate tuning (Vimeo)

---

## 🎯 DELIVERABLES ZIUA 90

- ✅ Platformă live (zero downtime)
- ✅ 150+ membri noi (MRR €35,000+)
- ✅ 24/7 suport (Telegram + email)
- ✅ Documente legale (GDPR + Moldova)
- ✅ 50+ testimoniale video
- ✅ Referral system operational
- ✅ Monitoring + alerts setup

---

## 📊 BUDGET ESTIMARE

| Item | Cost |
|---|---|
| Development (480h @ €60/h) | €28,800 |
| Cloud hosting (3 mo) | €1,500 |
| Vimeo On Demand | €1,000 |
| Email/SMS (SendGrid) | €300 |
| Domain + SSL | €100 |
| Marketing (ads + content) | €3,000 |
| **TOTAL** | **€34,700** |

---

## ⚠️ RISCURI & MITIGARE

| Risk | Probabilitate | Impact | Mitigare |
|---|---|---|---|
| Video piracy | Media | Alto | DRM + watermark + monitoring |
| Payment fraud | Bassa | Medio | Stripe 3D Secure + verification |
| Server outage | Bassa | Alto | Multi-AZ + auto-failover |
| Data breach | Bassa | Critic | Encryption + regular audits |
| Low signup rate | Media | Alto | Referral incentives + retargeting |

---

## 📞 CONTACT & ESCALATION

- **Project Manager**: TBD
- **Dev Lead**: TBD  
- **QA Lead**: TBD
- **Daily standup**: 10:00 CET (async-friendly)
- **Weekly review**: Friday 16:00 CET

---

**Document Version**: 1.0  
**Last Updated**: Iunie 2026  
**Status**: Ready for Stakeholder Approval
