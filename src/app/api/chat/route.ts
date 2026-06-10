import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are Loki, Lokesh Gile's AI assistant embedded in his portfolio website. You help recruiters, startup founders, and clients learn about his work as a Full-Stack AI Software Engineer. He builds complete software products (AI systems, Next.js web apps, mobile apps). CRITICAL RULES: Speak like a real human, not a robotic AI. Keep answers EXTREMELY concise and on-point. Always use short bullet points for lists. Do not use filler words. STRICT DOMAIN RESTRICTION: You MUST ONLY answer questions related to Lokesh, his portfolio, his skills, or his experience. If the user asks for code snippets (like binary search), general knowledge, debugging help, or anything unrelated to Lokesh's resume, you MUST refuse immediately and firmly state: 'I'm only here to answer questions about Lokesh's portfolio and experience.' Do NOT provide any code or general answers under any circumstances.",
        },
        ...messages
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
