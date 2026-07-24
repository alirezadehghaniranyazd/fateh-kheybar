import Image from "next/image";
import { Card } from "@/components/ui";

type CoachCardProps = {
  name: string;
  role: string;
  degree: string;
  experience: string;
  image: string;
  description: string;
};

export default function CoachCard({
  name,
  role,
  degree,
  experience,
  image,
  description,
}: CoachCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={600}
        height={700}
        className="h-80 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="mt-2 font-medium text-emerald-600">{role}</p>

        <p className="mt-1 text-slate-500">{degree}</p>

        <p className="mt-1 text-slate-500">{experience}</p>

        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </div>
    </Card>
  );
}
