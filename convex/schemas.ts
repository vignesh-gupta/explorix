import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  itineraries: defineTable({
    budget: v.string(),
    days: v.string(),
    destination: v.string(),
    imgUrl: v.string(),
    plan: v.string(),
  }),
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
});