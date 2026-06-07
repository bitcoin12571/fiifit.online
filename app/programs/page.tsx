'use client';

import { useState, useEffect } from 'react';
import { LogOut, PlayCircle, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const userData = localStorage.getItem('fiififit_user');
    if (!userData) {
      window.location.href = '/login';
      return;
    }
    setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('fiififit_user');
    window.location.href = '/';
  };

  const programs = [
    {
      id: 1,
      title: 'HIIT Training - Nivel Începător',
      category: 'antrenament',
      duration: '30 min',
      difficulty: 'Ușor',
      image: '🔴',
      description: 'Antrenament intens cu pauze scurte',
    },
    {
      id: 2,
      title: 'Yoga pentru Flexibilitate',
      category: 'wellness',
      duration: '45 min',
      difficulty: 'Ușor',
      image: '🟣',
      description: 'Îmbunătățește flexibilitatea și echilibrul',
    },
    {
      id: 3,
      title: 'Forță Musculară - Ziua 1',
      category: 'antrenament',
      duration: '50 min',
      difficulty: 'Mediu',
      image: '🟠',
      description: 'Construire masă musculară cu greutăți',
    },
    {
      id: 4,
      title: 'Cardio Arzător de Calorii',
      category: 'cardio',
      duration: '40 min',
      difficulty: 'Greu',
      image: '🔥',
      description: 'Arde maxim de calorii în timp scurt',
    },
    {
      id: 5,
      title: 'Plan Nutriție - Săptămâna 1',
      category: 'nutriție',
      duration: '7 zile',
      difficulty: 'N/A',
      image: '🥗',
      description: 'Meniu echilibrat pentru pierdere în greutate',
    },
    {
      id: 6,
      title: 'Meditație Mindfulness',
      category: 'wellness',
      duration: '20 min',
      difficulty: 'Ușor',
      image: '🧘',
      description: 'Relaxare și reducerea stresului',
    },
    {
      id: 7,
      title: 'Forță Musculară - Ziua 2',
      category: 'antrenament',
      duration: '50 min',
      difficulty: 'Mediu',
      image: '💪',
      description: 'Exerciții pentru spate și bicepși',
    },
    {
      id: 8,
      title: 'Stretching Recovery',
      category: 'wellness',
      duration: '15 min',
      difficulty: 'Ușor',
      image: '🤸',
      description: 'Recuperare și prevenire leziuni',
    },
  ];

  const filtered = selectedCategory === 'all'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Toate', count: programs.length },
    { id: 'antrenament', label: '💪 Antrenamente', count: programs.filter(p => p.category === 'antrenament').length },
    { id: 'cardio', label: '🏃 Cardio', count: programs.filter(p => p.category === 'cardio').length },
    { id: 'nutriție', label: '🥗 Nutriție', count: programs.filter(p => p.category === 'nutriție').length },
    { id: 'wellness', label: '🧘 Wellness', count: programs.filter(p => p.category === 'wellness').length },
  ];

  if (!user) {
    return <div className="text-center text-2xl font-bold mt-10">Se încarcă...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/dashboard" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-2">
                ← Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Programe Antrenament 📺</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {cat.label} <span className="ml-2 text-xs opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(program => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-40 flex items-center justify-center text-6xl">
                {program.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>

                {/* Meta */}
                <div className="flex gap-4 mb-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-emerald-600" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap size={16} className="text-orange-600" />
                    {program.difficulty}
                  </div>
                </div>

                {/* Play Button */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <PlayCircle size={20} />
                  Vizionează Acum
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">Nu s-au găsit programe în această categorie</p>
          </div>
        )}
      </div>
    </div>
  );
}
