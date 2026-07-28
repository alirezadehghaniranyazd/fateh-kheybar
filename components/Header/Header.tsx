import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

import { Button } from "@/components/ui";

import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-99999">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 shadow-lg shadow-slate-200/50 backdrop-blur-md md:px-6">
        <MobileMenu />

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <a
            href="/pdf/registration-form.pdf"
            download
            aria-label="دانلود فرم ثبت‌نام"
          >
            <Button size="sm" icon={<Download size={12} />}>
              <span className="md:hidden">فرم ثبت نام</span>

              <span className="hidden md:inline">دانلود فرم ثبت‌نام</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
