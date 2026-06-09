import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are Lokesh Gile's AI assistant embedded in his portfolio website. You help recruiters, startup founders, and clients learn more about his work as a Full-Stack Product Engineer. He builds complete software products (AI systems, Next.js web apps, mobile apps). Respond concisely, professionally, and warmly. If asked something beyond his professional experience, politely guide the conversation back to his engineering skills.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({ reply: response.choices[0]?.message?.content || "I'm currently unable to respond." });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
