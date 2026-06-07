'use client';

import { useState } from 'react';
import { Play, BookOpen, Search, Music, Video } from 'lucide-react';

export default function MediaPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const episodes = [
    {
      id: 1,
      title: 'În culisele FiiFit Online #1',
      description: 'Cum s-a născut FiiFit și ce e diferit la noi',
      duration: '45 min',
      type: 'podcast',
      date: '15 Mai 2024',
      host: 'Ioana & Cristina',
      featured: true,
    },
    {
      id: 2,
      title: 'În culisele FiiFit Online #2',
      description: 'Top 5 greșeli care te fac să nu slăbești',
      duration: '52 min',
      type: 'podcast',
      date: '22 Mai 2024',
      host: 'Ioana & Cristina',
    },
    {
      id: 3,
      title: 'Apariție TV - România Sport Club',
      description: 'Interviu despre nutriție și transformare',
      duration: '30 min',
      type: 'video',
      date: '10 Mai 2024',
      host: 'Ioana Tăbușcă',
    },
    {
      id: 4,
      title: 'În culisele FiiFit Online #3',
      description: 'Metabolismul: cum funcționează și cum l-optimizezi',
      duration: '48 min',
      type: 'podcast',
      date: '1 Iunie 2024',
      host: 'Dr. Andrei Pop',
    },
    {
      id: 5,
      title: 'Nutriție pentru Fitness - Ghid Complet',
      description: 'Tot ce trebuie să știi despre macro-nutrienți',
      duration: 'Articol',
      type: 'article',
      date: '5 Iunie 2024',
      host: 'Cristina Ionescu',
    },
    {
      id: 6,
      title: 'În culisele FiiFit Online #4',
      description: 'Transformări reale: 6 povești de succes',
      duration: '56 min',
      type: 'podcast',
      date: '12 Iunie 2024',
      host: 'Ioana & Cristina',
    },
    {
      id: 7,
      title: 'Live Stream - Q&A Nutriție',
      description: 'Răspunsuri la întrebări despre diet și exerciții',
      duration: '1h 20min',
      type: 'video',
      date: '18 Iunie 2024',
      host: 'Ioana Tăbușcă',
    },
    {
      id: 8,
      title: 'Cum să Nu Abandonezi Dieta',
      description: 'Psihologia mâncării și cum să rămâi motivat',
      duration: '41 min',
      type: 'podcast',
      date: '25 Iunie 2024',
      host: 'Dr. Ana Popescu',
    },
  ];

  const filtered = episodes.filter(ep => {
    const matchesFilter = selectedFilter === 'all' || ep.type === selectedFilter;
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ep.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featured = episodes.find(ep => ep.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Media & Podcast</h1>
          <p className="text-xl text-gray-600">Ascultă și urmărește episoadele noastre</p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Caută episoade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 placeholder-gray-400 bg-white font-semibold"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {['all', 'podcast', 'video', 'article'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedFilter === filter
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'Toate' : filter === 'podcast' ? 'Podcast-uri' : filter === 'video' ? 'Video-uri' : 'Articole'}
              </button>
            ))}
          </div>
        </div>


        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((ep) => (
            <div key={ep.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center text-white relative group cursor-pointer">
                {ep.type === 'podcast' ? <BookOpen className="w-12 h-12" /> : ep.type === 'video' ? <Play className="w-12 h-12" /> : <BookOpen className="w-12 h-12" />}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-pink-600 uppercase">{ep.type === 'podcast' ? '🎙️ Podcast' : ep.type === 'video' ? '📺 Video' : '📖 Articol'}</span>
                  <span className="text-xs text-gray-500">{ep.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{ep.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ep.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <p>{ep.date} • {ep.host}</p>
                </div>
                <a href="#" className="text-pink-600 font-bold text-sm hover:text-pink-700">
                  {ep.type === 'podcast' ? 'Ascultă pe Spotify →' : ep.type === 'video' ? 'Urmărește pe YouTube →' : 'Citește articolul →'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Rămâi la curent</h2>
          <p className="text-lg mb-6">Primește notificări când apare episod nou</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Email-ul tău" className="px-6 py-3 rounded-lg text-gray-900 flex-1" />
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-pink-50">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
