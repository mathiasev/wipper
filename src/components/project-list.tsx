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


export function CompanyList() {
    const [projects, projectQuery] = api.projects.getLatest.useSuspenseQuery();
    if (projectQuery.isError) return (
        <Badge variant={"destructive"}>Error</Badge>
    )

    return (

        <Card>
            <CardHeader className="px-7">
                <CardTitle>Companies</CardTitle>
                <CardDescription>All companies</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead>Company</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {companies ? companies.map(company => (

                            <TableRow key={company.id}>
                                <TableCell>
                                    <Link href={"/company/" + company.id}>
                                        {company.name}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right">Actions</TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell>
                                    No companies
                                </TableCell>
                            </TableRow>
                        )}


                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    );
}