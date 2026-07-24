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
    <Card className="p-8 text-center">
      <div className="mb-5 text-5xl">{icon}</div>

      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-slate-600 leading-7">{description}</p>
    </Card>
  );
}
