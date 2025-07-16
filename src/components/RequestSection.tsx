"use client";

import CaptchaBox from "./CaptchaBox";
import { useState, useTransition } from "react";
import { sendEmail } from "../../actions/email"; 

export default function RequestSection() {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12 sm:px-8">
      <ContactForm2 />
    </div>
  );
}

export function ContactForm2() {
  const [isVerified, setIsVerified] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<{
    error?: string | string[];
    data?: object;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please complete the captcha to continue.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const senderEmail = (formData.get("senderEmail") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const name = (formData.get("name") as string) || "";

    const message = `
      What are you planning: ${formData.get("planning")}
      Number of participants: ${formData.get("participants")}
      Planned Date: ${formData.get("date")}
      Company Name: ${formData.get("company")}
      Your Name: ${formData.get("name")}
      Department: ${formData.get("department")}
      Email: ${formData.get("senderEmail")}
      Phone: ${formData.get("phone")}
    `;

    startTransition(() => {
      sendEmail({ senderEmail, phone, message, name })
        .then(setResponse)
        .catch((err) =>
          setResponse({ error: [err.message || "Something went wrong."] })
        );
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border bg-white p-6 text-base sm:max-w-lg sm:p-8 sm:text-lg"
    >
      <input
        name="planning"
        type="text"
        placeholder="What are you planning?"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="participants"
        type="text"
        placeholder="Number of participants"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="date"
        type="text"
        placeholder="Planned Date"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="company"
        type="text"
        placeholder="Company Name"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="senderEmail"
        type="email"
        placeholder="Your Official Email ID"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="phone"
        type="text"
        placeholder="Your Phone Number"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <input
        name="department"
        type="text"
        placeholder="Department"
        className="w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
      />

      <CaptchaBox setIsVerified={setIsVerified} />

      <button
        type="submit"
        disabled={isPending}
        className="w-full cursor-pointer rounded-md border border-transparent bg-[#E21D40] px-4 py-3 font-bold text-white transition-all duration-200 hover:border hover:bg-white hover:text-[#E21D40]"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {Array.isArray(response?.error) ? (
        <div className="text-red-600 space-y-1">
          {response.error.map((err, i) => (
            <div key={i}>• {err}</div>
          ))}
        </div>
      ) : response?.error ? (
        <div className="text-red-600">{response.error}</div>
      ) : null}

      {response?.data && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
    </form>
  );
}
