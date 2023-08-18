import Link from "next/link";
import SquareImage from "./square-image";

type Props = {
  src: string;
  alt: string;
  header: string;
  subtext: string;
  link: string;
};

export default function Card({ alt, header, link, src, subtext }: Props) {
  return (
    <div
      className={
        "border-[1px] bg-white border-primary-500 py-[30px] px-5 sm:p-[30px] md:p-5 md:pb-[30px]"
      }
    >
      <SquareImage alt={alt} src={src} />
      <div className="h-full flex flex-col items-center ">
        <div>
          <h4 className="mt-5 uppercase font-bold text-center text-xl tracking-[2px]">
            {header}
          </h4>
          <p className="text-lg mt-5 italic text-center leading-[1.8]">{subtext}</p>
        </div>
        <Link
          href={link}
          className={
            "uppercase mt-5 mx-auto text-center text-sm tracking-widest border-b-[1px] " +
            "border-b-primary-500 pb-[2px] text-primary-500 hover:border-b-black"
          }
        >
          More
        </Link>
      </div>
    </div>
  );
}
