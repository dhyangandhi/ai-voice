export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
}

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a story",
        description: "",
        gradient: "from-cyan-500 to-blue-500",
        href: "/text-to-speech"
    }
]