'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex items-center justify-center py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full border-4 border-yellow-300 relative z-10">
        <h1 className="text-4xl font-black text-gray-900 mb-2 text-center">
          🔐 Conectare
        </h1>
        <p className="text-gray-700 text-center mb-8 font-semibold">
          Bun venit înapoi la FiiFit! 💪
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              📧 Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-semibold text-gray-900 placeholder-gray-400 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              🔑 Parolă
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-semibold text-gray-900 placeholder-gray-400 bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-black hover:shadow-lg transition transform hover:scale-105 text-lg"
          >
            🚀 Conectare
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6 font-semibold">
          Nu ai cont?{' '}
          <Link href="/pricing" className="text-orange-600 font-black hover:text-yellow-500">
            Înscrie-te Acum
          </Link>
        </p>
      </div>
    </div>
  );
}
