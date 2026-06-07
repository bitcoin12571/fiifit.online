'use client';

import { CheckCircle, Play, Zap, Lock, Bell, BarChart3 } from 'lucide-react';

export default function WhyFiiFit() {
  const features = [
    {
      icon: Play,
      title: '24 Antrenamente Video',
      description: 'HD Quality. Fiecare antrenament durează 20-45 minute. Toate nivelurile de dificultate.',
    },
    {
      icon: Zap,
      title: 'Acces 24/7',
      description: 'Antrenează-te acasă, cu telefon sau calculator. Fără echipament necesar.',
    },
    {
      icon: Lock,
      title: 'Securitate Video',
      description: 'Videoclipurile sunt protejate. Nu pot fi descărcate sau copiate.',
    },
    {
      icon: Bell,
      title: 'Notificări Telegram',
      description: 'Remindere zilnice. Motivație din comunitate. Notificări cand sunt antrenamente noi.',
    },
    {
      icon: BarChart3,
      title: 'Tracker Progres',
      description: 'Urmărește care antrenamente ai completat. Medalii și motivație digitală.',
    },
    {
      icon: CheckCircle,
      title: 'Garanție 7 Zile',
      description: 'Dacă nu ești mulțumit în primele 7 zile, retur integral. Fără întrebări.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            ⚡ De Ce Să Alegi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">FiiFit</span>
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Accesibil, eficient, și centrat pe transformarea ta 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="p-8 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 border-2 border-emerald-300 shadow-lg">
                <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-800 font-semibold">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
