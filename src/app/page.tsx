import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { CreateProjectUpdate } from "~/components/create-project-update";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="">

      <Suspense fallback={
        "Loading"
      }>
        <CrudShowcase />
      </Suspense>

    </main>
  );
}

async function CrudShowcase() {

  const session = auth();
  if (!session?.userId) return null;

  const latestUpdate = await api.projectUpdate.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestUpdate ? (
        <p className="truncate">Your most recent post: {latestUpdate.updateBody.substring(0, 20)}...</p>
      ) : (
        <p>You have no updates yet.</p>
      )}

      <CreateProjectUpdate />
    </div>
  );
}
