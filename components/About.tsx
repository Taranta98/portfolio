"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, skills } from "@/lib/data";

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

        <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-xs lg:mx-0"
          >
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-border glow-violet">
              <Image
                src={siteConfig.profileImage}
                alt={`Foto di ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 320px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-violet-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-violet/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={16} className="text-violet-light" />
              <span>{siteConfig.location}</span>
            </div>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Sviluppatore Full Stack formato presso la Scuola di Alta
              Formazione Infobasic, orientato allo sviluppo di applicazioni web
              moderne e performanti. Collaborativo, affidabile e con forte
              attitudine al problem solving e alla crescita professionale
              continua.
            </p>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Dopo uno stage presso l'azienda Ud'anet dove ho lavorato come Full Stack Developer, sono attualmente in cerca di un'opportunità di lavoro.
            </p>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Cerco continuamente di migliorare le mie abilità e di imparare nuove tecnologie.
            </p>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-light">
                Stack & competenze
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-navy-light/60 px-4 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={siteConfig.cvPath}
              download={siteConfig.cvDownloadName}
              className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-6 py-3 text-sm font-medium text-violet-light transition-all hover:bg-violet/20"
            >
              <Download size={16} />
              Scarica il mio CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
