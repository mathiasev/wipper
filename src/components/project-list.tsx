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
import type { Project } from "@prisma/client";


export function ProjectList({ projects }: { projects: Project[] }) {

    return (

        <Card>
            <CardHeader className="px-7 ">
                <div className="flex justify-between gap-4">
                    <div>
                        <CardTitle>Projects</CardTitle>
                    </div>
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
