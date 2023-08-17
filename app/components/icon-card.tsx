
import { AiFillAlert } from "react-icons/ai";
import { IconType } from "react-icons";
type Props = {
  icon: IconType;
  subtext: string;
};

export default function IconCard({ icon: Icon, subtext }: Props) {
  return (
    <div
      className={
        "my-[30px] w-[150px] sm:w-[250px] mx-[10px] md:m-[30px] md:w-[113px] md:h-[162px] " +
        "lg:w-[152px] flex flex-col items-center  text-white"
      }
    >
      <Icon className="mt-6 text-[4rem]" />
      <h4 className={`mt-5 uppercase text-2xl tracking-widest text-center`}>{subtext}</h4>
    </div>
  );
}
