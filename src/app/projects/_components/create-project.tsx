import { PlusIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import { CreateProjectForm } from "./create-project-form"

export function CreateProjectSheet({ companyId = undefined }: { companyId: string | undefined }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={"icon"} variant="outline">
                    <PlusIcon />
                    <span className="sr-only">Open</span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Create Project</SheetTitle>
                    <SheetDescription>
                        Create a new project
                    </SheetDescription>
                </SheetHeader>
                <CreateProjectForm />
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}