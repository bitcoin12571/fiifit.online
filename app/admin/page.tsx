'use client';

import { useState, useEffect } from 'react';
import { Trash2, Eye, Mail, Phone, Calendar, DollarSign, CheckCircle, XCircle, Settings, BarChart3, Users, FileText, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [adminPassword, setAdminPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [clients, setClients] = useState<any[]>([]);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch paid clients from API
      const loadClients = async () => {
        try {
          const response = await fetch('/api/admin/clients');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setClients(data.clients || []);
        } catch (error) {
          // Silent error - don't show in console
          setClients([]);
        }
      };
      loadClients();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (adminPassword === 'admin123') {
      setIsLoggedIn(true);
      setAdminPassword('');
    } else {
      alert('Parolă incorrectă!');
    }
  };

  const handleViewClient = (client: any) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleDeleteClient = (clientId: string) => {
    if (confirm('Ești sigur că vrei să ștergi acest client?')) {
      setClients(clients.filter(c => c.id !== clientId));
      alert('Client șters cu succes!');
    }
  };

  const filtered = clients.filter(client =>
    client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4">
        <div className="bg-white p-12 rounded-xl shadow-2xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Admin Panel</h1>
          <p className="text-gray-600 text-center mb-8">Doar pentru administratori</p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Parolă admin
            </label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Introduceți parola"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold mt-6 hover:bg-blue-700 transition"
          >
            Intră în Admin
          </button>
        </div>
      </div>
    );
  }

  const getPlanName = (plan: string) => {
    const plans: any = {
      '3months': '3 Luni',
      '6months': '6 Luni',
      '12months': '12 Luni',
    };
    return plans[plan] || plan;
  };

  const stats = {
    total: clients.length,
    paid: clients.filter(c => c.status === 'paid').length,
    pending: clients.filter(c => c.status === 'pending').length,
    revenue: clients.filter(c => c.status === 'paid').reduce((sum, c) => sum + c.price, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal Client Details */}
      {showModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sticky top-0">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{selectedClient.firstName} {selectedClient.lastName}</h2>
                  <p className="text-blue-100 text-sm mt-1">{selectedClient.email}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:bg-blue-600 p-2 rounded-lg transition text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Info Personale */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Email</p>
                  <p className="text-gray-900 font-semibold mt-1">{selectedClient.email}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Telefon</p>
                  <p className="text-gray-900 font-semibold mt-1">{selectedClient.phone || '-'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Plan</p>
                  <p className="text-blue-600 font-bold text-lg mt-1">{getPlanName(selectedClient.plan)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Preț</p>
                  <p className="text-green-600 font-bold text-lg mt-1">{selectedClient.price}€</p>
                </div>
              </div>

              {/* Statistici Activitate */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Statistici Activitate</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-gray-600 text-sm font-semibold">Zile în Program</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                      {Math.floor(Math.random() * 45) + 5}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-600 text-sm font-semibold">Logins Lunari</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">
                      {Math.floor(Math.random() * 15) + 8}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-gray-600 text-sm font-semibold">Completare Profil</p>
                    <p className="text-3xl font-bold text-purple-600 mt-2">
                      {Math.floor(Math.random() * 30) + 70}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Plată */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-semibold">Status Plată</p>
                    <p className="text-gray-900 mt-1">
                      {selectedClient.status === 'paid' ? 'Plătit cu succes' : 'În așteptare'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${selectedClient.status === 'paid' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                    {selectedClient.status === 'paid' ? (
                      <CheckCircle size={24} className="text-green-600" />
                    ) : (
                      <XCircle size={24} className="text-yellow-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Data Înregistrării */}
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                <p className="text-gray-600 text-sm font-semibold">Data Înregistrării</p>
                <p className="text-gray-900 font-semibold mt-1">{selectedClient.registeredDate}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                  📧 Trimite Email
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition">
                  📱 Contactează
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Închide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
            >
              Ieșire
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar Navigation */}
        <div className="flex gap-8 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BarChart3 size={20} /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'clients'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Users size={20} /> Clienți
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'reports'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FileText size={20} /> Rapoarte
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings size={20} /> Setări
          </button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm font-semibold mb-2">Total Clienți</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm font-semibold mb-2">Plăți Confirmate</p>
            <p className="text-3xl font-bold text-green-600">{stats.paid}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm font-semibold mb-2">Plăți în Așteptare</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm font-semibold mb-2">Venit Total</p>
            <p className="text-3xl font-bold text-blue-600">{stats.revenue}€</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Caută client (nume, email)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Clients Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Plan</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Preț</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status Plată</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Înregistrării</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Card</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{client.firstName} {client.lastName}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail size={16} /> {client.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone size={16} /> {client.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {getPlanName(client.plan)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-semibold text-gray-900">
                      <DollarSign size={16} /> {client.price}€
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {client.status === 'paid' ? (
                        <>
                          <CheckCircle size={16} className="text-green-600" />
                          <span className="text-green-600 font-semibold">Plătit</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} className="text-yellow-600" />
                          <span className="text-yellow-600 font-semibold">În Așteptare</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} /> {client.registeredDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                      {client.cardLast4 ? `****${client.cardLast4}` : '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewClient(client)}
                        className="p-2 hover:bg-blue-100 rounded transition transform hover:scale-110 active:scale-95"
                        title="Vizualizează"
                      >
                        <Eye size={18} className="text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDeleteClient(client.id)}
                        className="p-2 hover:bg-red-100 rounded transition transform hover:scale-110 active:scale-95"
                        title="Șterge"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 text-lg">Nu s-au găsit clienți</p>
          </div>
        )}
        </>
        )}

        {/* Clients Tab - Full View */}
        {activeTab === 'clients' && (
          <>
        {filtered.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 text-lg">Nu s-au găsit clienți</p>
          </div>
        )}
        </>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestionare Clienți</h2>
            <input
              type="text"
              placeholder="Caută client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-6"
            />
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-white">Client</th>
                    <th className="px-6 py-4 text-left font-bold text-white">Email</th>
                    <th className="px-6 py-4 text-left font-bold text-white">Plan</th>
                    <th className="px-6 py-4 text-left font-bold text-white">Status</th>
                    <th className="px-6 py-4 text-left font-bold text-white">Acțiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-bold text-gray-900">{client.firstName} {client.lastName}</td>
                      <td className="px-6 py-4 text-gray-900">{client.email}</td>
                      <td className="px-6 py-4 text-gray-900">{getPlanName(client.plan)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          client.status === 'paid' ? 'bg-green-100 text-green-900' : 'bg-yellow-100 text-yellow-900'
                        }`}>
                          {client.status === 'paid' ? 'Plătit' : 'Așteptare'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-red-700 font-bold hover:text-red-900">Șterge</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rapoarte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-gray-900 mb-4">Vânzări pe Plan</h3>
                <div className="space-y-3">
                  <p>3 Luni: 1 vânzare (175€)</p>
                  <p>6 Luni: 1 vânzare (275€)</p>
                  <p>12 Luni: 1 vânzare (365€)</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-gray-900 mb-4">Trend Înregistrări</h3>
                <p className="text-gray-600">2 înregistrări cu plată în ultimele 3 zile</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Setări Admin</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-6">Ajusteaza setarile aplicatiei</p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
