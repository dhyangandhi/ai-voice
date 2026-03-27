import { Headphones, ThumbsUp } from "lucide-react";
import  Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHeader({
    title,
    className,
}: {
    title: string;
    className?: string;
}) {
    return (
        <div 
            className={cn (
                "flex items-center justify-between border-b px-4 py-4",
                className,
            )}
        >
         <div className="flex itmes-center gap-2">
            <h1 className="text-xl font-semibold">{title}</h1>
         </div>
         <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
                <Link href="#">
                    <ThumbsUp />
                    <span className="sr-only">
                        Like
                    </span>
                </Link>
            </Button>
         </div>
        </div>
    )
}