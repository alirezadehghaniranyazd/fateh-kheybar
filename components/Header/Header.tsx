import Logo from "./Logo";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <button className="rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700">
          ثبت‌نام
        </button>
      </div>
    </header>
  );
}