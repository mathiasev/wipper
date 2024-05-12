
import { api } from "~/trpc/react";

import { toast } from "sonner";
import { CreateCompanyProjectSheet } from "./create-company-project";
import { ProjectList } from "~/components/project-list";


export function CompanyProjectList({ companyId }: { companyId: string }) {
    const [projects, projectsQuery] = api.project.getCompanyProjects.useSuspenseQuery(
        {
            companyId: companyId
        }
    );

    if (projectsQuery.isError) (
        toast("Error", {
            important: true,
            description: projectsQuery.error?.message
        })
    )

    return (
        <>

            <CreateCompanyProjectSheet companyId={companyId} />
            <ProjectList projects={projects} />
        </>
    )


}
