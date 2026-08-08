"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { navigation } from "@/data/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import "./Navbar.css";
import MobileMenu from "./MobileMenu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) return;

    const scrollY = window.scrollY;

    const newPathname = pathname.replace(/^\/(en|ar)/, "");

    router.push(`/${newLocale}${newPathname}`, {
      scroll: false,
    });

    // Restore the exact scroll position after the new locale renders
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="navbar-wrapper">
        <nav className={`navbar container ${scrolled ? "scrolled" : ""}`}>
          <Link href="/" className="navbar-logo">
            <Image
              src="/images/logo.jpeg"
              className="navbar-logo-image"
              alt="MDBC Logo"
              width={220}
              height={70}
              priority
            />
          </Link>

          <ul className="navbar-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{t(item.key)}</Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "light" ? <LuMoonStar /> : <LuSun />)}
            </button>

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

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <HiOutlineBars3 />
            </button>
          </div>
        </nav>
        <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      </header>
    </>
  );
}
