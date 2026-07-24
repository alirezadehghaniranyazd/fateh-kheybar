import Image from "next/image";
import { Card } from "@/components/ui";

type Props = {
  image: string;
};

export default function GalleryImage({ image }: Props) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt="Gallery"
        width={700}
        height={500}
        className="h-72 w-full object-cover transition duration-500 hover:scale-110"
      />
    </Card>
  );
}
