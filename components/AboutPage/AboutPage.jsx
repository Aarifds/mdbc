"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import "./AboutPage.css";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="about-page">
      {/* =====================================================
          About Page Hero
      ===================================================== */}

      <section className="about-page-hero">
        <div className="container about-page-hero-content">
          <span className="about-page-badge">{t("badge")}</span>

          <h3>{t("title")}</h3>

          <p>{t("description")}</p>
        </div>
      </section>

      {/* =====================================================
          Company Overview
      ===================================================== */}

      <section className="about-overview">
        <div className="container">
          <div className="about-section-heading">
            <h2>{t("overviewTitle")}</h2>
          </div>

          <div className="about-overview-content">
            {/* Description */}
            <div className="about-overview-text">
              <p>{t("overviewDescription1")}</p>

              <p>{t("overviewDescription2")}</p>
            </div>

            {/* Company Logo */}
            <div className="about-overview-image">
              <Image
                src="/images/logo.jpeg"
                alt={t("companyLogoAlt")}
                width={500}
                height={500}
                className="about-overview-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Major Goals
      ===================================================== */}

      <section className="about-goals">
        <div className="container">
          <div className="about-section-heading">
            <h2>{t("goalsTitle")}</h2>
          </div>

          <div className="about-goals-list">
            {/* Customer Care */}
            <div className="about-goal-card">
              <div className="about-goal-number">01</div>

              <div className="about-goal-content">
                <h3>{t("customerCare.title")}</h3>

                <p>{t("customerCare.description")}</p>
              </div>
            </div>

            {/* High Quality Products */}
            <div className="about-goal-card">
              <div className="about-goal-number">02</div>

              <div className="about-goal-content">
                <h3>{t("highQuality.title")}</h3>

                <p>{t("highQuality.description")}</p>
              </div>
            </div>

            {/* After Sales */}
            <div className="about-goal-card">
              <div className="about-goal-number">03</div>

              <div className="about-goal-content">
                <h3>{t("afterSales.title")}</h3>

                <p>{t("afterSales.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Vision
      ===================================================== */}

      <section className="about-info-section about-section-alt">
        <div className="container">
          <div className="about-info-content">
            <div className="about-info-heading">
              {/* <span>{t("visionLabel")}</span> */}

              <h2>{t("visionTitle")}</h2>
            </div>

            <div className="about-info-text">
              <p>{t("visionDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Mission
      ===================================================== */}

      <section className="about-info-section">
        <div className="container">
          <div className="about-info-content">
            <div className="about-info-heading">
              {/* <span>{t("missionLabel")}</span> */}

              <h2>{t("missionTitle")}</h2>
            </div>

            <div className="about-info-text">
              <p>{t("missionDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Why Choose Us
      ===================================================== */}

      <section className="about-why-us about-section-alt">
        <div className="container">
          <div className="about-why-content">
            <div className="about-why-heading">
              {/* <span>{t("whyChooseLabel")}</span> */}

              <h2>{t("whyChooseTitle")}</h2>
            </div>

            <p>{t("whyChooseDescription")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
