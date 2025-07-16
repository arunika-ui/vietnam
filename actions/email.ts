"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "../utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  senderEmail,
  message,
}: {
  senderEmail: string;
  message: string;
}) {
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tripplanners@gmail.com",
      subject: "Message from promos.tripplanners.co.in/vietnam",
      replyTo: senderEmail,
      html: message,
    });

    console.log("message sent");
    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
}
