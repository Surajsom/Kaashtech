import { slugify } from "./slugify";
import { WORKFORCE_SOLUTIONS, INDUSTRIES_WE_SERVE, IT_SOLUTIONS } from "../data/sitemapData";

export function buildAllRoutes() {
  const workforce = WORKFORCE_SOLUTIONS.map((x) => ({
    url: `/workforce-solutions/${slugify(x.label)}`,
    title: x.label,
  }));

  const industries = INDUSTRIES_WE_SERVE.map((x) => ({
    url: `/industries/${slugify(x.label)}`,
    title: x.label,
  }));

  const it = IT_SOLUTIONS.map((x) => ({
    url: `/it-solutions/${slugify(x.label)}`,
    title: x.label,
  }));

  const staticRoutes = [
    { url: "/", title: "Home" },
    { url: "/about-us", title: "About Us" },
    { url: "/contact-us", title: "Contact Us" },
  ];

  return [...staticRoutes, ...workforce, ...industries, ...it];
}
