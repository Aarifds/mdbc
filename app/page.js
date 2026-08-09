"use client";

import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import About from "@/components/About/About";
import HomeServices from "@/components/HomeServices/HomeServices";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroCarousel />
        <About />
        <HomeServices />
      </main>
    </>
  );
}
