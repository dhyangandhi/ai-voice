"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DashboardHeader() {
    const { isLoaded, user } = useUser();

    return (
        <div className="flex items-start justify-between">
            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                    Nice to see you
                </p>
                <h1 className="text-2xl lg:text-3xl font-semibold">
                    {isLoaded ? (user?.fullName ?? user?.firstName ?? "therer"): "..."}
                </h1>
            </div>
        </div>
    )
}