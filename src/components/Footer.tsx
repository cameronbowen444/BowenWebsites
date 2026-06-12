"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scrollToSection";

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
    <footer className="relative overflow-hidden bg-[#081523] px-4 pt-20 text-[#f8f6f1] sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Footer Main */}
        <div className="grid gap-8 border-t border-[#f8f6f1]/10 py-9 md:grid-cols-[1.25fr_0.7fr_0.9fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#f8f6f1]/10 bg-[#f8f6f1] p-1.5 shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
                <Image
                  src="/assets/bowen-logo.png"
                  alt="Bowen Websites logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>

              <div className="leading-none">
                <p className="text-xl font-black uppercase tracking-[0.14em] text-[#f8f6f1]">
                  Bowen Websites
                  <span className="align-super text-[9px] text-[#c89455]">
                    ®
                  </span>
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#f8f6f1]/30">
                  Custom Digital Builds
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-xs font-medium leading-6 text-[#f8f6f1]/45 sm:text-sm">
              Websites for small businesses that need more than a basic page.
              Custom design, responsive layouts, clean flows, and a professional
              online presence built around the business.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href="mailto:cameronbowen555@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-base text-[#f8f6f1]/70 transition hover:bg-[#c89455] hover:text-[#081523]"
                aria-label="Email Bowen Websites"
              >
                <FiMail aria-hidden="true" />
              </a>

              <a
                href="tel:+15555555555"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-base text-[#f8f6f1]/70 transition hover:bg-[#c89455] hover:text-[#081523]"
                aria-label="Call Bowen Websites"
              >
                <FiPhone aria-hidden="true" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-base text-[#f8f6f1]/70 transition hover:bg-[#c89455] hover:text-[#081523]"
                aria-label="GitHub"
              >
                <FiGithub aria-hidden="true" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-base text-[#f8f6f1]/70 transition hover:bg-[#c89455] hover:text-[#081523]"
                aria-label="Instagram"
              >
                <FiInstagram aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]">
              Explore
            </h3>

            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="block text-left text-xs font-bold text-[#f8f6f1]/45 transition hover:translate-x-1 hover:text-[#f8f6f1] sm:text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]">
              What You Get
            </h3>

            <div className="space-y-2.5">
              {services.map((service) => (
                <p
                  key={service}
                  className="flex items-center gap-2 text-xs font-bold text-[#f8f6f1]/45 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c89455]" />
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]">
              Contact
            </h3>

            <div className="space-y-3 text-xs font-bold text-[#f8f6f1]/45 sm:text-sm">
              <a
                href="mailto:cameronbowen555@gmail.com"
                className="flex items-center gap-2.5 transition hover:text-[#f8f6f1]"
              >
                <span className="text-[#c89455]">
                  <FiMail aria-hidden="true" />
                </span>
                Email Bowen Websites
              </a>

              <a
                href="tel:+15555555555"
                className="flex items-center gap-2.5 transition hover:text-[#f8f6f1]"
              >
                <span className="text-[#c89455]">
                  <FiPhone aria-hidden="true" />
                </span>
                Call / Text
              </a>

              <div className="flex items-center gap-2.5">
                <span className="text-[#c89455]">
                  <FiCode aria-hidden="true" />
                </span>
                Built with Next.js
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[#c89455]">
                  <FiLayers aria-hidden="true" />
                </span>
                Designed by Cameron Bowen
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-[#f8f6f1]/10 py-5 text-[11px] font-bold text-[#f8f6f1]/30 sm:flex-row">
          <p>© 2026 Bowen Websites. Built by Cameron Bowen.</p>

          <div className="flex flex-wrap gap-3">
            <p>Websites start at $750</p>
            <p>Standard builds capped at $1,500</p>
            <p>Custom design included</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;