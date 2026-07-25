import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { hero } from "@/data/hero";
import heroImage from "@/public/images/hero/hero-main.jpg";
import { Section } from "@/components/ui";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 md:grid-cols-2">
        {/* متن */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600"></span>

            {hero.badge}
          </div>

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
        <div className="relative animate-in fade-in slide-in-from-right-8 delay-200 duration-700">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={heroImage}
              alt="باشگاه ورزشی فاتح خیبر"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
