"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateProjectUpdate() {
  const router = useRouter();
  const [updateBody, setUpdateBody] = useState("");
  const [projectId, setProjectId] = useState("");

  const createProjectUpdate = api.projectUpdate.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setUpdateBody("");
      setProjectId("");
    },
  });



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createProjectUpdate.mutate({
          updateBody: updateBody,
          projectId: projectId
        });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Project Update"
        value={updateBody}
        onChange={(e) => setUpdateBody(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <select name="projectId" id="projectId" value={projectId}
        onChange={(e) => setProjectId(e.target.value)}>
        <option value="default">Default</option>
      </select>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createProjectUpdate.isPending}
      >
        {createProjectUpdate.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
