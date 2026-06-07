'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function TransformariPage() {
  const [filter, setFilter] = useState('all');

  const transformations = [
    {
      id: 1,
      name: 'Natalia M.',
      loss: 21,
      category: '-20kg',
      image: 'N',
      quote: 'Am pierdut 21kg și m-am găsit pe mine din nou!',
    },
    {
      id: 2,
      name: 'Cristina D.',
      loss: 31,
      category: '-30kg',
      image: 'C',
      quote: 'Metodă științifică care funcționează într-adevăr.',
    },
    {
      id: 3,
      name: 'Galina T.',
      loss: 40,
      category: '-40kg',
      image: 'G',
      quote: 'Cea mai mare investiție în mine. Viața mea s-a schimbat.',
    },
    {
      id: 4,
      name: 'Maria C.',
      loss: 15,
      category: '-10kg',
      image: 'M',
      quote: 'Energia, dorința de a trăi... totul s-a întors!',
    },
    {
      id: 5,
      name: 'Elena V.',
      loss: 28,
      category: '-20kg',
      image: 'E',
      quote: 'Corpul meu m-a ascultat pentru prima dată.',
    },
    {
      id: 6,
      name: 'Sorina P.',
      loss: 35,
      category: '-30kg',
      image: 'S',
      quote: 'Nu credeam că este posibil fără diete de foame.',
    },
  ];

  const filters = [
    { value: 'all', label: 'Toate' },
    { value: '-10kg', label: '-10kg' },
    { value: '-20kg', label: '-20kg' },
    { value: '-30kg', label: '-30kg' },
    { value: '-40kg', label: '-40kg' },
  ];

  const filtered =
    filter === 'all'
      ? transformations
      : transformations.filter((t) => t.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Wall of Fame
          </h1>
          <p className="text-xl text-gray-600">
            Poveștile inspiratoare ale cursanților noștri
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Filter className="w-5 h-5 text-gray-600 inline mr-2" />
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === f.value
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">{person.image}</div>
                  <div className="text-2xl font-bold">-{person.loss}kg</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {person.name}
                </h3>
                <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {person.category}
                </span>
                <p className="text-gray-600 italic">"{person.quote}"</p>

                <button className="mt-4 text-pink-600 font-bold hover:text-pink-700">
                  Vezi povestea completă →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 bg-pink-600 text-white p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Vrei și tu o transformare?
          </h2>
          <p className="text-lg mb-6">
            Alătură-te programului și devino următoarea poveste de succes
          </p>
          <a
            href="/pricing"
            className="bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition inline-block"
          >
            Înscrie-te Acum
          </a>
        </div>
      </div>
    </div>
  );
}
