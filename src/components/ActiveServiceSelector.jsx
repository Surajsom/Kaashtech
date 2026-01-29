"use client";

export function ActiveServiceSelector({ items, activeIndex, onChange }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => {
        const active = idx === activeIndex;
        return (
          <button
            key={item.title}
            type="button"
            onClick={() => onChange(idx)}
            className={`rounded-2xl border p-4 text-left transition ${
              active
                ? "border-white/40 bg-white/30 shadow-md backdrop-blur"
                : "border-white/20 bg-white/10 hover:bg-white/20"
            }`}
          >
            <p className={`text-sm font-semibold ${active ? "text-white" : "text-white/90"}`}>{item.title}</p>
            <p className={`mt-1 text-xs ${active ? "text-white/90" : "text-white/70"}`}>{item.meta}</p>
          </button>
        );
      })}
    </div>
  );
}