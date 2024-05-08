"use client"
import { Company } from "@prisma/client";
import { PageHeader } from "~/components/page-header";
import { api } from "~/trpc/react";

export default function CompanyPage({ params }: { params: { companyId: string } }) {


    const company = api.company.getCompanyById.useQuery({ companyId: params.companyId })

    return (
        <div className="flex flex-col">
            <PageHeader>
                {company.data?.name}
            </PageHeader>
            <div>

            </div>
        </div>
    )
}