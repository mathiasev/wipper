import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const companyRouter = createTRPCRouter({

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
    }))

    .mutation(async ({ ctx, input }) => {
      return ctx.db.company.create({
        data: {
          name: input.name,
          createdById: ctx.session.userId,
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.company.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdById: { equals: ctx.session.userId } },
    });
  }),

  getCompanyById: protectedProcedure
    .input(z.object({
      companyId: z.string()
    }))
    .query(({ ctx, input }) => {
      return ctx.db.company.findFirst({
        where: {
          id: { equals: input.companyId },
          createdById: { equals: ctx.session.userId }
        }
      })
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
