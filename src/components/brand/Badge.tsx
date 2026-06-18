import { type ReactNode } from "react";

export interface BadgeProps {
  children?: ReactNode;
  variant?: "yellow" | "sky" | "blue" | "soft" | "outline";
  icon?: ReactNode;
  dotCheck?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "yellow",
  icon = null,
  dotCheck = false,
  className = "",
}: BadgeProps) {
  const classes = ["vlt-badge", `vlt-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {dotCheck && (
        <span className="vlt-badge__dot" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
      )}
      {icon}
      {children}
    </span>
  );
}
