import { Prisma, PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends({
    model: {
      $allModels: {
        async delete<M, A>(
          this: M,
          where: Prisma.Args<M, 'delete'>,
        ): Promise<Prisma.Result<M, A, 'update'>> {
          const context = Prisma.getExtensionContext(this)

          return (context as any).update({
            ...where,
            data: {
              deletedAt: new Date(),
            },
          })
        },
      },
    }
  },
  );


const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
