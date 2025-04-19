import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  const now = new Date();
  const daysAgoList = [2, 7, 14];
  try {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri!);
    const db = client.db("practise-dsa");
    const problems = db.collection("problems");
    const result: Record<string, any[]> = {};
    for (const daysAgo of daysAgoList) {
      const target = new Date(now.getTime() - daysAgo * MS_PER_DAY);
      const yyyy = target.getUTCFullYear();
      const mm = String(target.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(target.getUTCDate()).padStart(2, '0');
      const targetDateString = `${yyyy}-${mm}-${dd}`;
      result[daysAgo] = await problems
        .find({
          status: "Solved",
          dateSolved: { $regex: `^${targetDateString}` }
        })
        .toArray();
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch revision problems" }, { status: 500 });
  }
}
