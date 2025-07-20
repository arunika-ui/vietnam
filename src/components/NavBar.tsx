import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-30 h-[72px] w-full bg-white shadow-xl">
      <div className="flex h-full items-center justify-between px-4 md:px-10">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <span className="text-sm font-medium text-red-500">Tripplanners</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Call Icon */}
          <a href="tel:+919811616005">
            <Image
              src="/navbar-logos/call.svg"
              alt="call logo"
              width={28}
              height={28}
              className="md:w-[40px] md:h-[40px]"
            />
          </a>

          {/* WhatsApp Icon */}
          <a href="https://wa.me/919811616005" target="_blank" rel="noopener noreferrer">
            <Image
              src="/navbar-logos/whatsapp.svg"
              alt="whatsapp logo"
              width={28}
              height={28}
              className="w-24px md:w-[36px] md:h-[36px]"
            />
          </a>

          {/* Desktop Button */}
          <a
            href="#proposal"
            className="hidden md:inline-block rounded-md border border-[#E21D40] bg-[#E21D40] px-4 py-2 font-bold text-white transition hover:bg-white hover:text-[#E21D40]"
          >
            Request a proposal
          </a>

          {/* Mobile Button */}
          <a
            href="#proposal"
            className="inline-block md:hidden rounded-md bg-[#E21D40] px-3 py-2 text-sm font-semibold text-white transition hover:border hover:border-[#E21D40] hover:bg-white hover:text-[#E21D40]"
          >
            Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
