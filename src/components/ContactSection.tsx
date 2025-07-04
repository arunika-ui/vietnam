import  ItineraryForm  from "./ContactForm";

export default function ContactSection() {
  return (
    <div
      className="relative flex w-full items-center justify-center px-4 py-12 text-white"
      id="proposal"
      style={{
        backgroundImage: "url(/gallery_collage.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute h-full w-full bg-black opacity-65"></div>
      {/* Contact Section */}
      <div className="z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Info */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            We&apos;re easy to get in touch with
          </h3>
          <p className="text-xl sm:text-2xl">Call / WhatsApp us at</p>
          <p className="text-2xl font-bold sm:text-3xl">+91 98116 16005</p>
          <p className="text-lg sm:text-xl">
            or request a call-back from our off-site experts
          </p>
        </div>

        {/* Form */}
        <div className="flex w-full justify-center">
          <ItineraryForm  />
        </div>
      </div>
    </div>
  );
}
