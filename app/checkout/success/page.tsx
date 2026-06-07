'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Download, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // În production: fetch session details de la backend
      console.log('Session ID:', sessionId);
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Plată reușită! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Felicitări! Ți-ai activat cu succes programul FiiFit
          </p>
          <p className="text-gray-500">
            Confirmarea a fost trimisă la adresa ta de email
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ce ai primit:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-gray-900">Plan nutriție personalizat</p>
                <p className="text-sm text-gray-600">Adaptat pentru obiectivele tale</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏋️</span>
              <div>
                <p className="font-semibold text-gray-900">Program de antrenament</p>
                <p className="text-sm text-gray-600">Videouri și exerciții detaliate</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-gray-900">Suport 24/7</p>
                <p className="text-sm text-gray-600">Chat cu specialistul tău</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-gray-900">App mobile</p>
                <p className="text-sm text-gray-600">Acces instant pe telefon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Pași următori:</h3>
          <ol className="text-left space-y-3">
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
              <span className="text-gray-700">Accesează dashboard-ul tău</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
              <span className="text-gray-700">Descarcă aplicația mobilă</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
              <span className="text-gray-700">Completează evaluarea și planul tău personalizat va fi gata</span>
            </li>
          </ol>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/dashboard"
            className="bg-pink-600 text-white py-4 rounded-lg font-bold hover:bg-pink-700 transition flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            Intră în Dashboard
          </Link>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <Download size={20} />
            App iOS
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <Download size={20} />
            App Android
          </a>
        </div>

        {/* Support */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-3">Ai o întrebare?</p>
          <a
            href="mailto:support@fiiifit.ro"
            className="text-pink-600 font-bold hover:text-pink-700"
          >
            Contactează-ne pe support@fiiifit.ro
          </a>
        </div>
      </div>
    </div>
  );
}
