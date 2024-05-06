
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { projectUpdateRouter } from "~/server/api/routers/projectUpdates";
import { companyRouter } from "./routers/companies";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  projectUpdate: projectUpdateRouter,
  company: companyRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
