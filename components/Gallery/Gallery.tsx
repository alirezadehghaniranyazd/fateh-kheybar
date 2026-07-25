import { gallery } from "@/data/gallery";
import GalleryImage from "./GalleryImage";
import { Button, Section } from "@/components/ui";

export default function Gallery() {
  return (
    <Section>
      <div className="mb-14 text-center">
        <p className="font-semibold text-emerald-600">گالری باشگاه</p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          لحظاتی از تمرینات و مسابقات
        </h2>

        <p className="mt-4 text-slate-600">
          بخشی از تصاویر تمرین‌ها، اردوها، مسابقات و فعالیت‌های باشگاه فاتح
          خیبر.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <GalleryImage key={item.id} image={item.image} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button>مشاهده همه تصاویر</Button>
      </div>
    </Section>
  );
}
