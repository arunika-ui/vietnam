import Image from "next/image";

export default function BrandSection() {
  const logos = Array.from(
    { length: 10 },
    (_, i) => `/brands/image${i + 1}.svg`
  );

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-6 text-black md:pb-10">
      {/* Header Text */}
      <div className="mb-6 w-full gap-2 text-center text-3xl md:text-6xl">
        <span className="pr-2 font-bold md:pr-4">Trusted</span>
        <span>by the best</span>
      </div>

      {/* Logo Grid */}
      <div className="mt-6 grid w-full max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {logos.map((src, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <Image
              src={src}
              alt={`Logo ${idx + 1}`}
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
