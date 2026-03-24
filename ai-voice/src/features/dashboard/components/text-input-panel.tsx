"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// ❌ removed broken custom Textarea
// import { Textarea } from "@/components/ui/textarea";
import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";

export function TextInputPanel() {
    const [text, setText] = useState("");
    const router = useRouter();

    const handleGenerate = () => {
        const trimmed = text.trim();
        if (!trimmed) return;

        router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`);
    };

    return (
        <div className="relative z-50 rounded-[22px] bg-gradient-to-br from-[#ff8ee3] via-[#57d7e0] to-[#dbf1f2] p-[2px] shadow-[0_0_0_4px_white]">
            <div className="rounded-[20px] bg-[#F9F9F9] p-1">
                <div className="space-y-4 rounded-2xl bg-white p-4">
                    
                    {/* ✅ SAFE TEXTAREA (WORKS 100%) */}
                    <textarea
                        placeholder="Start typing or paste your text here..."
                        className="w-full min-h-[140px] resize-none border-0 bg-transparent p-0 outline-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={TEXT_MAX_LENGTH}
                    />

                </div>

                <div className="flex items-center justify-between">
                    <Badge variant="outline" className="gap-1.5 border-dashed">
                        <Coins className="size-3 text-chart-5" />
                        <span className="text-xs">
                            {text.length === 0 ? (
                                "Start typing"
                            ) : (
                                <>
                                    <span className="tabular-nums">
                                        ${(text.length * 0.0003).toFixed(4)}
                                    </span>{" "}
                                    estimated
                                </>
                            )}
                        </span>
                    </Badge>

                    <span className="text-sm text-muted-foreground">
                        {text.length.toLocaleString()} /{" "}
                        {TEXT_MAX_LENGTH.toLocaleString()} characters
                    </span>
                </div>

                <div className="flex items-center justify-end p-3">
                    <Button
                        size="sm"
                        disabled={!text.trim()}
                        onClick={handleGenerate}
                        className="w-full lg:w-auto"
                    >
                        Generate Speech
                    </Button>
                </div>
            </div>
        </div>
    );
}