export default function StepsProcess() {
  return (
    <section className="w-full bg-[#fffaf7] px-6 py-16 text-center sm:px-10 md:px-20">
      <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        Planning something?
      </h2>
      <p className="mb-10 text-lg sm:text-xl text-gray-700">
        Let’s make your Vietnam trip seamless, fun, and unforgettable.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-xl bg-white px-6 py-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-4xl">{step.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-[#333]">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    icon: "📞",
    title: "Quick Call",
    description:
      "We hop on a short call to understand your vibe, group size, and what you’re hoping for.",
  },
  {
    icon: "📍",
    title: "Plan Your Route",
    description:
      "We suggest ideal places, hotels, and routes based on how long you're staying and what you love.",
  },
  {
    icon: "📝",
    title: "Build The Itinerary",
    description:
      "We create a super flexible plan, from flights to food, from beach days to bike rides.",
  },
  {
    icon: "🎉",
    title: "Add The Fun",
    description:
      "We throw in unique local experiences, hidden spots, fun nights, and cultural gems.",
  },
  {
    icon: "🧍‍♂️",
    title: "Local Help",
    description:
      "You get a personal local guide + translator so you never feel lost or stuck.",
  },
  {
    icon: "✈️",
    title: "You’re Set!",
    description:
      "Just pack your bags — your custom Vietnam experience is ready to roll!",
  },
];
