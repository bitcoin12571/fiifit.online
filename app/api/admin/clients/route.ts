import { NextRequest, NextResponse } from 'next/server';

// In-memory database for paid clients
const PAID_CLIENTS: Record<string, any> = {};

export async function GET(request: NextRequest) {
  try {
    // In production, verify admin token/session here

    const clients = Object.values(PAID_CLIENTS).map(client => ({
      id: client.userId,
      firstName: client.firstName || 'N/A',
      lastName: client.lastName || 'N/A',
      email: client.email,
      phone: client.phone || 'N/A',
      plan: client.plan || 'Unknown',
      price: client.amount || 0,
      status: client.status || 'paid',
      registeredDate: client.paidAt || new Date().toISOString().split('T')[0],
      paymentDate: client.paidAt || new Date().toISOString().split('T')[0],
      cardLast4: '****',
    }));

    return NextResponse.json(
      {
        success: true,
        clients,
        total: clients.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}
