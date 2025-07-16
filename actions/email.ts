"use server";

import { Resend } from "resend";
import { z } from "zod";
import { getErrorMessage } from "../utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  senderEmail: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .regex(/^[\d\s()+-]+$/, "Phone must contain only numbers, spaces, +, -, or ()"),
  message: z.string().min(10, "Message is too short"),
  name: z.string().min(1, "Name is required"),
});

type SendEmailResponse = 
  | { data: object; error?: undefined }
  | { data?: undefined; error: string[] };

export async function sendEmail({
  senderEmail,
  phone,
  message,
  name,
}: {
  senderEmail: string;
  phone: string;
  message: string;
  name: string;
}): Promise<SendEmailResponse> {
  const validation = emailSchema.safeParse({ senderEmail, phone, message, name });

  if (!validation.success) {
    const errors = validation.error.issues.map(issue => issue.message);
    return { error: errors };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tripplanners@gmail.com",
      subject: `Message from promos.tripplanners.co.in/vietnam by ${name}`,
      replyTo: senderEmail,
      html: message,
    });

    return { data };
  } catch (err) {
    return { error: [getErrorMessage(err)] };
  }
}
