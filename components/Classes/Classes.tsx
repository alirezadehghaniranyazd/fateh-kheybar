import { classes } from "@/data/classes";
import ClassCard from "./ClassCard";
import { Section } from "@/components/ui";

export default function Classes() {
  return (
    <Section>
      <p className="font-semibold text-emerald-600">کلاس‌های باشگاه</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        دوره‌های آموزشی
      </h2>

      <p className="mt-4 text-slate-600">
        کلاس‌های باشگاه فاتح خیبر برای تمامی رده‌های سنی برگزار می‌شود.
      </p>

      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <ClassCard
            key={item.id}
            title={item.title}
            group={item.group}
            coach={item.coach}
            schedule={item.schedule}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
