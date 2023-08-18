import { FaCheck } from "react-icons/fa";
export default function List({
  elements,
  header,
}: {
  header: string;
  elements: string[];
}) {
  return (
    <div className="text-white text-2xl sm:text-3xl font-bold py-[30px] px-[10px] md:px-[30px]">
      <h2>{header}</h2>
      <ul className="mt-5">
        {elements.map((element) => (
          <li key={element} className="flex">
            <div className="flex-shrink-0 h-[21px] mt-[14px] mr-[6px]"><FaCheck className="text-primary-200 text-xs" /></div>
            <div className="text-base font-normal leading-[2.2]">{element}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
