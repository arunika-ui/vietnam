import VietnamCard from "./VietnamCard";

export default function PlanningSection() {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-white px-4 py-10 text-black">
      {/* Heading */}
      <div className="max-w-2/3 text-center text-3xl font-bold md:text-5xl">
        Exclusively Curated Journeys - VIETNAM
      </div>

      {/* Subheading */}
      <div className="max-w-4xl text-center text-base md:text-lg">
        From cultural deep-dives to luxury escapes, we custom-build
        every Vietnam itinerary to match your travel goals—delivering
        immersive experiences, seamless planning, and expert execution
        across the country’s most stunning destinations.
      </div>

      {/* Cards */}
      <div className="my-8 grid w-full grid-cols-1 gap-6 px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <VietnamCard
        key="Vietnam Experience"
          Heading="Vietnam Experience"
          ImageSrc="/offerings/conferences.jpeg"
          cities="Hanoi, Halong Bay & Ho Chi Minh"
          duration="06 Nights / 07 Days"
          price="₹40,990 PP"
          validity="30 SEPT 2025"
          Inclusion="🚖 Transfers, 🏨 Hotels, 🍽️ Meals, 📸 Sightseeing"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
          🏨 1N Hanoi + 1N Halong Cruise (Non-Private Boat)
          🌊 Shuttle Bus Transfer to Halong Bay
          🏖️ 3N Danang + 🌆 2N Ho Chi Minh (Twin/Double Sharing)
          🍽️ Daily Meals Included
          🎫 All Entrance Fees & Sightseeing
          🚗 Private Airport Transfers & Day Tours
          💧 Bottled Water during Tours
          🗣️ English-speaking Local Guides
          *T&C Apply`}
        />

        <VietnamCard
        key="Untouched Vietnam"
          Heading="Untouched Vietnam"
          ImageSrc="/offerings/team.jpeg"
          cities="Hanoi, Halong Bay Cruise, Danang & Ho Chi Minh"
          duration="07 Nights / 08 Days"
          price="₹1,14,990 PP"
          validity="30 SEPT 2025"
          Inclusion="🚖 Transfers, 🚤 Cruise, 🏨 Hotels, 🍽️ Meals, 📸 Guided Tours"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
          🏨 1N Hanoi + 🚤 1N Halong Bay Cruise (Non-Private Boat)
          🏖️ 3N Danang + 🌆 2N Ho Chi Minh (Twin/Double Sharing)
          🍽️ Daily Meals as per itinerary
          🎫 All Entry Fees & Guided Sightseeing
          🚗 Private Airport Transfers & A/C Vehicles for Day Tours
          🌊 Shuttle Transfer to/from Halong Bay
          💧 Bottled Water during Tours
          🗣️ Local English-speaking Guides
          *T&C Apply`}
        />

        <VietnamCard
          key="Essence of Vietnam"
          Heading="Essence of Vietnam"
          ImageSrc="/offerings/rewards.jpeg"
          cities="Hanoi, Halong Bay, Ninh Binh & Hoi An"
          duration="05 Nights / 06 Days"
          price="₹36,990 PP"
          validity="30 SEPT 2025"
          Inclusion="🚖 Transfers, 🏨 Stays, 🍜 Daily Meals, 🎫 Sightseeing Passes"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
          🏨 1N Hanoi + 🚤 1N Halong Bay + 🌿 1N Ninh Binh + 🏮 2N Hoi An (Twin/Double Sharing)
          🍜 Daily Meals Included
          🎫 Entry Tickets & Sightseeing in All Cities
          🚗 Private Airport Transfers & A/C Vehicles for Day Tours
          🚣 Boat Ride through Limestone Caves in Ninh Binh
          🏮 Lantern-lit Street Walks in Hoi An Old Town
          💧 Bottled Water during Tours
          🗣️ English-speaking Local Guides
          *T&C Apply`}
        />
      </div>

      {/* CTA Button */}
      <a
        href="#proposal"
        className="cursor-pointer rounded-md border border-[#E21D40] bg-[#E21D40] px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#E21D40]"
      >
        Request a proposal
      </a>
    </div>
  );
}
