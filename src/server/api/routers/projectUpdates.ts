import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";

export const projectUpdateRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      updateBody: z.string().min(1),
      projectId: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.projectUpdate.create({
        data: {
          updateBody: input.updateBody,
          createdById: ctx.session.userId,
          projectId: input.projectId
        },
      });
    }),

  getLatest: protectedProcedure.input(z.object({
    projectId: z.string().optional()
  }))
    .query(({ ctx, input }) => {
      return ctx.db.projectUpdate.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          createdById: {
            equals: ctx.session.userId,
          },
          projectId: {
            equals: input.projectId
          },
        },
      });
    }),



  getProjectUpdatesByProject: protectedProcedure.input(z.object({
    projectId: z.string()
  }))
    .query(({ ctx, input }) => {
      return ctx.db.projectUpdate.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          createdById: {
            equals: ctx.session.userId,
          },
          projectId: {
            equals: input.projectId
          },
        },
      });
    }),
});
