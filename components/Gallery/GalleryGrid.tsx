import Image from "next/image";
import { gallery, GalleryItem } from "@/data/gallery";
import { GalleryFilterValue } from "./GalleryFilter";

type Props = {
  filter: GalleryFilterValue;
  onSelect: (item: GalleryItem) => void;
};

export default function GalleryGrid({ filter, onSelect }: Props) {
  const images =
    filter === "all"
      ? gallery
      : gallery.filter((item) => item.category === filter);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="
            group
            relative
            aspect-square
            overflow-hidden
            rounded-3xl
            shadow-lg
            text-right
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              flex
              items-end
              bg-linear-to-t
              from-black/60
              via-transparent
              to-transparent
              p-5
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            "
          >
            <span className="font-bold text-white">{item.title}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
