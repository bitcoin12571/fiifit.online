'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: '3 Luni',
      duration: '120 zile',
      price: 175,
      currency: '€',
      originalPrice: 233,
      discount: '-25%',
      popular: false,
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
      currency: '€',
      originalPrice: 377,
      discount: '-27%',
      popular: true,
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
      currency: '€',
      originalPrice: 521,
      discount: '-30%',
      popular: false,
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            💰 Alege <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Planul Tău</span>
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Simplificat și transparent. Fără costuri ascunse. ✅
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl transition transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-emerald-50 to-cyan-50 shadow-2xl ring-4 ring-emerald-400 scale-105'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-6 py-2 rounded-full font-black text-sm shadow-lg">
                    ⭐ Cel mai popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-700 mb-4 font-bold">{plan.duration}</p>

                {/* Price */}
                <div className="mb-6 bg-white/50 p-4 rounded-xl">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-lg font-bold text-gray-700">{plan.currency}</span>
                  </div>
                  <p className="text-xs text-gray-500 line-through mt-1">
                    {plan.originalPrice}{plan.currency}
                  </p>
                  <span className="text-sm font-black text-green-600 mt-2 inline-block">{plan.discount}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/register?plan=${plan.name.replace(' ', '').toLowerCase()}`}
                  className={`w-full py-4 rounded-xl font-black transition block text-center mb-8 text-lg transform hover:shadow-xl ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-white hover:shadow-2xl'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  🚀 Înscrie-te Acum
                </Link>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={20} className="text-emerald-500 flex-shrink-0 mt-1 font-black" />
                      <span className="text-gray-800 font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-100 to-cyan-100 p-10 rounded-2xl border-4 border-emerald-300 shadow-lg">
          <h3 className="text-3xl font-black text-gray-900 mb-3">
            ✅ Garanție 7 Zile
          </h3>
          <p className="text-lg font-bold text-gray-700">
            Nu ești mulțumit? Retur integral în 7 zile. Fără întrebări. 💯
          </p>
        </div>
      </div>
    </section>
  );
}
