// "use server";

// import React from "react";
// import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const myEmail: string = process.env.MY_EMAIL!;

// export const sendEmail = async (formData: FormData) => {

//   const message = formData.get("message");
//   const senderEmail = formData.get("senderEmail");
//   const senderName = formData.get("senderName")?.toString() || '';

//   /**
//    * isValidEmail() validates that the input email adheres to basic email address format criteria:
//    *  1. It must contain a non-empty local part before the "@" symbol.
//    *  2. It must contain a non-empty domain name part after the "@" symbol.
//    *  3. It must contain a non-empty top-level domain part after the "." symbol.
//    */
//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   if (!validateString(senderEmail, 500) || !isValidEmail(senderEmail)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   try {
//     data = await resend.emails.send({
//       // To Do: Update domain
//       from: "Contact Form <onboarding@resend.dev>",
//       to: myEmail,
//       subject: "👋 A Message from Your Portfolio Site Arrived",
//       reply_to: senderEmail,
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//         senderName: senderName
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };
