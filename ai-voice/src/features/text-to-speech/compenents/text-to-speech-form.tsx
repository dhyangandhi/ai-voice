"use client";

import { z } from "zod";
import { formOptions } from "@tanstack/react-form";
import { useAppForm } from "@/hooks/use-app-form";

const ttsFormSchema = z.object({
    text: z.string().min(1, "Please enter some text"),
    voiceId: z.string().min(1, "Plesae select a voice"),
    temperature: z.number(),
    topP: z.number(),
    topK: z.number(),
    repetitionPenalty: z.number(),
});

export type TTSFormValues = z.infer<typeof ttsFormSchema>;

export const defaultTTSValues: TTSFormValues = {
    text: "",
    voiceId: "",
    temperature: 0,
    topP: 0,
    topK: 0,
    repetitionPenalty: 1.2,
}

export const ttsFormOptions = formOptions({
    defaultValues: defaultTTSValues,
});

export function TextToSpeechForm({
    children,
    defaultValues,
}: {
    children: React.ReactNode;
    defaultValues?: TTSFormValues;
}) {
    const form = useAppForm({
        ...ttsFormOptions,
        defaultValues: defaultValues ?? defaultTTSValues,
        validators: {
            onSubmit: ttsFormSchema,
        },
        onSubmit: async (values) => {
            console.log(values);
        }
    })

    return <form.AppForm>{children}</form.AppForm>;
}