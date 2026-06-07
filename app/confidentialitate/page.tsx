'use client';

export default function ConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politica de Confidențialitate
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Date Colectate
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email și nume complet</li>
              <li>Dată naștere și inițială greutate</li>
              <li>Istoricul achizițiilor</li>
              <li>Loguri de acces la lecții</li>
              <li>IP-ul și dispozitiv (pentru seguritate)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Scopul Prelucrării
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Furnizare servicii de platformă</li>
              <li>Email marketing (cu consimțământ)</li>
              <li>Analitică și îmbunătățiri (anonim)</li>
              <li>Conformitate legală și securitate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Drepturile Tale (GDPR)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Drept la acces:</strong> Cere copia datelor tale
              </li>
              <li>
                <strong>Drept la rectificare:</strong> Corectare date incorecte
              </li>
              <li>
                <strong>Drept la ștergere:</strong> "Right to be forgotten"
              </li>
              <li>
                <strong>Drept de portabilitate:</strong> Export datelor
              </li>
              <li>
                <strong>Drept de opoziție:</strong> Refuzare marketing
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Perioada Păstrării Datelor
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Date active: Cât ții abonamentul</li>
              <li>Backup: 30 zile după anulare</li>
              <li>Loguri: 90 zile</li>
              <li>După care: Ștergere completă</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Securitate
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL/TLS encryption (HTTPS)</li>
              <li>Database encryption</li>
              <li>Acces restricționat la personal autorizat</li>
              <li>Audit anual de securitate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Partajare Date
            </h2>
            <p>
              <strong>NU partajăm</strong> datele cu terți fără consimțământul tău.
            </p>
            <p>
              Excepții: Stripe (plăți), SendGrid (email), Vimeo (videoclipuri).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies
            </h2>
            <p>
              Folosim cookies pentru:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sesiune de conectare</li>
              <li>Analytics (Mixpanel)</li>
              <li>Personalizare</li>
            </ul>
            <p>
              Poți refuza cookies din browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact DPO
            </h2>
            <p>
              Responsabil Date Protection Officer:
            </p>
            <p>
              <strong>Email:</strong> privacy@fiifit.online
            </p>
            <p>
              <strong>Răspuns în:</strong> 2 zile lucru
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Modificări Politică
            </h2>
            <p>
              Suntem obligați să te notificăm orice schimbare legală.
            </p>
          </section>

          <div className="bg-pink-50 p-6 rounded-xl mt-12">
            <p className="text-center">
              Ultima actualizare: <strong>Iunie 2024</strong>
            </p>
            <p className="text-center mt-2 text-sm text-gray-600">
              Conformă cu GDPR EU și legea 408-XVI Moldova
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
