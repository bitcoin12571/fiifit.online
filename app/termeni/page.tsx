'use client';

export default function TermeniPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Termeni și Condiții
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Definiții
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Servicii</strong> = Acces la platformă + lecții video + antrenamente + comunitate
              </li>
              <li>
                <strong>Utilizator</strong> = Persoană care cumpără abonament
              </li>
              <li>
                <strong>Conținut</strong> = Video-uri, PDF-uri, sesiuni live, webinare
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Drepturi și Responsabilități Utilizator
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nu poți revinde sau redistribui accesul</li>
              <li>Nu poți descărca sau înregistra videoclipuri</li>
              <li>Nu poți copia conținut fără permisiune</li>
              <li>Folosire exclusiv personală</li>
              <li>Account-ul e responsabilitatea ta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Limitări Responsabilitate
            </h2>
            <p>
              FiiFit <strong>NU garantează</strong> pierderi concrete de greutate.
            </p>
            <p>
              Consultațiile sunt pentru <strong>educație</strong>, nu pentru medicină.
            </p>
            <p>
              <strong>Nu înlocuiesc</strong> diagnostic medical profesional.
            </p>
            <p>
              Tu ești responsabil pentru sănătatea și siguranța proprie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Anulare & Refund
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Perioada refund: 7 zile</strong> de la cumpărare</li>
              <li><strong>Condiție:</strong> Acces ≤ 24 ore</li>
              <li><strong>Proces:</strong> Email support@fiifit.online + IBAN</li>
              <li><strong>Timp procesare:</strong> 5-10 zile lucru</li>
              <li>Reducerile aplicate nu se returnează</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Anulare Abonament
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Poti anula oricând</li>
              <li>Pierd accesul imediat după anulare</li>
              <li>Datele se șterg în 30 zile</li>
              <li>Fără penalizări</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Protecția Conținutului
            </h2>
            <p>
              Conținutul FiiFit este <strong>proprietate intelectuală protejată</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>© FiiFit Online SRL 2024</li>
              <li>Watermark pe videoclipuri</li>
              <li>DRM (Digital Rights Management)</li>
              <li>Descărcarea neautorizată = acțiune legală</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Modificări Termeni
            </h2>
            <p>
              Putem modifica acești termeni oricând. Te vom notifica prin email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Legea Aplicabilă
            </h2>
            <p>
              Acești termeni sunt reglementați de <strong>Legile Republicii Moldova</strong>.
            </p>
          </section>

          <div className="bg-pink-50 p-6 rounded-xl mt-12">
            <p className="text-center">
              Ultima actualizare: <strong>Iunie 2024</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
