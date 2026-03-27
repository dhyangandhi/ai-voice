"use client";
import { useStore } from "@tanstack/react-form";
import { Textarea } from "@/components/ui/textarea";
import { COST_PER_UNIT, TEXT_MAX_LENGTH } from "../data/constants";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { ttsFormOptions } from "./text-to-speech-form";
import { GenerateButton } from "./gentrate-button";
export function TextInputPanel() {
    const form = useTypedAppFormContext(ttsFormOptions);
    const text = useStore(form.store, (s) => s.values.text);
    const isSubmitting = useStore(form.store, (s) => s.isSubmitting);
    const isvailt = useStore(form.store, (s) => s.isValid);
    return (
        <div className="flex flex-col h-full min-h-[200px]">
            <div className="flex-1 relative">
                <form.Field name="text">
                    {(field) => (
                <Textarea
                    value={text}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Start typing or paste your text here..."
                    maxLength={TEXT_MAX_LENGTH}
                    disabled={isSubmitting}
                    // ✅ ADD THESE
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"

                    className="absolute inset-0 w-full h-full resize-none border-0 bg-transparent p-4 text-base leading-relaxed shadow-none focus-visible:ring-0 focus-visible:outline-none caret-black"
                />
                )}
                </form.Field>
            </div>
            <div className="poninter-events-none absolute inset-x-0 botton-0 h-8 bg-linear-to-t from-background to-transparent" />
            <div className="shrink-0 p-4 lg:p-6">
                <div className="flex flex-col gap-3 lg:hidden">
                    <GenerateButton 
                        className="w-full"
                        disabled={isSubmitting}
                        isSubmitting={isSubmitting}
                        onSubmit={() => form.handleSubmit} 
                    
                    
                    />
                </div>
                {text.length > 0 ? (
                    <div className="hidden items-center justify-between lg:flex">
                        <Badge variant="outline"  className="gap1.5 border-dashed">
                            <Coins className="size-3 text-chart-5" />
                            <span className="text-xs">
                                <span className="tabular-nums">
                                    ${(text.length * COST_PER_UNIT).toFixed(4)}
                                </span>{""}
                                estimated
                            </span>
                        </Badge>
                        <div className="flex items-center gap-3">
                            <p className="text-xs tracking-tight">
                                {text.length.toLocaleString()} 
                                <span className="text-muted-foreground">
                                    &nbsp;/&nbsp;{TEXT_MAX_LENGTH.toLocaleString()} characters
                                </span>
                            </p>
                            <GenerateButton 
                                className="sm"
                                disabled={isSubmitting || !isvailt}
                                isSubmitting={isSubmitting}
                                onSubmit={() => form.handleSubmit()}
                            />
                        </div>
                    </div>
                    ) : (
                        <div className="hidden lg:block">
                            <p className="text-sm text-muted-foreground">
                                Get started by typing or pasting your text here
                            </p>
                        </div>
                    )}
            </div>
        </div>
    );
}