// @ts-nocheck
import path from "path";
import { drizzle } from "drizzle-orm/node-postgres";
import { allProblems } from "../problems.js";
import { config } from "dotenv";
import { problemsTable } from "./schema.ts";
config({ path: path.resolve(__dirname, "../.env") });

const db = drizzle(process.env.DATABASE_URL!);

function chunkArray(array: any[], size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function getCleanPlatform(platform: string | undefined | null) {
  if (platform === "SPOJ") return "SPOJ";
  if (platform === "Naukri") return "Naukri";
  if (platform === "LeetCode" || platform === "Leetcode") return "LeetCode";
  if (platform === "GeeksforGeeks" || platform === "GeeksForGeeks")
    return "GeeksForGeeks";
  if (platform === "Atcoder" || platform === "AtCoder") return "AtCoder";
  if (platform === "Codeforces" || platform === "CodeForces")
    return "CodeForces";
  if (platform === "CodeChef" || platform === "Codechef") return "CodeChef";
  if (platform === "CSES") return "CSES";
  return null;
}

async function ingest() {
  for (let i = 0; i < allProblems.length; i++) {
    allProblems[i].platform = getCleanPlatform(allProblems[i].platform);
    allProblems[i].status = allProblems[i].status || "Unsolved";
    allProblems[i].problemLink = allProblems[i].problemLink || null;
    allProblems[i].articleLink = allProblems[i].articleLink || null;
    allProblems[i].tag = allProblems[i].tags[0] || null;
    allProblems[i].solvedAt = null;
    allProblems[i].revisedAt = null;
    allProblems[i].completionDifficulty = null;
    delete allProblems[i].id;
    delete allProblems[i].tags;
  }
  try {
    const chunks = chunkArray(allProblems, 100);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      try {
        const result = await db.insert(problemsTable).values(chunk);
        console.log(`Inserted chunk ${i + 1}/${chunks.length}`);
      } catch (err) {
        console.error(`Error inserting chunk ${i + 1}:`, err);
      }
    }
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}

ingest();
