import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const name = (data.name ?? '').toString().slice(0, 100);
    const phone = (data.phone ?? '').toString().slice(0, 30);
    const service = (data.service ?? '').toString().slice(0, 100);
    const date = (data.date ?? '').toString().slice(0, 30);
    const message = (data.message ?? '').toString().slice(0, 1000);

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing name or phone' }, { status: 400 });
    }

    // Simulate saving; in real-world, integrate with email, CRM, or DB.
    console.log('[BOOKING]', { name, phone, service, date, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
