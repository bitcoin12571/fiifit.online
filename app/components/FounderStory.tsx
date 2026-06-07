'use client';

import { Award, Users, BookOpen } from 'lucide-react';

export default function FounderStory() {
  const credentials = [
    {
      icon: Award,
      title: 'Nutriționist Certificat',
      description: 'Certificare internațională în nutriție aplicată și metabolismul umân',
    },
    {
      icon: Users,
      title: '10+ Ani Experiență',
      description: 'Peste 10 ani de lucru cu femei și transformări dovedite',
    },
    {
      icon: BookOpen,
      title: 'Cercetare Științifică',
      description: 'Bază metodă pe studii peer-reviewed despre chimie și nutriție',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-100 to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            🏅 Autoritate & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Certificări</span>
          </h2>
          <p className="text-xl text-gray-800 font-semibold">
            Echipă de experți cu credibilitate dovedită 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-emerald-300">
                <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {cred.title}
                </h3>
                <p className="text-gray-800 font-semibold">
                  {cred.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl border-4 border-emerald-300">
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
            ✨ De Ce Să Ai Încredere în <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">FiiFit</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-200 to-cyan-200 text-emerald-700 font-black">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-lg">🎯 Metodă Dovedită</h4>
                <p className="text-gray-700 font-semibold">Bazată pe chimie și nutriție, nu pe modă</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-200 to-cyan-200 text-emerald-700 font-black">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-lg">👥 4500+ Femei Transformate</h4>
                <p className="text-gray-700 font-semibold">Rezultate reale din comunitate</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-200 to-cyan-200 text-emerald-700 font-black">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-lg">🌙 Suport 24/7</h4>
                <p className="text-gray-700 font-semibold">Echipă dedicată pentru fiecare cursantă</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-200 to-cyan-200 text-emerald-700 font-black">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-lg">💯 Garanție 7 Zile</h4>
                <p className="text-gray-700 font-semibold">Retur integral dacă nu ești mulțumit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
