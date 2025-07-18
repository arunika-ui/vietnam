"use client";
import Image from "next/image";

export default function ThankYou({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white px-6 pt-10 pb-16 text-center text-black shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-2xl font-bold text-gray-400 hover:text-black transition"
        >
          &times;
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold">Thank you for submitting your query!</h1>
        <p className="text-gray-600 mt-2">Our team will get back to you soon.</p>
      </div>
    </div>
  );
}
