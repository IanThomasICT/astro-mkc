"use client";

import { FormData, FormKeys, FormType, defaultValues, formSchema } from "@/app/evaluation-form/types";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Spacer from "@/components/ui/spacer";
import { useToast } from "@/components/ui/use-toast";
import { MultistepFormType, useMultiplestepForm } from "@/hooks/useMultistepForm";
import { cn, toTitleCase } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2, XIcon } from "lucide-react";
import { Dispatch, HTMLInputTypeAttribute, ReactNode, SetStateAction, useState } from "react";
import { Control, FieldErrors, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { log } from "next-axiom";
import Link from "next/link";

export default function EvaluationForm({ className }: { className?: string }) {
  const multistepForm = useMultiplestepForm(3);
  // multistepForm.showSuccessMsg = true;

  return (
    <div className='flex h-full flex-col border border-border/10 bg-background shadow drop-shadow-lg md:rounded-lg lg:flex-row'>
      <AnimatePresence>
        {multistepForm.showSuccessMsg ? (
          <motion.div className='h-full grow space-y-8 bg-background py-10 text-center font-sans lg:rounded-lg lg:py-36' variants={formVariants} initial='hidden' animate='visible' exit='exit'>
            <h1 className='text-3xl'>Thank you for submitting the evaluation form!</h1>
            <p className='text-balance mx-auto w-4/5 text-lg italic'>We will look over the information and reach out soon with more information regarding your requested psychological evaluation.</p>
            <CheckCircle className='mx-auto h-28 w-28 rounded-full text-green-700' />
            <Link href='/' className='block'>
              <Button className='border-neutral-200' variant={"outline"}>
                Back to Home
              </Button>
            </Link>
          </motion.div>
        ) : (
          <>
            <motion.div
              id='sidebar'
              className='border-b border-neutral-200/60 bg-blue-300/20 p-3 px-6 shadow-inner lg:h-full lg:max-w-fit lg:rounded-l-lg lg:border-r lg:bg-primary/90 lg:px-3 lg:shadow-neutral-800'>
              <h2 className='py-1 text-center text-xl font-semibold lg:hidden'>Evaluation Form</h2>
              <div className='flex min-h-[3rem] items-center justify-evenly gap-2 md:gap-8 lg:mt-20 lg:flex-col lg:items-start'>
                <SectionLink label='Client' step={1} active={multistepForm.currentStepIndex === 0} onClick={() => multistepForm.goTo(0)} />
                <div className='h-[1px] w-full bg-neutral-400/50 sm:hidden' />
                <SectionLink label='Contact' step={2} active={multistepForm.currentStepIndex === 1} onClick={() => multistepForm.goTo(1)} />
                <div className='h-[1px] w-full bg-neutral-400/50 sm:hidden' />
                <SectionLink label='Insurance' step={3} active={multistepForm.currentStepIndex === 2} onClick={() => multistepForm.goTo(2)} />
              </div>
            </motion.div>
            <MultistepForm multistepForm={multistepForm} className='h-full w-full grow bg-background px-8 py-4 font-sans lg:rounded-r-lg lg:px-10 lg:pb-8 lg:pt-6' />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const SectionLink = ({ step, label, active, onClick }: { step: number; label: string; active: boolean; onClick: () => void }) => (
  <button className={cn("group flex h-fit items-center gap-3 whitespace-nowrap text-xs text-neutral-800 lg:px-4 lg:text-base lg:text-white", active ? "font-bold" : "")} onClick={onClick}>
    <span
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.6rem] lg:h-8 lg:w-8 lg:text-white",
        active
          ? "border-neutral-700/20 bg-green-600/60 text-neutral-700 shadow-black drop-shadow-2xl backdrop-brightness-200 lg:border-green-300 lg:text-white"
          : "border-neutral-400/30 text-neutral-500 shadow-inner shadow-neutral-400/50 lg:border-white/10 lg:text-white lg:shadow-neutral-800",
      )}>
      {step}
    </span>
    <span className='leading-none underline-offset-4 lg:hover:underline'>{label}</span>
  </button>
);

type FormProps = {
  className?: string;
  multistepForm: MultistepFormType;
};

function MultistepForm({ className, multistepForm }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const { toast } = useToast();

  const { isInFosterCare, insuranceProviderIsMedicaid, primaryInsurance, secondaryInsurance } = useWatch({
    control: form.control,
  });

  const { previousStep, nextStep, currentStepIndex, isFirstStep, isLastStep, markAsSubmitted } = multistepForm;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    log.info("Submitting form", values);
    const result = await emailFormData(values);
    if (result.status == 500) {
      toast({
        title: "There was an issue submitting your form.",
        variant: "destructive",
        description: "Please review all the fields and try again. Thank you!",
      });
    } else {
      toast({
        title: "Your form was submitted successfully.",
      });
      markAsSubmitted();
    }

    return;
  };

  const onInvalid = (err: FieldErrors) => {
    log.info("Invalid form", err);
  };

  const moveToNextStep = () => {
    switch (currentStepIndex) {
      case 0:
        let fieldsToValidate: FormKeys[] = ["clientName", "clientDateOfBirth", "isClientAMinor", "hasGuardian", "isInFosterCare"];
        isInFosterCare ? (fieldsToValidate = [...fieldsToValidate, "fosterCareInfo"]) : form.setValue("fosterCareInfo", undefined);

        form.trigger(fieldsToValidate).then((valid) => {
          if (valid) {
            form.clearErrors();
            nextStep();
          }
        });
        return;
      case 1:
        form.trigger("parentInfo").then((valid) => {
          if (valid) {
            form.clearErrors();
            nextStep();
          }
        });
        return;
      case 2:
        if (!insuranceProviderIsMedicaid) {
          let fieldsToValidate: FormKeys[] = ["insuranceProviderIsMedicaid", "primaryInsurance"];
          addedSecondaryInsurance ? (fieldsToValidate = [...fieldsToValidate, "secondaryInsurance"]) : form.setValue("secondaryInsurance", undefined);
          form.trigger(fieldsToValidate).then((valid) => {
            if (valid) {
              form.clearErrors();
              form.handleSubmit(onSubmit, onInvalid)();
            }
          });
          return;
        }
        if (primaryInsurance) form.setValue("primaryInsurance", undefined);
        if (secondaryInsurance) form.setValue("secondaryInsurance", undefined);

        form.handleSubmit(onSubmit, onInvalid)();
        break;
    }
  };

  // Used for validation on Insurance page
  const useSecondaryInsurance = useState(false);
  const [addedSecondaryInsurance] = useSecondaryInsurance;

  return (
    <>
      <div className={className}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className='flex h-full w-full flex-col'>
            <AnimatePresence mode='wait'>
              <div className='mb-10 shrink'>
                {currentStepIndex === 0 && <ClientInfo form={form} />}
                {currentStepIndex === 1 && <ParentInfo form={form} />}
                {currentStepIndex === 2 && <InsuranceInfo form={form} useSecondaryInsurance={useSecondaryInsurance} />}
              </div>
            </AnimatePresence>
            <Spacer />

            <div className='flex w-full items-center justify-between'>
              <div className=''>
                <Button onClick={previousStep} type='button' variant='outline' className={`${isFirstStep ? "invisible" : "visible hover:bg-neutral-300"}`}>
                  Go Back
                </Button>
              </div>
              <div className='flex items-center'>
                <div className='after:shadow-highlight relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:transition'>
                  {isLastStep ? (
                    <Button type='button' variant='secondary' className='relative flex gap-2 border shadow-input' onClick={moveToNextStep}>
                      <Loader2 className={form.formState.isSubmitting ? "h-4 w-4 animate-spin" : "hidden"} /> Confirm
                    </Button>
                  ) : (
                    <Button type='button' variant='default' className='relative border shadow-input' onClick={moveToNextStep}>
                      Next Step
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

type FormWrapperProps = {
  className?: string;
  title?: string;
  children: ReactNode;
};

const formVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "easeOut",
    },
  },
};

const FormWrapper = ({ children, className, title }: FormWrapperProps) => {
  return (
    <div>
      <h2 className='hidden text-2xl font-semibold md:text-4xl lg:mb-4 lg:block'>Evaluation Form</h2>
      {title && <h2 className='text-base font-medium md:text-xl'>{title}</h2>}
      <motion.div className={cn("flex flex-col gap-2 py-4", className)} variants={formVariants} initial='hidden' animate='visible' exit='exit'>
        {children}
      </motion.div>
    </div>
  );
};

const ClientInfo = (form: FormType) => {
  const { isInFosterCare } = useWatch({
    control: form.control,
  });

  return (
    <FormWrapper title='Client Information'>
      <div className='grid gap-4 lg:grid-cols-2'>
        <FormInput fieldName='clientName' control={form.control} />
        <FormInput fieldName='clientDateOfBirth' label='Date of Birth' type='date' control={form.control} />
      </div>
      <BooleanInput fieldName='isClientAMinor' label='Is the client a minor?' control={form.control} />
      <BooleanInput fieldName='hasGuardian' label='Does the client have a guardian?' control={form.control} />
      <BooleanInput fieldName='isInFosterCare' label='Is the client currently in foster care?' control={form.control} />
      {isInFosterCare && (
        <motion.div variants={formVariants} initial='hidden' animate='visible' exit='exit' className='max-w-xs'>
          <h2 className='mt-4 text-base font-medium md:text-xl'>Foster Care Information</h2>
          <FormInput fieldName='fosterCareInfo.caseWorkerName' label='Case Worker Name' control={form.control} />
          <FormInput fieldName='fosterCareInfo.caseWorkerPhone' label='Case Worker Phone' type='tel' control={form.control} />
          <FormInput fieldName='fosterCareInfo.caseWorkerEmail' label='Case Worker Email' type='email' control={form.control} />
        </motion.div>
      )}
    </FormWrapper>
  );
};

const ParentInfo = (form: FormType) => (
  <FormWrapper title='Parent Information' className='max-w-xs'>
    <div className='h-fit'>
      <FormInput fieldName='parentInfo.name' label='Name' control={form.control} />
      <FormInput fieldName='parentInfo.address' label='Address' control={form.control} />
      <FormInput fieldName='parentInfo.phone' label='Phone' type='tel' control={form.control} />
      <FormInput fieldName='parentInfo.email' label='Email' type='email' control={form.control} />
    </div>
  </FormWrapper>
);

const InsuranceInfo = ({ useSecondaryInsurance, form }: { form: FormType; useSecondaryInsurance: [boolean, Dispatch<SetStateAction<boolean>>] }) => {
  const { insuranceProviderIsMedicaid } = useWatch({
    control: form.control,
  });

  const [addedSecondaryInsurance, addSecondaryInsurance] = useSecondaryInsurance;

  const deviceWidth = window ? window.innerWidth : 400;
  const isLargeDevice = deviceWidth > 500;

  return (
    <FormWrapper title='Insurance Information'>
      <BooleanInput fieldName='insuranceProviderIsMedicaid' label='Is your provider Medicaid?' control={form.control} />
      {!insuranceProviderIsMedicaid && (
        <>
          <h3 className='border-b py-4 pr-4 text-lg font-medium md:text-xl'>Primary Insurance</h3>
          <motion.div variants={formVariants} initial='hidden' animate='visible' exit='exit' className='grid max-w-xs gap-3 lg:max-w-sm'>
            <FormField
              name='primaryInsurance.policyholder'
              control={form.control}
              render={({ field }) => (
                <FormItem className='flex items-center gap-6'>
                  <FormLabel className='min-w-[7rem] text-sm lg:text-base'>Policyholder</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='h-7 border border-border/30 text-sm'>
                        <SelectValue placeholder='---' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='text-sm'>
                      <SelectItem value='client'>Client</SelectItem>
                      <SelectItem value='parent'>Parent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormInput fieldName='primaryInsurance.insuredName' className='text-sm' oneLine={isLargeDevice} label='Insured Name' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuredDOB' className='text-sm' oneLine={isLargeDevice} label='Insured DOB' type='date' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuredAddress' className='text-sm' oneLine={isLargeDevice} label='Insured Address' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuredSSN' className='text-sm' oneLine={isLargeDevice} label='Insured SSN' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuredEmployer' className='text-sm' oneLine={isLargeDevice} label='Insured Employer' control={form.control} />
            <FormInput fieldName='primaryInsurance.insurancePlan' className='text-sm' oneLine={isLargeDevice} label='Insurance Plan' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuranceMemberID' className='text-sm' oneLine={isLargeDevice} label='Member ID' inputMode='numeric' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuranceCopay' className='text-sm' oneLine={isLargeDevice} label='Copay' inputMode='numeric' control={form.control} />
            <FormInput fieldName='primaryInsurance.insuranceDeductible' className='text-sm' oneLine={isLargeDevice} label='Deductible' inputMode='numeric' control={form.control} />
            <FormInput fieldName='primaryInsurance.requiresPreAuthorization' className='text-sm' oneLine label='Requires Pre-Authorization?' type='checkbox' control={form.control} />

            {addedSecondaryInsurance ? (
              <motion.div variants={formVariants} initial='hidden' animate='visible' exit='exit' className='grid gap-3'>
                <h3 className='inline-flex justify-between border-b py-4 text-lg font-medium md:text-xl'>
                  Secondary Insurance{" "}
                  <button onClick={() => addSecondaryInsurance(false)}>
                    <XIcon className='h-4 w-4 text-neutral-500 hover:text-neutral-900' />
                  </button>
                </h3>
                <FormInput fieldName='secondaryInsurance.insurancePlan' className='text-sm' oneLine={isLargeDevice} label='Insurance Plan' control={form.control} />
                <FormInput fieldName='secondaryInsurance.insuranceMemberID' className='text-sm' oneLine={isLargeDevice} label='Member ID' inputMode='numeric' control={form.control} />
                <FormInput fieldName='secondaryInsurance.insuranceCopay' className='text-sm' oneLine={isLargeDevice} label='Copay' inputMode='numeric' control={form.control} />
                <FormInput fieldName='secondaryInsurance.insuranceDeductible' className='text-sm' oneLine={isLargeDevice} label='Deductible' inputMode='numeric' control={form.control} />
                <FormInput fieldName='secondaryInsurance.requiresPreAuthorization' className='text-sm' oneLine label='Requires Pre-Authorization?' type='checkbox' control={form.control} />
              </motion.div>
            ) : (
              <Button
                variant={"outline"}
                size={"lg"}
                className='my-4 max-w-fit border-border/30 bg-accent/20 shadow hover:bg-accent/20 lg:bg-background'
                type='button'
                onClick={() => addSecondaryInsurance(true)}>
                Add Secondary Insurance
              </Button>
            )}
          </motion.div>
        </>
      )}
    </FormWrapper>
  );
};

const FormInput = ({
  fieldName,
  label,
  control,
  type,
  className,
  oneLine,
  inputMode,
}: {
  fieldName: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  control: Control<z.infer<typeof formSchema>>;
  className?: string;
  oneLine?: boolean;
  inputMode?: HTMLInputElement["inputMode"];
}) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className={cn("flex w-full", oneLine ? "items-center gap-6 sm:whitespace-nowrap" : "flex-col gap-2 py-1 text-lg", className)}>
            <FormLabel className={cn("flex items-center gap-2 lg:text-base", oneLine ? "min-w-[7rem]" : "")}>
              {label ?? toTitleCase(fieldName)} <FormMessage />
            </FormLabel>
            <FormControl className='block'>
              <Input
                {...field}
                className={cn("border-border/30", oneLine ? "max-h-7" : "max-h-8", type === "checkbox" ? "h-fit max-w-fit scale-110" : "")}
                type={type ?? "text"}
                inputMode={inputMode ?? "text"}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

const BooleanInput = ({ fieldName, label, control, className }: { fieldName: string; label?: string; control: Control<z.infer<typeof formSchema>>; className?: string }) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className={cn("mb-1 space-y-2 text-lg", className)}>
            <FormLabel className='md:text-base'>{label ?? toTitleCase(fieldName)}</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={(e) => field.onChange(e === "true")} defaultValue={field.value?.toString()} className='flex gap-4'>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value={"true"} />
                  </FormControl>
                  <FormLabel className='font-normal'>Yes</FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value={"false"} />
                  </FormControl>
                  <FormLabel className='font-normal'>No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

async function emailFormData(data: FormData) {
  const apiEndpoint = "/api/email";
  log.info("emailing form data");
  return (await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json())) as { message: string; status: number };
}
