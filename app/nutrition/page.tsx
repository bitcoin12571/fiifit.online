'use client';

import { useState, useEffect } from 'react';
import { LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function NutritionPage() {
  const [user, setUser] = useState<any>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

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

  const weekMeals = [
    {
      day: 'Luni',
      date: '10 Jun',
      meals: [
        {
          name: 'Mic dejun',
          time: '08:00',
          dishes: ['Omletă cu legume', 'Pâine integrală', 'Suc de portocale'],
          calories: 350,
        },
        {
          name: 'Mic dejun 2',
          time: '10:30',
          dishes: ['Măr', 'Iogurt grecesc'],
          calories: 180,
        },
        {
          name: 'Prânz',
          time: '13:00',
          dishes: ['Piept de pui grătar', 'Orez integral', 'Salată verde'],
          calories: 650,
        },
        {
          name: 'Gustare',
          time: '16:00',
          dishes: ['Caju', 'Apă cu lămaie'],
          calories: 150,
        },
        {
          name: 'Cină',
          time: '19:00',
          dishes: ['Somon la cuptor', 'Legume fierte', 'Cartofi dulci'],
          calories: 550,
        },
      ],
      totalCalories: 1880,
    },
    {
      day: 'Marți',
      date: '11 Jun',
      meals: [
        {
          name: 'Mic dejun',
          time: '08:00',
          dishes: ['Porridge cu fructe', 'Miere', 'Lapte'],
          calories: 380,
        },
        {
          name: 'Mic dejun 2',
          time: '10:30',
          dishes: ['Banana', 'Migdale'],
          calories: 200,
        },
        {
          name: 'Prânz',
          time: '13:00',
          dishes: ['Pește alb', 'Morcov', 'Salată de sfeclă'],
          calories: 600,
        },
        {
          name: 'Gustare',
          time: '16:00',
          dishes: ['Brânză de vaci', 'Cireșe'],
          calories: 160,
        },
        {
          name: 'Cină',
          time: '19:00',
          dishes: ['Pui cu ciuperci', 'Broccoli', 'Orez'],
          calories: 520,
        },
      ],
      totalCalories: 1860,
    },
    {
      day: 'Miercuri',
      date: '12 Jun',
      meals: [
        {
          name: 'Mic dejun',
          time: '08:00',
          dishes: ['Omletă cu brânză', 'Rosii', 'Pâine neagră'],
          calories: 340,
        },
        {
          name: 'Mic dejun 2',
          time: '10:30',
          dishes: ['Ananas', 'Coconut bars'],
          calories: 190,
        },
        {
          name: 'Prânz',
          time: '13:00',
          dishes: ['Mâncare de casă cu carne', 'Tarhon', 'Pâine'],
          calories: 680,
        },
        {
          name: 'Gustare',
          time: '16:00',
          dishes: ['Nuts mix', 'Apă de cocos'],
          calories: 170,
        },
        {
          name: 'Cină',
          time: '19:00',
          dishes: ['Pastă integrală', 'Sos de rosii', 'Salată'],
          calories: 540,
        },
      ],
      totalCalories: 1920,
    },
  ];

  if (!user) {
    return <div className="text-center text-2xl font-bold mt-10">Se încarcă...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              ← Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Plan Nutriție 🥗</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Planul tău nutrițional pentru această săptămână</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-emerald-100 text-sm">Calorii zilnice țintă</p>
              <p className="text-3xl font-bold">~1900</p>
            </div>
            <div>
              <p className="text-emerald-100 text-sm">Proteina (g/zi)</p>
              <p className="text-3xl font-bold">120-150</p>
            </div>
            <div>
              <p className="text-emerald-100 text-sm">Macronutrienți</p>
              <p className="text-sm">Echilibrați pentru pierdere greutate</p>
            </div>
          </div>
        </div>

        {/* Days */}
        <div className="space-y-4">
          {weekMeals.map((day, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Day Header */}
              <button
                onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">{day.day} - {day.date}</h3>
                  <p className="text-sm text-gray-600">Total: {day.totalCalories} calorii</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-emerald-600 transition transform ${expandedDay === idx ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Meals */}
              {expandedDay === idx && (
                <div className="border-t">
                  {day.meals.map((meal, mealIdx) => (
                    <div key={mealIdx} className="border-b last:border-b-0 p-6 bg-gray-50 hover:bg-gray-100 transition">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{meal.name}</h4>
                          <p className="text-sm text-gray-600">{meal.time}</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold text-sm">
                          {meal.calories} kcal
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {meal.dishes.map((dish, dishIdx) => (
                          <span
                            key={dishIdx}
                            className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                          >
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Sfaturi Nutriție</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Bea 2-3 litri de apă pe zi</li>
            <li>✅ Evită mâncărurile prăjite și cu calorii goale</li>
            <li>✅ Mânânc lent și mastică bine</li>
            <li>✅ Mânânc legume colorate în fiecare zi</li>
            <li>✅ Nu sări prânzul - este mâncare principală!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
