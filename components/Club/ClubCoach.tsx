type ClubCoachProps = {
  coach: string;
  degree: string;
  experience: string;
};

export default function ClubCoach({
  coach,
  degree,
  experience,
}: ClubCoachProps) {
  return (
    <section className="py-20 border-t border-slate-200">
      <p className="font-semibold text-emerald-600">مربی باشگاه</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">{coach}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-900">درجه</h3>

          <p className="mt-2 text-slate-600">{degree}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-900">سابقه</h3>

          <p className="mt-2 text-slate-600">{experience}</p>
        </div>
      </div>
    </section>
  );
}
