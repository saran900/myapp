import type { Config, Context } from "@netlify/functions";
import { db } from "../../db/index.js";
import { userScores } from "../../db/schema.js";
import { eq } from "drizzle-orm";

export default async (req: Request, context: Context) => {
  const { key } = context.params;

  if (req.method === "GET") {
    const rows = await db
      .select()
      .from(userScores)
      .where(eq(userScores.id, key));

    if (rows.length === 0) {
      return new Response("null", {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      });
    }

    return Response.json(rows[0], {
      headers: { "Cache-Control": "no-store" },
    });
  }

  if (req.method === "PUT") {
    const body = await req.json();
    const record = {
      id: key,
      name: body.name || "",
      grade: body.grade || "",
      total: body.total || 0,
      answer: body.answer || 0,
      maths: body.maths || 0,
      story: body.story || 0,
      psychology: body.psychology || 0,
      completedAnswer: body.completedAnswer || [],
      completedMaths: body.completedMaths || [],
      completedStory: body.completedStory || [],
      completedPsychology: body.completedPsychology || [],
      lastSeen: body.lastSeen || null,
      savedAt: Date.now(),
    };

    await db
      .insert(userScores)
      .values(record)
      .onConflictDoUpdate({
        target: userScores.id,
        set: {
          name: record.name,
          grade: record.grade,
          total: record.total,
          answer: record.answer,
          maths: record.maths,
          story: record.story,
          psychology: record.psychology,
          completedAnswer: record.completedAnswer,
          completedMaths: record.completedMaths,
          completedStory: record.completedStory,
          completedPsychology: record.completedPsychology,
          lastSeen: record.lastSeen,
          savedAt: record.savedAt,
        },
      });

    return Response.json({ ok: true });
  }

  return new Response("Method Not Allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/scores/:key",
};
