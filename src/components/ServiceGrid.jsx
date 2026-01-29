import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { slugify } from "@/lib/slugify";

export function ServiceGrid({ basePath, items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={`${basePath}/${slugify(item.title)}`}
          className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </div>
            <ArrowRight className="mt-1 h-5 w-5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-700" />
          </div>
        </Link>
      ))}
    </div>
  );
}