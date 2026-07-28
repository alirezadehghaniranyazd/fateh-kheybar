import { UserPlus, ArrowLeft } from "lucide-react";
import { hero } from "@/data/hero";
import { Button } from "@/components/ui";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="/register">
        <Button icon={<UserPlus size={18} />}>{hero.buttons.primary}</Button>
      </Link>

      <Link href="/classes">
        <Button variant="secondary" icon={<ArrowLeft size={18} />}>
          {hero.buttons.secondary}
        </Button>
      </Link>
    </div>
  );
}
