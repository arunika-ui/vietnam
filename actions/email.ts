"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "../utils";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // Match field name from form: change to "email" if that’s what you're using
  const senderEmail = formData.get("email"); // previously "senderEmail"
  const message = formData.get("message");

  // Log input for debugging
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
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // You must verify this if using a custom domain
      to: "arunikajain22@gmail.com", // Owner's email
      subject: "Message from Vietnam Itinerary Form",
      replyTo: senderEmail as string,
      html: (message as string).replace(/\n/g, "<br/>"),
    });

    console.log("✅ Email sent successfully:", data);
    return { data };
  } catch (error: unknown) {
    console.error("❌ Failed to send email:", error);
    return { error: getErrorMessage(error) };
  }
};
