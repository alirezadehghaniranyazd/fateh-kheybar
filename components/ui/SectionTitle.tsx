import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  icon,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      <p className="font-semibold text-emerald-600">{eyebrow}</p>

      {icon && <div className="mt-4 flex justify-center">{icon}</div>}

      <h2 className="mt-4 text-4xl font-black text-slate-900">{title}</h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">{description}</p>
    </div>
  );
}
