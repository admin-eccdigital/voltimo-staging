export interface StatCircleProps {
  value: string;
  label?: string;
  variant?: "blue" | "yellow" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function StatCircle({
  value,
  label,
  variant = "blue",
  size = "md",
  className = "",
}: StatCircleProps) {
  const classes = [
    "vlt-stat",
    `vlt-stat--${variant}`,
    size === "sm" && "vlt-stat--sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <span className="vlt-stat__value">{value}</span>
      {label && <span className="vlt-stat__label">{label}</span>}
    </span>
  );
}
