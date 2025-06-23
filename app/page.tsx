"use client";

import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar-section";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Cocktail } from "@/components/cocktail-section";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktail />
    </main>
  );
};
export default page;
