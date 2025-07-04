"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
// import { ContactForm } from "./ContactForm";
const items = [
  {
    src: "/why-us/hotel.jpg",
    label: "🌴 Handpicked Stays Across Vietnam",
    content:
      "We partner with the finest boutique resorts, beach villas, and scenic retreats—from Halong Bay to Hoi An—ensuring you experience Vietnam’s charm with maximum comfort and authenticity.      ",
  },
  {
    src: "/why-us/trans.jpg",
    label: "🧭 Personal Local Companion & Translator    ",
    content:
      "To make your journey smooth and stress-free, we provide you with a friendly local guide who also serves as a translator—bridging the language gap and helping you navigate Vietnam like a pro.",
  },
  {
    src: "/why-us/local.jpg",
    label: "🎉 Curated Local Experiences",
    content:
      "Our on-ground team brings Vietnam to life with immersive cultural activities, food trails, island excursions, and more—all tailored to your vibe, whether you're a couple, family, or squad.",
  },
];

export default function ChoseUsSection() {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    
    <div className="flex w-full flex-col items-center gap-16 bg-white px-4 py-10 text-black md:px-10">
    {/* Heading */}
    <h2 className="text-center text-4xl font-bold">Why Choose Tripplanners?</h2>
  
    {/* Image + Text Row */}
    <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-start">
      {/* Left: Main Image */}
      <div className="relative w-full max-w-[600px] h-[400px] mx-auto lg:mx-0">
        <Image
          src={selectedItem.src}
          alt={selectedItem.label}
          fill
          className="rounded-xl shadow-xl object-cover"
          priority
        />
      </div>
  
      {/* Right: Text + Thumbnails */}
      <div className="flex w-full flex-col gap-4 lg:pl-8">
        {/* Title + Description */}
        <h3 className="text-2xl font-bold sm:text-3xl">{selectedItem.label}</h3>
        <p className="text-base font-light sm:text-lg">{selectedItem.content}</p>
  
        {/* Thumbnail Switches */}
        <div className="mt-4 flex flex-wrap gap-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`group relative h-20 w-28 overflow-hidden rounded-md border-2 transition ${
                selectedItem.src === item.src
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              
            </button>
          ))}
        </div>
      </div>
    </div>

  
  
  
      {/* Stats Cards */}
      <div className="grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        <NumberCard Number={18} Body="YEARS OF LEGACY" />
        <NumberCard Number={10000} Body="HAPPY CUSTOMERS" />
        <NumberCard Number={27500} Body="TOURS COMPLETED" />
        <NumberCard Number={150} Body="COUNTRIES COVERED" />
      </div>
    </div>
  );
}
  

const NumberCard = ({ Number, Body }: { Number: number; Body: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // To ensure animation runs only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount(0, Number, 1000);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [Number]);

  const animateCount = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className="flex w-full flex-col rounded-md border border-gray-300 bg-white/5 p-4 text-center"
    >
      <div className="text-2xl font-bold sm:text-3xl">{count}+</div>
      <div className="text-sm font-light sm:text-base">{Body}</div>
    </div>
  );
};
