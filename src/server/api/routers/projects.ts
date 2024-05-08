import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      description: z.string().min(1),
      companyId: z.string().min(1)
    }))

    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          name: input.name,
          description: input.description,
          companyId: input.companyId,
          createdById: ctx.session.userId,
        },
      });
    }),

  getLatest: protectedProcedure
    .input(z.object({
      page_size: z.number().default(5),
      page: z.number().default(0)
    }))
    .query(({ ctx, input }) => {
      return ctx.db.project.findMany({
        orderBy: { createdAt: "desc" },
        where: { createdById: { equals: ctx.session.userId }, },
        take: input.page_size,
        skip: input.page
      });
    }),

  getProjectById: protectedProcedure
    .input(z.object({
      projectId: z.string()
    }))
    .query(({ ctx, input }) => {
      return ctx.db.project.findFirst({
        where: {
          id: { equals: input.projectId },
          createdById: { equals: ctx.session.userId }
        }
      })
    }),
});
