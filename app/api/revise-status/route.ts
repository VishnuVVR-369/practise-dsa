import { NextResponse } from "next/server";
import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const solveProblemSchema = z.object({
  id: z.number(),
  completionDifficulty: z.enum(["Easy", "Medium", "Hard"]),
});

export async function PATCH(req: Request) {
  try {
    const { id, completionDifficulty } = await solveProblemSchema.parseAsync(
      await req.json()
    );
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const currentValue = await db
      .select()
      .from(problemsTable)
      .where(eq(problemsTable.id, Number(id)));
    if (!currentValue)
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });

    const newRevisedAt = currentValue[0].revisedAt
      ? [...currentValue[0].revisedAt, new Date()]
      : [new Date()];
    const newCompletionDifficulty = currentValue[0].completionDifficulty
      ? [...currentValue[0].completionDifficulty, completionDifficulty]
      : [completionDifficulty];

    const result = await db
      .update(problemsTable)
      .set({
        revisedAt: newRevisedAt,
        completionDifficulty: newCompletionDifficulty,
      })
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
