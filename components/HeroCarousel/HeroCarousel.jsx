"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useTranslations } from "next-intl";

import "./HeroCarousel.css";
import heroSlides from "@/data/heroSlides";

export default function HeroCarousel() {
  const t = useTranslations("Hero");

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero-carousel">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <Image
            src={slide.image}
            alt={t(slide.title)}
            fill
            priority={index === 0}
            className="hero-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content container">
            <span className="hero-badge">{t("company")}</span>

            <h1>{t(slide.title)}</h1>

            <p>{t(slide.description)}</p>

            <div className="hero-buttons">
              <Link href="/services" className="hero-primary">
                {t("servicesButton")}
              </Link>

              <Link href="/contact" className="hero-secondary">
                {t("contactButton")}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        className="hero-arrow left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <HiChevronLeft />
      </button>

      <button
        className="hero-arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <HiChevronRight />
      </button>

      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
