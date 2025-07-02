"use client";

import { useState, useTransition } from "react";
import CaptchaBox from "./CaptchaBox";
import { sendEmail } from "../../actions/email"; // adjust this path as needed

export const ContactForm = ({ Bg }: { Bg: string }) => {
  const [verified, setIsVerified] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<{
    error?: string;
    data?: object;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!verified) {
      alert("Please complete the captcha to continue.");
      return;
    }
    const formData = new FormData(e.currentTarget);

    // Construct a single `message` field for the email
    const message = `
      Name: ${formData.get("name")}
      Phone: ${formData.get("phone")}
      Email: ${formData.get("senderEmail")}
      Company: ${formData.get("company")}
      Trip Type: ${formData.get("tripType")}
      Message: ${formData.get("messageText")}
    `;
    formData.set("message", message);

    startTransition(() => {
      sendEmail(formData).then((res) => {
        setResponse(res);
      });
    });
  };

  const trips = [
    "Offsite/Event Within",
    "Outstation Offsite/Event",
    "Team Leisure Trip",
    "Team Outing",
    "Team Building Session",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md flex-col items-center p-6 text-lg md:p-8 ${
        Bg === "transparent" ? "bg-white/80" : "bg-white"
      } gap-4 rounded-lg outline-none`}
    >
      <input
        name="name"
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-red-500"
        type="text"
        placeholder="Your Name"
      />
      <input
        name="phone"
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-red-500"
        type="text"
        placeholder="Phone Number"
      />
      <input
        name="senderEmail"
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-red-500"
        type="email"
        placeholder="Work Email"
      />
      <input
        name="company"
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-red-500"
        type="text"
        placeholder="Company Name"
      />
      <InputForm trips={trips} />
      <textarea
        name="messageText"
        className="h-24 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black focus:outline-red-500"
        placeholder="Write your message..."
      />
      <CaptchaBox setIsVerified={setIsVerified} />
      <button
        type="submit"
        disabled={isPending}
        className="w-full cursor-pointer rounded-md border border-[#E21D40] bg-[#E21D40] px-4 py-2 font-bold text-white transition-colors hover:bg-white hover:text-[#E21D40]"
      >
        {isPending ? "Sending..." : "Contact"}
      </button>
      <div className="w-full text-center text-sm text-gray-700">
        By clicking the button, you agree to be bound by the terms of service of
        this website
      </div>
      {response?.error && <p className="text-red-600">{response.error}</p>}
      {response?.data && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
    </form>
  );
};

const InputForm = ({ trips }: { trips: string[] }) => {
  return (
    <select
      name="tripType"
      defaultValue="SERVICES"
      id="services"
      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-red-500"
    >
      <option disabled value="SERVICES">
        Select Service Type
      </option>
      {trips.map((trip, key) => (
        <option key={key} value={trip}>
          {trip}
        </option>
      ))}
    </select>
  );
};
