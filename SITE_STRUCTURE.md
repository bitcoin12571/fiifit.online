# 📐 FiiFit Online - Site Structure

## 🎯 Prezentare Generală

**FiiFit Online** este o platformă digitală premium de transformare feminină.  
**Status**: MVP Frontend Live ✅  
**Tech**: Next.js 14 + TypeScript + Tailwind CSS  
**Hosting**: Vercel-ready

---

## 🗂️ Structura Completă

```
FiiFit Online/
│
├── 📄 app/
│   │
│   ├── 📄 page.tsx                    [HOME - Landing Page]
│   │   └── Components: Hero, WhyFiiFit, FounderStory, Testimonials, Pricing
│   │
│   ├── 🎨 components/
│   │   ├── Navbar.tsx                 [Header]
│   │   ├── Footer.tsx                 [Footer]
│   │   ├── Hero.tsx                   [Hero Section cu video]
│   │   ├── WhyFiiFit.tsx              [6 Feature Cards]
│   │   ├── FounderStory.tsx           [Tanya -58kg]
│   │   ├── Testimonials.tsx           [Wall of Fame - 3 stories]
│   │   └── Pricing.tsx                [3 Pricing Plans]
│   │
│   ├── 💪 transformari/
│   │   └── page.tsx                   [WALL OF FAME - Filtru -10kg/-20kg/-40kg]
│   │
│   ├── 💳 pricing/
│   │   └── page.tsx                   [PRICING DETAIL - 3 planuri + FAQ]
│   │
│   ├── 📺 media/
│   │   └── page.tsx                   [PODCAST & VIDEO - 4 episode cards]
│   │
│   ├── 🔐 login/
│   │   └── page.tsx                   [LOGIN FORM]
│   │
│   ├── 🛒 checkout/
│   │   └── page.tsx                   [CHECKOUT - Plan select + Payment]
│   │
│   ├── ⚖️ termeni/
│   │   └── page.tsx                   [TERMENI ȘI CONDIȚII - Legal text]
│   │
│   ├── 🔒 confidentialitate/
│   │   └── page.tsx                   [POLITICA GDPR - Data privacy]
│   │
│   ├── layout.tsx                     [ROOT LAYOUT - Navbar + Footer]
│   └── globals.css                    [Tailwind styles]
│
├── 📚 docs/
│   ├── PLAN_90_ZILE.md               [Planning document]
│   ├── FiiFit_Legal_Moldova.md       [Legal templates]
│   └── FiiFit_Plan_Realizare.md      [Initial spec]
│
├── 📄 README.md                       [Project overview]
├── 📄 SITE_STRUCTURE.md               [This file]
├── 📦 package.json                    [Dependencies]
├── 📦 tsconfig.json                   [TypeScript config]
└── 🎨 tailwind.config.ts              [Tailwind config]
```

---

## 📊 Pagini și Funcționalități

### 1️⃣ **HOME** `/`
- **Hero Section**: Video Tanya + CTA "Înscrie-te"
- **Impact Stats**: 4500+ femei, 50K+ kg, 81% succes
- **Why FiiFit**: 6 feature cards
- **Founder Story**: -58kg transformation
- **Testimonials**: 3 success stories
- **Pricing Preview**: 3 planuri
- **CTA Buttons**: "Înscrie-te Acum", "Vezi Video"

### 2️⃣ **TRANSFORMĂRI** `/transformari`
- **Filter Buttons**: Toate, -10kg, -20kg, -30kg, -40kg
- **Grid Cards**: 6+ member stories
- **Each Card**: Avatar initial, -Xkg loss, quote, "See full story"
- **CTA Bottom**: "Vrei și tu o transformare?"

### 3️⃣ **PRICING** `/pricing`
- **3 Plan Cards**: 3mo / 6mo⭐ / 12mo
- **Each Card**: Price, features checklist, CTA button
- **Popular Badge**: On 6-month plan
- **FAQ Section**: 4 Q&A items
- **Money-back Guarantee**: 7-day promise
- **CTA Bottom**: "Start Acum"

### 4️⃣ **MEDIA** `/media`
- **Episode Grid**: Podcast (4x) + Video (1x)
- **Each Card**: Icon (🎙️/📺), title, duration, description
- **Newsletter CTA**: Email subscription
- **Player Ready**: (Integration pending)

### 5️⃣ **LOGIN** `/login`
- **Simple Form**: Email + Password
- **Submit Button**: "Conectare"
- **Signup Link**: "Nu ai cont? Înscrie-te"
- **Styling**: Centered, rounded, shadow

### 6️⃣ **CHECKOUT** `/checkout`
- **Left Side**: 
  - Plan selector (3 options)
  - User info (name, email, phone)
  - Payment method
  - Terms checkbox
- **Right Sidebar**:
  - Order summary
  - Price breakdown
  - Security badge
  - Guarantees (7-day, instant access, 24/7)

### 7️⃣ **TERMENI** `/termeni`
- Definiții (Servicii, Utilizator, Conținut)
- Drepturi și responsabilități
- Limitări responsabilitate
- Anulare & Refund (7 zile)
- Protecția conținutului
- Legea aplicabilă (Moldova)

### 8️⃣ **CONFIDENȚIALITATE** `/confidentialitate`
- Date colectate
- Scopuri prelucrare
- Drepturile utilizatorului (GDPR)
- Perioada păstrării datelor
- Securitate măsuri
- Contact DPO
- GDPR compliant

---

## 🎨 Design System

### Colors
- **Primary Pink**: #EC4899
- **Secondary Rose**: #F43F5E
- **Success Green**: #10B981
- **Background White**: #FFFFFF
- **Soft Pink**: #FDF2F8 (bg-pink-50)
- **Dark Gray**: #111827 (text-gray-900)

### Typography
- **Font**: Inter (Google Fonts)
- **H1**: 3rem-3.75rem Bold
- **H2**: 2rem Bold
- **H3**: 1.5rem Bold
- **Body**: 1rem Regular
- **Small**: 0.875rem Regular

### Components
- Hero Section (2-col grid)
- Feature Cards (CheckCircle icon)
- Testimonial Cards (Avatar + quote)
- Pricing Cards (Popular badge)
- Button Styles (Primary/Secondary)
- FAQ Items
- Input Forms

---

## 🔗 Navigation Map

```
Navbar (Sticky):
├── Logo "FiiFit" → /
├── Acasă → /
├── Transformări → /transformari
├── Media → /media
├── Conectare → /login
└── Înscrie-te CTA → /pricing

Footer:
├── Brand
├── Platformă
│   ├── Dashboard
│   ├── Academia
│   ├── Antrenamente
├── Companie
│   ├── Despre noi
│   ├── Contact
│   ├── Blog
└── Legal
    ├── Termeni
    ├── Confidențialitate
    └── Contact Legal
```

---

## 📊 Component Hierarchy

```
RootLayout
├── Navbar
├── Page Content
│   ├── Hero (home)
│   ├── WhyFiiFit (home)
│   ├── FounderStory (home)
│   ├── Testimonials (home)
│   ├── Pricing (home)
│   └── [other page content]
└── Footer
```

---

## 🚀 Live URLs

**Development**: http://localhost:3000  
**Build**: `npm run build`  
**Vercel**: (Ready to deploy)

---

## 📝 Content Matrix

| Page | Title | Hero | CTA | Meta |
|------|-------|------|-----|------|
| Home | FiiFit Online | Video | Înscrie-te | 4500+, 81% |
| Transformări | Wall of Fame | Filter | Vezi povestea | 6 stories |
| Pricing | Investiție în Tine | 3 Plans | START ACUM | 7-day guarantee |
| Media | Media & Podcast | Episodes | Subscribe | 4+ episodes |
| Login | Conectare | Form | Conectare | Simple |
| Checkout | Finalizează | Plan Select | Continuă | Summary |
| Termeni | Termeni | Legal | Accept | 8 sections |
| Confidență | Politica GDPR | Legal | Email | 9 sections |

---

## 🔄 Workflow

1. **User lands on home** → Sees hero + impact stats
2. **Scrolls down** → Learns "Why FiiFit" + sees founder story
3. **Sees testimonials** → Inspired by transformations
4. **Views pricing** → Selects 6-month plan (popular)
5. **Clicks "Înscrie-te"** → Redirected to `/pricing`
6. **Clicks "Continuă"** → Goes to `/checkout`
7. **Fills form** → Stripe payment (ready to integrate)
8. **After payment** → Email with access link
9. **Can now see** → `/dashboard` (pending build)

---

## ✅ Implementation Checklist

- [x] Next.js 14 setup
- [x] TypeScript config
- [x] Tailwind CSS
- [x] Navbar & Footer
- [x] All 8 pages
- [x] Components (7x)
- [x] Responsive design
- [x] Lucide icons
- [x] Build passes
- [ ] Stripe integration
- [ ] SendGrid setup
- [ ] Database schema
- [ ] LMS dashboard
- [ ] Admin panel

---

## 🎯 Next Steps

1. **Backend Setup** (Faza 2)
   - Express + PostgreSQL
   - Stripe webhooks
   - Email automation

2. **LMS Build** (Faza 3)
   - Vimeo integration
   - Lesson tracking
   - Member dashboard

3. **Testing** (Faza 4)
   - QA testing
   - Security audit
   - Performance tuning

4. **Launch** (Faza 5)
   - Deploy to Vercel
   - Go-live prep
   - Marketing campaign

---

**Version**: 1.0  
**Status**: ✅ MVP Complete  
**Last Updated**: Iunie 2024  
**Created by**: Claude AI
