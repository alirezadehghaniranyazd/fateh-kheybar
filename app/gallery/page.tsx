"use client";

import { useState } from "react";

import { gallery, GalleryItem } from "@/data/gallery";

import {
  GalleryFilter,
  GalleryGrid,
  GalleryLightbox,
} from "@/components/Gallery";

import { GalleryFilterValue } from "@/components/Gallery/GalleryFilter";

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilterValue>("all");

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  function handleSelect(item: GalleryItem) {
    setSelectedItem(item);
  }

  function handleClose() {
    setSelectedItem(null);
  }

  function handlePrev() {
    if (!selectedItem) return;

    const index = gallery.findIndex((item) => item.id === selectedItem.id);

    const prev = index === 0 ? gallery[gallery.length - 1] : gallery[index - 1];

    setSelectedItem(prev);
  }

  function handleNext() {
    if (!selectedItem) return;

    const index = gallery.findIndex((item) => item.id === selectedItem.id);

    const next = index === gallery.length - 1 ? gallery[0] : gallery[index + 1];

    setSelectedItem(next);
  }

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14">
          <p className="font-semibold text-emerald-600">
            باشگاه ورزشی فاتح خیبر
          </p>

          <h1 className="mt-3 text-5xl font-black text-slate-900">
            گالری تصاویر
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-slate-600">
            تصاویر باشگاه، مسابقات، اردوها، مراسم و لحظات خاطره‌انگیز.
          </p>
        </div>

        <GalleryFilter active={filter} onChange={setFilter} />

        <GalleryGrid filter={filter} onSelect={handleSelect} />
      </main>

      <GalleryLightbox
        open={selectedItem !== null}
        item={selectedItem}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
