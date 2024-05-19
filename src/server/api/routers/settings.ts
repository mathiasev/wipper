
import {
    createTRPCRouter,
    protectedProcedure
} from "~/server/api/trpc";

export const settingsRouter = createTRPCRouter({
    accounts: protectedProcedure
        .query(({ ctx }) => {
            return ctx.db.account.findMany({
                orderBy: { createdAt: "desc" },

            });
        }),
});
