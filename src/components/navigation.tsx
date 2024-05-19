"use client"

import { Package2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import menu from "~/app/_navigation/menu"
import { cn } from "~/lib/utils"

export default function Navigation() {

    function isActiveMenuItem(itemName: string) {
        return usePathname() == itemName
    }

    return (<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
        </Link>
        {menu.map(menuItem => (
            <Link
                key={menuItem.route}
                href={menuItem.route}
                className={
                    cn(" transition-colors hover:text-foreground",
                        isActiveMenuItem(menuItem.route) ?
                            "text-foreground" : "text-muted-foreground")
                }
            >
                {menuItem.name}
            </Link>
        ))}
    </nav>)
}