import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. Tutti i diritti riservati.
        </p>
        <p className="text-sm text-muted">
          Realizzato con{" "}
          <span className="text-violet-light">Next.js</span> &{" "}
          <span className="text-violet-light">Three.js</span>
        </p>
      </div>
    </footer>
  );
}
