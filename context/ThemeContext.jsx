"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Always start with light theme
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme("light");
    setMounted(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      mounted,
    }),
    [theme, mounted],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
