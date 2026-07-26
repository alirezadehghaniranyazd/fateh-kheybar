import { Section } from "@/components/ui";
import ClubSection from "./ClubSection";
import { clubs } from "@/data/clubs";

export default function Classes() {
  return (
    <Section id="classes">
      <p className="font-semibold text-emerald-600">باشگاه‌های ما</p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        باشگاه‌های تخصصی فاتح خیبر
      </h2>

      <p className="mt-4 max-w-3xl leading-8 text-slate-600">
        باشگاه ورزشی فاتح خیبر با دو مجموعه تخصصی نیوکونگ‌فو و بدنسازی، محیطی
        حرفه‌ای برای تمامی سنین فراهم کرده است.
      </p>

      {clubs.map((club) => (
        <ClubSection
          key={club.id}
          id={club.id}
          title={club.title}
          image={club.image}
          description={club.description}
          features={club.features}
        />
      ))}
    </Section>
  );
}
