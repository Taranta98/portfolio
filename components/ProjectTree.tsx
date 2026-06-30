"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  side,
}: {
  project: (typeof projects)[0];
  side: "left" | "right";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group w-full max-w-md overflow-hidden rounded-2xl border border-border bg-navy-light/40 backdrop-blur transition-all hover:border-violet/40 hover:shadow-lg hover:shadow-violet/10"
    >
      <div className="relative aspect-video overflow-hidden bg-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 448px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-violet/10 px-2.5 py-1 text-xs font-medium text-violet-light"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-light transition-colors hover:text-foreground"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectTree() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-violet/40" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Progetti"
          title="Un albero di progetti"
          description="Ogni ramo rappresenta un progetto su cui ho lavorato — con preview, stack tecnologico e link diretti."
        />

        <div className="relative">
          {/* Trunk line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet/60 via-violet/30 to-violet/60 md:block"
          />

          <ul className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li key={project.id} className="relative">
                  {/* Branch connector — desktop */}
                  <div
                    aria-hidden
                    className="absolute top-1/2 hidden h-0.5 -translate-y-1/2 md:block"
                    style={{
                      width: "calc(50% - 14rem)",
                      ...(isLeft
                        ? {
                            right: "50%",
                            background:
                              "linear-gradient(to left, rgba(124,58,237,0.5), rgba(124,58,237,0.1))",
                          }
                        : {
                            left: "50%",
                            background:
                              "linear-gradient(to right, rgba(124,58,237,0.5), rgba(124,58,237,0.1))",
                          }),
                    }}
                  />

                  {/* Node on trunk */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet bg-background md:block"
                  />

                  {/* Mobile branch line */}
                  <div
                    aria-hidden
                    className="mb-6 flex items-center gap-3 md:hidden"
                  >
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet/40" />
                    <div className="h-3 w-3 rounded-full border-2 border-violet bg-background" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet/40" />
                  </div>

                  <div
                    className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <div
                      className={`w-full md:w-[calc(50%-3rem)] ${
                        isLeft ? "md:pr-8" : "md:pl-8 md:ml-auto"
                      }`}
                    >
                      <ProjectCard
                        project={project}
                        side={isLeft ? "left" : "right"}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
