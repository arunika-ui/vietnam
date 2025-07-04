"use client";

import { useEffect, useState } from "react";

export default function UserInterestTracker() {
  const [interactions, setInteractions] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const handleInteraction = () => setInteractions((prev) => prev + 1);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollY / docHeight) * 100;
      if (scrolled > 60) {
        localStorage.setItem("scrollDepth", "true");
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleScroll);

    const calculateInterest = () => {
      const timeSpent = (Date.now() - startTime) / 1000;
      let interest = "Low";

      if (timeSpent > 60 && interactions > 5 && localStorage.getItem("scrollDepth") === "true") {
        interest = "High";
      } else if (timeSpent > 30 && interactions > 2) {
        interest = "Medium";
      }

      localStorage.setItem("userInterest", interest);
    };

    // Calculate on unload just in case
    window.addEventListener("beforeunload", calculateInterest);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", calculateInterest);
    };
  }, []);

  return null;
}
