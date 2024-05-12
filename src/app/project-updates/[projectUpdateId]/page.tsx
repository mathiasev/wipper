"use client"
import { Project } from "@prisma/client";
import { ProjectUpdateList } from "~/app/project-updates/_components/project-list";
import { PageHeader } from "~/components/page-header";
import { api } from "~/trpc/react";

export default function ProjectPage({ params }: { params: { projectId: string } }) {


    const Project = api.project.getProjectById.useQuery({ projectId: params.projectId })

    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                {Project.data?.name}
            </PageHeader>
            <div>

                <ProjectUpdateList projectId={Project.data?.id}
                />
            </div>
        </div>
    )
}