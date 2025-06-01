CREATE TABLE "problems" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "problems_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"difficulty" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"problemLink" varchar(255),
	"platform" varchar(255),
	"tag" varchar(255) NOT NULL,
	"group" varchar(255) NOT NULL,
	"subgroup" varchar(255) NOT NULL,
	"solvedAt" timestamp,
	"revisedAt" timestamp[],
	"completionDifficulty" varchar(255)[]
);
