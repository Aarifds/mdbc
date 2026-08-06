"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar/Navbar";
import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main
        className="container"
        style={{
          minHeight: "200vh",
          paddingTop: "140px",
        }}
      >
        <HeroCarousel />
      </main>
    </>
  );
}
