"use client";

import Link from "next/link";
import { HiX } from "react-icons/hi";
import { navigation } from "@/data/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function MobileMenu({ isOpen, closeMenu }) {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    const newPathname = pathname.replace(/^\/(en|ar)/, "");

    router.push(`/${newLocale}${newPathname}`);
    closeMenu();
  };

  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {/* Close Button */}
        <div className="mobile-menu-header">
          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="mobile-links">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="mobile-language">
          <button
            className={locale === "ar" ? "active" : ""}
            onClick={() => switchLanguage("ar")}
          >
            AR
          </button>

          <span>|</span>

          <button
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
