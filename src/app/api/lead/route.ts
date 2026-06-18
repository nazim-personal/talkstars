import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, type, course, city, email, message } = body

    if (!name || !phone || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('[LEAD]', {
      name,
      phone,
      type,
      course: course || undefined,
      city: city || undefined,
      email: email || undefined,
      message: message || undefined,
      env: process.env.NEXT_PUBLIC_ENV,
      timestamp: new Date().toISOString(),
    })

    // TODO (production): send to CRM / WhatsApp API / Google Sheets / email
    // if (env.isProduction) { await sendToWhatsApp(body) }

    return NextResponse.json({
      success: true,
      message: `Thanks ${name}! We'll contact you shortly.`,
    })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
