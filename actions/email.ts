"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "../utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  // Log for debugging
  console.log("Received email:", senderEmail);
  console.log("Message preview:", message?.toString().slice(0, 100));

  // Validation
  if (!validateString(senderEmail, 500)) {
    console.error("Invalid sender email");
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    console.error("Invalid message");
    return { error: "Invalid message" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 465,
      secure: true, // Use TLS
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY, // Must be defined in your `.env`
      },
    });

    const mailOptions = {
      from: "Contact Form <onboarding@resend.dev>", // still works without domain verification
      to: "tripplanners@gmail.com",
      subject: "Message from Vietnam Itinerary Form",
      replyTo: senderEmail as string,
      html: (message as string).replace(/\n/g, "<br/>"),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return { success: true };
  } catch (error: any) {
    console.error("❌ SMTP error:", error);
    return { error: getErrorMessage(error) };
  }
};
