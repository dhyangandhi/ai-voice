import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashbord-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip"; // ✅ ADD THIS

export default async function DashboardPage({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <TooltipProvider> {/* ✅ WRAP EVERYTHING */}
            <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
                <DashboardSidebar />
                <SidebarInset className="min-h-0 min-w-0">
                    <main className="flex min-h-0 flex-1 flex-col">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}