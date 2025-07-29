'use client';

import Image from 'next/image';
import { useState } from 'react';

interface VietnamCardProps {
  Heading: string;
  ImageSrc: string;
  cities: string;
  duration: string;
  price: string;
  validity: string;
  Inclusion: string;
  More: string;
}

export default function VietnamCard({
  Heading,
  ImageSrc,
  cities,
  duration,
  price,
  validity,
  Inclusion,
  More,
}: VietnamCardProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02] flex flex-col">
      {/* Image */}
      <div className="relative w-full h-60">
        <Image
          src={ImageSrc}
          alt={Heading}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-3 text-xl font-bold text-gray-900">{Heading}</h5>

        <div className="space-y-2 text-sm text-gray-700 flex-grow">
          <p><strong>Cities Covered:</strong> {cities}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Starting From:</strong> <span className="text-red-500 font-semibold">{price}</span></p>
          <p><strong>Validity:</strong> {validity}</p>
          <p><strong>Inclusion:</strong> {Inclusion}</p>

          {showMore && (
            <div className="pt-2">
                {More}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm text-[#E21D40] font-semibold hover:underline"
          >
            {showMore ? '▲ Show less' : '▼ Read more'}
          </button>

          <a
            href="#proposal"
            className="rounded-md bg-[#E21D40] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#E21D40] border border-[#E21D40]"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}