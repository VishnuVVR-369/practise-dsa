import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { DIFFICULTY, PROBLEM_STATUS, PLATFORM } from "../lib/types";

export const problemsTable = pgTable("problems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1, increment: 1 }),
  title: varchar({ length: 255 }).notNull(),
  difficulty: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 255 }).notNull(),
  problemLink: varchar({ length: 255 }),
  platform: varchar({ length: 255 }),
  tag: varchar({ length: 255 }).notNull(),
  group: varchar({ length: 255 }).notNull(),
  subgroup: varchar({ length: 255 }).notNull(),
  solvedAt: timestamp(),
  revisedAt: timestamp().array(),
  completionDifficulty: varchar({ length: 255 }).array(),
});