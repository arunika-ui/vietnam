export default function StepsProcess() {
  return (
    <section className="w-full bg-white px-4 py-16 text-center sm:px-10 md:px-20">
      <h2 className="pb-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        Planning something?
      </h2>
      <p className="mb-6 text-xl font-light sm:text-2xl">
        How We Can Help – Step by Step
      </p>
      <p className="mx-auto mb-12 max-w-3xl text-gray-700">
        From planning to execution, we manage your off-sites, team outings and
        in-office events for you, with you.
      </p>

      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="max-w-72 rounded-xl bg-gray-100 p-6 text-left shadow-sm md:min-h-72">
              <h3 className="text-center text-lg font-bold sm:text-xl md:pb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-sm sm:text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Understanding Your Requirements",
    description:
      "We begin with a detailed consultation to understand your objectives, team size, budget, and specific needs for the offsite.",
  },
  {
    title: "Curating Destinations & Venues",
    description:
      "Based on your brief, we suggest the best-suited locations and properties, both in India and abroad, aligned with your corporate goals.",
  },
  {
    title: "Customizing the Itinerary",
    description:
      "We design a tailored schedule covering conferences, team-building, recreation, and evening events—balancing work, fun, and relaxation.",
  },
  {
    title: "Handling All Logistics",
    description:
      "We manage end-to-end logistics including travel, accommodation, meals, AV setups, and on-ground coordination to ensure everything runs smoothly.",
  },
  {
    title: "On-Site Support & Execution",
    description:
      "Our team is present on-site to oversee the execution, troubleshoot instantly, and ensure a seamless, stress-free experience for your team.",
  },
];
