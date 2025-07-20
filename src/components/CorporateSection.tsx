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
    name: "Akshay Bhushan",
    title: "Dentist - Smileworks",
    message:
      "Testimonial from my Father Dr Anoop Bhushan in his exact words At the outset I am so thankful to Mr. Abhishek Jain for helping us in booking our International Air tickets. We both, me and my wife sincerely appreciate the time you spent in finding out the best Airline and the best route for our travel to Ireland and back. Your recommendation was the best one for us. Your time to time advice was also very helpful and gave me enough clarity on available options to travel. I especially appreciate your connect with me and message me before every flight which was of great help and guidance. This gave us a lot of comfort. Again, thank you so much for your help. I greatly appreciate the assistance you have provided me. Toh baat saaf hai. Ghumi Ghumi Jaana hai toh, Trip Planners ko hi call karna hai.",
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
