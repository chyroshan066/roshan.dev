"use client";

import { BentoSocialLink } from "@/types";
import { FacebookLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react';

export const bentoSocialLinks: BentoSocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/chyroshan066/",
    icon: <FacebookLogoIcon size={47} color="#a7a7a7" weight="bold" className="block md:hidden lg:block" />,
  },
  {
    name: "Github",
    href: "https://github.com/chyroshan066",
    icon: "/images/tech-icons/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chyroshan066/",
    icon: <LinkedinLogoIcon size={47} color="#a7a7a7" weight="bold" className="block md:hidden lg:block" />,
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: <WhatsappLogoIcon size={47} color="#a7a7a7" weight="bold" className="block md:hidden lg:block" />,
  },
];