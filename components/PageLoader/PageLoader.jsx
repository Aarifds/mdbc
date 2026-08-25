"use client";

import Image from "next/image";
import "./PageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">
        <div className="page-loader-logo">
          <Image
            src="/images/logoBG.png"
            alt="MANNAR DIGITAL BUSINESS COMPANY"
            width={180}
            height={180}
            loading="eager"
          />
        </div>

        <div className="page-loader-line">
          <span></span>
        </div>

        <p className="page-loader-text">
          Loading<span className="loading-dots">...</span>
        </p>
      </div>
    </div>
  );
}
