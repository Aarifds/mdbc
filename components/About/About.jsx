"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import "./About.css";
import Link from "next/link";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <section className="about-section" id="about">
      <div className="about-container container">
        <div className="about-main">
          {/* Left Side */}
          <div className="about-content">
            <span className="about-label">{t("label")}</span>
            <h2 className="about-title">{t("title")}</h2>
            <p className="about-description">{t("description")}</p>
            <p className="about-description">{t("description2")}</p>
            <Link href={`/${locale}/about`} className="about-button">
              {t("knowMore")}
            </Link>
          </div>

          <div className="about-image">
            <div className="about-image-wrapper">
              <Image
                src="/images/logo.jpeg"
                alt={t("companyLogoAlt")}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
