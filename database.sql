CREATE TABLE "expression_log" (
	"id" SERIAL PRIMARY KEY,
	"expression" TEXT NOT NULL,
	"created" TIMESTAMP DEFAULT NOW()
);