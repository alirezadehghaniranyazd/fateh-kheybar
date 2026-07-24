import { UserPlus, ArrowLeft } from "lucide-react";
import { hero } from "@/data/hero";
import { Button } from "@/components/ui";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button icon={<UserPlus size={18} />}>{hero.buttons.primary}</Button>

      <Button variant="secondary" icon={<ArrowLeft size={18} />}>
        {hero.buttons.secondary}
      </Button>
    </div>
  );
}
