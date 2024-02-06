import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendMail(mailOptions: Mail.Options) {
  mailOptions.from = {
    name: "MKC Appointments",
    address: import.meta.env.NODEMAILER_SENDER,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.NODEMAILER_EMAIL,
      pass: import.meta.env.NODEMAILER_PW,
    },
  });

  // verify connection configuration
  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.error("Failed to establish nodemailer connection: " + error.message);
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
        console.error("Error occurred while sending email: " + error.message);
        console.error(error.toString());
        reject(error);
      } else {
        console.info("Email sent to " + mailOptions);
        resolve(info);
      }
    });
  });

  return true;
}
