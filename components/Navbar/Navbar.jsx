"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";
import "./Navbar.css";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
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

            <button className="language-btn">
              <span className="active-language">EN</span>

              <span className="divider">|</span>

              <span>AR</span>
            </button>

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
