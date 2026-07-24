type Props = {
  title: string;
  value: string;
};

export default function ContactCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-emerald-600">{title}</h3>

      <p className="mt-3 leading-7 text-slate-700">{value}</p>
    </div>
  );
}
