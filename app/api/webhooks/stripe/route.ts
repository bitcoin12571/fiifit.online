import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-27.acacia',
});

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

// In-memory database for paid clients
export const PAID_CLIENTS: Record<string, any> = {};

export async function POST(request: NextRequest) {
  const sig = request.headers.get('stripe-signature');
  const body = await request.text();

  if (!sig || !WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: 'Signature verification failed' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('Payment successful for:', {
          userId: session.client_reference_id,
          email: session.customer_email,
          amount: session.amount_total,
        });

        // Salvează client ca plătit în admin
        if (session.client_reference_id && session.customer_email) {
          PAID_CLIENTS[session.client_reference_id] = {
            userId: session.client_reference_id,
            email: session.customer_email,
            amount: session.amount_total,
            stripeSessionId: session.id,
            paidAt: new Date().toISOString(),
            status: 'paid',
          };

          console.log('Client saved to PAID_CLIENTS:', session.customer_email);
        }

        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Checkout session expired:', session.client_reference_id);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        console.log('Refund processed:', charge.id);

        // În production: actualizați statusul și trimiteți notificare
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
