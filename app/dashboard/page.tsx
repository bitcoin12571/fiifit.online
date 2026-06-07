'use client';

import { useState, useEffect } from 'react';
import { LogOut, PlayCircle, Clock, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica dacă user e logat (din localStorage)
    const userData = localStorage.getItem('fiififit_user');
    if (!userData) {
      window.location.href = '/login';
      return;
    }
    setUser(JSON.parse(userData));
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('fiififit_user');
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-2xl font-bold text-gray-900">Se încarcă...</p>
      </div>
    );
  }

  const stats = [
    { label: 'Zile în Program', value: Math.floor(Math.random() * 30) + 1, icon: '📅', color: 'from-blue-400 to-blue-600' },
    { label: 'Antrenamente Completate', value: Math.floor(Math.random() * 15) + 1, icon: '💪', color: 'from-emerald-400 to-emerald-600' },
    { label: 'Calorii Arse', value: Math.floor(Math.random() * 5000) + 1000, icon: '🔥', color: 'from-orange-400 to-orange-600' },
    { label: 'Ore de Antrenament', value: (Math.random() * 20 + 5).toFixed(1), icon: '⏱️', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bine ai venit, {user?.firstName}! 🎯
              </h1>
              <p className="text-gray-600 mt-1">Plan: <span className="font-bold text-emerald-600">{user?.plan}</span></p>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-lg shadow-lg`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-sm opacity-90 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Featured Program */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">🏆 Program Săptămânal</h2>
                <p className="text-emerald-100">Completeaza 5 antrenamente pentru a debloca badge-ul săptămânii</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold">3/5</p>
                <p className="text-sm text-emerald-100">Progres</p>
              </div>
            </div>
            <div className="mt-6 bg-white bg-opacity-20 rounded-full h-3">
              <div className="bg-white h-3 rounded-full transition-all" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/programs"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          >
            <div className="text-5xl mb-4">📺</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Programe Antrenament</h3>
            <p className="text-gray-600 mb-4">20+ programe personalizate</p>
            <span className="text-emerald-600 font-bold">Vizitează →</span>
          </Link>

          <Link
            href="/nutrition"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          >
            <div className="text-5xl mb-4">🥗</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Planuri Nutriție</h3>
            <p className="text-gray-600 mb-4">Meniuri zilnice personalizate</p>
            <span className="text-emerald-600 font-bold">Vizitează →</span>
          </Link>

          <Link
            href="/progress"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          >
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Progresul Meu</h3>
            <p className="text-gray-600 mb-4">Monitorizează rezultatele</p>
            <span className="text-emerald-600 font-bold">Vizitează →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
