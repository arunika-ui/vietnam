import Image from "next/image";

export default function VisitUsSection() {
  return (
    <div className="flex w-full flex-col items-center gap-10 bg-[#E21D40] px-4 py-20 text-black sm:px-10">
      <Image
        src="/tripplanners-white.svg"
        width={120}
        height={120}
        alt="logo"
        className="w-24 sm:w-28"
      />

      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-6">
        <Card
          Heading="VISIT US (NCR)"
          Body="90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Haryana 122008 INDIA"
        />
        <Card
          Heading="VISIT US (NCR)"
          Body="90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Haryana 122008 INDIA"
        />
        <Card
          Heading="VISIT US (NCR)"
          Body="90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Haryana 122008 INDIA"
        />
        <Card
          Heading="VISIT US (NCR)"
          Body="90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Haryana 122008 INDIA"
        />
      </div>
    </div>
  );
}

export function Card({ Heading, Body }: { Heading: string; Body: string }) {
  return (
    <div className="w-full max-w-xs rounded-md bg-white px-6 py-4 text-center">
      <div className="text-lg font-bold">{Heading}</div>
      <div className="text-md pt-4 font-thin">{Body}</div>
    </div>
  );
}
