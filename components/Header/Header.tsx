import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-99999">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 shadow-lg shadow-slate-200/50 backdrop-blur-md md:px-6">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <MobileMenu />

          <Button>ثبت‌نام</Button>
        </div>
      </div>
    </header>
  );
}
