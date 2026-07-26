import { Trophy } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { achievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";
import { Section } from "@/components/ui";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle
        eyebrow="افتخارات باشگاه"
        title="چرا باشگاه فاتح خیبر؟"
        description="بیش از سه دهه تجربه در آموزش، پرورش قهرمانان و ارتقای سلامت ورزشکاران."
        icon={<Trophy className="h-12 w-12 text-emerald-600" />}
      />

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
    </Section>
  );
}
