'use client';

export default function DespreNoi() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-4">
            Despre FiiFit
          </h1>
          <p className="text-xl text-gray-300">Transformare feminină prin antrenament și nutriție</p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-6">Povestea Noastră</h2>
          <div className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              FiiFit a fost fondată cu o singură misiune: să oferim femeilor instrumente și cunoștințele necesare pentru a-și transforma corpul și viața prin antrenament și nutriție.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Credem că fiecare femeie merită acces la programe de fitness de calitate, personalizate și susținute de o comunitate solidară.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Platforma noastră combină: antrenamente structurate, educație nutrițională, și sprijin comunitar pentru a ajuta orice femeie să-și atingă potențialul maxim.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20">
            <h3 className="text-2xl font-black text-emerald-300 mb-4">🎯 Misiunea Noastră</h3>
            <p className="text-gray-300 leading-relaxed">
              Să empower-ăm femeile să-și transforme viața prin fitness și nutriție, oferind programe accesibile, eficiente și susținute de o comunitate insuflețitoare.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-8 border border-emerald-400/20">
            <h3 className="text-2xl font-black text-emerald-300 mb-4">👁️ Viziunea Noastră</h3>
            <p className="text-gray-300 leading-relaxed">
              Să devenim platforma de fitness preferată pentru femeile care doresc o transformare reală, cu rezultate durabile și o comunitate care le susține fiecare pas.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-emerald-300 mb-8">💎 Valorile Noastre</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">Autenticitate</h4>
              <p className="text-gray-300">Rezultate reale, nu promisiuni goale. Transparență totală în tot ceea ce facem.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">Comunitate</h4>
              <p className="text-gray-300">Femeile sunt mai puternice împreună. Sprijin, motivație și celebrare reciprocă.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">Excelență</h4>
              <p className="text-gray-300">Antrenamente testate, metode bazate pe știință, și actualizări constante.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-black text-emerald-300 mb-6">Gata să-ți transformi viața?</h2>
          <a
            href="/register"
            className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 px-10 py-4 rounded-lg font-black text-lg hover:shadow-lg hover:shadow-emerald-400/50 transition transform hover:scale-105"
          >
            Începe Acum
          </a>
        </section>
      </div>
    </main>
  );
}
