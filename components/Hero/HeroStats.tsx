import { hero } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-4">
      {hero.stats.map((item) => (
        <div key={item.label}>
          <p className="text-2xl font-bold text-emerald-600">{item.value}</p>

          <p className="text-sm text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
