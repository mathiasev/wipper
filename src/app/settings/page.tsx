import Link from "next/link"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { AccountsList } from "./_components/accounts-list"

export default function SettingsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Authorised accounts</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarFallback>BC</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Basecamp</p>
                        <p className="text-sm text-muted-foreground">
                            Last authorised
                            <AccountsList />
                        </p>

                    </div>
                    <div className="ml-auto ">
                        <Link href={"/api/auth/signin"}>
                            <Button variant={"default"} size={"sm"}  >
                                Signin
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
