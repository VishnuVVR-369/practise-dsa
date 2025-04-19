import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri!);
  try {
    await client.connect();
    const db = client.db("practise-dsa");
    const collection = db.collection("problems");
    const problems = await collection.find({}).toArray();
    return NextResponse.json(problems);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to fetch problems" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
