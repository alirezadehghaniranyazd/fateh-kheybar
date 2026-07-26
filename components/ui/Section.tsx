import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
