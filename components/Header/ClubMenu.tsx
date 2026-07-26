"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavigationItem } from "@/data/navigation";

type ClubMenuProps = {
  item: Extract<NavigationItem, { type: "dropdown" }>;
};

export default function ClubMenu({ item }: ClubMenuProps) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
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

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-72
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-xl
          "
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                p-5
                transition
                last:border-none
                hover:bg-emerald-50
              "
            >
              <h3 className="font-bold text-slate-900">{child.title}</h3>

              <p className="mt-1 text-sm text-slate-500">{child.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
