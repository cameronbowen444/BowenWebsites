"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? "bg-brand/95 shadow-[0_14px_40px_rgba(8,24,36,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
  <div
    className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border  sm:h-12 sm:w-12 ${
      scrolled
        ? "border-white/10 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.2)]"
        : "border-white/15 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
    }`}
  >
    <Image
      src="/assets/bowen-logo.png"
      alt="Bowen Websites logo"
      fill
      priority
      sizes="48px"
      className="scale-[1] object-contain"
    />
  </div>

  <div className="hidden leading-none sm:block">
    <p className="font-heading text-[15px] font-bold tracking-[-0.02em] text-white">
      Bowen Websites
    </p>

    <p className="mt-[-10px] text-[9px] font-black uppercase tracking-[0.16em] text-accent">
      Custom Digital Builds
    </p>
  </div>
</Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className={`group hidden items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] backdrop-blur-md transition hover:-translate-y-0.5 sm:flex ${
                scrolled
                  ? "border border-white/10 bg-white/10 text-white hover:bg-white/15"
                  : "border border-white/20 bg-white/90 text-brand hover:bg-white"
              }`}
            >
              Start Project
              <span className={`text-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  scrolled ? "text-accent" : "text-accent-dark"
                }`}>
                <FiArrowUpRight />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
              className={`group flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:-translate-y-0.5 ${
                scrolled
                  ? "border border-white/10 bg-white/10 text-white hover:bg-white/15"
                  : "border border-white/20 bg-white/90 text-brand hover:bg-white"
              }`}
            >
              <span className="text-xl transition group-hover:scale-110">
                <FiMenu  />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {navOpen && (
          <motion.aside
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] min-h-screen overflow-hidden bg-brand text-white"
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              {/* Top */}
              <div className="flex items-center justify-between">
                <Link
  href="/"
  onClick={closeNav}
  className="group flex items-center gap-3"
>
  <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.22)] sm:h-12 sm:w-12">
    <Image
      src="/assets/bowen-logo.png"
      alt="Bowen Websites logo"
      fill
      sizes="48px"
      className="scale-[1] object-contain"
    />
  </div>

  <div className="leading-none">
    <p className="font-heading text-[15px] font-bold tracking-[-0.02em] text-white">
      Bowen Websites
    </p>

    <p className="mt-[-10px] text-[9px] font-black uppercase tracking-[0.16em] text-accent">
      Custom Digital Builds
    </p>
  </div>
</Link>

                <button
                  type="button"
                  onClick={closeNav}
                  aria-label="Close menu"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:border-accent/50 hover:bg-white/15"
                >
                  <span className="text-xl transition group-hover:rotate-90">
                    <FiX />
                  </span>
                </button>
              </div>

              {/* Main content */}
              <div className="grid flex-1 gap-8 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                {/* Left panel */}
                <div className="hidden max-w-xs lg:block">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                    Navigation
                  </p>

                  <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white">
                    Let&apos;s build something that brings in clients.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-6 text-white/55">
                    Custom websites, landing pages, and digital systems for
                    small businesses that want to look professional and convert
                    better.
                  </p>

                  <Link
                    href="#contact"
                    onClick={closeNav}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-brand transition hover:-translate-y-1 hover:bg-white"
                  >
                    Start Project
                    <span className="text-sm transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>

                {/* Links */}
                <nav>
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 38 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 38 }}
                        transition={{
                          delay: 0.1 + index * 0.045,
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeNav}
                          className="group flex items-center justify-between border-b border-white/10 py-3.5 transition hover:border-accent/50"
                        >
                          <div className="flex items-end gap-3">
                            <span className="pb-1.5 text-[10px] font-black text-accent/70">
                              0{index + 1}
                            </span>

                            <span className="text-[2.35rem] font-black uppercase leading-none tracking-[-0.06em] text-white transition group-hover:translate-x-1.5 group-hover:text-accent sm:text-[3.4rem] lg:text-[4.4rem]">
                              {link.label}
                            </span>
                          </div>

                          <span className="hidden text-2xl text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block" >
                            <FiArrowUpRight />
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-[10px] font-black uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
                <span>Web Design</span>
                <span>Landing Pages</span>
                <span>Custom Development</span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;