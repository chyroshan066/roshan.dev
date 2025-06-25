import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    prefetch: true, 
    preload: true,
  },
  {
    name: "About",
    href: "/about",
    prefetch: true, 
  },
  {
    name: "Projects",
    href: "/projects",
    prefetch: false, 
  },
  {
    name: "Services",
    href: "/services",
    prefetch: false, 
  },
  {
    name: "Contact",
    href: "/contact",
    prefetch: true, 
  },
] as const;