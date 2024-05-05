import { PrismaAdapter } from "@auth/prisma-adapter";


// import { env } from "~/env";
// import { db } from "~/server/db";
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getAuth } from '@clerk/nextjs/server';

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  return { auth: getAuth(opts.req) }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;