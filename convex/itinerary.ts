import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("itineraries").collect();
  },
});

export const getOne = query({
  args: {
    itineraryId: v.id("itineraries"),
  },
  handler: async (ctx, args) => {
    return ctx.db.get(args.itineraryId);
  },
});
// TODO: Add image upload
export const create = mutation({
  args: {
    destination: v.string(),
    days: v.string(),
    budget: v.string(),
    markdown: v.string(),
    coverImage: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("itineraries", {
      destination: args.destination,
      budget: args.budget,
      plan: args.markdown,
      days: args.days,
      imgUrl: args.coverImage,
    });
  },
});
