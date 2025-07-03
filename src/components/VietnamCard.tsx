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
    <div className="flex flex-col w-full max-w-sm mx-auto rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-200 ease-out hover:scale-[1.02] overflow-hidden">
      <Image
        src={ImageSrc}
        width={500}
        height={300}
        alt={Heading}
        className="h-60 w-full object-cover"
      />

      <div className="flex flex-col justify-between p-5">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          {Heading}
        </h5>

        <div className="space-y-1 text-sm text-gray-700 md:text-base">
          <p><strong>Cities Covered:</strong> {cities}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Starting From:</strong> <span className="text-red-500 font-semibold">{price}</span></p>
          <p><strong>Validity:</strong> {validity}</p>
          <p><strong>Inclusion:</strong> {Inclusion}</p>

          {/* Read More Section */}
          {showMore && (
            <div className="pt-2 text-gray-600">
              <p className="whitespace-pre-line text-sm mt-2">{More}</p>
            </div>
          )}
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-sm text-blue-600 hover:underline self-start"
        >
          {showMore ? '▲ Show less' : '▼ Read more'}
        </button>
      </div>
    </div>
  );
}
