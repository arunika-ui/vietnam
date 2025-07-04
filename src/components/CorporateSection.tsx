"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jaya Parkash V",
    title: "Founder - iCube Creative Visualisation",
    message:
      "There was an urgent need to travel to my hometown. Approached Mr. Abhishek Jain from Trip Planners to book flight ticket. He promptly answered my call and instantly arranged my travel ticket in shorter period and saved money from buying an expensive ticket. I am so Grateful and Thankful to Mr. Abhishek for his extraordinary and honest service which saved our money and time. I hereby recommend him to all my contacts.",
  },
  {
    name: "Amit Kumar Shamihoke",
    title: "Managing Partner - Nuvama Private",
    message:
      "A tester, or quality assurance (QA) tester, is responsible for evaluating software and systems to ensure they function correctly and meet required standards. Their role involves designing test cases, executing tests, and identifying defects or issues in the software.",
  },
  {
    name: "Amit Gupta",
    title: "Owner - Kundan Lal Sons",
    message:
      "A sudden visit to Sharjah Jewellery show in UAE was planned by me with no Visa on my passport. I contacted Abhishek and he immediately not only started Visa proceedings but also gave me flight of my time preference and at better rates than any online platform All this was done in three working days, and it was an absolute hassle-free trip Abhishek's professionalism and timely acting on urgent situations will take him a long way I wish him all the very best in his profession and will keep referring him to my contact sphere",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">🌟 Traveler Testimonials</h2>

        <div className="relative overflow-hidden rounded-lg border border-gray-200 p-6 shadow-md transition-all duration-500 min-h-[200px]">
          <p className="text-gray-700 italic text-lg mb-4 transition-opacity duration-500 ease-in-out">
            “{testimonials[current].message}”
          </p>
          <div className="text-sm text-gray-500">
            — <strong>{testimonials[current].name}</strong>, {testimonials[current].title}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
