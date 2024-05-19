import { auth } from "@clerk/nextjs/server"


import { redirect } from "next/navigation";
import { PageHeader } from "~/components/page-header";
import { CreateCompany } from "./_components/create-company";
import { CompanyList } from "./_components/company-list";

export default async function ProjectsPage() {
    const session = auth();
    if (!session.userId) return redirect('/',);

    return (
        <>
            <PageHeader>Companies</PageHeader>
            <div className="flex flex-col gap-4">
                <CreateCompany />
                <CompanyList />
            </div>
        </>
    )
}