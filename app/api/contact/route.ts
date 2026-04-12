import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, organization, message } = await request.json()

  try {
    await resend.emails.send({
      from: 'Data Scout KE <onboarding@resend.dev>', // or your verified domain
      to: ['rosewabere1@gmail.com'], // you receive here
      subject: `New contact from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Org: ${organization || '-'}</p><p>Message: ${message}</p>`,
    })

    // Optional auto-reply
    await resend.emails.send({
      from: 'Data Scout KE <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Data Scout KE',
      html: `<p>Hi ${name}, I'll get back to you within a few hours.</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}