import { hero } from "@/data/hero";
export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
        {hero.buttons.primary}
      </button>

      <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
        {hero.buttons.secondary}
      </button>
    </div>
  );
}
