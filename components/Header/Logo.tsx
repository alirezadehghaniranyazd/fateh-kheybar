import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="relative h-11 w-11 overflow-hidden rounded-full">
        <Image
          src="/images/logo/logo.jpg"
          alt="باشگاه ورزشی فاتح خیبر"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="whitespace-nowrap text-lg font-bold text-slate-900">
          باشگاه ورزشی فاتح خیبر
        </h1>

        <p className="text-xs text-slate-500">قدرت • انضباط • سلامتی</p>
      </div>
    </div>
  );
}
