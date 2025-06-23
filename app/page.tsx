"use client";

import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar-section";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Cocktail } from "@/components/cocktail-section";
import { AboutSection } from "@/components/about";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktail />
      <AboutSection />
    </main>
  );
};
export default page;
