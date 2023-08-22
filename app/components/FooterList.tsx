import NextLink from "next/link";

export default function FooterList({
  title,
  elements,
}: {
  title: string;
  elements: { text: string; link: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-[6px] text-primary-600">{title}</h3>
      <ul>
        {elements.map(({ link, text }) => (
          <li className="mb-1" key={link}>
            <NextLink className="text-primary-400 hover:underline underline-offset-[6px]" href={link}>
              {text}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
