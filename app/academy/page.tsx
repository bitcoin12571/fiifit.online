'use client';

export default function Academia() {
  const courses = [
    {
      title: 'Fundamentals de Fitness',
      description: 'Înțelege bazele antrenamentului și cum să-ți pregătești corpul pentru succes.',
      icon: '📚',
      modules: 8
    },
    {
      title: 'Nutriție și Dietă',
      description: 'Învață cum să mănânci corect pentru a obține rezultate și a fi sănătoasă.',
      icon: '🥗',
      modules: 10
    },
    {
      title: 'Antrenamente Avansate',
      description: 'Ia gândurile tale de fitness la următorul nivel cu tehnici avansate.',
      icon: '💪',
      modules: 12
    },
    {
      title: 'Mindset și Motivație',
      description: 'Construiește o mentalitate puternică și rămâi motivată pe parcursul transformării tale.',
      icon: '🧠',
      modules: 6
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-4">
            Academia FiiFit
          </h1>
          <p className="text-xl text-gray-300">Cursuri și educație pentru transformarea ta</p>
        </div>

        {/* Intro */}
        <section className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Academia FiiFit oferă cursuri structurate care te vor ghida prin fiecare aspect al transformării tale fizice și mentale.
            De la fundamentals până la antrenamente avansate, avem tot ce-ți trebuie pentru a deveni cea mai bună versiune a ta.
          </p>
        </section>

        {/* Courses Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-8">📖 Cursurile Noastre</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20 hover:border-emerald-400/50 transition"
              >
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-black text-emerald-300 mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>
                <p className="text-sm text-emerald-400 font-bold">{course.modules} Module</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-8">✨ Ce Incluși</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📹 Video Tutoriale</h4>
              <p className="text-gray-300">Videoclipuri detailed pentru fiecare lecție, cu demonstrații practice.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">📋 Resurse Descărcabile</h4>
              <p className="text-gray-300">PDF-uri, planuri de mâncare și ghiduri pe care le poți accesa oricând.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">🎓 Certificare</h4>
              <p className="text-gray-300">Primești certificat la completarea fiecărui curs.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-black text-emerald-300 mb-6">Pregătă să te educi și să te transformi?</h2>
          <a
            href="/register"
            className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 px-10 py-4 rounded-lg font-black text-lg hover:shadow-lg hover:shadow-emerald-400/50 transition transform hover:scale-105"
          >
            Accesează Academia
          </a>
        </section>
      </div>
    </main>
  );
}
