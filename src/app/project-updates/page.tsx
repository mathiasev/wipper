import { auth } from "@clerk/nextjs/server"


import { redirect } from "next/navigation";
import { PageHeader } from "~/components/page-header";
import { ProjectUpdateList } from "./_components/project-update-list";

export default async function ProjectsPage() {
    const session = auth();
    if (!session.userId) return redirect('/',);

    return (
        <div className="flex flex-col gap-4">
            <PageHeader>Project Updates</PageHeader>
            <ProjectUpdateList />
        </div>
    )
}