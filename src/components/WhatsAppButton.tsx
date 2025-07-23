"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
        href="https://wa.me/919891000594"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <Image
        src="/whatsapp-logo.avif"
        alt="WhatsApp"
        width={60}
        height={60}
        className="w-[30px] h-[30px]"
      />
    </a>
  );
}
