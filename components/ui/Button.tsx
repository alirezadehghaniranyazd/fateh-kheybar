import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:scale-105 active:scale-95";

  const styles = {
    primary:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30",

    secondary: "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
