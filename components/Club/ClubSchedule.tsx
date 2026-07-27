type ScheduleItem = {
  title: string;
  time: string;
};

type ClubScheduleProps = {
  schedule: ScheduleItem[];
};

export default function ClubSchedule({ schedule }: ClubScheduleProps) {
  return (
    <section className="border-t border-slate-200 py-20">
      <p className="font-semibold text-emerald-600">برنامه کلاس‌ها</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        زمان‌بندی تمرینات
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {schedule.map((item) => (
          <div
            key={`${item.title}-${item.time}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

            <p className="mt-4 text-lg font-semibold text-emerald-600">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
