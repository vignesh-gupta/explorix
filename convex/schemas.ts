import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  itinerary: defineTable({
    budget: v.string(),
    days: v.string(),
    destination: v.string(),
    plan: v.string(),
  }),
});