import React from "react";

const getClassnameForVariant = (variant: 1 | 2 | 3 | 4) => {
  switch (variant) {
    case 2:
      return "font-bold tracking-[1px] text-sm py-[10px] px-10 border-white hover:bg-white hover:text-black";
    case 3:
      return "font-bold bg-primary-500 border-primary-500 tracking-[2px] font-normal text-base py-4 px-[34px] hover:bg-primary-400 hover:border-primary-400";
    case 4:
      return "font-bold tracking-[1px] text-sm py-[10px] px-10 bg-primary-500 border-primary-500 hover:bg-white hover:border-white hover:text-black";
    default:
      return "font-bold tracking-[1px] text-sm py-[10px] px-10 bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600";
  }
};

type Props = {
  link?: string;
  className?: string;
  children: string;
  variant?: 1 | 2 | 3 | 4;
  onClick?: () => void;
  disabled?: boolean;
};

const genClass =
  "border-2 border-solid uppercase rounded-full cursor-pointer leading-[1.5] inline-block text-white";

const disabledClass =
  "disabled:bg-disabled-400 disabled:text-disable-700 disabled:border-disabled-400 disabled:hover:border-disabled-400 disabled:cursor-not-allowed";

export default function Button({
  link,
  className,
  children,
  variant = 1,
  onClick,
  disabled,
}: Props) {
  const classnameForVariant = getClassnameForVariant(variant);

  if (link) {
    return (
      <a
        href={link}
        className={`${genClass} ${classnameForVariant} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${genClass} ${classnameForVariant} ${className} ${disabledClass}`}
    >
      {children}
    </button>
  );
}
