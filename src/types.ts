import { z } from "zod";

export const formSchema = z.object({
  clientName: z.string(),
  clientDateOfBirth: z.coerce.date(),
  isClientAMinor: z.boolean().optional(),
  hasGuardian: z.coerce.boolean(),
  isInFosterCare: z.coerce.boolean(),
  fosterCareInfo: z.object({
    caseWorkerName: z.string(),
    caseWorkerPhone: z.string(),
    caseWorkerEmail: z.string(),
  }),
  primaryContact: z.object({
    name: z.string(),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
  }),
  insuranceProviderIsMedicaid: z.coerce.boolean(),
  primaryInsurance: z.object({
    policyholder: z.string(),
    insuredName: z.string(),
    insuredDOB: z.string(),
    insuredAddress: z.string(),
    insuredSSN: z.string(),
    insuredEmployer: z.string(),
    insurancePlan: z.string(),
    insuranceMemberID: z.string(),
    insuranceCopay: z.string(),
    insuranceDeductible: z.string(),
    requiresPreAuthorization: z.coerce.boolean(),
  }),
  secondaryInsurance: z.object({
    insurancePlan: z.string(),
    insuranceMemberID: z.string(),
    insuranceCopay: z.string(),
    insuranceDeductible: z.string(),
    requiresPreAuthorization: z.coerce.boolean(),
  })
});