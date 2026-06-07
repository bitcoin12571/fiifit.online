import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import crypto from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-05-27.dahlia',
});

// In-memory storage for demo
const PAYMENTS: Record<string, any> = {};

const plans = {
  '3months': {
    price: 17500, // în cenți
    duration: '3 luni',
  },
  '6months': {
    price: 27500,
    duration: '6 luni',
  },
  '12months': {
    price: 36500,
    duration: '12 luni',
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, firstName, lastName, userId } = body;

    if (!plan || !plans[plan as keyof typeof plans]) {
      return NextResponse.json(
        { error: 'Plan invalid' },
        { status: 400 }
      );
    }

    const planData = plans[plan as keyof typeof plans];
    const paymentId = crypto.randomUUID();

    // Salvează info payment (pentru demo/webhook)
    PAYMENTS[paymentId] = {
      userId,
      email,
      plan,
      amount: planData.price,
      createdAt: new Date(),
    };

    // Crează Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Program Nutriție FiiFit - ${planData.duration}`,
              description: 'Program personalizat de nutriție și fitness',
              images: [
                process.env.NEXT_PUBLIC_APP_URL
                  ? `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`
                  : '',
              ].filter(Boolean),
            },
            unit_amount: planData.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/cancel`,
      metadata: {
        userId,
        plan,
        firstName,
        lastName,
      },
    });

    return NextResponse.json(
      {
        success: true,
        sessionId: session.id,
        url: session.url,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Checkout session error:', error);
    return NextResponse.json(
      { error: 'Nu s-a putut crea sesiunea de plată' },
      { status: 500 }
    );
  }
}
