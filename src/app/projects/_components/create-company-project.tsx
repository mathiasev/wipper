import { PlusIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import { CreateCompanyProjectForm } from "./create-company-project-form"


export function CreateCompanyProjectSheet({ companyId }: { companyId: string }) {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={"default"} variant="outline" className="mr-0 ml-auto" >
                    <div className="flex gap-2">
                        <span className="">Create Project</span>
                        <PlusIcon />
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Create Project</SheetTitle>
                    <SheetDescription>
                        Create a new project
                    </SheetDescription>
                </SheetHeader>
                <CreateCompanyProjectForm companyId={companyId} />
            </SheetContent>
        </Sheet>
    )
}
