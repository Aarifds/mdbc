"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import About from "@/components/About/About";
import HomeServices from "@/components/HomeServices/HomeServices";
import Footer from "@/components/Footer/Footer";

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
        <HomeServices />
      </main>
      <Footer />
    </>
  );
}
