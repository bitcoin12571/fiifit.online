'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 border-t-4 border-emerald-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              💪 FiiFit
            </h3>
            <p className="text-gray-300 mt-3 font-semibold">
              Transformare feminină prin antrenament și nutriție
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black mb-4 text-emerald-300">Platformă</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/dashboard" className="hover:text-emerald-300 font-semibold transition">Dashboard</Link></li>
              <li><Link href="/academy" className="hover:text-emerald-300 font-semibold transition">Academia</Link></li>
              <li><Link href="/workouts" className="hover:text-emerald-300 font-semibold transition">Antrenamente</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black mb-4 text-emerald-300">Companie</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/despre" className="hover:text-emerald-300 font-semibold transition">Despre noi</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-300 font-semibold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black mb-4 text-emerald-300">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/termeni" className="hover:text-emerald-300 font-semibold transition">Termeni și Condiții</Link></li>
              <li><Link href="/confidentialitate" className="hover:text-emerald-300 font-semibold transition">Politica Confidențialitate</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left mb-6">
            <div className="text-sm text-gray-400">
              <p className="font-bold text-emerald-300 mb-1">🏢 Company</p>
              <p>Fiifit club online LLC</p>
              <p>30 N GOULD ST STE N</p>
              <p>SHERIDAN, WY 82801</p>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-bold text-emerald-300 mb-1">🆔 EIN</p>
              <p>37-2077501</p>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-bold text-emerald-300 mb-1">📧 Contact</p>
              <p><a href="mailto:fiifitonline@gmail.com" className="hover:text-emerald-300">fiifitonline@gmail.com</a></p>
            </div>
          </div>
          <p className="text-center text-gray-400 font-semibold">
            © 2024-2026 FiiFit Online SRL. Toate drepturile rezervate. ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
