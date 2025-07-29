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

        {/* New Package 1 */}
        <VietnamCard
          key="Budget Vietnam Experience"
          Heading="Budget Vietnam Experience"
          ImageSrc="/19vietnam1.webp"
          cities="HANOI - HALONG - DANANG - Phu Quoc"
          duration="08 Days"
          price="₹66,999/- Per Person"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights, 🚖 Transfers, 🏨 Hotels, 🍽️ Meals, 📸 Sightseeing"
          More={`🏨 01 Nights Stay in Hanoi
⛴️ 01 Nights Stay in Cruise at Halong Bay
🏨 03 Nights Stay in DaNang
🏨 02 Nights Stay in Phu Quoc
🍽️ Daily Breakfast in Hotel
🍱🥗 All meals included in Cruise
🚘 Airport Transfers
🚌 Sightseeing by sharing coach
✅ Tourist Visa fee 
🗣️ Local English-speaking guide
*Minimum 2 Persons Required
*T&C Apply`}
        />

        {/* New Package 2 */}
        <VietnamCard
          key="Affordable Vietnam Discovery"
          Heading="Affordable Vietnam Discovery"
          ImageSrc="/19vietnam2.webp"
          cities="HANOI - HALONG - DANANG - HO CHI MINH"
          duration="08 Days"
          price="₹55,999/- Per Person"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights, 🏨 Hotels, ⛴️ Cruise, 🍽️ Meals, 🚌 Sightseeing"
          More={`🏨 01 Nights Stay in Hanoi
⛴️ 01 Nights Stay in Cruise at Halong Bay
🏨 03 Nights Stay in DaNang
🏨 02 Nights Stay in Ho Chi Minh
🍽️ Daily Breakfast in Hotel
🍱🥗 All meals included in Cruise
🚘 Airport Transfers
🚌 Sightseeing by sharing coach
✅ Tourist Visa fee 
🗣️ Local English-speaking guide
*Minimum 2 Persons Required
*T&C Apply`}
        />

        {/* New Package 3 */}
        <VietnamCard
          key="Vietnam Essentials"
          Heading="Vietnam Essentials"
          ImageSrc="/19vietnam3.jpg"
          cities="HANOI - HALONG - DANANG"
          duration="06 Days"
          price="₹51,999/- Per Person"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights, 🏨 Hotels, ⛴️ Cruise, 🍽️ Meals, 🚌 Sightseeing"
          More={`🏨 01 Nights Stay in Hanoi
⛴️ 01 Nights Stay in Cruise at Halong Bay
🏨 03 Nights Stay in DaNang
🍽️ Daily Breakfast in Hotel
🍱🥗 All meals included in Cruise
🚘 Airport Transfers
🚌 Sightseeing by sharing coach
✅ Tourist Visa fee 
🗣️ Local English speaking guide
*Minimum 2 Persons Required
*T&C Apply`}
        />

        {/* Existing Cards */}
        <VietnamCard
          key="Vietnam Experience"
          Heading="Vietnam Experience"
          ImageSrc="/itenary3.jpg"
          cities="HANOI - HALONG - DANANG - Phu Quoc"
          duration="07 Nights / 08 Days"
          price="₹ 108,999/- Per Person"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights , 🚖 Transfers, 🏨 Hotels, 🍽️ Meals, 📸 Sightseeing"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
🏨 1N Hanoi + ⛴️ 1N Halong Bay Cruise
🏖️ 3N Da Nang + 🌴 2N Phu Quoc
🍽️ Daily Breakfast in Hotel + 🍱 All Meals on Cruise
🚘 Airport Transfers Included
🚌 Sightseeing by Sharing Coach
✅ Tourist Visa Fee Included
🗣️ Local English-speaking Guide
*T&C Apply`}
        />

        <VietnamCard
          key="Untouched Vietnam"
          Heading="Untouched Vietnam"
          ImageSrc="/itenary2.jpg"
          cities="Hanoi, Halong Bay Cruise, Danang & Ho Chi Minh"
          duration="08 Days / 07 Nights"
          price="₹96,999 PP"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights, 🏨 Hotels, ⛴️ Cruise, 🍽️ Meals, 🚌 Sightseeing"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
🏨 1N Hanoi + ⛴️ 1N Halong Bay Cruise
🏖️ 3N Da Nang + 🌆 2N Ho Chi Minh City
🍽️ Daily Breakfast in Hotel + 🍱 All Meals on Cruise
🚘 Airport Transfers Included
🚌 Sightseeing by Sharing Coach
✅ Tourist Visa Fee Included
🗣️ Local English-speaking Guide
*Minimum 2 Persons Required
*T&C Apply`}
        />

        <VietnamCard
          key="Essence of Vietnam"
          Heading="Essence of Vietnam"
          ImageSrc="/iternary1.jpg"
          cities="Hanoi, Halong Bay Cruise & Da Nang"
          duration="06 Days / 05 Nights"
          price="₹84,999 PP"
          validity="30 SEPT 2025"
          Inclusion="✈️ Flights, 🏨 Hotels, ⛴️ Cruise, 🍽️ Meals, 🚌 Sightseeing"
          More={`✈️ Return Economy Class Airfare (Ex-Delhi)
🏨 1N Hanoi + ⛴️ 1N Halong Bay Cruise
🏖️ 3N Da Nang (Twin/Double Sharing)
🍽️ Daily Breakfast in Hotel + 🍱 All Meals on Cruise
🚘 Airport Transfers Included
🚌 Sightseeing by Sharing Coach
✅ Tourist Visa Fee Included
🗣️ Local English-speaking Guide
*Minimum 2 Persons Required
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
