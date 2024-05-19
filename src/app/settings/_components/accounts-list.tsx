"use client"

import { useAuth } from "@clerk/nextjs";
import { api } from "~/trpc/react";


export async function AccountsList() {

    const accounts = api.setting.accounts.useQuery();


    return (
        <>
            <p>{useAuth().userId}</p>
            <p>{JSON.stringify(accounts.data)}</p>
        </>
    )
}