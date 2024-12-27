import React, { PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface Props {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  className = "primary-button",
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
