"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { scrollToSection } from "@/lib/scrollToSection";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Logo = ({
  onClick,
  showText = true,
}: {
  onClick?: () => void;
  showText?: boolean;
}) => {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-3">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#f8f6f1]/10 bg-[#f8f6f1] shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition group-hover:border-[#c89455]/40 sm:h-12 sm:w-12">
        <Image
          src="/assets/bowen-logo.png"
          alt="Bowen Websites logo"
          fill
          priority
          sizes="48px"
          className="object-contain p-1"
        />
      </div>

      {showText && (
        <div className="leading-none">
          <p className=" text-[15px] font-bold tracking-[-0.02em] text-[#f8f6f1]">
            Bowen Websites
          </p>

          <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#c89455]">
            Custom Digital Builds
          </p>
        </div>
      )}
    </Link>
  );
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => setNavOpen(false);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setNavOpen(false);

    requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      const shouldBeScrolled = window.scrollY > 20;

      setScrolled((current) => {
        if (current === shouldBeScrolled) return current;
        return shouldBeScrolled;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    updateScrolled();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-4 py-4 transition duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? "bg-[#081523]/95 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Logo showText />

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              onClick={(event) => handleSectionClick(event, "#contact")}
              className={`group hidden items-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] backdrop-blur-md transition hover:-translate-y-0.5 sm:flex ${
                scrolled
                  ? "border border-[#f8f6f1]/10 bg-[#f8f6f1]/10 text-[#f8f6f1] hover:bg-[#f8f6f1]/15"
                  : "border border-[#f8f6f1]/20 bg-[#f8f6f1]/90 text-[#081523] hover:bg-[#f8f6f1]"
              }`}
            >
              Start Project
              <span
                className={`text-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  scrolled ? "text-[#c89455]" : "text-[#12345a]"
                }`}
              >
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
              className={`group flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition hover:-translate-y-0.5 ${
                scrolled
                  ? "border border-[#f8f6f1]/10 bg-[#f8f6f1]/10 text-[#f8f6f1] hover:bg-[#f8f6f1]/15"
                  : "border border-[#f8f6f1]/20 bg-[#f8f6f1]/90 text-[#081523] hover:bg-[#f8f6f1]"
              }`}
            >
              <span className="text-xl transition group-hover:scale-110">
                <FiMenu aria-hidden="true" />
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
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] min-h-screen overflow-hidden bg-[#081523] text-[#f8f6f1]"
          >
            <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <Logo onClick={closeNav} showText />

                <button
                  type="button"
                  onClick={closeNav}
                  aria-label="Close menu"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/10 text-[#f8f6f1] backdrop-blur-md transition hover:border-[#c89455]/50 hover:bg-[#f8f6f1]/15"
                >
                  <span className="text-xl transition group-hover:rotate-90">
                    <FiX aria-hidden="true" />
                  </span>
                </button>
              </div>

              <div className="grid flex-1 gap-8 py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                <div className="hidden max-w-xs lg:block">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#c89455]">
                    Navigation
                  </p>

                  <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1]">
                    Let&apos;s build something that brings in clients.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-6 text-[#f8f6f1]/55">
                    Custom websites, landing pages, and digital systems for
                    small businesses that want to look professional and convert
                    better.
                  </p>

                  <Link
                    href="#contact"
                    onClick={(event) => handleSectionClick(event, "#contact")}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#c89455] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#081523] transition hover:-translate-y-1 hover:bg-[#f8f6f1]"
                  >
                    Start Project
                    <span className="text-sm transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>

                <nav>
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 32 }}
                        transition={{
                          delay: 0.08 + index * 0.035,
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={(event) =>
                            handleSectionClick(event, link.href)
                          }
                          className="group flex items-center justify-between border-b border-[#f8f6f1]/10 py-3.5 transition hover:border-[#c89455]/50"
                        >
                          <div className="flex items-end gap-3">
                            <span className="pb-1.5 text-[10px] font-black text-[#c89455]/70">
                              0{index + 1}
                            </span>

                            <span className="text-[2.35rem] font-black uppercase leading-none tracking-[-0.06em] text-[#f8f6f1] transition group-hover:translate-x-1.5 group-hover:text-[#c89455] sm:text-[3.4rem] lg:text-[4.4rem]">
                              {link.label}
                            </span>
                          </div>

                          <span className="hidden text-2xl text-[#f8f6f1]/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c89455] sm:block">
                            <FiArrowUpRight aria-hidden="true" />
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#f8f6f1]/10 pt-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#f8f6f1]/35 sm:flex-row sm:items-center sm:justify-between">
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