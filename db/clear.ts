import { sql } from "drizzle-orm";
import db from "./index";

async function main(): Promise<void> {
  await db.execute(sql`TRUNCATE TABLE "problems" RESTART IDENTITY`);
  console.log('Cleared "problems" table and reset identity.');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Failed to clear problems table:", error);
    process.exit(1);
  });


