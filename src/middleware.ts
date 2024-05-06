import {
    clerkMiddleware,
    createRouteMatcher
} from '@clerk/nextjs/server';
import menu from './app/_navigation/menu';



const isProtectedRoute = createRouteMatcher([
    '/projects(.*)',
    ...menu.filter(item => item.isProtected).map(x => x.protectionRule)

]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});


export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};