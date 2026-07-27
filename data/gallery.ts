// data/gallery.ts

/*
|--------------------------------------------------------------------------
| Gallery Categories
|--------------------------------------------------------------------------
|
| all           => همه (فقط برای فیلتر - داخل عکس‌ها استفاده نمی‌شود)
| kungfu        => نیو کونگ‌فو
| bodybuilding  => بدنسازی
| competition   => مسابقات
| camp          => اردو
| ceremony      => مراسم
|
*/

export type GalleryCategory =
  | "kungfu"
  | "bodybuilding"
  | "competition"
  | "camp"
  | "ceremony";

export type GalleryItem = {
  id: number;
  image: string;
  category: GalleryCategory;
  title: string;
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/gallery/1.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },

  {
    id: 2,
    image: "/images/gallery/2.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },

  {
    id: 3,
    image: "/images/gallery/3.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },

  {
    id: 4,
    image: "/images/gallery/4.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },

  {
    id: 5,
    image: "/images/gallery/5.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },

  {
    id: 6,
    image: "/images/gallery/6.jpg",
    category: "kungfu",
    title: "نیو کونگ‌فو",
  },
];