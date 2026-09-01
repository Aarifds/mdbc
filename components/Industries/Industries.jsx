"use client";

import {
  FaIndustry,
  FaHeartbeat,
  FaShoppingBag,
  FaHardHat,
  FaTruck,
  FaBriefcase,
} from "react-icons/fa";

import { useTranslations } from "next-intl";

import "./Industries.css";

const industries = [
  {
    key: "manufacturing",
    icon: FaIndustry,
  },
  {
    key: "healthcare",
    icon: FaHeartbeat,
  },
  {
    key: "retail",
    icon: FaShoppingBag,
  },
  {
    key: "construction",
    icon: FaHardHat,
  },
  {
    key: "logistics",
    icon: FaTruck,
  },
  {
    key: "professionalServices",
    icon: FaBriefcase,
  },
];

export default function Industries() {
  const t = useTranslations("Industries");

  return (
    <section className="industries">
      <div className="industries-container">
        {/* Section Heading */}
        <div className="industries-heading">
          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        {/* Industries Cards */}
        <div className="industries-list">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div className="industry-card" key={industry.key}>
                <div className="industry-icon">
                  <Icon />
                </div>

                <h3>{t(`${industry.key}.title`)}</h3>

                <p>{t(`${industry.key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
