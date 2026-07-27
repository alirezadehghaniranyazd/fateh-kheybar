"use client";

export type GalleryFilterValue =
  | "all"
  | "kungfu"
  | "bodybuilding"
  | "competition"
  | "camp"
  | "ceremony";

const filters: {
  value: GalleryFilterValue;
  label: string;
}[] = [
  {
    value: "all",
    label: "همه",
  },

  {
    value: "kungfu",
    label: "نیو کونگ‌فو",
  },

  {
    value: "bodybuilding",
    label: "بدنسازی",
  },

  {
    value: "competition",
    label: "مسابقات",
  },

  {
    value: "camp",
    label: "اردو",
  },

  {
    value: "ceremony",
    label: "مراسم",
  },
];

type Props = {
  active: GalleryFilterValue;
  onChange: (value: GalleryFilterValue) => void;
};

export default function GalleryFilter({ active, onChange }: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`
            rounded-xl
            border
            px-5
            py-2.5
            font-medium
            transition-all
            duration-300

            ${
              active === filter.value
                ? "border-emerald-600 bg-emerald-600 text-white shadow-md"
                : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-50"
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
