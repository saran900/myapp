import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { userScores } from "../../db/schema.js";

export default async (req: Request) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const rows = await db.select().from(userScores);
  const result: Record<string, (typeof rows)[0]> = {};
  rows.forEach((row) => {
    result[row.id] = row;
  });

  return Response.json(result, {
    headers: { "Cache-Control": "no-store" },
  });
};

export const config: Config = {
  path: "/api/scores",
};
