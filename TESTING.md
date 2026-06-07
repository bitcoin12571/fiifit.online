# 🧪 FiiFit Online - Testing Guide

## ✅ Pages to Test Locally

### 1. HOME PAGE (/)
```
npm run dev
Open: http://localhost:3000
```

✓ Hero section visible
✓ Impact stats (4500+, 50K+, 81%)
✓ "Why FiiFit" cards (6x)
✓ Founder story with -58kg
✓ Testimonials (3 cards)
✓ Pricing cards (3 planuri)
✓ All CTAs clickable
✓ Responsive on mobile

### 2. TRANSFORMĂRI (/transformari)
```
http://localhost:3000/transformari
```

✓ Title "Wall of Fame"
✓ Filter buttons (Toate, -10kg, -20kg, -30kg, -40kg)
✓ Filters work (6 cards visible)
✓ Each card: Avatar, loss, name, quote
✓ Mobile responsive

### 3. PRICING (/pricing)
```
http://localhost:3000/pricing
```

✓ 3 pricing cards visible
✓ "Cel mai popular" badge on 6-month
✓ 6-month card is larger (scale-105)
✓ Features checkmarks (✓)
✓ FAQ section (4 items)
✓ "Garanție 7 Zile" banner
✓ Bottom CTA "START ACUM"

### 4. MEDIA (/media)
```
http://localhost:3000/media
```

✓ Episode grid (4 podcast + video)
✓ Icons (🎙️ / 📺)
✓ Duration visible
✓ Newsletter subscription section
✓ Play button hover effect

### 5. LOGIN (/login)
```
http://localhost:3000/login
```

✓ Form centered
✓ Email + Password inputs
✓ "Conectare" button
✓ "Înscrie-te" link at bottom

### 6. CHECKOUT (/checkout)
```
http://localhost:3000/checkout
```

✓ Plan selector (3 options, 6-month selected)
✓ User info form (name, email, phone)
✓ Payment method placeholder
✓ Terms checkbox
✓ Order summary sidebar
✓ Price breakdown (original - discount = final)
✓ 7-day, instant access, 24/7 badges

### 7. TERMENI (/termeni)
```
http://localhost:3000/termeni
```

✓ All 8 sections visible
✓ Lists formatted
✓ Readable on mobile

### 8. CONFIDENȚIALITATE (/confidentialitate)
```
http://localhost:3000/confidentialitate
```

✓ All 9 sections
✓ Contact info (privacy@fiifit.online)
✓ GDPR compliant text

---

## 📱 Responsive Testing

On each page, test:

1. **Desktop (1920x1080)**
   - All elements visible
   - Grid layouts work
   - Fonts readable

2. **Tablet (768x1024)**
   - 2-column becomes 1
   - Buttons full width
   - Images scale properly

3. **Mobile (375x667)**
   - Menu becomes hamburger
   - Single column layout
   - Text readable
   - Buttons touchable

---

## 🎨 Visual Checks

- [ ] Colors match (Pink #EC4899, Rose #F43F5E)
- [ ] Fonts are Inter
- [ ] Shadows are subtle
- [ ] Rounded corners (rounded-lg/xl/2xl)
- [ ] Spacing consistent
- [ ] Hover states work
- [ ] No overflow text
- [ ] Images load

---

## 🔗 Navigation Checks

- [ ] Navbar links work (/, /transformari, /media, /login, /pricing)
- [ ] Logo goes home
- [ ] Footer links work
- [ ] CTAs go to correct pages
- [ ] Back navigation works

---

## ⚡ Performance

```bash
npm run build
npm run start
```

Check Lighthouse:
- [ ] Score 90+
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

---

## 🐛 Known Issues (To Fix)

- [ ] Stripe integration pending
- [ ] Email automation pending
- [ ] Database pending
- [ ] Video player integration pending
- [ ] Admin dashboard pending

---

## 📧 Testing Checklist

- [ ] All 8 pages accessible
- [ ] No 404 errors
- [ ] Mobile friendly
- [ ] Fast load times
- [ ] All links work
- [ ] Forms render
- [ ] Colors correct
- [ ] Text readable
- [ ] Images scale
- [ ] Buttons clickable

---

**Status**: Ready for Backend Integration
