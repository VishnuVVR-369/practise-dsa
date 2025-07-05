import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { id, notes } = await req.json();

  try {
    await db
      .update(problemsTable)
      .set({ notes })
      .where(eq(problemsTable.id, id));

    return NextResponse.json({ message: "Notes updated successfully" });
  } catch (error) {
    console.error("Error updating notes:", error);
    return NextResponse.json(
      { message: "Failed to update notes" },
      { status: 500 }
    );
  }
}
