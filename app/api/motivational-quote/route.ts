import { NextResponse } from "next/server";

export async function GET() {
  const prompt = `Craft a concise, original, and deeply motivating quote for software engineers gearing up for interviews at top tech companies. Make it relatable to the coding challenges, algorithmic problem-solving, and resilience required on the big-tech interview journey.`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!geminiRes.ok) {
      const error = await geminiRes.text();
      return NextResponse.json({ error }, { status: geminiRes.status });
    }

    const data = await geminiRes.json();
    const quote =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ??
      "Keep pushing forward!";
    return NextResponse.json({ quote });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch quote." },
      { status: 500 }
    );
  }
}
