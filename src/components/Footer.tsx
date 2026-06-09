"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiMail,
  FiPhone,
  FiZap,
} from "react-icons/fi";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom-built websites",
  "Fast responsive layouts",
  "Lead-focused flows",
  "Website care plans",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand px-4 pt-20 text-white sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute bottom-[-18%] left-[-18%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-18%] top-[10%] h-[520px] w-[520px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-white/[0.035] to-transparent" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mb-10 rounded-[1.5rem] border border-white/10 bg-white/[0.065] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-7"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-brand">
                <FiZap aria-hidden="true" />
                Custom Builds. Real Results.
              </div>

              <h2 className="max-w-2xl text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl">
                Ready For A Website
                <br />
                <span className="text-accent">That Feels Built For You?</span>
              </h2>

              <p className="mt-4 max-w-xl text-xs font-medium leading-6 text-white/50 sm:text-sm">
                Get a fast, responsive, custom website that looks professional,
                matches your business, and gives customers a clear path to
                contact you.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start Your Build
              <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer Main */}
        <div className="grid gap-8 border-t border-white/10 py-9 md:grid-cols-[1.25fr_0.7fr_0.9fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
                <Image
                  src="/assets/bowen-logo.png"
                  alt="Bowen Websites logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>

              <div className="leading-none">
                <p className="text-xl font-black uppercase tracking-[0.14em] text-white">
                  Bowen Websites
                  <span className="align-super text-[9px] text-accent">®</span>
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-white/30">
                  Custom Digital Builds
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-xs font-medium leading-6 text-white/45 sm:text-sm">
              Websites for small businesses that need more than a basic page.
              Custom design, responsive layouts, clean flows, and a professional
              online presence built around the business.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href="mailto:cameronbowen555@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-base text-white/70 transition hover:bg-accent hover:text-brand"
                aria-label="Email Bowen Websites"
              >
                <FiMail aria-hidden="true" />
              </a>

              <a
                href="tel:+15555555555"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-base text-white/70 transition hover:bg-accent hover:text-brand"
                aria-label="Call Bowen Websites"
              >
                <FiPhone aria-hidden="true" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-base text-white/70 transition hover:bg-accent hover:text-brand"
                aria-label="GitHub"
              >
                <FiGithub aria-hidden="true" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-base text-white/70 transition hover:bg-accent hover:text-brand"
                aria-label="Instagram"
              >
                <FiInstagram aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
              Explore
            </h3>

            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-xs font-bold text-white/45 transition hover:translate-x-1 hover:text-white sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
              What You Get
            </h3>

            <div className="space-y-2.5">
              {services.map((service) => (
                <p
                  key={service}
                  className="flex items-center gap-2 text-xs font-bold text-white/45 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
              Contact
            </h3>

            <div className="space-y-3 text-xs font-bold text-white/45 sm:text-sm">
              <a
                href="mailto:cameronbowen555@gmail.com"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <span className="text-accent">
                  <FiMail aria-hidden="true" />
                </span>
                Email Bowen Websites
              </a>

              <a
                href="tel:+15555555555"
                className="flex items-center gap-2.5 transition hover:text-white"
              >
                <span className="text-accent">
                  <FiPhone aria-hidden="true" />
                </span>
                Call / Text
              </a>

              <div className="flex items-center gap-2.5">
                <span className="text-accent">
                  <FiCode aria-hidden="true" />
                </span>
                Built with Next.js
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-accent">
                  <FiLayers aria-hidden="true" />
                </span>
                Designed by Cameron Bowen
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-[11px] font-bold text-white/30 sm:flex-row">
          <p>© 2026 Bowen Websites. Built by Cameron Bowen.</p>

          <div className="flex flex-wrap gap-3">
            <p>Starter sites from $750</p>
            <p>Business sites from $1,500</p>
            <p>Care from $49/mo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;