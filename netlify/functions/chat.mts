import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { chatMessages } from "../../db/schema.js";
import { desc } from "drizzle-orm";

export default async (req: Request) => {
  if (req.method === "GET") {
    const rows = await db
      .select()
      .from(chatMessages)
      .orderBy(desc(chatMessages.id))
      .limit(100);

    const msgs = rows.reverse().map((r) => ({
      name: r.name,
      text: r.text,
      timestamp: r.timestamp,
    }));

    return Response.json(msgs, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  if (req.method === "POST") {
    const body = await req.json();
    if (!body.name || !body.text) {
      return new Response("Bad Request", { status: 400 });
    }

    await db.insert(chatMessages).values({
      name: body.name,
      text: body.text,
      timestamp: Date.now(),
    });

    return Response.json({ ok: true });
  }

  return new Response("Method Not Allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/chat",
};
