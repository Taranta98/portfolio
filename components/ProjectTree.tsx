"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const PAGE_SIZE = 2;

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
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="group w-full max-w-md overflow-hidden rounded-2xl border border-border bg-navy-light/40 backdrop-blur transition-all hover:border-violet/40 hover:shadow-lg hover:shadow-violet/10"
    >
      <div className="relative aspect-video overflow-hidden bg-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`transition-transform duration-500 group-hover:scale-105 ${
            project.imageFit === "contain"
              ? "object-contain p-10"
              : "object-cover"
          }`}
          sizes="(max-width: 768px) 100vw, 448px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent" />
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

function ProjectTreeItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative"
    >
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

      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet bg-background md:block"
      />

      <div
        aria-hidden
        className="mb-6 flex items-center gap-3 md:hidden"
      >
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-violet/40" />
        <div className="h-3 w-3 rounded-full border-2 border-violet bg-background" />
        <div className="h-px flex-1 bg-linear-to-l from-transparent to-violet/40" />
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
    </motion.li>
  );
}

export function ProjectTree() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  const remaining = projects.length - visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, projects.length));
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-linear-to-b from-transparent to-violet/40" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Progetti"
          title="Un albero di progetti"
          description="Ogni ramo rappresenta un progetto su cui ho lavorato — con preview, stack tecnologico e link diretti."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-linear-to-b from-violet/60 via-violet/30 to-violet/60 md:block"
          />

          <ul className="flex flex-col gap-16 md:gap-24">
            <AnimatePresence initial={false}>
              {visibleProjects.map((project, index) => (
                <ProjectTreeItem
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>

            {hasMore && (
              <li className="relative flex justify-center pt-4">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-violet/40 to-transparent md:block"
                />

                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={loadMore}
                  aria-label={`Mostra altri ${Math.min(remaining, PAGE_SIZE)} progetti`}
                  className="group relative z-10 flex flex-col items-center gap-2 rounded-full border border-violet/30 bg-navy-light/80 px-6 py-4 text-sm font-medium text-violet-light backdrop-blur transition-all hover:border-violet/50 hover:bg-violet/10 hover:text-foreground"
                >
                  <span className="text-xs text-muted transition-colors group-hover:text-foreground">
                    Mostra altri {Math.min(remaining, PAGE_SIZE)} progetti
                  </span>
                  <ChevronDown
                    size={22}
                    className="animate-bounce transition-colors group-hover:text-violet-light"
                  />
                </motion.button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
