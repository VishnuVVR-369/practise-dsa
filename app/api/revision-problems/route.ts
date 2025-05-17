import { NextResponse } from "next/server";
import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export async function GET() {
  const now = new Date();
  const daysAgoList = [2, 7, 14];
  try {
    const result: Record<string, any[]> = {};
    for (const daysAgo of daysAgoList) {
      const target = new Date(now.getTime() - daysAgo * MS_PER_DAY);
      // const yyyy = target.getUTCFullYear();
      // const mm = String(target.getUTCMonth() + 1).padStart(2, "0");
      // const dd = String(target.getUTCDate()).padStart(2, "0");
      // const targetDateString = `${yyyy}-${mm}-${dd}`;
      result[daysAgo] = await db.select().from(problemsTable).where(eq(problemsTable.solvedAt, target));
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
