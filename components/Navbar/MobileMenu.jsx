"use client";

import Link from "next/link";
import { HiX } from "react-icons/hi";
import { navigation } from "@/data/navigation";

export default function MobileMenu({ isOpen, closeMenu }) {
  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <ul className="mobile-links">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={closeMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language */}
        <div className="mobile-language">
          <span className="active-language">EN</span>
          <span className="divider">|</span>
          <span>AR</span>
        </div>
      </div>
    </>
  );
}
