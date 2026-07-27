"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

type Props = {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  open,
  item,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // میزان زوم
  const [scale, setScale] = useState(1);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrev();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.changedTouches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    touchEndX.current = e.changedTouches[0].clientX;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 60) {
      onNext();
    }

    if (distance < -60) {
      onPrev();
    }
  }

  // دابل کلیک برای زوم
  function handleDoubleClick() {
    setScale((prev) => (prev === 1 ? 2 : 1));
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (scale === 1) return;

    setDragging(true);

    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!dragging) return;

    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  }

  function handleMouseUp() {
    setDragging(false);
  }

  if (!open || !item) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-100
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      p-4
    "
      onClick={onClose}
    >
      {/* بستن */}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          absolute
          right-6
          top-6
          z-20
          rounded-full
          bg-white/10
          p-3
          text-white
          transition
          hover:bg-white/20
        "
      >
        <X size={28} />
      </button>

      {/* قبلی */}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="
          absolute
          left-4
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-white/10
          p-3
          text-white
          transition
          hover:bg-white/20
        "
      >
        <ChevronLeft size={34} />
      </button>

      {/* بعدی */}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
          absolute
          right-4
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-white/10
          p-3
          text-white
          transition
          hover:bg-white/20
        "
      >
        <ChevronRight size={34} />
      </button>

      {/* تصویر */}

      <div
        key={item.id}
        className={`
    relative
    h-[85vh]
    w-full
    max-w-7xl
    overflow-hidden
    select-none
    ${scale > 1 ? "cursor-grab" : "cursor-zoom-in"}
  `}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          draggable={false}
          className={`
  object-contain
  select-none
  transition-transform
  duration-300
  ease-out
  ${dragging ? "cursor-grabbing" : ""}
`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        />
      </div>
    </div>
  );
}
