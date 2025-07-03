"use client";

import { useState, useTransition } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sendEmail } from "../../actions/email";

const citiesList = ["Hanoi", "Ho Chi Minh City", "Da Nang", "Ha Long Bay", "Hue"];

export default function ItineraryForm() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [numPeople, setNumPeople] = useState(1);
  const [budget, setBudget] = useState(30000);
  const [selectedCity, setSelectedCity] = useState("");
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<{ error?: string; data?: object } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("startDate", startDate?.toDateString() || "");
    formData.append("endDate", endDate?.toDateString() || "");
    formData.append("numPeople", numPeople.toString());
    formData.append("budget", `${budget}`);
    formData.append("city", selectedCity);

    const interestLevel = localStorage.getItem("userInterest") || "Unknown";
  formData.append("interestLevel", interestLevel);

    const message = `
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
City: ${selectedCity}
From: ${startDate?.toDateString()} To: ${endDate?.toDateString()}
Number of People: ${numPeople}
Approx Budget: ₹${budget}
Interest Level: ${interestLevel}}
    `;

    formData.set("message", message);

    startTransition(() => {
      sendEmail(formData).then((res) => setResponse(res));
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
        <label className="block text-sm font-medium text-gray-700">Preferred City</label>
        <select
          className="input-style"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          {citiesList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
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

      <div className="space-y-2">
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
      </div>

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
