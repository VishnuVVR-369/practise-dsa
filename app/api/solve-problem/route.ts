import { NextResponse } from "next/server";
import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const solveProblemSchema = z.object({
  id: z.number(),
  status: z.enum(["Solved", "Unsolved"]),
});

export async function PATCH(req: Request) {
  try {
    const { id, status } = await solveProblemSchema.parseAsync(
      await req.json()
    );
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const result = await db
      .update(problemsTable)
      .set({ status, solvedAt: new Date() })
      .where(eq(problemsTable.id, Number(id)));

    if (result.rowCount) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Problem not found or not updated" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
