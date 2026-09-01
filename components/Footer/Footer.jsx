"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";
import "./Footer.css";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company */}
          <div className="footer-company">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/logo.jpeg"
                alt="MANNAR DIGITAL BUSINESS COMPANY"
                width={250}
                height={250}
                className="footer-logo-image"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>{t("quickLinks")}</h4>

            <Link href="/">{t("home")}</Link>
            <Link href="/about">{t("about")}</Link>
            <Link href="/services">{t("services")}</Link>
            <Link href="/industries">{t("industries")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>{t("contactUs")}</h4>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <HiOutlineMapPin />

                <span>{t("address")}</span>
              </div>

              <div className="footer-contact-item">
                <HiOutlineEnvelope />

                <span>{t("email")}</span>
              </div>

              <div className="footer-contact-item">
                <HiOutlinePhone />

                <span className="footer-phone" dir="ltr">
                  {t("phone")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            ©{" "}
            {locale === "ar"
              ? String(new Date().getFullYear())
                  .split("")
                  .map((digit) => "٠١٢٣٤٥٦٧٨٩"[digit])
                  .join("")
              : new Date().getFullYear()}{" "}
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
