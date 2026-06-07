'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: '3 Luni',
      duration: '120 zile',
      price: 175,
      originalPrice: 233,
      popular: false,
      discount: '-25%',
      features: [
        '120 zile acces + 1 lună cadou',
        '24 lecții video (Academia)',
        '1040+ antrenamente live',
        'Suport grup Telegram',
        'Resurse PDF (7-day menu)',
        'Email support standard',
      ],
    },
    {
      name: '6 Luni',
      duration: '180 zile',
      price: 275,
      originalPrice: 377,
      popular: true,
      discount: '-27%',
      features: [
        '180 zile acces complet',
        '24 lecții video (Academia)',
        '1040+ antrenamente live',
        'Suport grup Telegram',
        'Resurse PDF + meal planning',
        'Sesiune psiholog (1x)',
        '14 webinare FAQ interactive',
        'Priority email support',
        'Acces grup privat exclusiv',
      ],
    },
    {
      name: '12 Luni',
      duration: '365 zile',
      price: 365,
      originalPrice: 521,
      popular: false,
      discount: '-30%',
      features: [
        '365 zile acces (1 an complet)',
        '24 lecții video (Academia)',
        '1040+ antrenamente live',
        'Suport grup Telegram',
        'Resurse PDF + meal planning',
        'Sesiuni psiholog (4x)',
        '14 webinare FAQ + bonus content',
        'Priority email support (24h)',
        'Acces grup privat exclusiv',
        'Acces viață la noi lecții',
        'Coaching personalizat',
      ],
    },
  ];

  const faqItems = [
    {
      q: 'Pot cere retur după cumpărare?',
      a: 'Da! Avem garanție 7 zile. Dacă nu ești mulțumit, retur integral.',
    },
    {
      q: 'Acces de pe ce dispozitive?',
      a: 'De pe orice dispozitiv cu internet: telefon, tablă, calculator. Optimizat pentru mobil.',
    },
    {
      q: 'Sunt diferite lecții fiecare lună?',
      a: 'Lecțiile sunt permanente, dar adăugăm conținut nou lunar în program.',
    },
    {
      q: 'Cum funcționează suportul grup Telegram?',
      a: 'Verificări zilnice, sfaturi nutriție, și motivație de la echipă și ceilalți membri.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Investiție în Tine
            </h1>
            <p className="text-xl text-gray-600">
              Alege planul care se potrivește nevoilor tale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl transition ${
                  plan.popular
                    ? 'bg-white shadow-2xl ring-2 ring-pink-500 md:scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-600 text-white px-4 py-1 rounded-full font-bold text-sm">
                      Cel mai popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.duration}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <div>
                        <span className="text-5xl font-bold text-pink-600">
                          {plan.price}
                        </span>
                        <span className="text-2xl font-bold text-pink-600">€</span>
                      </div>
                      <span className="text-gray-400 line-through text-lg">
                        {plan.originalPrice}€
                      </span>
                    </div>
                    <span className="text-green-600 font-bold">{plan.discount}</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/register?plan=${plan.name.replace(' ', '').toLowerCase()}`}
                    className={`w-full py-3 rounded-lg font-bold transition block text-center mb-8 ${
                      plan.popular
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Înscrie-te Acum
                  </Link>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Money-back Guarantee */}
          <div className="mt-16 text-center bg-yellow-50 p-8 rounded-xl border border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              💯 Garanție 7 Zile - Bani Înapoi
            </h3>
            <p className="text-gray-600 text-lg">
              Nu ești mulțumit în primele 7 zile? Retur integral, fără întrebări.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Întrebări Frecvente
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Gata să-ți schimbi viața?
          </h2>
          <p className="text-xl mb-8">
            4500+ femei au pornit deja. Alătură-te comunității și devino cea mai bună versiune a ta.
          </p>
          <Link
            href="/register?plan=6luni"
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block text-lg"
          >
            START ACUM
          </Link>
        </div>
      </section>
    </div>
  );
}
