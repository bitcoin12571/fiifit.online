'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-emerald-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              💪 FiiFit
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-emerald-500 font-bold transition transform hover:scale-105">
              Acasă
            </Link>
            <Link href="/transformari" className="text-gray-800 hover:text-emerald-500 font-bold transition transform hover:scale-105">
              Transformări
            </Link>
            <Link href="/media" className="text-gray-800 hover:text-emerald-500 font-bold transition transform hover:scale-105">
              Media
            </Link>
            <Link href="/login" className="text-gray-800 hover:text-emerald-500 font-bold transition transform hover:scale-105">
              Conectare
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-pink-600 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg font-bold transform hover:scale-105">
              🔥 Înscrie-te Acum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-emerald-500 hover:text-cyan-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-emerald-50 rounded-lg p-4">
            <Link href="/" className="block text-gray-800 hover:text-emerald-600 py-2 font-bold">
              Acasă
            </Link>
            <Link href="/transformari" className="block text-gray-800 hover:text-emerald-600 py-2 font-bold">
              Transformări
            </Link>
            <Link href="/media" className="block text-gray-800 hover:text-emerald-600 py-2 font-bold">
              Media
            </Link>
            <Link href="/login" className="block text-gray-800 hover:text-emerald-600 py-2 font-bold">
              Conectare
            </Link>
            <Link href="/register" className="block bg-gradient-to-r from-pink-600 to-red-500 text-white px-4 py-3 rounded-lg font-bold text-center">
              🔥 Înscrie-te Acum
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
