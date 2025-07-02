"use client";

import Image from "next/image";
import blurDataUrl from "@/data/blurDataUrl";
import { useState } from "react";

function BackgroundVideo() {
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  return (
    <div
      className={"absolute top-0 left-0 -z-10 h-full w-full overflow-hidden"}
    >
      {!isVideoReady && (
        <Image
          src="/fallback.jpg"
          alt="Fallback"
          placeholder="blur"
          className="absolute top-0 left-0 z-10 h-full w-full object-cover"
          blurDataURL={blurDataUrl}
          width={1000}
          height={1000}
        />
      )}
      <video
        className={`absolute top-0 left-0 z-0 h-full w-full object-cover transition-opacity duration-100 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
        onCanPlay={() => setIsVideoReady(true)}
        onCanPlayThrough={() => setIsVideoReady(true)}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
