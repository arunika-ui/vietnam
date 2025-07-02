"use client";

import CaptchaBox from "./CaptchaBox";
import { useState, useTransition } from "react";
import { sendEmail } from "../../actions/email"; // adjust path as needed

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
    error?: string;
    data?: object;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please complete the captcha to continue.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    // Construct a single `message` field for the email
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

    formData.set("message", message);

    startTransition(() => {
      sendEmail(formData).then((res) => setResponse(res));
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

      {response?.error && <p className="text-red-600">{response.error}</p>}
      {response?.data && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
    </form>
  );
}
