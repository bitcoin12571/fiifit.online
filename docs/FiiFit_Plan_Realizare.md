# PLAN DE REALIZARE - FiiFit Online Platform

---

## ZI 1: AUDIT PROIECT

### 1. **Cine este clientul?**
- **Tanya Goncear** - Fondatoare FiiFit
- **Publicul țintă**: Femei 25-55 ani, urbane, cu venituri medii-mari, dornice să slăbească fără diete restrictive
- **Locație primară**: România

### 2. **Ce problemă rezolvă proiectul?**
- Platformă online fragmentată vs. ecosistem integrat
- Lipsă de automatizare în procesul de vânzare
- Fără LMS modern pentru cursuri video
- Fără sistem de tracking progres real
- Pierderea datelor utilizatorilor

### 3. **De ce clientul trebuie să ne aleagă?**
- Metodă bazată pe chimie + nutriție (nu diete)
- Rezultate dovedite: 81% rată de succes, 4500+ femei transformate
- Povestea fondatoarei (-58kg) = autoritate + inspirație
- Comunitate activă + suport zilnic

### 4. **Ce exact vindem?**
- **Produsul**: Acces 24/7 la program transformare feminină
- **3 Planuri**:
  - 3 luni: 175€
  - 6 luni: 275€ (cel mai popular)
  - 12 luni: 365€
- **Include**: 24 lecții video + 1040+ antrenamente live + coaching

### 5. **Preț curent?**
- 3 luni: **175€**
- 6 luni: **275€**
- 12 luni: **365€**
- Cu reduceri: -25% / -27% (automatizate)

### 6. **Cine sunt competitorii?**
| Competitor | Model | Punct slab |
|---|---|---|
| Fitness la mine acasă | App mobile | Fără comunitate |
| Farmfit | Offline + online | Scal limitat |
| Platforme generale (Udemy, Skillshare) | Cursuri générale | Fără suport |
| Social media (TikTok/Instagram fitness) | Gratuit | Nesistematizat |

### 7. **De unde obținem clienți?**
1. **Social Proof Direct** (40%): Testimoniale de la Natalia (-21kg), Cristina (-31kg), Galina (-40kg)
2. **Referral Program** (25%): 10% comision pentru promotorii parteneri
3. **Organic** (20%): SEO + Content marketing (blog nutriție)
4. **Paid Ads** (15%): Facebook/Instagram re-targeting

### 8. **Cum arată Customer Journey?**
```
Landing Page → Hero Video (Tanya) → "De ce FiiFit?" → Social Proof Wall
     ↓
  Transformări (Testimoniale Interactive)
     ↓
Alegere Plan (3/6/12 luni)
     ↓
Checkout 1-Click
     ↓
Email: Acces instant + Link LMS
     ↓
Dashboard Membru (Start cursuI)
     ↓
30 zile: Check-in + Psiholog
     ↓
90 zile: Rezultate = Win
```

### 9. **KPI-uri de Urmărit**
| KPI | Target 90 zile | Metoda |
|---|---|---|
| Conversion Rate | 3.5% → 5% | Analytics |
| Cost per Acquisition | €45 → €35 | Ads tracking |
| Monthly Recurring Revenue | €12,000 → €20,000 | Stripe API |
| Member Retention | 75% | Email nurture |
| Referral Rate | 20% | Unique links |
| Video Completion | 70% | LMS tracking |

### 10. **Rezultat așteptat în 90 zile**
- ✅ Platform live (design + LMS funcțional)
- ✅ 150+ membri noi
- ✅ 180 zile de history datelor migrate
- ✅ Sistem automat checkout + Telegram notif.
- ✅ Documente legale complete (GDPR + Moldova)
- ✅ Referral system live
- ✅ 50+ testimoniale video

---

## ZI 2-7: PLANNING TEHNIC

### Faza 1: Discovery & Architecture (Săpt. 1-2)
- [ ] Audit bază de date existentă
- [ ] Wireframing pagini publice
- [ ] Alegere tech stack (React/Next.js + Node/Django)
- [ ] Architectural review

### Faza 2: MVP Front-End (Săpt. 3-5)
- [ ] Landing page + Hero
- [ ] Pagina Transformări (Wall of Fame)
- [ ] Sistem Plani Tarifare
- [ ] Checkout simplist

### Faza 3: Backend + Integrări (Săpt. 5-7)
- [ ] API Acces la baza de date
- [ ] Stripe integration
- [ ] Email automation
- [ ] Telegram API setup

### Faza 4: LMS (Săpt. 8-10)
- [ ] Upload 24 lecții video
- [ ] Tracking progres cursant
- [ ] Archive antrenamente (1040+)
- [ ] Video protection

### Faza 5: Testing & Launch (Săpt. 11-12)
- [ ] QA completa
- [ ] Security audit
- [ ] Migrare date
- [ ] Go Live

---

## TECH STACK RECOMANDAT

**Frontend**: Next.js 14 + Tailwind CSS  
**Backend**: Node.js (Express) sau Python (Django)  
**Database**: PostgreSQL (date existente) + Redis (cache)  
**Video**: Vimeo/Bunny CDN (protecție conținut)  
**Pagamento**: Stripe  
**Email**: SendGrid / Brevo  
**Notificații**: Telegram Bot API  
**Auth**: JWT + OAuth Google/Facebook  
**Hosting**: Vercel (frontend) + AWS/DigitalOcean (backend)

---
