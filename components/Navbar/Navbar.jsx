"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { navigation } from "@/data/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";

import "./Navbar.css";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const { theme, toggleTheme, mounted } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) return;

    const scrollY = window.scrollY;

    const newPathname = pathname.replace(/^\/(en|ar)/, "");

    router.push(`/${newLocale}${newPathname}`, {
      scroll: false,
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    });
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar container">
          {/* =====================================================
              Logo
          ===================================================== */}

          <Link href={`/${locale}`} className="navbar-logo">
            <Image
              src={
                theme === "light" ? "/images/logoBG.png" : "/images/logo.jpeg"
              }
              alt="MANNAR DIGITAL BUSINESS COMPANY"
              width={150}
              height={150}
              className={theme === "dark" ? "dark-logo" : "light-logo"}
            />
          </Link>

          {/* =====================================================
              Desktop Navigation
          ===================================================== */}

          {/* <ul className="navbar-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={`/${locale}${item.href}`}>{t(item.key)}</Link>
              </li>
            ))}
          </ul> */}

          <ul className="navbar-links">
            {navigation.map((item) => {
              const currentPath = pathname.replace(`/${locale}`, "") || "/";

              const isActive =
                item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className={isActive ? "active" : ""}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* =====================================================
              Navbar Actions
          ===================================================== */}

          <div className="navbar-actions">
            {/* Theme */}

            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "light" ? <LuMoonStar /> : <LuSun />)}
            </button>

            {/* Language */}

            <div className="language-switcher">
              <button
                className={locale === "en" ? "active-language" : ""}
                onClick={() => switchLanguage("en")}
              >
                EN
              </button>

              <span className="divider">|</span>

              <button
                className={locale === "ar" ? "active-language" : ""}
                onClick={() => switchLanguage("ar")}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu */}

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <HiOutlineBars3 />
            </button>
          </div>
        </nav>

        {/* =====================================================
            Mobile Menu
        ===================================================== */}

        <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      </header>
    </>
  );
}
