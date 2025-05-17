import db from "@/db";
import { problemsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProblems() {
  try {
    return await db.select().from(problemsTable);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch problems");
  }
}

export async function getProblemsByTopic(topic: string) {
  try {
    return await db.select().from(problemsTable).where(eq(problemsTable.group, topic));
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch problems");
  }
}

export async function getRevisionProblems() {
  const todayDate = new Date();
  const daysAgoList = [2, 7, 14];
  try {
    const result: Record<string, any[]> = {};
    for (const daysAgo of daysAgoList) {
      const target = new Date(todayDate.getTime() - daysAgo * 24 * 60 * 60 * 1000);
      result[daysAgo] = await db.select().from(problemsTable).where(eq(problemsTable.solvedAt, target));
    }
    return result;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch revision problems");
  }
}