import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { hero } from "@/data/hero";
import heroImage from "@/public/images/hero/hero-main.jpg";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* متن */}
        <div className="space-y-6">
          <p className="font-medium text-emerald-600">{hero.badge}</p>

          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            {hero.title}
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            {hero.description}
          </p>

          <HeroButtons />

          <HeroStats />
        </div>

        {/* تصویر */}
        <div className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={heroImage}
              alt="باشگاه ورزشی فاتح خیبر"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
