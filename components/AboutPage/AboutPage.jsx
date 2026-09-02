"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  FiTarget,
  FiCpu,
  FiTrendingUp,
  FiCheckCircle,
  FiUsers,
  FiLink,
  FiShield,
  FiZap,
  FiAward,
  FiHeart,
  FiCheck,
} from "react-icons/fi";
import "./AboutPage.css";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const locale = useLocale();

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
              <div className="about-goal-number">
                {locale === "ar" ? "١" : "1"}
              </div>

              <div className="about-goal-content">
                <h3>{t("customerCare.title")}</h3>

                <p>{t("customerCare.description")}</p>
              </div>
            </div>

            {/* High Quality Products */}
            <div className="about-goal-card">
              <div className="about-goal-number">
                {locale === "ar" ? "٢" : "2"}
              </div>

              <div className="about-goal-content">
                <h3>{t("highQuality.title")}</h3>

                <p>{t("highQuality.description")}</p>
              </div>
            </div>

            {/* After Sales */}
            <div className="about-goal-card">
              <div className="about-goal-number">
                {locale === "ar" ? "٣" : "3"}
              </div>

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
            Core Values
      ===================================================== */}

      <section className="about-core-values about-section-alt">
        <div className="container">
          <div className="about-section-heading">
            <h2>{t("coreValuesTitle")}</h2>
            <p>{t("coreValuesDescription")}</p>
          </div>

          <div className="about-core-values-list">
            {/* Integrity */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiShield />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.integrity.title")}</h3>
                <p>{t("coreValues.integrity.description")}</p>
              </div>
            </div>

            {/* Innovation */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiZap />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.innovation.title")}</h3>
                <p>{t("coreValues.innovation.description")}</p>
              </div>
            </div>

            {/* Excellence */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiAward />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.excellence.title")}</h3>
                <p>{t("coreValues.excellence.description")}</p>
              </div>
            </div>

            {/* Customer Focus */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiHeart />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.customerFocus.title")}</h3>
                <p>{t("coreValues.customerFocus.description")}</p>
              </div>
            </div>

            {/* Reliability */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiCheck />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.reliability.title")}</h3>
                <p>{t("coreValues.reliability.description")}</p>
              </div>
            </div>

            {/* Continuous Growth */}
            <div className="about-core-value-card">
              <div className="about-core-value-icon">
                <FiTrendingUp />
              </div>

              <div className="about-core-value-content">
                <h3>{t("coreValues.continuousGrowth.title")}</h3>
                <p>{t("coreValues.continuousGrowth.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Why Choose Us
      ===================================================== */}

      <section className="about-why-us">
        <div className="container">
          <div className="about-why-content">
            <div className="about-why-heading">
              <h2>{t("whyChooseTitle")}</h2>

              <p>{t("whyChooseDescription")}</p>
            </div>

            <div className="about-why-cards">
              {/* Card 01 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠١" : "01"}
                </span>

                <div className="about-why-icon">
                  <FiTarget />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.tailored.title")}</h3>
                  <p>{t("whyChooseCards.tailored.description")}</p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠٢" : "02"}
                </span>

                <div className="about-why-icon">
                  <FiCpu />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.business.title")}</h3>
                  <p>{t("whyChooseCards.business.description")}</p>
                </div>
              </div>

              {/* Card 03 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠٣" : "03"}
                </span>

                <div className="about-why-icon">
                  <FiTrendingUp />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.scalable.title")}</h3>
                  <p>{t("whyChooseCards.scalable.description")}</p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠٤" : "04"}
                </span>

                <div className="about-why-icon">
                  <FiCheckCircle />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.reliable.title")}</h3>
                  <p>{t("whyChooseCards.reliable.description")}</p>
                </div>
              </div>

              {/* Card 05 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠٥" : "05"}
                </span>

                <div className="about-why-icon">
                  <FiUsers />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.customer.title")}</h3>
                  <p>{t("whyChooseCards.customer.description")}</p>
                </div>
              </div>

              {/* Card 06 */}
              <div className="about-why-card">
                <span className="about-why-number">
                  {locale === "ar" ? "٠٦" : "06"}
                </span>

                <div className="about-why-icon">
                  <FiLink />
                </div>

                <div className="about-why-card-content">
                  <h3>{t("whyChooseCards.partnership.title")}</h3>
                  <p>{t("whyChooseCards.partnership.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
