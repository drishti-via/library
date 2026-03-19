export default function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <article className="rounded-[28px] bg-white/90 p-5 shadow-glow">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-library-500">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-library-900">{value}</p>
        </div>
        <div className="rounded-2xl bg-library-100 p-3 text-library-700">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-4 text-base leading-relaxed text-library-700">{detail}</p>
    </article>
  );
}
