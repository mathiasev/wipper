type MenuItem = {
    name: string,
    route: string,
    isProtected: boolean,
    protectionRule: string
}

const menu: MenuItem[] = [
    {
        name: "Dashboard",
        route: '/',
        isProtected: true,
        protectionRule: "/"
    },
    {
        name: "Projects",
        route: '/projects',
        isProtected: true,
        protectionRule: "/projects(.*)"
    },
    {
        name: "Companies",
        route: '/companies',
        isProtected: true,
        protectionRule: "/companies(.*)"
    },
    {
        name: "Settings",
        route: '/settings',
        isProtected: true,
        protectionRule: "/settings(.*)"
    }
]
export default menu;