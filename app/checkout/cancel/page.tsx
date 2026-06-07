'use client';

import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Plata a fost anulată
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Tranzacția nu a fost completată
          </p>
          <p className="text-gray-500">
            Nu ți-a fost debitată nicio sumă
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Ce s-a întâmplat?
          </h2>
          <p className="text-gray-600 mb-6">
            Ai anulat plata sau sesiunea a expirat. Nicio problemă - poți încerca din nou oricând.
          </p>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
            <p className="text-sm text-amber-800">
              💡 <strong>Sfat:</strong> Dacă ai întâlnit o problemă cu plata, încearcă cu o altă cărți de credit sau metodă de plată.
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/register"
            className="bg-pink-600 text-white py-4 rounded-lg font-bold hover:bg-pink-700 transition"
          >
            Încearcă din nou
          </Link>

          <a
            href="mailto:support@fiiifit.ro"
            className="bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Contactează suportul
          </a>
        </div>

        {/* FAQ */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Întrebări frecvente
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Se antes bani din cont?</p>
              <p className="text-gray-600 text-sm">Nu. Ai anulat plata, deci nicio tranzacție nu a fost procesată.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Cum plătesc în siguranță?</p>
              <p className="text-gray-600 text-sm">Folosim Stripe, una din cele mai sigure platforme de plată din lume. Datele tale de card nu sunt stocate pe serverele noastre.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Care sunt metodele acceptate?</p>
              <p className="text-gray-600 text-sm">Acceptăm toate cardurile major (Visa, Mastercard, American Express) și alte metode de plată locale.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">Ai nevoie de ajutor?</p>
          <p>
            Email: <a href="mailto:support@fiiifit.ro" className="text-pink-600 font-bold">support@fiiifit.ro</a>
          </p>
          <p>
            Telefon: <a href="tel:+40700000000" className="text-pink-600 font-bold">+40 700 000 000</a>
          </p>
        </div>
      </div>
    </div>
  );
}
