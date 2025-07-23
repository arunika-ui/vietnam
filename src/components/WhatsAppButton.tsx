// components/WhatsAppButton.tsx
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919891000594"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <Image
        src="/public/whatsapp-logo.avif" // adjust to your file path
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
}
