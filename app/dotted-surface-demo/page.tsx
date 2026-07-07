import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from "@/lib/utils";

export default function DottedSurfaceDemoPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      <DottedSurface className="size-full" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
            "blur-[30px]",
          )}
        />
        <h1 className="font-mono text-4xl font-semibold">Dotted Surface</h1>
      </div>
    </main>
  );
}

