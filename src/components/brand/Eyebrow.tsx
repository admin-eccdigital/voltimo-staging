import { type ReactNode } from "react";

export interface EyebrowProps {
  children?: ReactNode;
  tone?: "sky" | "muted" | "ondark";
  className?: string;
}

export function Eyebrow({
  children,
  tone = "sky",
  className = "",
}: EyebrowProps) {
  const classes = [
    "vlt-eyebrow",
    tone !== "sky" && `vlt-eyebrow--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
