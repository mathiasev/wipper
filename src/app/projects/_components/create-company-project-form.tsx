"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { toast } from "sonner"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"

import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { api } from "~/trpc/react"

const FormSchema = z.object({
    name: z.string().min(1, {
        message: "Project name is required."
    }),
    description: z.string().min(1, {
        message: "Project description is required."
    }),
    companyId: z.string()

})


export function CreateCompanyProjectForm({ companyId }: { companyId: string }) {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            companyId: companyId,
            name: "",
            description: ''
        },
        context: companyId

    })


    const { mutate } = api.project.create.useMutation({
        onSuccess: (e) => {
            toast("Project created")
            form.reset();
        },
        onError: (e) => {
            toast("Error", {
                important: true,
                description: JSON.stringify(e.message)
            })
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        mutate({
            name: data.name,
            description: data.description,
            companyId: data.companyId
        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <p className="font-mono">{companyId}</p>
                <p>{JSON.stringify(form.formState.errors)}</p>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Project name" {...field} />
                            </FormControl>
                            <FormDescription>
                                What is the project name?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Project description" {...field} />
                            </FormControl>
                            <FormDescription>
                                What is the project description?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
