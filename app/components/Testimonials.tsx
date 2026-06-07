'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Utilizatoare 1',
      loss: '-21kg',
      image: '1',
      story: 'În 3 luni am pierdut 21kg. Antrenamentele sunt ușor de urmărit chiar și pentru începători.',
      rating: 5,
      time: '3 luni',
    },
    {
      name: 'Utilizatoare 2',
      loss: '-31kg',
      image: '2',
      story: 'Cea mai accesibilă platformă. Am făcut antrenamentele în casa mea, fără echipament scump.',
      rating: 5,
      time: '6 luni',
    },
    {
      name: 'Utilizatoare 3',
      loss: '-18kg',
      image: '3',
      story: 'Notificările Telegram m-au motivat să merg mai departe. Simț energia din nou!',
      rating: 5,
      time: '4 luni',
    },
    {
      name: 'Utilizatoare 4',
      loss: '-15kg',
      image: '4',
      story: 'Prețul este accesibil, calitatea antrenamentelor este excelentă. Merita 100%.',
      rating: 5,
      time: '3 luni',
    },
    {
      name: 'Utilizatoare 5',
      loss: '-25kg',
      image: '5',
      story: 'Cu 24 de antrenamente diferite, nu mi-e plictisitor niciodată. Recomand cald!',
      rating: 5,
      time: '5 luni',
    },
    {
      name: 'Utilizatoare 6',
      loss: '-19kg',
      image: '6',
      story: 'Rezultatele sunt reale. Am mai multă încredere în mine și simt mai bine fizic.',
      rating: 5,
      time: '4 luni',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            🏆 Rezultate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Reale</span>
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            4500+ femeile din Moldova obțin rezultate dovedite. Tu urmează! 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-gradient-to-br from-emerald-100 to-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-2 border-emerald-300">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-black mb-4 shadow-lg">
                👩
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              {/* Weight Loss + Time */}
              <div className="mb-4">
                <span className="text-4xl font-black text-emerald-600">{test.loss}</span>
                <p className="text-sm font-bold text-gray-700">⏱️ În {test.time}</p>
              </div>

              {/* Story */}
              <p className="text-gray-800 italic mb-4 font-semibold">"{test.story}"</p>

              {/* Badge */}
              <div className="inline-block bg-white px-4 py-2 rounded-full text-xs font-black text-emerald-600 border-2 border-emerald-300 shadow-sm">
                ✓ Verificat 100%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
