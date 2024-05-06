import { auth } from "@clerk/nextjs/server"


import { redirect } from "next/navigation";

export default async function ProjectsPage() {
    const session = auth();
    if (!session.userId) return redirect('/',);

    return (
        <h1>Proejcts</h1>
    )
}