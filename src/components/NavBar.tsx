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

        {/* Right Side: Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Call Icon */}
          <a href="tel:+919811616005">
            <Image
              src="/navbar-logos/call.svg"
              alt="call logo"
              width={38}
              height={38}
              className="md:w-[46px] md:h-[46px]"
            />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/919891000594"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/navbar-logos/whatsapp.svg"
              alt="whatsapp logo"
              width={28}
              height={28}
              className="md:w-[36px] md:h-[36px]"
            />
          </a>

          {/* Request Button (Only one, responsive design handles sizing) */}
          <a
            href="#proposal"
            className="rounded-md bg-[#E21D40] px-3 py-2 text-sm font-semibold text-white transition hover:border hover:border-[#E21D40] hover:bg-white hover:text-[#E21D40] md:px-4 md:py-2 md:text-base md:font-bold"
          >
            Request a proposal
          </a>
        </div>
      </div>
    </div>
  );
}
