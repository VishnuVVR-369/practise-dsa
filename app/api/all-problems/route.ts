import { NextResponse } from "next/server";
import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const problems = await db.select().from(problemsTable);
  return NextResponse.json(problems);
}

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();
    const problems = await db.select().from(problemsTable).where(eq(problemsTable.group, topic));
    return NextResponse.json(problems);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch problems" },
      { status: 500 }
    );
  }
}