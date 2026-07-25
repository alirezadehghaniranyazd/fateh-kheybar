import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import { Button } from "@/components/ui";

export default function Header() {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-6 shadow-lg shadow-slate-200/50 backdrop-blur-md">
        <Logo />

        <DesktopNav />

        <Button>ثبت‌نام</Button>
      </div>
    </header>
  );
}
