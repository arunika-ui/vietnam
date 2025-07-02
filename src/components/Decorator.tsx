import Image from "next/image";

export const Decorator = () => {
  return (
    <div className="mt-8 w-full">
      <Image
        src="/seperate.svg"
        alt="separator"
        width={1920}
        height={300}
        className="h-auto w-full"
      />
    </div>
  );
};
