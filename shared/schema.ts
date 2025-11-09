import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const whopUsers = pgTable("whop_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  whopUserId: text("whop_user_id").notNull().unique(),
  email: text("email"),
  metadata: text("metadata"),
  hasManualAccess: boolean("has_manual_access").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWhopUserSchema = createInsertSchema(whopUsers).omit({
  id: true,
  createdAt: true,
});

export type InsertWhopUser = z.infer<typeof insertWhopUserSchema>;
export type WhopUser = typeof whopUsers.$inferSelect;
