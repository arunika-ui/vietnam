"use client";
import Image from "next/image";
import { useState } from "react";

const memberLogos = [
  { name: "iata", ext: "svg" },
  { name: "rotary", ext: "svg" },
  { name: "lion", ext: "png" },
  { name: "bni", ext: "svg" },
  { name: "iato", ext: "png" },
];

export default function Footer() {
  const [popup, setPopup] = useState<"privacy" | "user" | "payment" | null>(null);

  const closePopup = () => setPopup(null);

  const getPopupContent = () => {
    switch (popup) {
      case "privacy":
        return (
          <>
            <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
            <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
  At Tripplanners, we respect your privacy. We collect limited personal data
  (like name, email, phone number, and travel preferences) only to serve your
  travel needs better. Your data is kept secure and is never sold.{"\n\n"}

  We may share information with trusted partners (like hotels and payment
  processors) solely for fulfilling your bookings. By using our site or
  submitting a form, you consent to this usage.{"\n\n"}

  For full details or data access requests, email us at{"  "}
  <a href="mailto:tripplanners@gmail.com" className="underline text-blue-600">
    tripplanners@gmail.com
  </a>.{"\n\n"}

  Last updated: July 3, 2025
</p>
          </>
        );
      case "user":
        return (
          <>
            <h2 className="text-lg font-semibold mb-2">User Agreement</h2>
            <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
  By using Tripplanners' website and services, you agree to comply with and be
  bound by the following terms and conditions. If you do not agree with any
  part of this agreement, you must not use our website.{"\n\n"}

  All travel bookings made through Tripplanners are subject to availability and
  the terms and conditions of our partner vendors, such as hotels, transport
  providers, and activity operators.{"\n\n"}

  Users are responsible for providing accurate information while booking. Any
  fraudulent, misleading, or incomplete data may result in cancellation without
  refund.{"\n\n"}

  We reserve the right to update, change, or replace any part of this agreement
  by posting updates to our website. Continued use of the website following the
  changes constitutes acceptance.{"\n\n"}

  For questions, email us at{" "}
  <a href="mailto:tripplanners@gmail.com" className="underline text-blue-600">
    tripplanners@gmail.com
  </a>.{"\n\n"}

  Last updated: July 3, 2025
</p>

          </>
        );
      case "payment":
        return (
          <>
            <h2 className="text-lg font-semibold mb-2">Payment Security</h2>
            <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
  Tripplanners is committed to ensuring secure transactions for all your
  bookings. All payments made on our website are encrypted using industry-standard
  SSL (Secure Socket Layer) technology.{"\n\n"}

  We partner only with trusted payment gateways and providers to ensure your
  credit/debit card and UPI details remain protected and confidential.{"\n\n"}

  We do not store your full payment information on our servers.{"\n\n"}

  In case of any unauthorized transaction or billing issue, please contact us
  immediately at{" "}
  <a href="mailto:tripplanners@gmail.com" className="underline text-blue-600">
    tripplanners@gmail.com
  </a>.{"\n\n"}

  By using our website, you consent to our secure payment practices.{"\n\n"}

  Last updated: July 3, 2025
</p>

          </>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative flex w-full flex-col flex-wrap gap-10 bg-[#f7eff2] px-6 py-10 text-sm text-gray-600 sm:px-10 sm:text-base md:flex-row md:px-20">
      {/* Address */}
      <div className="flex w-full flex-col items-start gap-4 md:w-1/3 md:pr-8">
        <Image src="/logo.svg" alt="logo" width={150} height={50} className="h-12 w-auto" />
        <div className="flex flex-col">
          <label className="text-base font-semibold sm:text-lg">Our Address</label>
          <a
            href="https://maps.app.goo.gl/izhMq8zZ9nDaD4ab6"
            target="_blank"
            className="text-sm sm:text-base"
          >
            <b>Tripplanners:</b> A-1/19, Main Rohtak Rd, Opp. Metro Pillar No. 256,
            A1 Block Paschim Vihar, New Delhi, 110063
          </a>
        </div>
      </div>

      {/* Payments & Members */}
      <div className="flex w-full flex-col gap-8 md:w-2/5">
        <div>
          <label className="pb-3 font-semibold">Payment Methods</label>
          <div className="flex gap-3 items-center">
            <Image src="/footer/visa.svg" alt="visa" width={50} height={30} />
            <Image src="/footer/mastercard.svg" alt="mastercard" width={50} height={30} />
          </div>
        </div>
        <div>
          <label className="font-semibold">Member:</label>
          <div className="flex flex-wrap gap-3 items-center mt-3">
  {memberLogos.map(({ name, ext }) => (
    <Image
      key={name}
      src={`/footer/${name}.${ext}`}
      alt={name}
      width={60}
      height={40}
      className="object-contain"
    />
  ))}
</div>
        </div>
      </div>

      {/* Contact & Policies */}
      <div className="flex w-full flex-col items-start gap-6 md:w-auto">
        <div className="flex gap-4">
          <a href="tel:+919811616005" target="_blank">
            <Image src="/footer/phone.svg" alt="phone" width={24} height={24} />
          </a>
          <a href="https://wa.me/919811616005" target="_blank">
            <Image src="/footer/whatsapp.svg" alt="whatsapp" width={24} height={24} />
          </a>
        </div>

        <div className="flex flex-col gap-2 text-xs sm:text-base *:cursor-pointer *:hover:underline">
          <span onClick={() => setPopup("privacy")}>Privacy Policy</span>
          <span onClick={() => setPopup("user")}>User Agreement</span>
          <span onClick={() => setPopup("payment")}>Payment Security</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full pt-8 text-center text-xs text-gray-400 border-t mt-10">
        © {new Date().getFullYear()} Tripplanners. All rights reserved.
      </div>

      {/* Popup Modal */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-100 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
              onClick={closePopup}
            >
              ×
            </button>
            {getPopupContent()}
          </div>
        </div>
      )}
    </footer>
  );
}
