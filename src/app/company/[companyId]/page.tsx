"use client"
import { Company } from "@prisma/client";
import { ProjectList } from "~/app/projects/_components/project-list";
import { PageHeader } from "~/components/page-header";
import { api } from "~/trpc/react";

export default function CompanyPage({ params }: { params: { companyId: string } }) {


    const company = api.company.getCompanyById.useQuery({ companyId: params.companyId })

    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                {company.data?.name}
            </PageHeader>
            <div>

                <ProjectList companyId={company.data?.id}
                />
            </div>
        </div>
    )
}