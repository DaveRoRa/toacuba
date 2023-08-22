import NextLink from "next/link";
import { IconType } from "react-icons";

type Props = {
  link: string;
  icon: IconType;
};

export default function SocialLink({ icon: Icon, link }: Props) {
  return (
    <NextLink target="_blank" href={link} className="flex-1 aspect-square">
      <Icon className="h-full w-full text-primary-400" />
    </NextLink>
  );
}
