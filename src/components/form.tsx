import { Input } from "@/components/ui/input";
import { cn, toTitleCase } from "@/lib/utils";
import { Label } from "./ui/label";

import React from "react";


export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fieldName: string;
    oneLine?: boolean;
    label?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ fieldName, oneLine, label, type, className, ...props }, ref) => {
    return (
        <div className={cn("flex w-full", oneLine ? "items-center gap-6 sm:whitespace-nowrap" : "flex-col gap-1 text-lg", className)}>
            <Label className={cn("flex items-center gap-2 lg:text-base", oneLine ? "min-w-[7rem]" : "")}>
                {label ?? toTitleCase(fieldName)}
            </Label>
            <Input name={fieldName} className={cn("border-border/30", oneLine ? "max-h-7" : "max-h-8", type === "checkbox" ? "h-fit max-w-fit scale-110" : "")} type={type ?? "text"} {...props} />
        </div>
    );
});


type FieldProps = {
    fieldName: string
    label?: string
    className?: string
    value?: boolean
    onChange?: (b: boolean) => void
    defaultValue?: string
}

export const BooleanInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ fieldName, oneLine, label, type, className, inputMode, ...props }, ref) => {
    return (
        <div className={cn("flex items-center mb-1 gap-4 text-lg", className)}>
            <Label className='md:text-base'>{label ?? toTitleCase(fieldName)}</Label>
            <fieldset className="inline-flex gap-2" >
                <input name={fieldName} type="radio" className="accent-primary" value="true" />
                <Label className='text-base leading-1 pr-2'>Yes</Label>
                <input name={fieldName} type="radio" className="accent-primary" value="false" defaultChecked />
                <Label className='text-base leading-1'>No</Label>
            </fieldset>
        </div>
    )
});

export function SelectInput({ fieldName, label, className, onChange, value }: FieldProps) {
    return (
        <>
            <Label className='min-w-[7rem] text-sm lg:text-base'>Policyholder</Label>
            {/* <Select name={fieldName} >
                <SelectTrigger className='h-7 border border-border/30 text-sm'>
                <SelectValue placeholder='---' />
                </SelectTrigger>
                <SelectContent className='text-sm'>
                <SelectItem value='client'>Client</SelectItem>
                <SelectItem value='parent'>Parent</SelectItem>
                </SelectContent>
            </Select> */}
        </>
    )
}