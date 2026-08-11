"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Link from "next/link";
import "./HomeServices.css";

const services = [
  {
    key: "routers",
    image: "/images/HomeServices/routers.jpg",
  },
  {
    key: "wireless",
    image: "/images/HomeServices/wireless.jpg",
  },
  {
    key: "storage",
    image: "/images/HomeServices/storage.jpg",
  },
  {
    key: "switches",
    image: "/images/HomeServices/switches.jpg",
  },
  {
    key: "servers",
    image: "/images/HomeServices/servers.jpg",
  },
  {
    key: "accessories",
    image: "/images/HomeServices/accessories.jpg",
  },
  {
    key: "voipPhone",
    image: "/images/HomeServices/voip-phone.jpg",
  },
  {
    key: "security",
    image: "/images/HomeServices/security.jpg",
  },
  {
    key: "software",
    image: "/images/HomeServices/software.jpg",
  },
  {
    key: "ai",
    image: "/images/HomeServices/ai.jpg",
  },
];

export default function HomeServices() {
  const t = useTranslations("HomeServices");
  const locale = useLocale();
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".service-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 24;

    sliderRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="home-services">
      <div className="container">
        {/* Section Heading */}
        <div className="services-heading">
          <span className="services-label">{t("label")}</span>

          <h4>{t("title")}</h4>

          <p>{t("description")}</p>
        </div>

        {/* Slider Controls */}
        <div className="services-controls">
          <button
            type="button"
            className="services-arrow"
            onClick={() => scrollSlider("prev")}
            aria-label="Previous services"
          >
            <HiChevronLeft />
          </button>

          <button
            type="button"
            className="services-arrow"
            onClick={() => scrollSlider("next")}
            aria-label="Next services"
          >
            <HiChevronRight />
          </button>
        </div>

        {/* Services */}
        <div className="services-grid" ref={sliderRef}>
          {services.map((service) => (
            <article className="service-card" key={service.key}>
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={t(`${service.key}.name`)}
                  fill
                  sizes="(max-width: 767px) 85vw, (max-width: 1023px) 45vw, 25vw"
                />
              </div>

              <div className="service-content">
                <h3>{t(`${service.key}.name`)}</h3>

                <p>{t(`${service.key}.description`)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services-more">
          <Link href={`/${locale}/services`} className="services-more-button">
            {t("viewMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
