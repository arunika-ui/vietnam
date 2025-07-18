"use client";

import { useState, useTransition } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sendEmail } from "../../actions/email";
import { toast } from "react-toastify";
import ThankYou from "./ThankYou";

export default function ItineraryForm() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [numPeople, setNumPeople] = useState(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const senderEmail = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const name = (form.get("name") as string) || "";

    const interestLevel = localStorage.getItem("userInterest") || "Low";

    const message = `
      <h2>New Vietnam Trip Inquiry</h2>
      <p><strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${senderEmail}<br/>
      <strong>Phone:</strong> ${phone}</p>
      <p><strong>Travel Dates:</strong> ${startDate?.toDateString()} to ${endDate?.toDateString()}<br/>
      <strong>People:</strong> ${numPeople}<br/>
      <strong>Interest:</strong> ${interestLevel}</p>
    `;

    startTransition(() => {
      sendEmail({ senderEmail, phone, message, name })
        .then((res) => {
          if (res.error) {
            const errorMsg = Array.isArray(res.error)
              ? res.error.map((err) => `• ${err}`).join("\n")
              : res.error;
            toast.error(errorMsg, { style: { whiteSpace: "pre-line" } });
          } else {
            toast.success("Query submitted successfully!");

            // Trigger conversion event
            // @ts-expect-error
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              // @ts-expect-error
              window.gtag("event", "conversion", {
                send_to: "AW-978999945/qt1VCOe52AcQibXp0gM",
                value: 1.0,
                currency: "INR",
              });
            }
            setSubmitted(true);
          }
        })
        .catch((err) => toast.error(err.message || "Something went wrong."));
    });
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 flex justify-center relative">
      {submitted && <ThankYou onClose={() => setSubmitted(false)} />}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 space-y-5 bg-white rounded-lg shadow-lg z-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">Plan Your Vietnam Trip</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input name="name" type="text" className="input-style" required />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input name="email" type="email" className="input-style" required />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            type="tel"
            pattern="\d{10}"
            maxLength={10}
            inputMode="numeric"
            required
            className="input-style"
            placeholder="10-digit number"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Travel Dates</label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update as [Date | null, Date | null])}
            className="input-style w-full"
            isClearable
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Number of People</label>
          <input
            type="number"
            min="1"
            value={numPeople}
            onChange={(e) => setNumPeople(Number(e.target.value))}
            className="input-style"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
        >
          {isPending ? "Sending..." : "Submit Query"}
        </button>
      </form>
    </div>
  );
}
