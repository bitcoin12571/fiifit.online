# 📋 SARCINA TEHNICĂ ACTUALIZATĂ - fiifitonline.ro

## VERSIUNE 2.0 - Platformă Fitness Accesibilă (Moldova)

---

## 1. CONCEPTUL PLATFORMEI

**Nume**: fiifitonline.ro  
**Țintă**: Femei din Moldova și diaspora (25-55 ani)  
**Produs Principal**: 24 videoclipuri de antrenament (fitness, nu expertiza)  
**Model**: Abonament lunar/anual la platformă video sigură  
**Foc**: Accesibilitate + Comunitate + Rezultate  

---

## 2. STRUCTURA SITE-ULI

### A. ZONA PUBLICĂ (Landing Page)

**Secțiuni**:
1. **Hero Section** 
   - Titlu: "24 Antrenamente Fitness - Acces Nelimitat"
   - Subtitle: "Femeile din Moldova se transformă zilnic"
   - CTA: "Înscrie-te Acum" → /pricing

2. **Social Proof (Rezultate)**
   - Carduri cu 6-8 testimoniale (fără nume real, anonime)
   - Ex: "Femeia 1: -21kg în 3 luni", "Femeia 2: -31kg"
   - Accent pe **rezultate**, nu pe metodă

3. **Beneficiile Antrenamentelor**
   - Tonus muscular
   - Energie crescută
   - Scădere greutate
   - Incredere în sine

4. **Cum Funcționează**
   - Pas 1: Înscrie-te
   - Pas 2: Selectează antrenament din 24
   - Pas 3: Urmărește progresul
   - Pas 4: Obții rezultate

5. **Pricing Table** (Simple & Low-Cost)
   - 1 Lună: 29 MDL / 1.5€
   - 3 Luni: 79 MDL / 4€
   - 12 Luni: 199 MDL / 10€
   - CTA: "Alege Plan"

6. **FAQ**
   - Care sunt sistemele de plată?
   - Pot descărca videoclipurile?
   - Cum dau cancel la abonament?
   - Ce pași urmez pentru a accesa cursurile?

---

### B. ZONA DE MEMBRI (Securizată - Login Required)

**Dashboard Principal**:
- Profilul utilizatoarei
- 24 Antrenamente (Grid View)
- Progres (% completat)
- Notificări Telegram

**Pagina Curs Fitness**:
- Player Video Securizat (No Download)
- Descriere antrenament
- Durata (min)
- Nivelul dificultății (Easy/Medium/Hard)
- Tracker progres

**Pagina Progres**:
- Antrenamente completate
- Statistici: X/24 finalizate
- Medalii/Badges (motivație)

---

## 3. SECURITATE VIDEO

### Implementare DRM:
1. **Vimeo On Demand** (cu DRM)
   - Anti-download protection
   - Watermark pe fiecare video
   - Tracking: cine a văzut, cât timp
   
2. **Restricții Player**:
   - Fără buton download
   - Fără right-click (copy protection)
   - Fără screen recording (dacă posibil)

3. **Database Tracking**:
   - user_id + video_id + viewed_at
   - Progresul salvat automat

---

## 4. TELEGRAM INTEGRATION

### Notificări Automate:
1. **Curs Debutat**
   - "Ai acces! Vizionează primul antrenament"

2. **Video Nou Disponibil**
   - "Antrenamentul #5 este acum disponibil!"
   
3. **Reminder Zilnic**
   - Ora 7:00: "Nu uita astăzi antrenamentul!"

4. **Milestone Celebrare**
   - "Felicitări! Ai completat 10/24 antrenamente!"

### Setup:
- Bot Token: [config]
- Group ID: [config]
- Webhook: `/api/telegram/notify`

---

## 5. TARIFICARE (ACCESIBILĂ)

| Plan | Preț MDL | Preț EUR | Acces |
|------|----------|----------|-------|
| 1 Lună | 29 | 1.5€ | 1 lună |
| 3 Luni | 79 | 4€ | 3 luni |
| 12 Luni | 199 | 10€ | 1 an |

**Plată**: Stripe / PayPal (Online)

---

## 6. TECH STACK

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 + TypeScript + Tailwind |
| Backend | Node.js + Express |
| Database | PostgreSQL + Redis |
| Video | Vimeo On Demand (DRM) |
| Auth | JWT + Firebase Auth |
| Payment | Stripe API |
| Notifications | Telegram Bot API |
| Hosting | Vercel (frontend) + AWS (backend) |

---

## 7. PAGINI SITE-ULI (FINAL)

| Pagină | URL | Status |
|--------|-----|--------|
| Home | / | Public |
| Pricing | /pricing | Public |
| Login | /login | Public |
| Signup | /signup | Public |
| Dashboard | /dashboard | Protected |
| Curs Fitness | /curs/:id | Protected |
| Profil | /profil | Protected |
| Termeni | /termeni | Public |
| Confidență | /confidentialitate | Public |

**NU MAI SUNT**:
- ❌ /transformari (Wall of Fame)
- ❌ /media (Podcast)
- ❌ /founder-story (Tanya Goncear)
- ❌ /contact

---

## 8. LEGAL (MOLDOVA)

### Entitate:
```
FiiFit Online SRL
Chișinău, Moldova
Cod Fiscal: [TBD]
```

### Documente:
- ✅ Termeni și Condiții (Digital Content)
- ✅ Politica Confidențialitate (GDPR)
- ✅ Politica Retur (7 zile)
- ✅ Disclaimer (Fitness, nu medical)

---

## 9. FLOW UTILIZATOR

```
1. User visit fiifitonline.ro
2. Vede landing page + results social proof
3. Scroll → Pricing
4. Click "Alege Plan" → /pricing
5. Select plan → "Continuă"
6. Click "Înscrie-te" → /signup
7. Form: email, password, name
8. Select payment method → Stripe
9. Pagamento successful
10. Email: "Account creat! Acces dashboard"
11. Redirect → /dashboard
12. Vede 24 antrenamente
13. Click video #1
14. Player securizat (no download)
15. Vede progres: 1/24
16. Primește notificare Telegram
17. Se întoarce zilele viitoare
18. Completează mai multe
19. Obține medalii
20. Share pe Telegram grup
```

---

## 10. INTEGRĂRI NECESARE

- [ ] Stripe Payments
- [ ] Vimeo API (Upload 24 videos)
- [ ] Firebase Authentication
- [ ] Telegram Bot API
- [ ] SendGrid (Email)
- [ ] PostgreSQL (Users + Progress)

---

## 11. METRICI URMĂRITE

| KPI | Target |
|-----|--------|
| New Users/Luna | 100+ |
| Conversion Rate | 5% |
| Retention (30-day) | 60% |
| Videos Watched (Avg) | 8/24 |
| Revenue/Luna | 500€+ |

---

## 12. FAZE DEZVOLTARE

**Faza 1** (2 săpt): Setup backend + DB  
**Faza 2** (2 săpt): Upload 24 videos + Vimeo integration  
**Faza 3** (1 săpt): Payment integration + Stripe  
**Faza 4** (1 săpt): Telegram Bot  
**Faza 5** (1 săpt): Testing + QA  
**Faza 6** (1 ziuă): Go Live!  

**Total**: 8 săptămâni

---

**Versiune**: 2.0  
**Data**: Iunie 2024  
**Status**: Ready for Dev
