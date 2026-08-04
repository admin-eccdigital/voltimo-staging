import type { Metadata } from "next";

// Interní galerie komponent – nikdy neindexovat.
export const metadata: Metadata = {
  title: "Design system — Voltimo (interní)",
  robots: { index: false, follow: false },
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
