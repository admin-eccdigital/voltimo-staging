import { type ReactNode, type ElementType, type HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  tone?: "light" | "subtle" | "dark" | "darker" | "yellow";
  spacing?: "default" | "tight" | "flush";
  as?: ElementType;
  className?: string;
}

export function Section({
  children,
  tone = "light",
  spacing = "default",
  as: Tag = "section",
  className = "",
  ...rest
}: SectionProps) {
  const classes = [
    "vlt-section",
    `vlt-section--${tone}`,
    spacing !== "default" && `vlt-section--${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
