"use client";

import { Search, ClipboardList, Rocket, Headphones } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import "./HowWeWork.css";

const steps = [
  {
    key: "understand",
    icon: Search,
  },
  {
    key: "plan",
    icon: ClipboardList,
  },
  {
    key: "implement",
    icon: Rocket,
  },
  {
    key: "support",
    icon: Headphones,
  },
];

export default function HowWeWork() {
  const t = useTranslations("HowWeWork");
  const locale = useLocale();

  return (
    <section className="how-we-work">
      <div className="how-we-work-container">
        {/* Section Header */}
        <div className="how-we-work-heading">
          <span className="how-we-work-label">{t("label")}</span>

          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        {/* Process */}
        <div className="how-we-work-process">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="how-we-work-step" key={step.key}>
                {/* Number + Icon */}
                <div className="how-we-work-icon-wrapper">
                  <span className="how-we-work-number">
                    {(index + 1).toLocaleString(
                      locale === "ar" ? "ar-SA" : "en-US",
                      {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      },
                    )}
                  </span>

                  <div className="how-we-work-icon">
                    <Icon size={36} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="how-we-work-content">
                  <h3>{t(`steps.${step.key}.title`)}</h3>

                  <p>{t(`steps.${step.key}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
