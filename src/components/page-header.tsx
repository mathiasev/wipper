
export function PageHeader({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">
                {children}
            </h1>
        </div>
    )
}
