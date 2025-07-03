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
    <div className="w-full max-w-sm mx-auto rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative w-full h-60">
        <Image
          src={ImageSrc}
          alt={Heading}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-3 text-xl font-bold text-gray-900">{Heading}</h5>

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Cities Covered:</strong> {cities}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Starting From:</strong> <span className="text-red-500 font-semibold">{price}</span></p>
          <p><strong>Validity:</strong> {validity}</p>
          <p><strong>Inclusion:</strong> {Inclusion}</p>

          {showMore && (
            <div className="pt-2">
              <p className="whitespace-pre-line">{More}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          {showMore ? '▲ Show less' : '▼ Read more'}
        </button>
      </div>
    </div>
  );
}
