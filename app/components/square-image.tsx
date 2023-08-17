import Image from "next/image";

export default function SquareImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="aspect-square relative">
      <Image src={src} alt={alt} fill className="object-cover"/>
    </div>
  );
}
