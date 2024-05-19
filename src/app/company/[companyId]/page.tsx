"use client"

import { CompanyProjectList } from "~/app/projects/_components/company-project-list";
import { PageHeader } from "~/components/page-header";
import { api } from "~/trpc/react";

export default function CompanyPage({ params }: { params: { companyId: string } }) {


    const [company] = api.company.getCompanyById.useSuspenseQuery({ companyId: params.companyId })

    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                {company?.name}
            </PageHeader>
            <div>
                <CompanyProjectList companyId={params.companyId} />
            </div>
        </div>
    )
}