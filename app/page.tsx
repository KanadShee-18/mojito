"use client";

import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar-section";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Cocktail } from "@/components/cocktail-section";
import { AboutSection } from "@/components/about";
import ArtSection from "@/components/art-section";
import { MenuSection } from "@/components/menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktail />
      <AboutSection />
      <ArtSection />
      <MenuSection />
      <div className="h-[200vh]" />
    </main>
  );
};
export default page;
