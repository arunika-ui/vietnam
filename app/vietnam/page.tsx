import ChoseUsSection from "@/components/WhyUsSection";
import ItineraryForm  from "@/components/ContactForm";
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
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full overflow-hidden">
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
                <h1 className="text-4xl font-bold md:text-6xl">
               
                </h1>
              </div>

              <div className="flex items-center justify-center">
                < ItineraryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlanningSection />
      <section className="relative w-full aspect-video md:aspect-auto md:h-[90vh] bg-black overflow-hidden">
  <video
    className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
    src="/videos/Untitled%20design.mp4"
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
      <WhatsAppButton />
    </div>
  );
}
