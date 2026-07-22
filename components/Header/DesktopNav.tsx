import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-medium text-slate-700 transition hover:text-emerald-600"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}