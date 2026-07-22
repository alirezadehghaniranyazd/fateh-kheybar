import { about } from "@/data/about";
import AboutFeatures from "./AboutFeatures";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-emerald-600">درباره ما</p>

          <h2 className="mb-6 text-4xl font-black text-slate-900">
            {about.title}
          </h2>

          <p className="leading-8 text-slate-600">{about.description}</p>
        </div>

        <div>
          <AboutFeatures />
        </div>
      </div>
    </section>
  );
}
