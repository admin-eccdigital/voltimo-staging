"use client";

import { useId, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
}

export function Textarea({
  label,
  hint,
  error,
  required = false,
  rows = 4,
  id,
  className = "",
  ...rest
}: TextareaProps) {
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
      <textarea
        id={fieldId}
        rows={rows}
        className="vlt-input vlt-textarea"
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
