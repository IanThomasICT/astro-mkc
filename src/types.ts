import { useForm } from "react-hook-form";
import { z } from "zod";

const USPhoneNumberPattern = /^(\d{3}-?\d{3}-?\d{4}|\d{10})$/;

const fosterCareSchema = z.object({
  caseWorkerName: z.string({ required_error: "*" }).min(1, "*"),
  caseWorkerPhone: z.string({ required_error: "*" }).min(1, "*").regex(USPhoneNumberPattern, "Provide a valid phone number"),
  caseWorkerEmail: z.string({ required_error: "*" }).min(1, "*").email("Requires a valid email"),
});

const insuranceSchema = z.object({
  policyholder: z.enum(["client", "parent"], { required_error: "*" }),
  insuredName: z.string({ required_error: "*" }).min(1, "*"),
  insuredDOB: z.string({ required_error: "*" }).min(1, "*"),
  insuredAddress: z.string({ required_error: "*" }).min(1, "*"),
  insuredSSN: z.string({ required_error: "*" }).min(1, "*"),
  insuredEmployer: z.string({ required_error: "*" }).min(1, "*"),
  insurancePlan: z.string({ required_error: "*" }).min(1, "*"),
  insuranceMemberID: z.string({ required_error: "*" }).min(1, "*"),
  insuranceCopay: z.string().or(z.literal("")).optional(),
  insuranceDeductible: z.string().or(z.literal("")).optional(),
  requiresPreAuthorization: z.boolean(),
});

export const formSchema = z.object({
  clientName: z.string({ required_error: "*" }).min(1, "*"),
  clientDateOfBirth: z.string({ required_error: "*" }).min(1, "*"),
  isClientAMinor: z.boolean(),
  hasGuardian: z.boolean(),
  isInFosterCare: z.boolean(),
  fosterCareInfo: fosterCareSchema.optional(),
  parentInfo: z.object({
    name: z.string({ required_error: "*" }).min(1, "*"),
    address: z.string({ required_error: "*" }).min(1, "*"),
    phone: z.string({ required_error: "*" }).min(1, "*").regex(USPhoneNumberPattern, "Provide a valid phone number"),
    email: z.string({ required_error: "*" }).min(1, "*").email("Requires a valid email"),
  }),
  // evaluationPurpose: z.string({required_error: "*"}),
  insuranceProviderIsMedicaid: z.boolean(),
  primaryInsurance: insuranceSchema.optional(),
  secondaryInsurance: z
    .object({
      insurancePlan: z.string({ required_error: "*" }).min(1, "*"),
      insuranceMemberID: z.string({ required_error: "*" }).min(1, "*"),
      insuranceCopay: z.string().or(z.literal("")),
      insuranceDeductible: z.string().or(z.literal("")),
      requiresPreAuthorization: z.boolean(),
    })
    .optional(),
});

export const defaultValues = {
  clientName: "",
  clientDateOfBirth: "",
  isClientAMinor: false,
  hasGuardian: false,
  isInFosterCare: false,
  parentInfo: {
    name: "",
    address: "",
    phone: "",
    email: "",
  },
  insuranceProviderIsMedicaid: true,
};

export type FormData = z.infer<typeof formSchema>;
export type FormType = ReturnType<typeof useForm<z.infer<typeof formSchema>>>;
export type FormKeys = keyof z.infer<typeof formSchema>;
