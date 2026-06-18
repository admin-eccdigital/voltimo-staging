import { type ReactNode } from "react";

export interface ContainerProps {
  children?: ReactNode;
  width?: "default" | "narrow" | "wide";
  className?: string;
}

export function Container({
  children,
  width = "default",
  className = "",
}: ContainerProps) {
  const classes = [
    "vlt-container",
    width !== "default" && `vlt-container--${width}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
