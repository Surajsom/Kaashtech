import { slugify } from "./slugify";
import { workforceSolutions, industriesWeServe, itSolutions } from "./sitemapData";

export function buildAllRoutes() {
  const workforce = workforceSolutions.map((x) => ({
    url: `/workforce-solutions/${slugify(x.title)}`,
    title: x.title,
  }));

  const industries = industriesWeServe.map((x) => ({
    url: `/industries-we-serve/${slugify(x.title)}`,
    title: x.title,
  }));

  const it = itSolutions.map((x) => ({
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
