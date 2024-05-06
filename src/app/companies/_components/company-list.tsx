"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

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


export async function CompanyList() {
    const companies = await api.company.getLatest.useQuery();

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

                        {companies.data ? companies.data.map(company => (

                            <TableRow key={company.id}>
                                <TableCell>{company.name}</TableCell>
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
