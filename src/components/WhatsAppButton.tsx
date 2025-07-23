"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
        href="https://wa.me/919891000594?text=Hi%20there!%20I'm%20interested%20in%20a%20Vietnam%20tour%20package.%20Can%20you%20help%20me%20with%20the%20details?"
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
