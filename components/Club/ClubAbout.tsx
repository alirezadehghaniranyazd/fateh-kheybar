type ClubAboutProps = {
  description: string;
  features: string[];
};

export default function ClubAbout({ description, features }: ClubAboutProps) {
  return (
    <section className="border-t border-slate-200 py-20">
      <p className="font-semibold text-emerald-600">معرفی باشگاه</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        درباره این رشته
      </h2>

      <p className="mt-8 max-w-3xl leading-8 text-slate-600">{description}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />

              <span className="font-medium text-slate-800">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
