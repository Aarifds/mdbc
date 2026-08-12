"use client";

import Link from "next/link";
import { HiX } from "react-icons/hi";
import { navigation } from "@/data/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function MobileMenu({ isOpen, closeMenu }) {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    if (newLocale === locale) {
      closeMenu();
      return;
    }

    const newPathname = pathname.replace(/^\/(en|ar)/, "");

    router.push(`/${newLocale}${newPathname}`, {
      scroll: false,
    });

    closeMenu();
  };

  return (
    <>
      {/* =====================================================
          Overlay
      ===================================================== */}

      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* =====================================================
          Mobile Menu
      ===================================================== */}

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {/* Close Button */}

        <div className="mobile-menu-header">
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        {/* =====================================================
            Navigation Links
        ===================================================== */}

        <ul className="mobile-links">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={`/${locale}${item.href}`} onClick={closeMenu}>
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* =====================================================
            Language Switcher
        ===================================================== */}

        <div className="mobile-language">
          <button
            type="button"
            className={locale === "ar" ? "active" : ""}
            onClick={() => switchLanguage("ar")}
          >
            AR
          </button>

          <span>|</span>

          <button
            type="button"
            className={locale === "en" ? "active" : ""}
            onClick={() => switchLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}
