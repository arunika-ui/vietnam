import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col flex-wrap gap-10 bg-[#f7eff2] px-6 py-8 text-sm text-gray-500 sm:px-10 sm:text-base md:flex-row md:px-20">
      <div className="flex w-full flex-col items-start gap-4 md:w-1/3 md:pr-8">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="h-12 w-auto"
        />
        <div className="flex flex-col">
          <label className="text-base font-semibold sm:text-lg">
            Our Address
          </label>
          <a
            href="https://maps.app.goo.gl/izhMq8zZ9nDaD4ab6"
            target="_blank"
            className="text-sm sm:text-base"
          >
            <b>Tripplanners:</b> A-1/19, Main Rohtak Rd, Opposite Metro Pillar
            No. 256, A1 Block Paschim Vihar, New Delhi, 110063
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8 md:w-2/5">
        <div className="flex flex-col">
          <label className="pb-3 font-semibold sm:pb-6">Payment Methods</label>
          <div className="flex flex-row items-center gap-2 *:w-10 sm:*:w-12">
            <Image src="/footer/visa.svg" alt="visa" width={200} height={200} />
            <Image
              src="/footer/mastercard.svg"
              alt="mastercard"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Member:</label>
          <div className="flex flex-row flex-wrap items-center gap-2 *:my-4 *:h-12 *:w-auto *:px-4 sm:*:h-16">
            <Image src="/footer/iata.svg" alt="iata" width={200} height={200} />
            <Image
              src="/footer/rotary.svg"
              alt="rotary"
              width={200}
              height={200}
            />
            <Image
              src="/footer/lion.png"
              alt="lions"
              width={200}
              height={200}
            />
            <Image src="/footer/bni.svg" alt="bni" width={200} height={200} />
            <Image src="/footer/iato.png" alt="iato" width={200} height={200} />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6 md:w-auto">
        <div className="flex flex-row gap-4">
          <a href="tel:+919811616005" target="_blank">
            <Image
              src="/footer/phone.svg"
              alt="phone"
              width={200}
              height={200}
              className="w-5 sm:w-6"
            />
          </a>
          <a href="https://wa.me/919811616005" target="_blank">
            <Image
              src="/footer/whatsapp.svg"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-5 sm:w-6"
            />
          </a>
        </div>

        <div className="flex w-full flex-row justify-between text-xs *:cursor-pointer *:hover:underline sm:text-base md:flex-col">
          <a>Privacy Policy</a>
          <a>User Agreement</a>
          <a>Payment Security</a>
        </div>
      </div>
    </footer>
  );
}
