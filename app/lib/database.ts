// Simulated Database - In production, use MongoDB, PostgreSQL, etc.
export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  plan: string;
  price: number;
  status: 'pending' | 'paid' | 'cancelled';
  registeredDate: string;
  paymentDate?: string;
  stripeSessionId?: string;
  cardLast4?: string;
}

// In-memory database (persists during session)
let clientsDatabase: Client[] = [];

export const database = {
  // Add client
  addClient: (client: Client) => {
    clientsDatabase.push(client);
    console.log('Client added:', client.email);
    return client;
  },

  // Update client
  updateClient: (clientId: string, updates: Partial<Client>) => {
    const index = clientsDatabase.findIndex(c => c.id === clientId);
    if (index !== -1) {
      clientsDatabase[index] = { ...clientsDatabase[index], ...updates };
      console.log('Client updated:', clientsDatabase[index].email);
      return clientsDatabase[index];
    }
    return null;
  },

  // Get all clients
  getAllClients: () => {
    return clientsDatabase;
  },

  // Get client by email
  getClientByEmail: (email: string) => {
    return clientsDatabase.find(c => c.email === email);
  },

  // Get client by ID
  getClientById: (id: string) => {
    return clientsDatabase.find(c => c.id === id);
  },

  // Delete client
  deleteClient: (clientId: string) => {
    clientsDatabase = clientsDatabase.filter(c => c.id !== clientId);
    console.log('Client deleted:', clientId);
  },

  // Get stats
  getStats: () => {
    return {
      total: clientsDatabase.length,
      paid: clientsDatabase.filter(c => c.status === 'paid').length,
      pending: clientsDatabase.filter(c => c.status === 'pending').length,
      revenue: clientsDatabase
        .filter(c => c.status === 'paid')
        .reduce((sum, c) => sum + c.price, 0),
    };
  },
};
