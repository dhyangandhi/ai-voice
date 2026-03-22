import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, orgId } = await auth();

    if (isPublicRoute(req)) {
        return NextResponse.next();
    }
    
    if (!userId) {
        await auth.protect();
    }

    if (isOrgSelectionRoute(req)) {
        return NextResponse.next();
    }

    if (userId && !orgId) {
        const orgSeletion = new URL("/org-selection", req.url);
        return NextResponse.redirect(orgSeletion);
    }

    return NextResponse.next();
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}