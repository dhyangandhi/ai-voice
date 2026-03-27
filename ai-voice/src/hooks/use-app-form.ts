"use client";

import { createFormHookContexts } from "@tanstack/react-form";
import { createFormHook } from "@tanstack/react-form";

export const {
    fieldContext,
    formContext,
    useFieldContext,
    useFormContext,
} = createFormHookContexts();

export const {
    useAppForm,
    useTypedAppFormContext,
} = createFormHook({
    fieldContext,
    formContext,
    fieldComponents: {},
    formComponents: {},
})