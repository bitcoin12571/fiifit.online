# Setup Stripe Integration

## 1. Crează cont Stripe

1. Accesează [stripe.com](https://stripe.com)
2. Click pe "Sign Up" (în dreapta sus)
3. Completează formularul cu:
   - Email
   - Parolă
   - Nume complet
4. Verifică emailul
5. Acceptă termenii

## 2. Obține API Keys

1. Intră în Dashboard Stripe
2. Mergi la **Developers** → **API Keys**
3. Copie:
   - **Secret Key** (sk_test_...)
   - **Publishable Key** (pk_test_...)

## 3. Configurează Environment Variables

Crează fișier `.env.local`:

```
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_PUBLIC_KEY=pk_test_your_publishable_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4. Setup Webhook (Pentru producție)

1. În Stripe Dashboard, mergi la **Developers** → **Webhooks**
2. Click pe **Add endpoint**
3. Introdu URL-ul webhook: `https://your-domain.com/api/webhooks/stripe`
4. Selectează evenimentele:
   - `checkout.session.completed`
   - `checkout.session.expired`
   - `charge.refunded`
5. Copie webhook secret-ul și adaugă în `.env.local`:

```
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## 5. Testare Locală

### Card-uri de test Stripe

```
Card Success:      4242 4242 4242 4242
Card Declined:     4000 0000 0000 0002
Card 3D Secure:    4000 0025 0000 3155
```

Folosește:
- **Expiry:** Orice dată viitoare (ex: 12/25)
- **CVC:** Orice 3 cifre (ex: 123)

### Testare webhook localmente

Instalează Stripe CLI:

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows (PowerShell as Administrator)
choco install stripe-cli

# Linux
curl -s https://get.stripe.com/stripe-cli-sh | bash
```

Rulează:

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## 6. Deployare Producție

1. **Upgrade la Live Keys**
   - În Stripe Dashboard, switch din Test Mode în Live Mode
   - Copie Live keys (sk_live_... și pk_live_...)

2. **Update variabile de mediu în producție**
   - Adaugă pe hosting provider (Vercel, Heroku, etc.)

3. **Update webhook URL**
   - Stripe Dashboard → Webhooks → Adaugă endpoint cu URL-ul tău real

4. **Testare end-to-end**
   - Fă o plată reală cu o cărți de test
   - Verifica webhook events în Stripe Dashboard

## 7. Flux Complet

```
1. User merge la /register
   ↓
2. Completează form și selectează plan
   ↓
3. Click "Continuă la plată"
   ↓
4. POST /api/auth/register (crează user)
   ↓
5. Redirecționare la /checkout cu sessionId
   ↓
6. POST /api/checkout/create-session (crează Stripe session)
   ↓
7. Redirecționare pe Stripe Checkout
   ↓
8. User plătește
   ↓
9. Succes → /checkout/success
   ↓
10. Webhook /api/webhooks/stripe (actualizează status în DB)
   ↓
11. Trimitere email de confirmare
```

## 8. Verificare Status Plată

Stripe Dashboard → Payments → Puteți vedea toate tranzacțiile

## Troubleshooting

### "Webhook signature verification failed"
- Asigură-te că STRIPE_WEBHOOK_SECRET este corect
- Pentru local testing, folosește `stripe listen`

### "No such payment intent"
- Crează o nouă Checkout session (session-uri expiră după 24 ore)

### "Invalid API key"
- Verifică că folosești corect Secret Key (nu Publishable Key)
- Asigură-te că key-ul este în `.env.local`
