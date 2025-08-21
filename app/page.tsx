import ChoseUsSection from "@/components/WhyUsSection";
import ItineraryForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import { Decorator } from "@/components/Decorator";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PlanningSection from "@/components/PlanningSection";
import BrandSection from "@/components/BrandSection";
import BackgroundVideo from "@/components/BackgroundVideo";
import CorporateReviews from "@/components/CorporateSection";
import CelebrityReviews from "@/components/CelebritySection";
import StepsProcess from "@/components/VietnamJournal";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* <div className="fixed right-15 bottom-15 z-50">
          <a
            href="https://wa.me/919891000594?text=Hi%20there!%20I'm%20interested%20in%20a%20Vietnam%20tour%20package.%20Can%20you%20help%20me%20with%20the%20details?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="relative w-[50px] md:w-20"
              src="/whatsapp.svg"
              width={70}
              height={70}
              alt="whatsapp"
            />
          </a>
        </div> */}
        <BackgroundVideo />

        <div className="flex flex-col">
          <NavBar />

          <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 pt-24 sm:pt-28">
            <div className="grid w-full max-w-7xl grid-cols-1 gap-10 p-6 text-white md:grid-cols-2">
              {/* Left Text Section */}
              <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:gap-4 md:text-left">
                <h1 className="text-4xl font-bold md:text-6xl">VIETNAM</h1>
                <h2 className="text-center text-2xl md:text-4xl">
                  Seamless journeys. Tailored experiences.
                </h2>
                <h1 className="text-4xl font-bold md:text-6xl"></h1>
              </div>

              <div className="flex items-center justify-center">
                <ItineraryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlanningSection />
      <section className="relative aspect-video w-full overflow-hidden bg-black md:aspect-auto md:h-[90vh]">
        <video
          className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/vietnam/videos/Untitled%20design.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      <StepsProcess />
      <ContactSection />
      <ChoseUsSection />
      <Decorator />
      {/*<InternationalMice />*/}
      {/*<Decorator />*/}
      <CorporateReviews />
      <Decorator />
      <CelebrityReviews />

      {/*<LeadersSection />*/}
      <BrandSection />

      <Footer />
    </div>
  );
}
