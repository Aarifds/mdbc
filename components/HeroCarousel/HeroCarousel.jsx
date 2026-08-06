"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./HeroCarousel.css";
import heroSlides from "@/data/heroSlides";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="hero-carousel">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="hero-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content container">
            <span className="hero-badge">MANNAR DIGITAL BUSINESS COMPANY</span>

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>

            <div className="hero-buttons">
              <Link href="/services" className="hero-primary">
                Our Services
              </Link>

              <Link href="/contact" className="hero-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-arrow left" onClick={prevSlide}>
        <HiChevronLeft />
      </button>

      <button className="hero-arrow right" onClick={nextSlide}>
        <HiChevronRight />
      </button>

      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
