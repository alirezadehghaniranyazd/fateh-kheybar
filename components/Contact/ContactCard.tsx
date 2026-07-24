import { Card } from "@/components/ui";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export default function ContactCard({ title, value, icon: Icon }: Props) {
  return (
    <Card className="p-6 text-center">
      <Icon className="mx-auto mb-4 h-8 w-8 text-emerald-600" />

      <h3 className="font-bold text-emerald-600">{title}</h3>

      <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
        {value}
      </p>
    </Card>
  );
}
