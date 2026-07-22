import { classes } from "@/data/classes";
import ClassCard from "./ClassCard";

export default function Classes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="font-semibold text-emerald-600">کلاس‌های باشگاه</p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          دوره‌های آموزشی
        </h2>

        <p className="mt-4 text-slate-600">
          کلاس‌های باشگاه فاتح خیبر برای تمامی رده‌های سنی برگزار می‌شود.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}
