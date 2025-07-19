"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-978999945/wWLjCJOo5_MaEIm16dID",
      });
    }
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="animate-fadeIn relative w-full max-w-md rounded-2xl bg-white px-6 pt-10 pb-16 text-center text-black shadow-xl">
        {/* Close Button */}

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold">
          Thank you for submitting your query!
        </h1>
        <p className="mt-2 text-gray-600">
          Our team will get back to you soon.
        </p>
        <button
          className="mt-4 cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-white shadow-md hover:scale-95"
          onClick={() => {
            router.push("/");
          }}
        >
          Go back to Home Page
        </button>
      </div>
    </div>
  );
}
