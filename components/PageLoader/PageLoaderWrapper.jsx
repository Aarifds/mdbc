"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function PageLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      // Start fade-out
      setVisible(false);

      // Remove loader after animation finishes
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(hideLoader, 500);

      return () => clearTimeout(timer);
    }

    window.addEventListener("load", hideLoader);

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className={
            visible
              ? "page-loader-wrapper"
              : "page-loader-wrapper page-loader-hidden"
          }
        >
          <PageLoader />
        </div>
      )}

      {children}
    </>
  );
}
