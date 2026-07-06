"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences, type ExperienceItem } from "@/lib/data";

const typeConfig = {
  work: {
    icon: Briefcase,
    label: "Esperienza",
    accent: "border-violet/50 bg-violet/10 text-violet-light",
  },
  education: {
    icon: GraduationCap,
    label: "Formazione",
    accent: "border-accent/50 bg-accent/10 text-violet-light",
  },
  certification: {
    icon: Award,
    label: "Certificazione",
    accent: "border-green-500/30 bg-green-500/10 text-green-400",
  },
} as const;

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-10"
    >
      <div
        aria-hidden
        className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-lg border ${config.accent}`}
      >
        <Icon size={14} />
      </div>

      <div className="rounded-2xl border border-border bg-navy-light/40 p-5 sm:p-6 transition-colors hover:border-violet/30">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <span
              className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.accent}`}
            >
              {config.label}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-violet-light">{item.organization}</p>
          </div>
          <time className="shrink-0 text-sm text-muted">{item.period}</time>
        </div>

        <p className="text-sm leading-relaxed text-muted">{item.description}</p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet-light"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Percorso"
          title="Esperienza, formazione e certificazioni"
          description="Dal master full stack allo stage in azienda — un percorso orientato allo sviluppo web professionale."
        />

        <div className="relative max-w-3xl">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-violet/60 via-violet/20 to-transparent"
          />

          <ol className="flex flex-col gap-8">
            {experiences.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
