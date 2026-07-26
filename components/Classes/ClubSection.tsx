import Image from "next/image";
import { Button } from "@/components/ui";

type ClubSectionProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export default function ClubSection({
  id,
  title,
  description,
  image,
  features,
}: ClubSectionProps) {
  return (
    <section id={id} className="grid items-center gap-12 py-12 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div>
        <h3 className="text-4xl font-black text-slate-900">{title}</h3>

        <p className="mt-6 leading-8 text-slate-600">{description}</p>

        <ul className="mt-8 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-600"></span>

              {feature}
            </li>
          ))}
        </ul>

        <Button className="mt-10">مشاهده بیشتر</Button>
      </div>
    </section>
  );
}
