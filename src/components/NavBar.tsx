import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-30 h-[72px] w-full">
      <div className="flex h-full w-full items-center justify-between bg-white px-4 shadow-xl md:px-10">
        <div className="flex-shrink-0">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </div>

        <div className="hidden items-center gap-6 *:cursor-pointer md:flex">
          <a href={"tel:+919811616005"}>
            <Image
              src="/navbar-logos/call.svg"
              className="py-1"
              width={60}
              height={60}
              alt="call logo"
            />
          </a>
          <a href={"https://wa.me/919811616005"} target={"_blank"}>
            <Image
              src="/navbar-logos/whatsapp.svg"
              className="py-1"
              width={40}
              height={40}
              alt="whatsapp logo"
            />
          </a>
          <a
            href={"#proposal"}
            className="rounded-md border border-[#E21D40] bg-[#E21D40] px-4 py-2 font-bold text-white transition hover:bg-white hover:text-[#E21D40]"
          >
            Request a proposal
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={"#proposal"}
            className="rounded-md bg-[#E21D40] px-3 py-2 text-sm font-semibold text-white transition hover:border hover:border-[#E21D40] hover:bg-white hover:text-[#E21D40]"
          >
            Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
