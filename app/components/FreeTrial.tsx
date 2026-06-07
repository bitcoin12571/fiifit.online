'use client';

import Link from 'next/link';

export default function FreeTrial() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-emerald-50 to-cyan-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-100 to-emerald-100 border-3 border-cyan-400 rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
            <span className="text-4xl">🎯</span>
            Următoarele rezultate ar putea fi ale tale! Încercă acum!
          </h2>

          <Link
            href="/register?plan=6luni"
            className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-black text-lg transition transform hover:scale-105 shadow-lg"
          >
            🚀 Începe Gratuit (7 Zile)
          </Link>

          <p className="text-sm text-gray-700 mt-6 font-semibold">
            ✅ Fără card de credit • ✅ Anulare oricând • ✅ Acces complet
          </p>
        </div>
      </div>
    </section>
  );
}
