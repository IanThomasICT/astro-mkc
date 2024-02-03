import { FormData } from "@/app/evaluation-form/types";
import { toUSDateStr } from "@/lib/utils";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

export function EvaluationFormResults(formData: FormData) {
  return (
    <Html lang='en'>
      <Heading as='h3'>Form Details:</Heading>
      <Heading as='h4'>Client Info</Heading>
      <Text>
        Full Name: {formData.clientName.toString()}
        <br />
        Date Of Birth: {toUSDateStr(formData.clientDateOfBirth)}
        <br />
        Is A Minor: {formData.isClientAMinor.toString()}
        <br />
        Has Guardian: {formData.hasGuardian.toString()}
        <br />
        Is In Foster Care: {formData.isInFosterCare.toString()}
        <br />
        {formData.isInFosterCare && (
          <>
            Case Worker Name: {formData.fosterCareInfo?.caseWorkerName.toString()}
            <br />
            Case Worker Phone: {formData.fosterCareInfo?.caseWorkerPhone.toString()}
            <br />
            Case Worker Email: {formData.fosterCareInfo?.caseWorkerEmail.toString()}
          </>
        )}
      </Text>
      <Heading as='h4'>Parent Info</Heading>
      <Text>
        Parent Name: {formData.parentInfo.name.toString()}
        <br />
        Parent Address: {formData.parentInfo.address.toString()}
        <br />
        Parent Phone: {formData.parentInfo.phone.toString()}
        <br />
        Parent Email: {formData.parentInfo.email.toString()}
      </Text>
      <Heading as='h4'>Insurance Info</Heading>
      <Text>
        Insurance Provider Is Medicaid: {formData.insuranceProviderIsMedicaid.toString()}
        <br />
        {!formData.insuranceProviderIsMedicaid && (
          <>
            <strong>Primary Insurance</strong>
            <br />
            Policyholder: {formData.primaryInsurance?.policyholder.toString()}
            <br />
            Insured Name: {formData.primaryInsurance?.insuredName.toString()}
            <br />
            Insured DOB: {toUSDateStr(formData.primaryInsurance?.insuredDOB ?? "")}
            <br />
            Insured Address: {formData.primaryInsurance?.insuredAddress.toString()}
            <br />
            Insured SSN: {formData.primaryInsurance?.insuredSSN.toString()}
            <br />
            Insured Employer: {formData.primaryInsurance?.insuredEmployer.toString()}
            <br />
            Insurance Plan: {formData.primaryInsurance?.insurancePlan.toString()}
            <br />
            Insurance Member Id: {formData.primaryInsurance?.insuranceMemberID.toString()}
            <br />
            Insurance Copay: {formData.primaryInsurance?.insuranceCopay?.toString()}
            <br />
            Insurance Deductible: {formData.primaryInsurance?.insuranceDeductible?.toString()}
            <br />
            Requires Pre Authorization: {formData.primaryInsurance?.requiresPreAuthorization.toString()}
            <br />
            {formData.secondaryInsurance && (
              <>
                <strong>Secondary Insurance</strong>
                <br />
                Insurance Member Id: {formData.secondaryInsurance?.insuranceMemberID.toString()}
                <br />
                Insurance Copay: {formData.secondaryInsurance?.insuranceCopay?.toString()}
                <br />
                Insurance Deductible: {formData.secondaryInsurance?.insuranceDeductible?.toString()}
                <br />
                Requires Pre Authorization: {formData.secondaryInsurance?.requiresPreAuthorization.toString()}
                <br />
              </>
            )}
          </>
        )}
      </Text>
    </Html>
  );
}
