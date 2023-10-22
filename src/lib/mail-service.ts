import { log } from "next-axiom";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendMail(mailOptions: Mail.Options) {
  mailOptions.from = {
    name: "MKC Appointments",
    address: env.NODEMAILER_SENDER,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.NODEMAILER_EMAIL,
      pass: env.NODEMAILER_PW,
    },
  });

  // verify connection configuration
  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        log.error("Failed to establish nodemailer connection: " + error.message);
        reject(error);
      } else {
        console.log("Mailer server is ready to receive message");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        log.error("Error occurred while sending email: " + error.message);
        log.error(error.toString());
        reject(error);
      } else {
        log.info("Email sent to " + mailOptions);
        resolve(info);
      }
    });
  });

  return true;
}
