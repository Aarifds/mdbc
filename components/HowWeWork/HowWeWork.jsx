"use client";

import {
  Search,
  ClipboardList,
  Rocket,
  Headphones,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { useTranslations } from "next-intl";

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
              <div className="how-we-work-step-wrapper" key={step.key}>
                {/* Step */}
                <div className="how-we-work-step">
                  {/* Icon */}
                  <div className="how-we-work-icon-wrapper">
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

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop + Tablet */}
                    <div className="how-we-work-arrow how-we-work-arrow-right">
                      <ArrowRight size={32} strokeWidth={1.7} />
                    </div>

                    {/* Mobile */}
                    <div className="how-we-work-arrow how-we-work-arrow-down">
                      <ArrowDown size={28} strokeWidth={1.7} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
