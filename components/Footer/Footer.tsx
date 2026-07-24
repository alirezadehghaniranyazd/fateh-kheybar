import { footer } from "@/data/footer";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-3xl font-black">{footer.clubName}</h2>

        <div className="mt-10 flex flex-col gap-3">
          {footer.links.map((item) => (
            <FooterLinks key={item.title} title={item.title} href={item.href} />
          ))}
        </div>

        <p className="mt-10 border-t border-slate-700 pt-8 text-sm text-slate-400">
          © 2026 — {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
