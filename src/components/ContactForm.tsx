"use client";

import { useState, useTransition } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sendEmail } from "../../actions/email";
// import { sendEmail } from "@/app/actions/email";

export default function ItineraryForm() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [numPeople, setNumPeople] = useState(1);

  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<{ error?: string; data?: object } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const senderEmail = form.get("email") as string;

    const interestLevel = localStorage.getItem("userInterest") || "Low";

    const message = `
<h2 style="font-family: Arial, sans-serif; color: #333;">New Vietnam Trip Inquiry</h2>

<p style="font-size: 15px; color: #555;">
<strong>Name:</strong> ${form.get("name")}<br/>
<strong>Email:</strong> ${form.get("email")}<br/>
<strong>Phone:</strong> ${form.get("phone")}
</p>

<hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

<p style="font-size: 15px; color: #555;">
<strong>Travel Dates:</strong> ${startDate?.toDateString() || "Not specified"} to ${endDate?.toDateString() || "Not specified"}<br/>
<strong>Number of People:</strong> ${numPeople}<br/>
<strong>Interest Level:</strong> ${interestLevel}
</p>

<p style="font-size: 14px; color: #888;">
This request was submitted via promos.tripplanners.co.in/vietnam.
</p>
`;

    startTransition(() => {
      sendEmail({ senderEmail, message }).then(setResponse);
    });
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 space-y-5 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-800">Plan Your Vietnam Trip</h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="input-style"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@email.com"
            className="input-style"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Your phone number"
            className="input-style"
            required
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
            placeholderText="Select travel dates"
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

        {/* <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Approximate Budget: ₹{budget}
          </label>
          <input
            type="range"
            min={10000}
            max={200000}
            step={1000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div> */}

        <button
          type="submit"
          disabled={isPending}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          {isPending ? "Sending..." : "Submit Itinerary"}
        </button>

        {response?.error && <p className="text-red-500">{response.error}</p>}
        {response?.data && (
          <p className="text-green-600">Itinerary submitted successfully!</p>
        )}
      </form>
    </div>
  );
}
