import React from "react";
import styles from "./buttons.module.css";

type Props = {
  link?: string;
  className?: string;
  large?: boolean;
  children: string;
  variant?: 1 | 2 | 3 | 4;
};

export default function Button({
  link,
  className,
  large,
  children,
  variant = 1,
}: Props) {
  if (link) {
    return (
      <a
        href={link}
        className={`${styles.interactiveButton} ${
          styles["variant" + variant]
        } ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${styles.interactiveButton} ${
        styles["variant" + variant]
      } ${className}`}
    >
      {children}
    </button>
  );
}
