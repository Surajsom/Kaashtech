
import { WORKFORCE_SOLUTIONS, INDUSTRIES_WE_SERVE, IT_SOLUTIONS } from "../data/sitemapData";

export default function cardsdatmerge() {
  const workforce = WORKFORCE_SOLUTIONS.map((x) => ({
    title: x.label,
    icon: x.icon,
     img: x.img,
     desc: x.desc,
    href: x.href,
  }));

  const industries = INDUSTRIES_WE_SERVE.map((x) => ({
   title: x.label,
    icon: x.icon,
     img: x.img,
     desc: x.desc,
    href: x.href,
  }));

  const it = IT_SOLUTIONS.map((x) => ({
    title: x.label,
    icon: x.icon,
     img: x.img,
     desc: x.desc,
    href: x.href,
  }));


  return [...workforce, ...industries, ...it];
}
