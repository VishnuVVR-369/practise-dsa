import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri!);
    await client.connect();
    const db = client.db("practise-dsa");
    const collection = db.collection("problems");

    const now = new Date();
    const result = await collection.updateOne(
      { id },
      { $set: { status: "Solved", dateSolved: now.toISOString() } }
    );
    await client.close();

    if (result.modifiedCount === 1) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Problem not found or not updated" }, { status: 404 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
