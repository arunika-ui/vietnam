"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/vietnam");
  return <div className="w-full"></div>;
}
