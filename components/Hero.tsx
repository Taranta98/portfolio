"use client";

import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const orbitLogosOuter = [
  { src: "/javascript.svg", label: "JavaScript" },
  { src: "/Laravel-Logo.wine.png", label: "Laravel" },
  { src: "/tailwindcssimage.webp", label: "Tailwind" },
  { src: "/databaseimg.png", label: "Database" },
] as const;

const orbitLogosInner = [
  { src: "/cssimg.webp", label: "CSS" },
  { src: "/nextjsimg.webp", label: "Next.js" },
  { src: "/nodejsimg.webp", label: "Node.js" },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/55 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-20 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-border bg-navy-light/50 shadow-lg shadow-violet/10">
                <Image
                  src={siteConfig.profileImage}
                  alt={`Foto di ${siteConfig.name}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-violet-dark/30 to-transparent" />
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-violet-light">
                {siteConfig.role}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Ciao, sono{" "}
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:max-w-2xl sm:text-xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-violet-dark hover:shadow-lg hover:shadow-violet/25"
              >
                Vedi i progetti
              </a>
              <a
                href={siteConfig.cvPath}
                download={siteConfig.cvDownloadName}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-navy-light/50 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-violet/40 hover:bg-navy-light"
              >
                <Download size={16} />
                Scarica CV
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-5 lg:block xl:col-span-6">
            <Suspense fallback={null}>
              <div className="relative ml-auto grid aspect-square w-full max-w-[640px] place-items-center">
                <div className="relative size-[520px] xl:size-[640px]">
                  <OrbitingCircles
                    radius={220}
                    duration={26}
                    iconSize={54}
                    className="bg-navy-light/40 ring-1 ring-border/60 backdrop-blur"
                    pathClassName="stroke-primary/35"
                  >
                    {orbitLogosOuter.map((logo) => (
                      <div
                        key={logo.label}
                        className="grid size-full place-items-center rounded-full"
                        aria-label={logo.label}
                        title={logo.label}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.label}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    ))}
                  </OrbitingCircles>

                  <OrbitingCircles
                    radius={140}
                    reverse
                    speed={1.8}
                    duration={18}
                    iconSize={48}
                    className="bg-navy-light/35 ring-1 ring-border/50 backdrop-blur"
                    path
                    pathClassName="stroke-primary/25"
                  >
                    {orbitLogosInner.map((logo) => (
                      <div
                        key={logo.label}
                        className="grid size-full place-items-center rounded-full"
                        aria-label={logo.label}
                        title={logo.label}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.label}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </div>
                    ))}
                  </OrbitingCircles>

                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid size-28 place-items-center rounded-full bg-background/30 ring-1 ring-border/60 backdrop-blur">
                      <span className="font-mono text-sm text-muted">
                        Skills
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-violet-light"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
