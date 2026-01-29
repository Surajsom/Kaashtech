import { slugify } from "./slugify";
import { WORKFORCE_SOLUTIONS, INDUSTRIES_WE_SERVE, IT_SOLUTIONS } from "./sitemapData";

export function buildAllRoutes() {
  const workforce = WORKFORCE_SOLUTIONS.map((x) => ({
    url: `/workforce-solutions/${slugify(x.title)}`,
    title: x.title,
  }));

  const industries = INDUSTRIES_WE_SERVE.map((x) => ({
    url: `/industries-we-serve/${slugify(x.title)}`,
    title: x.title,
  }));

  const it = IT_SOLUTIONS.map((x) => ({
    url: `/it-solutions/${slugify(x.title)}`,
    title: x.title,
  }));

  const staticRoutes = [
    { url: "/", title: "Home" },
    { url: "/about-us", title: "About Us" },
    { url: "/contact-us", title: "Contact Us" },
  ];

  return [...staticRoutes, ...workforce, ...industries, ...it];
}
