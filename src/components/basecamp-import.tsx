import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export async function BasecampImport() {
    return (
        <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Import from Basecamp</CardTitle>
                <CardDescription>
                    Summarise Basecamp messages and to-dos.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                    Upgrade
                </Button>
            </CardContent>
        </Card>
    )
}