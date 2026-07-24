import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

export default function FooterLinks({ title, href }: Props) {
  return (
    <Link href={href} className="transition hover:text-emerald-500">
      {title}
    </Link>
  );
}
