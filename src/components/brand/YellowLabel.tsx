import { type ReactNode } from "react";

export interface YellowLabelProps {
  lines?: string[];
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "yellow" | "sky" | "blue";
  className?: string;
}

export function YellowLabel({
  lines,
  children,
  size = "md",
  color = "yellow",
  className = "",
}: YellowLabelProps) {
  const items = lines && lines.length ? lines : [children];
  const stack = items.length > 1;
  const classes = [
    "vlt-ylabel",
    `vlt-ylabel--${size}`,
    color !== "yellow" && `vlt-ylabel--${color}`,
    stack && "vlt-ylabel--stack",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {items.map((line, i) => (
        <span className="vlt-ylabel__tab" key={i}>
          {line}
        </span>
      ))}
    </span>
  );
}
