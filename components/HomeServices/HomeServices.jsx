"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import "./HomeServices.css";

const services = [
  {
    id: "routers",
    image: "/images/HomeServices/routers.jpg",
  },
  {
    id: "wireless",
    image: "/images/HomeServices/wireless.jpg",
  },
  {
    id: "storage",
    image: "/images/HomeServices/storage.jpg",
  },
  {
    id: "switches",
    image: "/images/HomeServices/switches.jpg",
  },
];

export default function HomeServices() {
  const t = useTranslations("HomeServices");
  const locale = useLocale();

  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector(".home-service-card");

    if (!card) return;

    const gap = 24;

    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-services">
      <div className="container">
        {/* ==========================================
            Section Heading
        ========================================== */}

        <div className="home-services-heading">
          <span className="home-services-label">{t("label")}</span>

          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        {/* ==========================================
            Services Slider
        ========================================== */}

        <div className="home-services-slider-wrapper">
          {/* Left Arrow */}

          <button
            type="button"
            className="home-services-arrow home-services-arrow-left"
            onClick={() => scrollSlider("left")}
            aria-label="Previous service"
          >
            <HiOutlineChevronLeft />
          </button>

          {/* Slider */}

          <div className="home-services-slider" ref={sliderRef}>
            {/* ==========================================
                Four Service Cards
            ========================================== */}

            {services.map((service) => (
              <article className="home-service-card" key={service.id}>
                <div className="home-service-image">
                  <Image
                    src={service.image}
                    alt={t(`${service.id}.name`)}
                    fill
                    sizes="(max-width: 767px) 82vw, 30vw"
                  />
                </div>

                <div className="home-service-content">
                  <h3>{t(`${service.id}.name`)}</h3>

                  <p>{t(`${service.id}.description`)}</p>
                </div>
              </article>
            ))}

            {/* ==========================================
                View All Services Card
            ========================================== */}

            <Link
              href={`/${locale}/services`}
              className="home-service-card home-service-view-all"
            >
              <div className="view-all-icon">
                <HiOutlineChevronRight />
              </div>

              <h3>{t("viewMore")}</h3>

              <p>{t("viewAllDescription")}</p>
            </Link>
          </div>

          {/* Right Arrow */}

          <button
            type="button"
            className="home-services-arrow home-services-arrow-right"
            onClick={() => scrollSlider("right")}
            aria-label="Next service"
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
