"use client";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, UserButton, useClerk } from "@clerk/nextjs";
import { LucideIcon } from "lucide-react";
import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { 
    Home,
    LayoutGrid,
    AudioLines,
    Volume2,
    Settings2,
    Headphones,
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
    title: string;
    url?: string;
    icon: LucideIcon,
    onClick?: () => void;
}

interface NavSectionProps {
    label?: string;
    items: MenuItem[];
    pathname: string;
};
function NavSection({ label, items, pathname }: NavSectionProps) {
    return (
        <SidebarGroup>
            {label && (
                <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
                    {label}
                </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild={!!item.url}
                                isActive={
                                    item.url
                                        ? item.url === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(item.url)
                                        : false

                                }
                                onClick={item.onClick}
                                tooltip={item.title}
                            >
                                {item.url ? (
                                    <Link href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export function DashboardSidebar() {
    const pathname = usePathname();
    const clerk = useClerk();

    const mainMenuItems: MenuItem[] = [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
        },
        {
            title: "Explore voices",
            url: "/voices",
            icon: LayoutGrid,   
        },
        {
            title: "Text to speech",
            url: "/text-to-speech",
            icon: AudioLines,
        },
        {
            title: "Voice cloning",
            icon: Volume2,
        },
    ];
    const othersMenuItems: MenuItem[] = [
        {
            title: "Settings",
            icon: Settings2,
            onClick: () => clerk.openOrganizationProfile(),
        },
        {
            title: "Help and support",
            url: "#",
            icon: Headphones,
        },
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2 pl-1 gruop-data-[collapsible-icon]: justify-center group-data-[collapslble=icon]: pl-0">
                    <Image
                        src="/logoipsum-424.svg"
                        alt="Ai-voice"
                        width={24}
                        height={24}
                        className="rounded-sm"
                    />
                    <span className="group-data-[collapsilble=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">
                        Ai-voice
                    </span>
                    <SidebarTrigger className="ml-auto lig:hidden" />
                </div>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <OrganizationSwitcher hidePersonal/>
                    </SidebarMenuItem>    
                </SidebarMenu> 
            </SidebarHeader>
            <div className="border-b border-dashned border-border" />
            <SidebarContent>
                <NavSection items={mainMenuItems} pathname={pathname} />
                <NavSection items={othersMenuItems} pathname={pathname} />
            </SidebarContent>
            <SidebarFooter className="gap-3 py-3">
                <SidebarMenuItem>
                    <UserButton />
                </SidebarMenuItem>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

