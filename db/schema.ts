import { pgTable, varchar, integer, bigint, jsonb, text, serial } from "drizzle-orm/pg-core";

export const userScores = pgTable("user_scores", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  grade: varchar("grade", { length: 50 }).default(""),
  total: integer("total").default(0),
  answer: integer("answer").default(0),
  maths: integer("maths").default(0),
  story: integer("story").default(0),
  psychology: integer("psychology").default(0),
  completedAnswer: jsonb("completed_answer").$type<number[]>().default([]),
  completedMaths: jsonb("completed_maths").$type<number[]>().default([]),
  completedStory: jsonb("completed_story").$type<number[]>().default([]),
  completedPsychology: jsonb("completed_psychology").$type<number[]>().default([]),
  lastSeen: bigint("last_seen", { mode: "number" }),
  savedAt: bigint("saved_at", { mode: "number" }),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  text: text("text").notNull(),
  timestamp: bigint("timestamp", { mode: "number" }).notNull(),
});
