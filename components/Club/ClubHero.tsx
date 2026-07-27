import Image from "next/image";
import { Button } from "@/components/ui";

type ClubHeroProps = {
  title: string;
  description: string;
  image: string;
};

export default function ClubHero({ title, description, image }: ClubHeroProps) {
  return (
    <section className="grid items-center gap-12 py-20 lg:grid-cols-2">
      <div>
        <p className="font-semibold text-emerald-600">باشگاه ورزشی فاتح خیبر</p>

        <h1 className="mt-4 text-5xl font-black text-slate-900">{title}</h1>

        <p className="mt-8 max-w-2xl leading-8 text-slate-600">{description}</p>

        <Button className="mt-10">ثبت‌نام در {title}</Button>
      </div>

      <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
        <Image src={image} alt={title} fill priority className="object-cover" />
      </div>
    </section>
  );
}
