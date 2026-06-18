"use client";

import { useId, type InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
  label?: string;
  id?: string;
}

export function Checkbox({
  label,
  disabled = false,
  id,
  className = "",
  ...rest
}: CheckboxProps) {
  const autoId = useId();
  const fieldId = id || autoId;

  return (
    <label
      className={`vlt-check ${disabled ? "vlt-check--disabled" : ""} ${className}`}
      htmlFor={fieldId}
    >
      <input type="checkbox" id={fieldId} disabled={disabled} {...rest} />
      <span className="vlt-check__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      {label && <span className="vlt-check__label">{label}</span>}
    </label>
  );
}
