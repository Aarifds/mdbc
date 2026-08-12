"use client";

import { useTranslations } from "next-intl";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

import "./Contact.css";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <div className="contact-page">
      {/* =====================================================
          Contact Hero
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-label">{t("hero.label")}</span>

          <h1>{t("hero.title")}</h1>

          <p>{t("hero.description")}</p>
        </div>
      </section>

      {/* =====================================================
          Contact Main
      ===================================================== */}

      <section className="contact-main container">
        {/* =================================================
            Contact Information
        ================================================= */}

        <div className="contact-information">
          <div className="contact-section-heading">
            <span>{t("information.label")}</span>

            <h2>{t("information.title")}</h2>

            <p>{t("information.description")}</p>
          </div>

          {/* Address */}

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <HiOutlineLocationMarker />
            </div>

            <div className="contact-info-content">
              <h3>{t("information.addressTitle")}</h3>
              <p>{t("information.address")}</p>
            </div>
          </div>

          {/* Phone */}

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <HiOutlinePhone />
            </div>

            <div className="contact-info-content">
              <h3>{t("information.phoneTitle")}</h3>
              <p>{t("information.phone")}</p>
            </div>
          </div>

          {/* Email */}

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <HiOutlineMail />
            </div>

            <div className="contact-info-content">
              <h3>{t("information.emailTitle")}</h3>
              <p>{t("information.email")}</p>
            </div>
          </div>

          {/* Working Hours */}

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <HiOutlineClock />
            </div>

            <div className="contact-info-content">
              <h3>{t("information.hoursTitle")}</h3>
              <p>{t("information.hours")}</p>
            </div>
          </div>
        </div>

        {/* =================================================
            Contact Form
        ================================================= */}

        <div className="contact-form-wrapper">
          <div className="contact-section-heading">
            <span>{t("form.label")}</span>

            <h2>{t("form.title")}</h2>

            <p>{t("form.description")}</p>
          </div>

          <form className="contact-form">
            {/* Name */}

            <div className="contact-form-group">
              <label htmlFor="contact-name">{t("form.name")}</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t("form.namePlaceholder")}
              />
            </div>

            {/* Email */}

            <div className="contact-form-group">
              <label htmlFor="contact-email">{t("form.email")}</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t("form.emailPlaceholder")}
              />
            </div>

            {/* Phone */}

            <div className="contact-form-group">
              <label htmlFor="contact-phone">{t("form.phone")}</label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder={t("form.phonePlaceholder")}
              />
            </div>

            {/* Subject */}

            <div className="contact-form-group">
              <label htmlFor="contact-subject">{t("form.subject")}</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder={t("form.subjectPlaceholder")}
              />
            </div>

            {/* Message */}

            <div className="contact-form-group contact-form-message">
              <label htmlFor="contact-message">{t("form.message")}</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder={t("form.messagePlaceholder")}
              ></textarea>
            </div>

            {/* Submit */}

            {/* <button type="submit" className="contact-submit-button"> */}
            <button className="contact-submit-button">
              {t("form.submit")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
