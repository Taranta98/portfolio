"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig, socialLinks } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  subject: z.string().min(3, "L'oggetto deve avere almeno 3 caratteri"),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
});

type ContactForm = z.infer<typeof contactSchema>;

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  email: MailIcon,
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "Errore nell'invio del messaggio");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Errore nell'invio del messaggio",
      );
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-violet/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Contatti"
          title="Parliamo del tuo prossimo progetto"
          description="Hai un'idea, una collaborazione o semplicemente vuoi salutarmi? Scrivimi — rispondo il prima possibile."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Collegamenti</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel={
                        link.icon === "email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center gap-4 rounded-xl border border-border bg-navy-light/40 px-5 py-4 transition-all hover:border-violet/40 hover:bg-navy-light/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet/10 text-violet-light transition-colors group-hover:bg-violet/20">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted">
                          {link.icon === "email"
                            ? siteConfig.email
                            : "Apri profilo"}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-navy-light/40 p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Nome
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-violet"
                    placeholder="Il tuo nome"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-violet"
                    placeholder="tua@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
                  Oggetto
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-violet"
                  placeholder="Di cosa vuoi parlare?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-violet"
                  placeholder="Scrivi il tuo messaggio..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === "success" && (
                <p className="rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  Messaggio inviato con successo! Ti risponderò presto.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-violet-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={16} />
                {status === "loading" ? "Invio in corso..." : "Invia messaggio"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
