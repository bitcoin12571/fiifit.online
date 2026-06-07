'use client';

export default function Antrenamente() {
  const workoutCategories = [
    {
      title: 'Upper Body',
      description: 'Antrenamente focus pe brațe, umeri și piept pentru o siluetă frumoasă.',
      icon: '💪',
      difficulty: 'Intermediar'
    },
    {
      title: 'Lower Body',
      description: 'Construiești picioare puternice și un posterior impresionant.',
      icon: '🦵',
      difficulty: 'Intermediar'
    },
    {
      title: 'Full Body',
      description: 'Antrenamente complete care activează toți grupurile musculare.',
      icon: '🔥',
      difficulty: 'Avansat'
    },
    {
      title: 'Cardio & Core',
      description: 'Arde calorii și consolidează abdomenele cu antrenamente dinamice.',
      icon: '❤️',
      difficulty: 'Începător'
    },
    {
      title: 'Flexibility & Mobility',
      description: 'Îmbunătățește flexibilitatea și previne rănile cu antrenamente dedicate.',
      icon: '🧘',
      difficulty: 'Începător'
    },
    {
      title: 'HIIT Training',
      description: 'Antrenamente intense, scurte dar foarte eficiente pentru rezultate rapide.',
      icon: '⚡',
      difficulty: 'Avansat'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-4">
            Antrenamente FiiFit
          </h1>
          <p className="text-xl text-gray-300">Programe structurate pentru fiecare nivel și scop</p>
        </div>

        {/* Intro */}
        <section className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Toate antrenamentele noastre sunt proiectate de antrenori profesioniști și adaptate pentru femeile care doresc rezultate reale.
            De la videoclipuri cu instrucțiuni pas-cu-pas la planuri de antrenament pe termen lung, avem tot ceea ce-ți trebuie.
          </p>
        </section>

        {/* Workout Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-8">🏋️ Tipuri de Antrenamente</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workoutCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20 hover:border-emerald-400/50 transition"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-black text-emerald-300 mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                <p className="text-sm text-emerald-400 font-bold">Nivel: {category.difficulty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-8">✨ Ce Vei Obține</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📹 Videoclipuri HD</h4>
              <p className="text-gray-300">Demonstrații clare cu instrucțiuni detaliate și corectări de formă.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📅 Programe Lunare</h4>
              <p className="text-gray-300">Programe structurate cu progresie graduală pentru rezultate durabile.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📊 Tracking Progress</h4>
              <p className="text-gray-300">Urmărește-ți progresul și motivează-te cu rezultatele tale.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">🎯 Adaptabile</h4>
              <p className="text-gray-300">Fiecare antrenament poate fi adaptat în funcție de nivelul și dispozitivul tău.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📱 Accesibil Oriunde</h4>
              <p className="text-gray-300">Antrenează-te acasă, în sală sau în deplasare cu acces total pe telefon.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">👥 Comunitate</h4>
              <p className="text-gray-300">Conectează-te cu alte femeii și motivează-te reciproc.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-black text-emerald-300 mb-6">Gata să-ți transformi corpul?</h2>
          <a
            href="/register"
            className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 px-10 py-4 rounded-lg font-black text-lg hover:shadow-lg hover:shadow-emerald-400/50 transition transform hover:scale-105"
          >
            Vezi Antrenamentele
          </a>
        </section>
      </div>
    </main>
  );
}
