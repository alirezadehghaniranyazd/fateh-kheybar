import { Card } from "@/components/ui";

type AchievementCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function AchievementCard({
  icon,
  title,
  description,
}: AchievementCardProps) {
  return (
    <Card className="p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 text-5xl">{icon}</div>

      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Card>
  );
}
