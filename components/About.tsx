"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { languages, siteConfig, skillCategories } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
};

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Chi sono"
          title="Sviluppatore Full Stack appassionato di codice e design"
          description="Creo soluzioni digitali complete, unendo un'esperienza utente curata a un'architettura solida e manutenibile."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.aside
            {...fadeUp}
            className="lg:col-span-4 xl:col-span-3"
          >
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border glow-violet">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`Foto di ${siteConfig.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 384px, 280px"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-violet-dark/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <p className="text-lg font-semibold text-foreground">
                      {siteConfig.name}
                    </p>
                    <p className="text-sm text-violet-light">{siteConfig.role}</p>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-violet/20"
                />
              </div>

              <div className="rounded-2xl border border-border bg-navy-light/40 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet-light">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Località
                    </p>
                    <p className="text-sm text-foreground">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    Attualmente
                  </p>
                  <span className="inline-block rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-xs font-medium leading-snug text-violet-light">
                    In cerca di nuove opportunità
                  </span>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
                    Lingue
                  </p>
                  <ul className="space-y-2">
                    {languages.map((lang) => (
                      <li
                        key={lang.name}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="font-medium text-foreground">
                          {lang.name}
                        </span>
                        <span className="text-xs text-muted">{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={siteConfig.cvPath}
                  download={siteConfig.cvDownloadName}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet/30 bg-violet/10 px-5 py-3 text-sm font-medium text-violet-light transition-all hover:bg-violet/20"
                >
                  <Download size={16} />
                  Scarica il mio CV
                </a>
              </div>
            </div>
          </motion.aside>

          <div className="space-y-8 lg:col-span-8 xl:col-span-9">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-2xl border border-border bg-navy-light/40 p-6 sm:p-8"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-light">
                Chi sono
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  Sviluppatore Full Stack formato presso la Scuola di Alta
                  Formazione Infobasic, orientato allo sviluppo di applicazioni
                  web moderne e performanti. Collaborativo, affidabile e con
                  forte attitudine al problem solving.
                </p>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                    Dopo uno stage presso Ud'anet, dove ho lavorato su progetti nei settori dell'istruzione e della sanità, sono aperto a nuove opportunità professionali.
                </p>
                <p className="text-sm leading-relaxed text-muted sm:col-span-2 sm:text-base">
                  Cerco continuamente di migliorare le mie abilità, sperimentare
                  nuove tecnologie e integrare strumenti AI nel flusso di
                  sviluppo per ottimizzare qualità e produttività.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-light">
                Stack & competenze
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-2xl border border-border bg-navy-light/40 p-4 transition-colors hover:border-violet/30 sm:p-5"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-light">
                      {category.name}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground sm:text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
