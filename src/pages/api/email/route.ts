import { NextResponse } from "next/server";
import { formSchema } from "../../evaluation-form/types";
import { sendMail } from "@/lib/mail-service";
import { render } from "@react-email/render";
import { EvaluationFormResults } from "@/lib/config/email-templates";
import { env } from "@/env.mjs";

function cleanString(str: string) {
  const badTokens = "(content-type|bcc:|to:|cc:|href)";
  return str.replaceAll(badTokens, "");
}
// const emailTo = "marcia@mkc-services.com";
const emailTo = env.NODEMAILER_EMAIL;
const emailSubject = "New Appointment - ";
const emailBody = "Form details below.\n\n";

// email_message += "First Name: ".clean_string(first_name)."\n";
// email_message += "Last Name: ".clean_string(last_name)."\n";
// email_message += "Email: ".clean_string(email_from)."\n";
// email_message += "Telephone: ".clean_string(telephone)."\n";
// email_message += "Address: ".clean_string(address)."\n";
// email_message += "Comments: ".clean_string(comments)."\n";

export async function POST(request: Request, res: NextResponse) {
  const formData = await request.json();

  const result = formSchema.safeParse(formData);
  if (!result.success) {
    console.error("Failed to parse data: " + result.error.message, result.error);
    return NextResponse.json({ error: "Failed to parse data: " + result.error.message }, { status: 500 });
  }

  const data = result.data;

  const emailHTML = render(EvaluationFormResults(data));

  try {
    await sendMail({
      to: emailTo,
      subject: emailSubject + data.clientName,
      html: emailHTML,
    });
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
