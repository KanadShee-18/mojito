"use client";

import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar-section";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
};
export default page;
