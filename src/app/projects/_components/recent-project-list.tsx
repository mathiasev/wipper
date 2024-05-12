"use client"
import { api } from "~/trpc/react";

import { toast } from "sonner";
import { ProjectList } from "~/components/project-list";


export function RecentProjectList() {
    const [projects, projectsQuery] = api.project.getProjects.useSuspenseQuery();

    if (projectsQuery.isError) (
        toast("Error", {
            important: true,
            description: projectsQuery.error?.message
        })
    )

    return (
        <>
            <ProjectList projects={projects} />
        </>
    )


}
