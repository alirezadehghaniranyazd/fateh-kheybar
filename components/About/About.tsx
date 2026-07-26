import { about } from "@/data/about";
import AboutFeatures from "./AboutFeatures";
import { Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
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
    </Section>
  );
}
