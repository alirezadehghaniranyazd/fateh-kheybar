type ClassCardProps = {
  title: string;
  group: string;
  coach: string;
  schedule: string;
  description: string;
};

export default function ClassCard({
  title,
  group,
  coach,
  schedule,
  description,
}: ClassCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-2 text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mb-2 text-emerald-600 font-semibold">{group}</p>

      <p className="text-slate-600">{coach}</p>

      <p className="mt-2 text-sm text-slate-500">{schedule}</p>

      <p className="mt-5 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
