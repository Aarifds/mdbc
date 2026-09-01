"use client";

import {
  Network,
  Router,
  Wifi,
  Server,
  Database,
  HardDrive,
  ShieldCheck,
  MonitorCheck,
  Eye,
  Phone,
  Headset,
  MessageSquare,
  Factory,
  Cog,
  Bot,
  Sparkles,
} from "lucide-react";

import { useTranslations } from "next-intl";

import "./TechnologySolutions.css";

const technologyGroups = [
  {
    key: "networking",
    items: [
      { key: "routers", icon: Router },
      { key: "switches", icon: Network },
      { key: "wireless", icon: Wifi },
    ],
  },

  {
    key: "itInfrastructure",
    items: [
      { key: "servers", icon: Server },
      { key: "storageSystems", icon: Database },
      { key: "dataCenter", icon: HardDrive },
    ],
  },

  {
    key: "security",
    items: [
      { key: "securitySystems", icon: ShieldCheck },
      { key: "networkSecurity", icon: MonitorCheck },
      { key: "monitoring", icon: Eye },
    ],
  },

  {
    key: "businessCommunication",
    items: [
      { key: "voip", icon: Phone },
      { key: "voiceSolutions", icon: Headset },
      { key: "communication", icon: MessageSquare },
    ],
  },

  {
    key: "industrialMachinery",
    items: [
      { key: "industrialSoftware", icon: Factory },
      { key: "machinerySoftware", icon: Cog },
    ],
  },

  {
    key: "aiIntelligentSolutions",
    items: [
      { key: "artificialIntelligence", icon: Bot },
      { key: "smartAutomation", icon: Sparkles },
    ],
  },
];

export default function TechnologySolutions() {
  const t = useTranslations("TechnologySolutions");

  return (
    <section className="technology-solutions">
      <div className="technology-solutions-container">
        {/* Section Heading */}
        <div className="technology-solutions-heading">
          <span className="technology-solutions-label">{t("label")}</span>

          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        {/* Technology Groups */}
        <div className="technology-solutions-groups">
          {technologyGroups.map((group) => (
            <div className="technology-solutions-group" key={group.key}>
              <h3>{t(`groups.${group.key}.title`)}</h3>

              <div className="technology-solutions-items">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="technology-solution-item" key={item.key}>
                      <div className="technology-solution-icon">
                        <Icon size={34} strokeWidth={1.7} />
                      </div>

                      <span>{t(`groups.${group.key}.items.${item.key}`)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
