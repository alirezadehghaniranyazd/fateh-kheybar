"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [clubOpen, setClubOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-emerald-50"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed left-4 right-4 top-24 z-40 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-600 hover:text-white"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => setClubOpen(!clubOpen)}
                    className="flex w-full items-center justify-between px-4 py-3 font-medium text-slate-700"
                  >
                    {item.title}

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        clubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {clubOpen && (
                    <div className="border-t border-slate-200 bg-slate-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-6 py-3 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          <div className="font-semibold">{child.title}</div>

                          <div className="text-xs text-slate-500">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
