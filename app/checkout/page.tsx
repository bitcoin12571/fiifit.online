'use client';

import { ShoppingCart, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Finalizează Cumpărarea
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2">
            {/* Plan Selection */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Selectează planul
              </h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 border-2 border-pink-600 rounded-lg cursor-pointer bg-pink-50">
                  <input type="radio" name="plan" defaultChecked className="mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">6 Luni</p>
                    <p className="text-gray-600">275€ (Cel mai popular)</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-pink-200">
                  <input type="radio" name="plan" className="mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">3 Luni</p>
                    <p className="text-gray-600">175€</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-pink-200">
                  <input type="radio" name="plan" className="mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">12 Luni</p>
                    <p className="text-gray-600">365€</p>
                  </div>
                </label>
              </div>
            </div>

            {/* User Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Date personale
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nume complet"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Metodă de plată
              </h2>
              <p className="text-gray-600 mb-6">
                Securizat prin Stripe. Your payment is safe and encrypted.
              </p>
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50">
                <p className="text-gray-700 text-center">
                  Integrare Stripe Checkout
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" defaultChecked />
              <p className="text-sm text-gray-600">
                Am citit și accept{' '}
                <Link href="/termeni" className="text-pink-600 font-bold hover:text-pink-700">
                  Termenii și Condițiile
                </Link>{' '}
                și{' '}
                <Link href="/confidentialitate" className="text-pink-600 font-bold hover:text-pink-700">
                  Politica Confidențialității
                </Link>
              </p>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-lg sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Rezumat Comandă
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Abonament 6 luni</span>
                  <span className="font-bold">275€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reducere -27%</span>
                  <span className="text-green-600 font-bold">-75€</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="text-3xl font-bold text-pink-600">275€</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-2 mb-6">
                <Lock className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-700">
                  Plată sigură și criptată
                </p>
              </div>

              <button className="w-full bg-pink-600 text-white py-4 rounded-lg font-bold hover:bg-pink-700 transition flex items-center justify-center gap-2 text-lg">
                <ShoppingCart size={20} />
                Continuă plata
              </button>

              {/* Guarantees */}
              <div className="mt-6 space-y-3 text-center text-sm text-gray-600">
                <p>✅ 7 zile garanție retur</p>
                <p>✅ Acces instant după plată</p>
                <p>✅ Suport 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
