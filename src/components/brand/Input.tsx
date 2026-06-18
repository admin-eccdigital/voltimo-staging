"use client";

import { useId, type InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
}

export function Input({
  label,
  hint,
  error,
  required = false,
  id,
  className = "",
  ...rest
}: InputProps) {
  const autoId = useId();
  const fieldId = id || autoId;

  return (
    <div className={`vlt-field ${className}`}>
      {label && (
        <label className="vlt-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="vlt-field__req"> *</span>}
        </label>
      )}
      <input
        id={fieldId}
        className="vlt-input"
        required={required}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
      {error ? (
        <span className="vlt-field__err">{error}</span>
      ) : hint ? (
        <span className="vlt-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}
