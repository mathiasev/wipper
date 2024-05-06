"use client";

import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";

import { api } from "~/trpc/react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"


export function CreateCompany() {
    const router = useRouter();
    const [companyName, setCompanyName] = useState("");

    const createCompany = api.company.create.useMutation({
        onSuccess: () => {
            router.refresh();
            setCompanyName("");
            toast("Company created", {
                description: companyName
            })
        },
        onError: (e) => {
            if (e instanceof Prisma.PrismaClientKnownRequestError)
                toast('Error creating update', {
                    description: e.message
                })
        }
    });



    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createCompany.mutate({
                    name: companyName
                });
            }}
            className="flex flex-col gap-2"
        >


            <Card>
                <CardHeader>
                    <CardTitle>Create Company</CardTitle>
                    <CardDescription>
                        Create a new company.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Company Name" name="companyName" value={companyName} onChange={e => { setCompanyName(e.target.value) }} />
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button type="submit" >Create</Button>
                </CardFooter>
            </Card>



        </form>
    );
}
