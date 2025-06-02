import { NextResponse } from "next/server";
import db from "@/db";
import { problemsTable } from "@/db/schema";
import { sql } from "drizzle-orm";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export async function GET() {
  const now = new Date();
  const daysAgoList = [2, 7, 14];
  try {
    const result: Record<string, any[]> = {};
    for (const daysAgo of daysAgoList) {
      const target = new Date(now.getTime() - daysAgo * MS_PER_DAY);
      result[daysAgo] = await db
        .select()
        .from(problemsTable)
        .where(
          sql`date_trunc('day', ${problemsTable.solvedAt}) = ${
            target.toISOString().split("T")[0]
          }`
        );
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch revision problems" },
      { status: 500 }
    );
  }
}
