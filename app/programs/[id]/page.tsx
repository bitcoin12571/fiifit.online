'use client';

import { useState, useEffect } from 'react';
import { LogOut, ThumbsUp, Share2, Download } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VideoPage() {
  const [user, setUser] = useState<any>(null);
  const [progress, setProgress] = useState(45);
  const params = useParams();

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

  if (!user) {
    return <div className="text-center text-2xl font-bold mt-10">Se încarcă...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/programs" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              ← Înapoi la Programe
            </Link>
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
        {/* Video Player */}
        <div className="bg-black rounded-lg shadow-2xl overflow-hidden mb-6">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🎬</div>
              <p className="text-white text-2xl font-bold">Videoclip Placeholder</p>
              <p className="text-gray-400 mt-2">Aici va fi videoclipul tău...</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-900 px-4 py-2">
            <div className="bg-gray-700 rounded-full h-1 mb-2">
              <div
                className="bg-emerald-500 h-1 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-white text-xs">
              <span>{Math.floor(progress / 100 * 50)} min</span>
              <span>50 min</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                💪 HIIT Training - Nivel Începător
              </h1>

              <div className="flex gap-4 mb-6">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                  30 min
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                  Ușor
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  ~200 calorii
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Antrenament intens cu intervale scurte de odihnă. Perfect pentru începători care doresc să-și mărească rezistența cardiovasculară. Acest program include:
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✅ Încălzire (5 min)</li>
                <li>✅ 20 de exerciții HIIT (20 min)</li>
                <li>✅ Răcire și stretching (5 min)</li>
              </ul>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition flex-1">
                  <ThumbsUp size={20} />
                  Îmi Place
                </button>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex-1">
                  <Share2 size={20} />
                  Distribuie
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comentarii (8)</h2>

              {[1, 2, 3].map(i => (
                <div key={i} className="border-b pb-6 mb-6">
                  <div className="flex gap-4">
                    <div className="text-3xl">👤</div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">Utilizator {i}</p>
                      <p className="text-gray-600 text-sm mb-2">Acum 2 zile</p>
                      <p className="text-gray-700">
                        Antrenament perfect! M-a obosit cum trebuie și sunt sigur că o să vad rezultate.
                      </p>
                      <button className="text-emerald-600 font-semibold text-sm mt-2">👍 8 | Răspunde</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Progresul Tău</h3>
              <div className="text-center">
                <p className="text-4xl font-bold">{progress}%</p>
                <p className="text-sm text-emerald-100 mt-1">Completat</p>
              </div>
              <button className="w-full bg-white text-emerald-600 font-bold py-2 rounded-lg mt-4 hover:bg-emerald-50 transition">
                Continuă Vizionarea
              </button>
            </div>

            {/* Recommended */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Recomandate pentru Tine</h3>

              {[1, 2, 3].map(i => (
                <Link
                  key={i}
                  href="#"
                  className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg mb-3 transition"
                >
                  <p className="font-semibold text-gray-900 text-sm">Program {i}: Forță</p>
                  <p className="text-gray-600 text-xs mt-1">40 min • Mediu</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
