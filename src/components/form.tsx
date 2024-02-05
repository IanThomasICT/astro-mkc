import { Input } from "@/components/ui/input";
import { cn, toTitleCase } from "@/lib/utils";
import type { HTMLInputTypeAttribute, ReactNode } from "react";
import { Button } from "./ui/button";
import { FormMessage } from "./ui/form";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import XIcon from '@/assets/icons/x.svg';
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React from "react";

type FormWrapperProps = {
    className?: string;
    title?: string;
    children: ReactNode;
};

const FormWrapper = ({ children, className, title }: FormWrapperProps) => {
    return (
        <div>
            <h2 className='hidden text-2xl font-semibold md:text-4xl lg:mb-4 lg:block'>Evaluation Form</h2>
            {title && <h2 className='text-base font-medium md:text-xl'>{title}</h2>}
            <div className={cn("flex flex-col gap-2 py-4", className)}>
                {children}
            </div>
        </div>
    );
};

// type FormInputProps = {
//     label?: string
//     type?: HTMLInputTypeAttribute
//     className?: string
//     inputMode?: HTMLInputElement["inputMode"]
// }

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fieldName: string;
    oneLine?: boolean;
    label?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({  fieldName, oneLine, label, type, className, inputMode, ...props }, ref) => {
    return (
        <div className={cn("flex w-full", oneLine ? "items-center gap-6 sm:whitespace-nowrap" : "flex-col gap-1 text-lg", className)}>
            <Label className={cn("flex items-center gap-2 lg:text-base", oneLine ? "min-w-[7rem]" : "")}>
                {label ?? toTitleCase(fieldName)}
            </Label>
            <Input name={fieldName} className={cn("border-border/30", oneLine ? "max-h-7" : "max-h-8", type === "checkbox" ? "h-fit max-w-fit scale-110" : "")} type={type ?? "text"} inputMode={inputMode ?? "text"} />
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

export const BooleanInput = React.forwardRef<HTMLInputElement, FormInputProps>(({  fieldName, oneLine, label, type, className, inputMode, ...props }, ref) => {
    return (
        <div className={cn("flex items-center mb-1 gap-4 text-lg", className)}>
            <Label className='md:text-base'>{label ?? toTitleCase(fieldName)}</Label>
            <fieldset className="inline-flex gap-2" >
                <input name={fieldName} type="radio" className="accent-primary" value="true" />
                <Label className='text-base leading-1 pr-2'>Yes</Label>
                <input name={fieldName} type="radio" className="accent-primary" value="false" defaultChecked/>
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


// const ClientInfo = () => {
    //     const isInFosterCare = true;
    
    //     return (
    //         <FormWrapper title='Client Information'>
    //             <div className='grid gap-4 lg:grid-cols-2'>
    //                 <FormInput fieldName='clientName' />
    //                 <FormInput fieldName='clientDateOfBirth' label='Date of Birth' type='date' />
    //             </div>
    //             <BooleanInput fieldName='isClientAMinor' label='Is the client a minor?' />
    //             <BooleanInput fieldName='hasGuardian' label='Does the client have a guardian?' />
    //             <BooleanInput fieldName='isInFosterCare' label='Is the client currently in foster care?' />
    //             {isInFosterCare && (
    //                 <div className='max-w-xs'>
    //                     <h2 className='mt-4 text-base font-medium md:text-xl'>Foster Care Information</h2>
    //                     <FormInput fieldName='fosterCareInfo.caseWorkerName' label='Case Worker Name' />
    //                     <FormInput fieldName='fosterCareInfo.caseWorkerPhone' label='Case Worker Phone' type='tel' />
    //                     <FormInput fieldName='fosterCareInfo.caseWorkerEmail' label='Case Worker Email' type='email' />
    //                 </div>
    //             )}
    //         </FormWrapper>
    //     );
    // };
    
    // const ParentInfo = () => (
    //     <FormWrapper title='Parent Information' className='max-w-xs'>
    //         <div className='h-fit'>
    //             <FormInput fieldName='parentInfo.name' label='Name' />
    //             <FormInput fieldName='parentInfo.address' label='Address' />
    //             <FormInput fieldName='parentInfo.phone' label='Phone' type='tel' />
    //             <FormInput fieldName='parentInfo.email' label='Email' type='email' />
    //         </div>
    //     </FormWrapper>
    // );
    
    // const InsuranceInfo = ({ useSecondaryInsurance, form }: { form: FormType; useSecondaryInsurance: [boolean, Dispatch<SetStateAction<boolean>>] }) => {
    //     const insuranceProviderIsMedicaid = false;
    
    //     const [addedSecondaryInsurance, addSecondaryInsurance] = useSecondaryInsurance;
    
    //     const deviceWidth = window ? window.innerWidth : 400;
    //     const isLargeDevice = deviceWidth > 500;
    
    //     return (
    //         <FormWrapper title='Insurance Information'>
    //             <BooleanInput fieldName='insuranceProviderIsMedicaid' label='Is your provider Medicaid?' />
    //             {!insuranceProviderIsMedicaid && (
    //                 <>
    //                     <h3 className='border-b py-4 pr-4 text-lg font-medium md:text-xl'>Primary Insurance</h3>
    //                     <div className='grid max-w-xs gap-3 lg:max-w-sm'>
    //                         <div className='flex items-center gap-6'>
    //                             <Label className='min-w-[7rem] text-sm lg:text-base'>Policyholder</Label>
    //                             <Select name='primaryInsurance.policyholder' onValueChange={field.onChange} defaultValue={field.value}>
    //                                 <SelectTrigger className='h-7 border border-border/30 text-sm'>
    //                                     <SelectValue placeholder='---' />
    //                                 </SelectTrigger>
    //                                 <SelectContent className='text-sm'>
    //                                     <SelectItem value='client'>Client</SelectItem>
    //                                     <SelectItem value='parent'>Parent</SelectItem>
    //                                 </SelectContent>
    //                             </Select>
    //                         </div>
    //                         <FormInput fieldName='primaryInsurance.insuredName' className='text-sm' oneLine={isLargeDevice} label='Insured Name' />
    //                         <FormInput fieldName='primaryInsurance.insuredDOB' className='text-sm' oneLine={isLargeDevice} label='Insured DOB' type='date' />
    //                         <FormInput fieldName='primaryInsurance.insuredAddress' className='text-sm' oneLine={isLargeDevice} label='Insured Address' />
    //                         <FormInput fieldName='primaryInsurance.insuredSSN' className='text-sm' oneLine={isLargeDevice} label='Insured SSN' />
    //                         <FormInput fieldName='primaryInsurance.insuredEmployer' className='text-sm' oneLine={isLargeDevice} label='Insured Employer' />
    //                         <FormInput fieldName='primaryInsurance.insurancePlan' className='text-sm' oneLine={isLargeDevice} label='Insurance Plan' />
    //                         <FormInput fieldName='primaryInsurance.insuranceMemberID' className='text-sm' oneLine={isLargeDevice} label='Member ID' inputMode='numeric' />
    //                         <FormInput fieldName='primaryInsurance.insuranceCopay' className='text-sm' oneLine={isLargeDevice} label='Copay' inputMode='numeric' />
    //                         <FormInput fieldName='primaryInsurance.insuranceDeductible' className='text-sm' oneLine={isLargeDevice} label='Deductible' inputMode='numeric' />
    //                         <FormInput fieldName='primaryInsurance.requiresPreAuthorization' className='text-sm' oneLine label='Requires Pre-Authorization?' type='checkbox' />
    
    //                         {addedSecondaryInsurance ? (
    //                             <div className='grid gap-3'>
    //                                 <h3 className='inline-flex justify-between border-b py-4 text-lg font-medium md:text-xl'>
    //                                     Secondary Insurance{" "}
    //                                     <button onClick={() => addSecondaryInsurance(false)}>
    //                                         <img src={XIcon.src} className='h-4 w-4 text-neutral-500 hover:text-neutral-900' />
    //                                     </button>
    //                                 </h3>
    //                                 <FormInput fieldName='secondaryInsurance.insurancePlan' className='text-sm' oneLine={isLargeDevice} label='Insurance Plan' />
    //                                 <FormInput fieldName='secondaryInsurance.insuranceMemberID' className='text-sm' oneLine={isLargeDevice} label='Member ID' inputMode='numeric' />
    //                                 <FormInput fieldName='secondaryInsurance.insuranceCopay' className='text-sm' oneLine={isLargeDevice} label='Copay' inputMode='numeric' />
    //                                 <FormInput fieldName='secondaryInsurance.insuranceDeductible' className='text-sm' oneLine={isLargeDevice} label='Deductible' inputMode='numeric' />
    //                                 <FormInput fieldName='secondaryInsurance.requiresPreAuthorization' className='text-sm' oneLine label='Requires Pre-Authorization?' type='checkbox' />
    //                             </div>
    //                         ) : (
    //                             <Button
    //                                 variant={"outline"}
    //                                 size={"lg"}
    //                                 className='my-4 max-w-fit border-border/30 bg-accent/20 shadow hover:bg-accent/20 lg:bg-background'
    //                                 type='button'
    //                                 onClick={() => addSecondaryInsurance(true)}>
    //                                 Add Secondary Insurance
    //                             </Button>
    //                         )}
    //                     </div>
    //                 </>
    //             )}
    //         </FormWrapper>
    //     );
    // };
    