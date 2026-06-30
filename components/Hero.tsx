"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";

const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="section-padding relative z-10 mx-auto w-full max-w-7xl pt-24">
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
          className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ciao, sono{" "}
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
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
