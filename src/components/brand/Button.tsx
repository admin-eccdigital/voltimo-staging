import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type BaseProps = {
  children?: ReactNode;
  variant?: "primary" | "cta" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  block?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  icon = null,
  iconPosition = "right",
  href,
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "vlt-btn",
    variant !== "primary" && `vlt-btn--${variant}`,
    size !== "md" && `vlt-btn--${size}`,
    pill && "vlt-btn--pill",
    block && "vlt-btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      {children ? <span>{children}</span> : null}
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={classes} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
