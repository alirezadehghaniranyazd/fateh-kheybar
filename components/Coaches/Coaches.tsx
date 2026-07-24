import { coaches } from "@/data/coaches";
import CoachCard from "./CoachCard";

export default function Coaches() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="font-semibold text-emerald-600">تیم مربیان</p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          مربیان باشگاه
        </h2>

        <p className="mt-4 text-slate-600">
          مربیان مجرب باشگاه فاتح خیبر با سال‌ها تجربه در آموزش هنرهای رزمی و
          بدنسازی.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {coaches.map((coach) => (
          <CoachCard
            key={coach.id}
            name={coach.name}
            role={coach.role}
            degree={coach.degree}
            experience={coach.experience}
            image={coach.image}
            description={coach.description}
          />
        ))}
      </div>
    </section>
  );
}
