"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import "./Services.css";

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
  {
    id: "servers",
    image: "/images/HomeServices/servers.jpg",
  },
  {
    id: "accessories",
    image: "/images/HomeServices/accessories.jpg",
  },
  {
    id: "voipPhone",
    image: "/images/HomeServices/voip-phone.jpg",
  },
  {
    id: "security",
    image: "/images/HomeServices/security.jpg",
  },
  {
    id: "software",
    image: "/images/HomeServices/software.jpg",
  },
  {
    id: "ai",
    image: "/images/HomeServices/ai.jpg",
  },
];

export default function ServicesList() {
  const t = useTranslations("Services");
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="services-list">
      <div className="container">
        {/* Section Heading */}
        <div className="services-list-heading">
          <span>{t("section.label")}</span>

          <h2>{t("section.title")}</h2>

          <p>{t("section.description")}</p>
        </div>

        {/* Desktop Services */}
        <div className="services-desktop-list">
          {services.map((service, index) => (
            <article
              className={`service-row ${
                index % 2 !== 0 ? "service-row-reverse" : ""
              }`}
              key={service.id}
            >
              {/* Image */}
              <div className="service-row-image">
                <Image
                  src={service.image}
                  alt={t(`items.${service.id}.name`)}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="service-row-content">
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{t(`items.${service.id}.name`)}</h3>

                <p>{t(`items.${service.id}.description`)}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Tablet / Mobile Carousel */}
        <div className="services-mobile-slider-wrapper">
          <button
            type="button"
            className="services-slider-arrow services-slider-arrow-left"
            onClick={() => scrollSlider("left")}
            aria-label="Previous service"
          >
            <HiOutlineChevronLeft />
          </button>

          <div className="services-mobile-slider" ref={sliderRef}>
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={t(`items.${service.id}.name`)}
                    fill
                    sizes="(max-width: 767px) 80vw, 45vw"
                  />
                </div>

                <div className="service-card-content">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{t(`items.${service.id}.name`)}</h3>

                  <p>{t(`items.${service.id}.description`)}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="services-slider-arrow services-slider-arrow-right"
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
