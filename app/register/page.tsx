'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [selectedPlanFromUrl, setSelectedPlanFromUrl] = useState<string | null>(null);

  const getPlanIdFromUrl = (urlParam: string | null) => {
    if (!urlParam) return '6months';
    if (urlParam.includes('3')) return '3months';
    if (urlParam.includes('6')) return '6months';
    if (urlParam.includes('12')) return '12months';
    return '6months';
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    plan: '6months',
    agreeTerms: false,
    cardNumber: '',
    cardHolder: '',
    cardExpiry: '',
    cardCVC: '',
  });

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam) {
      setSelectedPlanFromUrl(planParam);
      setFormData(prev => ({
        ...prev,
        plan: getPlanIdFromUrl(planParam)
      }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const plans = [
    { id: '3months', months: 3, price: 175, original: 233, discount: 25 },
    { id: '6months', months: 6, price: 275, original: 377, discount: 27 },
    { id: '12months', months: 12, price: 365, original: 521, discount: 30 },
  ];

  const selectedPlan = plans.find(p => p.id === formData.plan) || plans[1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validare
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setMessage({ type: 'error', text: 'Introduceți numele complet' });
      return;
    }
    if (!formData.email.includes('@')) {
      setMessage({ type: 'error', text: 'Email invalid' });
      return;
    }
    if (formData.password.length < 8) {
      setMessage({ type: 'error', text: 'Parola trebuie să aibă minimum 8 caractere' });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Parolele nu se potrivesc' });
      return;
    }
    if (!formData.agreeTerms) {
      setMessage({ type: 'error', text: 'Trebuie să acceptați termenii' });
      return;
    }
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
      setMessage({ type: 'error', text: 'Numărul cardului trebuie să aibă 16 cifre' });
      return;
    }
    if (!formData.cardHolder.trim()) {
      setMessage({ type: 'error', text: 'Introduceți titularul cardului' });
      return;
    }
    if (!formData.cardExpiry || !formData.cardExpiry.includes('/')) {
      setMessage({ type: 'error', text: 'Introduceți valabilitatea (MM/YY)' });
      return;
    }
    if (!formData.cardCVC || formData.cardCVC.length !== 3) {
      setMessage({ type: 'error', text: 'CVC trebuie să aibă 3 cifre' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          plan: formData.plan,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: 'error', text: data.error || 'Eroare la înregistrare' });
        return;
      }

      // Salvează user-ul în localStorage
      localStorage.setItem('fiififit_user', JSON.stringify({
        userId: data.userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        plan: formData.plan,
        sessionId: data.sessionId,
      }));

      // Redirecționare la plată
      const checkoutRes = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: formData.plan,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          userId: data.userId,
        }),
      });

      const checkoutData = await checkoutRes.json();
      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      } else {
        setMessage({ type: 'error', text: 'Eroare la crearea sesiunii de plată' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Eroare de conexiune' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Creează cont
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Înregistrează-te pentru a accesa programul tău de nutriție personalizat
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Messages */}
            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                {message.text}
              </div>
            )}

            {/* Personal Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informații personale</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prenume *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="ex: Ion"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="ex: Popescu"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: ion@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="ex: +40 700 000 000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Metodă de plată</h2>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Titularul cardului *
                </label>
                <input
                  type="text"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleChange}
                  placeholder="ex: ION POPESCU"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white uppercase"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Numărul cardului *
                </label>
                <input
                  type="password"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                    setFormData(prev => ({ ...prev, cardNumber: value }));
                  }}
                  placeholder="1234 xxx xxxx xxxx"
                  maxLength={19}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white tracking-widest"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Valabilitate (MM/YY) *
                  </label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '');
                      if (value.length >= 2) {
                        value = value.slice(0, 2) + '/' + value.slice(2, 4);
                      }
                      setFormData(prev => ({ ...prev, cardExpiry: value }));
                    }}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CVC *
                  </label>
                  <input
                    type="text"
                    name="cardCVC"
                    value={formData.cardCVC}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                      setFormData(prev => ({ ...prev, cardCVC: value }));
                    }}
                    placeholder="ex: 123"
                    maxLength={3}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Securitate</h2>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parolă *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 caractere"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">Trebuie să aibă minimum 8 caractere</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirmă parola *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repetă parola"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white"
                />
              </div>
            </div>

            {/* Plan Selection */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selectează planul</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map(plan => (
                  <label
                    key={plan.id}
                    className={`relative rounded-2xl cursor-pointer transition transform ${
                      formData.plan === plan.id && plan.id === '6months' ? 'md:scale-105' : ''
                    } ${
                      formData.plan === plan.id
                        ? plan.id === '6months'
                          ? 'bg-gradient-to-br from-green-50 to-cyan-50 border-3 border-cyan-500 shadow-xl'
                          : 'bg-white border-3 border-pink-600 shadow-lg'
                        : 'bg-white border-2 border-gray-200 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {plan.id === '6months' && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-cyan-500 text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-lg">
                          ⭐ Cel mai popular
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <input
                          type="radio"
                          name="plan"
                          value={plan.id}
                          checked={formData.plan === plan.id}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <p className="text-2xl font-bold text-gray-900">{plan.months} Luni</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-5xl font-bold text-pink-600 leading-tight">{plan.price}€</p>
                        <p className="text-sm text-gray-500 line-through mt-1">{plan.original}€</p>
                        <p className="text-sm text-green-600 font-bold mt-2">-{plan.discount}%</p>
                      </div>

                      <button
                        type="button"
                        className={`w-full py-3 rounded-lg font-bold transition mb-6 ${
                          formData.plan === plan.id
                            ? plan.id === '6months'
                              ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg'
                              : 'bg-pink-600 text-white hover:bg-pink-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        ✓ Selectat
                      </button>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-cyan-600 font-bold">✓</span>
                          <span>{plan.months * 30} zile acces complet</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-cyan-600 font-bold">✓</span>
                          <span>24 lecții video</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-cyan-600 font-bold">✓</span>
                          <span>1040+ antrenamente live</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-cyan-600 font-bold">✓</span>
                          <span>Suport 24/7</span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 cursor-pointer"
                required
              />
              <p className="text-sm text-gray-600">
                Sunt de acord cu{' '}
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

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-lg sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Rezumat</h3>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <p className="text-gray-600">Abonament {selectedPlan.months} luni</p>
                <div className="flex justify-between">
                  <span className="text-gray-600">Preț original</span>
                  <span className="text-gray-500 line-through">{selectedPlan.original}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 font-semibold">Reducere</span>
                  <span className="text-green-600 font-bold">-{selectedPlan.discount}%</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Total:</span>
                <span className="text-3xl font-bold text-pink-600">{selectedPlan.price}€</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-600 text-white py-4 rounded-lg font-bold hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Se procesează...' : 'Continuă la plată'}
              </button>

              <div className="mt-6 space-y-3 text-center text-sm text-gray-600">
                <p>🔒 Plată sigură și criptată</p>
                <p>✅ 7 zile garanție retur</p>
                <p>✅ Acces instant după plată</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
