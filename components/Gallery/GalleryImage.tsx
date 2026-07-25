import Image from "next/image";
import { Card } from "@/components/ui";

type Props = {
  image: string;
};

export default function GalleryImage({ image }: Props) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt="Gallery"
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />
      </div>
    </Card>
  );
}
