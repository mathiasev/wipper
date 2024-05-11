"use client";

import { api } from "~/trpc/react";

import { Badge } from "~/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import Link from "next/link";
import { toast } from "sonner";
import { CreateProjectSheet } from "./create-project";


export function ProjectList({ companyId = undefined }: { companyId: string | undefined }) {
    const [projects, projectsQuery] = api.project.getLatest.useSuspenseQuery(
        {
            companyId: companyId
        }
    );
    if (projectsQuery.isError) return (
        toast("Error", {
            important: true,
            description: projectsQuery.error?.message
        })

    )

    return (

        <Card>
            <CardHeader className="px-7 ">
                <div className="flex justify-between gap-4">
                    <div>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>All projects for {companyId}</CardDescription>
                    </div>
                    <CreateProjectSheet companyId={companyId} />
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead>Project</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {projects && projects.length > 0 ? projects.map(project => (

                            <TableRow key={project.id}>
                                <TableCell>
                                    <Link href={"/project/" + project.id}>
                                        {project.name}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right">Actions</TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={2}>
                                    No projects
                                </TableCell>
                            </TableRow>
                        )}


                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    );
}
