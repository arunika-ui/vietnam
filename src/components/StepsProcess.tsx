"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const travelSteps = [
  {
    title: "Let’s Dream Together ✨",
    description:
      "Tell us what kind of Vietnam you want to see—lanterns, beaches, mountains, or secret cafés!",
    bg: "/travel/lanterns.jpg",
  },
  {
    title: "We Build Your Story ✈️",
    description:
      "We curate destinations and hidden gems matching your vibe and budget.",
    bg: "/travel/map.jpg",
  },
  {
    title: "Custom Itinerary ☕",
    description:
      "From sunrise to street food, your days are designed for delight.",
    bg: "/travel/itinerary.jpg",
  },
  {
    title: "Everything Sorted 🏨",
    description:
      "Hotels, guides, transport, SIM cards—all handled, zero stress.",
    bg: "/travel/hotel.jpg",
  },
  {
    title: "Bon Voyage! 🌟",
    description:
      "You fly, we stay in touch. A local host awaits in Vietnam to help anytime!",
    bg: "/travel/fly.jpg",
  },
];

export default function StepsProcess() {
  return (
    <section className="relative w-full bg-white px-6 py-16 text-center sm:px-10 md:px-20">
      <h2 className="pb-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        Planning Something Magical?
      </h2>
      <p className="mb-12 text-lg text-gray-600 sm:text-xl">
        Here’s how we turn your Vietnam dream into reality
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {travelSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={step.bg}
              alt={step.title}
              width={500}
              height={300}
              className="h-60 w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-end p-6 text-left text-white">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
