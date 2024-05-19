"use client"

import { PageHeader } from "~/components/page-header";
import { ProjectUpdateList } from "~/components/project-update-list";
import { api } from "~/trpc/react";

export default async function ProjectPage({ params }: { params: { projectId: string } }) {

    const [project] = api.project.getProjectById.useSuspenseQuery({ projectId: params.projectId })
    const [projectUpdates] = api.projectUpdate.getProjectUpdatesByProject.useSuspenseQuery({ projectId: params.projectId })



    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                {project && (<p>{project.name}</p>)}
            </PageHeader>
            <div>
                <ProjectUpdateList projectUpdates={projectUpdates} />
            </div>
        </div>
    )
}