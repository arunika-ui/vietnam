"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonialData } from "@/data/data";

export default function LeadersSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-white px-4 py-10 text-black sm:px-8">
      <div className="pb-12 text-center text-4xl font-thin sm:text-5xl md:text-6xl">
        What our <span className="font-bold italic">clients</span> say
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-6 overflow-hidden md:flex-row">
        {/* Left Arrow */}
        <div
          onClick={handlePrev}
          className="flex cursor-pointer justify-center px-2 opacity-45 transition hover:opacity-70 md:px-6"
        >
          <Image
            alt="arrow-left"
            src="/arrow-left.svg"
            width={50}
            height={50}
            className="w-[40px] sm:w-[50px]"
          />
        </div>

        {/* Testimonial Box with animation */}
        <div className="relative h-full min-h-[380px] w-full md:w-[60%]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col items-center justify-start rounded-md border bg-white px-4 py-10 text-center text-lg shadow-md sm:px-10 sm:text-xl"
            >
              <div className="mb-6 font-thin">
                {testimonialData[index].body.length > 220
                  ? testimonialData[index].body.slice(0, 220) + "..."
                  : testimonialData[index].body}
              </div>
              <div className="py-2">________</div>
              <div className="mt-2 text-xl font-bold sm:text-2xl">
                {testimonialData[index].name}
              </div>
              <div className="text-lg font-thin sm:text-xl">
                {testimonialData[index].designation}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleNext}
          className="flex cursor-pointer justify-center px-2 opacity-45 transition hover:opacity-70 md:px-6"
        >
          <Image
            alt="arrow-right"
            src="/arrow-right.svg"
            width={50}
            height={50}
            className="w-[40px] sm:w-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
