CREATE TABLE "chat_messages" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"text" text NOT NULL,
	"timestamp" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_scores" (
	"id" varchar(255) PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"grade" varchar(50) DEFAULT '',
	"total" integer DEFAULT 0,
	"answer" integer DEFAULT 0,
	"maths" integer DEFAULT 0,
	"story" integer DEFAULT 0,
	"psychology" integer DEFAULT 0,
	"completed_answer" jsonb DEFAULT '[]',
	"completed_maths" jsonb DEFAULT '[]',
	"completed_story" jsonb DEFAULT '[]',
	"completed_psychology" jsonb DEFAULT '[]',
	"last_seen" bigint,
	"saved_at" bigint
);
