"use client";

import { useState } from "react";
import Image from "next/image";

const celebrityVideos = [
  {
    thumbnail: "/thumbnails/thumbnail1.png",
    videoUrl: "/videos/video1.mp4",
    name: "Micky Makhija",
    role: "Actor",
  },
  {
    thumbnail: "/thumbnails/thumbnail2.png",
    videoUrl: "/videos/v-final.mp4",
    name: "Aishwarya & Neil",
    role: "Actors & Big Boss Contestants",
  },
  {
    thumbnail: "/thumbnails/thumbnail3.png",
    videoUrl: "/videos/video3.mp4",
    name: "Stefy Patel",
    role: "Actor",
  },
];

export default function CelebrityReviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Celebrity Reviews
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm text-gray-600 sm:text-base">
          Discover what celebrities are saying about their experiences with us
          through our glowing reviews. With feedback highlighting exceptional
          service, memorable experiences, and seamless journeys, their reviews
          reflect our commitment to delivering top-notch travel adventures.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {celebrityVideos.map((video, index) => (
            <div
              key={index}
              className="group relative flex cursor-pointer flex-col items-start overflow-hidden rounded-xl shadow-md transition-transform duration-200 ease-out hover:scale-105"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              <Image
                src={video.thumbnail}
                alt={`Celebrity video ${index + 1}`}
                width={500}
                height={300}
                className="h-auto w-full object-cover"
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
              <div className={"flex flex-col items-start p-2 pt-1"}>
                <label className={"font-bold"}>{video.name}</label>
                <label>({video.role})</label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-3xl rounded-lg bg-white shadow-xl">
            <button
              className="absolute top-2 right-2 z-20 cursor-pointer text-2xl font-bold text-black hover:text-red-500"
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
