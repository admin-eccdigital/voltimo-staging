import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-bold text-voltimo-primary">Voltimo — Staging</h1>
      <p className="text-voltimo-muted">Landing pages pro klientský náhled.</p>
      <Link
        href="/elektrikar-za-10-dni"
        className="inline-flex items-center gap-2 rounded-full bg-voltimo-yellow px-6 py-3 font-semibold text-voltimo-primary transition hover:bg-voltimo-yellow-hover"
      >
        Elektrikář za 10 dní
      </Link>
    </main>
  );
}
