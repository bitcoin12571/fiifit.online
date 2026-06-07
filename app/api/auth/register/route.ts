import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendWelcomeEmail } from '@/app/lib/emailService';

// Simulated database
const REGISTERED_USERS: Record<string, any> = {};

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, password, plan } = body;

    // Validare
    if (!firstName?.trim() || !lastName?.trim()) {
      return NextResponse.json(
        { error: 'Nume invalid' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalid' },
        { status: 400 }
      );
    }

    if (!password || password.length < 8) {
      return NextResponse.json(
        { error: 'Parolă prea scurtă (min 8 caractere)' },
        { status: 400 }
      );
    }

    // Verifică dacă email deja există
    if (REGISTERED_USERS[email]) {
      return NextResponse.json(
        { error: 'Email deja înregistrat' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = hashPassword(password);

    // Crează user
    const userId = crypto.randomUUID();
    const sessionId = crypto.randomUUID();

    REGISTERED_USERS[email] = {
      id: userId,
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      plan,
      createdAt: new Date(),
      status: 'pending_payment',
      sessionId,
    };

    console.log('User registered:', {
      id: userId,
      email,
      plan,
      firstName,
      lastName,
    });

    // Trimite email de bun venit
    const planNames: Record<string, string> = {
      '3months': '3 Luni',
      '6months': '6 Luni',
      '12months': '12 Luni',
    };

    await sendWelcomeEmail(
      email,
      firstName,
      plan,
      planNames[plan] || plan
    );

    return NextResponse.json(
      {
        success: true,
        sessionId,
        userId,
        message: 'Înregistrare reușită. Continuați cu plata. Verifica email-ul pentru detalii!',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Eroare internă a serverului' },
      { status: 500 }
    );
  }
}
