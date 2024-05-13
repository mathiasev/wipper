"use client";

import { PageHeader } from "~/components/page-header";
import { api } from "~/trpc/react";

import { CornerDownLeft, Mic, Paperclip } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { BasecampImport } from "~/components/basecamp-import";

export default function CreateProjectUpdatePage({ params }: { params: { projectId: string } }) {

    const project = api.project.getProjectById.useQuery({
        projectId: params.projectId
    })

    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                Create Project Update for {project.data?.name}
            </PageHeader>
            <div>
                <form action="" className="flex flex-col gap-4">


                    <div
                        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                    >
                        <Label htmlFor="message" className="sr-only">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Type your message here..."
                            className="min-h-16 h-16 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                        />
                        <div className="flex items-center p-3 pt-0">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Paperclip className="size-4" />
                                        <span className="sr-only">Attach file</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top">Attach File</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Mic className="size-4" />
                                        <span className="sr-only">Use Microphone</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top">Use Microphone</TooltipContent>
                            </Tooltip>
                            <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                Send Message
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">

                        <BasecampImport />
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Import from Proworkflow</CardTitle>
                                <CardDescription>
                                    Get time tracked and summarise.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Import from Outlook</CardTitle>
                                <CardDescription>
                                    Summarise what emails came in and out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </form>
            </div>
        </div>
    )
}