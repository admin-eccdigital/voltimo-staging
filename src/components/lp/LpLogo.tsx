export interface LpLogoProps {
  inverse?: boolean;
  height?: number;
}

export function LpLogo({ inverse = false, height = 34 }: LpLogoProps) {
  const c = inverse ? "#FFFFFF" : "#1E3876";
  return (
    <svg
      viewBox="0 0 314.09 147.81"
      role="img"
      aria-label="Voltimo"
      style={{ height, width: "auto", display: "block" }}
    >
      <circle cx="93.99" cy="72.29" r="66.83" fill="#F9DE74" />
      <path d="M 60 65 L 68 58 L 93 86 L 155 18 L 163 25 L 93 100 Z" fill={c} />
      <text
        x="120.82"
        y="111.69"
        fill={c}
        fontFamily="'Source Sans 3', system-ui, sans-serif"
        fontSize="51"
        fontWeight="600"
      >
        oltimo
      </text>
    </svg>
  );
}
