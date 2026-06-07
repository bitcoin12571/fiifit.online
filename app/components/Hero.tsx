'use client';

import Link from 'next/link';
import { Play, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[600px] bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 py-20 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              💪 Transform-ă-ți Corpul
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">în 24 de Antrenamente</span>
            </h1>
            <p className="text-2xl font-bold text-emerald-600 mb-2">
              Acces nelimitat. Rezultate dovedite. 🔥
            </p>
            <p className="text-lg text-gray-700 mb-8 font-semibold">
              Femeile din Moldova se transformă zilnic cu programul nostru
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 transition">
                <div className="text-4xl font-black text-emerald-600">4500+</div>
                <div className="text-sm font-bold text-gray-700">Femei active</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 transition">
                <div className="text-4xl font-black text-emerald-600">24</div>
                <div className="text-sm font-bold text-gray-700">Antrenamente</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 transition">
                <div className="text-4xl font-black text-emerald-600">81%</div>
                <div className="text-sm font-bold text-gray-700">Succes Rate</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-500" />
                <span className="text-gray-800 font-semibold">🎬 Video HD de înaltă calitate</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-500" />
                <span className="text-gray-800 font-semibold">✅ Progresul tău salvat automat</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-500" />
                <span className="text-gray-800 font-semibold">📱 Antrenează-te de acasă, anytime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl font-black text-lg text-center transition transform hover:scale-105">
                🚀 Alege Plan Acum
              </Link>
              <Link href="#results" className="border-4 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 font-black transition flex items-center justify-center gap-2 transform hover:scale-105">
                <Play size={20} />
                Vezi Rezultate
              </Link>
            </div>
          </div>

          {/* Right: Video Grid Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-3xl p-8 shadow-2xl border-4 border-emerald-300 transform hover:rotate-3 transition">
              <h3 className="font-black text-gray-900 mb-4 text-center text-2xl">⚡ 24 Antrenamente Intensive</h3>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="aspect-square bg-white rounded-xl flex items-center justify-center text-sm font-black text-emerald-600 hover:bg-emerald-100 transition transform hover:scale-120 shadow-md cursor-pointer">
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-base font-bold text-gray-800 text-center mt-6">
                🎯 Alege orice antrenament. Acces nelimitat. Oricând.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
