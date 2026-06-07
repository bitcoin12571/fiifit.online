'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:fiifitonline@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nume: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-300">Avem întrebări? Te ajutăm cu plăcere!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-black text-emerald-300 mb-8">📧 Contactează-ne</h2>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
                <h3 className="text-xl font-bold text-emerald-300 mb-2">Email</h3>
                <p className="text-gray-300">
                  <a href="mailto:fiifitonline@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition">
                    fiifitonline@gmail.com
                  </a>
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
                <h3 className="text-xl font-bold text-emerald-300 mb-2">📍 Locație</h3>
                <p className="text-gray-300">
                  Fiifit Club Online LLC<br />
                  30 N GOULD ST STE N<br />
                  SHERIDAN, WY 82801<br />
                  USA
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-400/20">
                <h3 className="text-xl font-bold text-emerald-300 mb-2">🕐 Disponibilitate</h3>
                <p className="text-gray-300">
                  Răspundem la mesajele în maxim 24 ore<br />
                  Luni - Duminică
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-black text-emerald-300 mb-8">✉️ Trimite-ne un Mesaj</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-emerald-300 mb-2">Nume</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition"
                  placeholder="Cum te numești?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition"
                  placeholder="Email-ul tău"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-300 mb-2">Subiect</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition"
                  placeholder="Despre ce e vorba?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-emerald-300 mb-2">Mesaj</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700/50 border border-emerald-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition resize-none"
                  placeholder="Spune-ne cum te putem ajuta..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 px-6 py-3 rounded-lg font-black text-lg hover:shadow-lg hover:shadow-emerald-400/50 transition transform hover:scale-105"
              >
                Trimite Mesajul
              </button>

              {submitted && (
                <p className="text-center text-emerald-300 font-bold">
                  ✅ Mesajul a fost trimis! Îți vom răspunde în curând.
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
