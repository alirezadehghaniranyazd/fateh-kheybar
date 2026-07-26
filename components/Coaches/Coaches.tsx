import { coaches } from "@/data/coaches";
import CoachCard from "./CoachCard";
import { Section } from "@/components/ui";

export default function Coaches() {
  return (
    <Section id="coaches">
      <p className="font-semibold text-emerald-600">تیم مربیان</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">مربیان باشگاه</h2>

      <p className="mt-4 text-slate-600">
        مربیان مجرب باشگاه فاتح خیبر با سال‌ها تجربه در آموزش هنرهای رزمی و
        بدنسازی.
      </p>

      <div className="mt-10 grid justify-center gap-8 md:grid-cols-2">
        {coaches.map((coach) => (
          <div key={coach.id} className="mx-auto w-full max-w-110">
            <CoachCard
              name={coach.name}
              role={coach.role}
              degree={coach.degree}
              experience={coach.experience}
              image={coach.image}
              description={coach.description}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
