import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-3 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2
            font-medium
            text-slate-700
            transition-all
            duration-300
            hover:border-emerald-200
            hover:bg-emerald-50
            hover:text-emerald-600
          "
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
