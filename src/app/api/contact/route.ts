import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['siddhartharaut33@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({firstName: 'John' })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: unknown) {
  if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ error: "Unknown error" }, { status: 500 });
  }
  }

interface EmailTemplateProps {
  firstName: string;
}

function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    React.createElement("div", null,
      React.createElement("h1", null, `Welcome, ${firstName}!`)
    )
  );
}
