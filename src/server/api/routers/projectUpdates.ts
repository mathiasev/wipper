import { toast } from "sonner";
import { z } from "zod";
import { Prisma } from "@prisma/client";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const projectUpdateRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

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

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.projectUpdate.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdById: { equals: ctx.session.userId } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
