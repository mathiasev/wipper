"use client"
import { PageHeader } from "~/components/page-header";
import { ProjectUpdateList } from "~/components/project-update-list";
import { api } from "~/trpc/react";

export default function ProjectPage({ params }: { params: { projectId: string } }) {

    const project = api.project.getProjectById.useQuery({ projectId: params.projectId })
    const [projectUpdates] = api.projectUpdate.getProjectUpdatesByProject.useSuspenseQuery({
        projectId: params.projectId
    });


    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                {project.data?.name}
            </PageHeader>
            <div>
                {projectUpdates &&
                    <ProjectUpdateList projectUpdates={projectUpdates} />
                }
            </div>
        </div>
    )
}