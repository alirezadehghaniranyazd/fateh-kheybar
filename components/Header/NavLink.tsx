"use client";

import { useEffect, useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!href.startsWith("#")) return;

    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [href]);

  return (
    <a
      href={href}
      className={`
        rounded-xl
        border
        px-4
        py-2
        font-medium
        transition-all
        duration-300

        ${
          active
            ? "border-emerald-600 bg-emerald-600 text-white shadow-md"
            : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
        }
      `}
    >
      {children}
    </a>
  );
}
