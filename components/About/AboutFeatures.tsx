import { about } from "@/data/about";

export default function AboutFeatures() {
  return (
    <div className="grid gap-5">
      {about.features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="mb-2 text-xl font-bold text-slate-900">
            {feature.title}
          </h3>

          <p className="leading-7 text-slate-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
