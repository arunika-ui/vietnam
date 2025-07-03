"use client";

import { useState } from "react";
import Image from "next/image";

const celebrityVideos = [
  {
    thumbnail: "/thumbnails/feedback1.png",
    videoUrl: "/videos/feedback1.mp4",
  },
  {
    thumbnail: "/thumbnails/feedback2.png",
    videoUrl: "/videos/feedback2.mp4",
  },
  {
    thumbnail: "/thumbnails/feedback3.png",
    videoUrl: "/videos/feedback3.mp4",
  },
];

export default function CorporateReviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        🌟 What Our Travelers Say
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm text-gray-600 sm:text-base">
        Our glowing traveler reviews reflect the unforgettable experiences,
         personalized planning, and seamless execution we offer—showcasing our 
         commitment to making every journey smooth, meaningful, and hassle-free
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {celebrityVideos.map((video, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-200 ease-out hover:scale-105"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              <Image
                src={video.thumbnail}
                alt={`Celebrity video ${index + 1}`}
                width={500}
                height={300}
                className="h-auto max-h-[300px] w-full object-cover"
              />
              <div className="absolute right-3 bottom-3 transform rounded-full bg-red-500 p-2 text-white shadow-lg transition group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-fit rounded-lg bg-white px-10 shadow-xl">
            <button
              className="absolute top-1 right-2 z-20 cursor-pointer text-2xl font-bold text-black hover:text-red-500"
              onClick={() => setActiveVideo(null)}
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <video
                className="h-96 w-full rounded-b-lg"
                src={activeVideo}
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
