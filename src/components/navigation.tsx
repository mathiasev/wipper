"use client"

import { Package2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "~/lib/utils"

export default function Navigation() {
    return (<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
        >
            Dashboard
        </Link>
        <Link

            href="/projects"
            className={cn(" transition-colors hover:text-foreground",
                usePathname() == '/projects' ?
                    "text-foreground" : "text-muted-foreground")}
        >

            Projects
        </Link>
        <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
        >
            Settings
        </Link>
    </nav>)
}