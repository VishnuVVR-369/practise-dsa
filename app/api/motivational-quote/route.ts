import { NextResponse } from 'next/server';

export async function GET() {
  const prompt = `Generate a short, fresh, and highly motivational quote for someone preparing for software engineering interviews at big tech companies. The quote should be relatable, inspiring, and specific to the journey of coding, problem solving, and perseverance in the context of big tech interviews.`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ]
        }),
      }
    );

    if (!geminiRes.ok) {
      const error = await geminiRes.text();
      return NextResponse.json({ error }, { status: geminiRes.status });
    }

    const data = await geminiRes.json();
    const quote = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? 'Keep pushing forward!';
    return NextResponse.json({ quote });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch quote.' }, { status: 500 });
  }
}

