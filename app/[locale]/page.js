"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import About from "@/components/About/About";

export default function Home() {
  const { mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main>
        <HeroCarousel />

        <About />
      </main>
    </>
  );
}
