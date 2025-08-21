"use client";

export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/vietnam/vietnam.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
