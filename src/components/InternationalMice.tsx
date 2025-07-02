import Image from "next/image";

export default function InternationalMice() {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-white px-4 py-10 text-black">
      <div className="text-center text-3xl font-bold md:text-5xl lg:text-6xl">
        International MICE
      </div>

      <div className="max-w-4xl text-center text-base md:text-lg">
        With precision planning and a dedicated in-house Visa Assistance team,
        we create authentic programs, with an emphasis on novel experiences. We
        curate unforgettable international MICE events that Inspire, Motivate,
        drive success, and Redefine Excellence.
      </div>

      <div className="my-8 grid w-full grid-cols-1 gap-6 px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <SpotCard
          Heading="Leadership Offsites"
          Body="Inspire your team with unforgettable leadership retreats set against cliffside ocean views and breathtaking Bali sunsets."
          ImageSrc="/mice/mice.jpg"
        />
        <SpotCard
          Heading="Incentive Programs"
          Body="Reward top performers with an unforgettable escape to a breathtaking island paradise."
          ImageSrc="/mice/mice2.jpg"
        />
        <SpotCard
          Heading="Customized Itineraries for Special Events"
          Body="Design unforgettable celebrations with personalized itineraries that highlight Bali&#39;s cultural heart."
          ImageSrc="/mice/mice3.jpg"
        />
      </div>
    </div>
  );
}

const SpotCard = ({
  Heading,
  Body,
  ImageSrc,
}: {
  Heading: string;
  Body: string;
  ImageSrc: string;
}) => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-200 ease-out hover:scale-105">
      <a>
        <Image
          src={`${ImageSrc}`}
          width={500}
          height={300}
          className="h-60 w-full rounded-t-lg object-cover"
          alt={Heading || ""}
        />
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
            {Heading}
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700 md:text-base">
          {Body}
        </p>
      </div>
    </div>
  );
};

<div>
  <label>Leadership Offsites</label>
  <label>Incentive Programs</label>
  <label>Customized Itineraries for Special Events</label>
</div>;
