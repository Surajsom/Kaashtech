export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}