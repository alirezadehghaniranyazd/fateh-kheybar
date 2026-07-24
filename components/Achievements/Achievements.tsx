import { achievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-semibold text-emerald-600">افتخارات باشگاه</p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            چرا باشگاه فاتح خیبر؟
          </h2>

          <p className="mt-4 text-slate-600">
            بیش از سه دهه تجربه در آموزش، پرورش قهرمانان و ارتقای سلامت
            ورزشکاران.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <AchievementCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
