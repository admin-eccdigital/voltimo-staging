import { type ReactNode, type ElementType } from "react";

export interface HeadingProps {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  size?: 1 | 2 | 3 | 4 | 5;
  ondark?: boolean;
  as?: ElementType;
  className?: string;
}

export function Heading({
  children,
  level = 2,
  size,
  ondark = false,
  as,
  className = "",
}: HeadingProps) {
  const Tag = as || (`h${level}` as ElementType);
  const sz = size || level;
  const classes = [
    "vlt-heading",
    `vlt-heading--${sz}`,
    ondark && "vlt-heading--ondark",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
