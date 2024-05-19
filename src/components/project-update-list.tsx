"use client";

import {
    Card,
    CardContent,
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
import type { ProjectUpdate } from "@prisma/client";


export function ProjectUpdateList({ projectUpdates }: { projectUpdates: ProjectUpdate[] }) {


    return (

        <Card>
            <CardHeader className="px-7 ">
                <div className="flex justify-between gap-4">
                    <div>
                        <CardTitle>Project Updates</CardTitle>

                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead>Date</TableHead>
                            <TableHead>Project Update</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {projectUpdates && projectUpdates.length > 0 ? projectUpdates.map(projectUpdate => (

                            <TableRow key={projectUpdate.id}>
                                <TableCell>
                                    <Link href={"/project/" + projectUpdate.id}>
                                        {projectUpdate.createdAt.toLocaleDateString()}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link href={"/project/" + projectUpdate.id}>
                                        {projectUpdate.updateBody}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right">Actions</TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    No project updates
                                </TableCell>
                            </TableRow>
                        )}


                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    );
}
