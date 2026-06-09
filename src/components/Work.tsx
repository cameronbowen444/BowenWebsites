"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  FiArrowUpRight,
  FiDatabase,
  FiMusic,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";

type Project = {
  icon: IconType;
  title: string;
  category: string;
  price: string;
  priceNote: string;
  image: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    icon: FiMusic,
    title: "Bowen Records",
    category: "Ecommerce Store",
    price: "$1,000",
    priceNote: "Example build price",
    image: "/assets/land1.png",
    description:
      "A retro vinyl store with product sections, cart flow, branding, and a customer-friendly shopping layout.",
    tags: ["Shop", "Cart", "Branding"],
  },
  {
    icon: FiTruck,
    title: "Luxury Chauffeur",
    category: "Business Website",
    price: "$750",
    priceNote: "Example build price",
    image: "/assets/land2.png",
    description:
      "A premium service website made to feel high-end, build trust, and push customers toward quotes and calls.",
    tags: ["Services", "Quote CTA", "Luxury"],
  },
  {
    icon: FiShoppingBag,
    title: "Rental Platform",
    category: "Custom Website",
    price: "$1,500+",
    priceNote: "Example build price",
    image: "/assets/land3.png",
    description:
      "A vehicle listing platform with car details, pricing direction, booking flow, and a more advanced site structure.",
    tags: ["Listings", "Details", "Booking"],
  },
  {
    icon: FiDatabase,
    title: "Management System",
    category: "Custom System",
    price: "$2,500+",
    priceNote: "Example build price",
    image: "/assets/land4.png",
    description:
      "A dashboard-style tool for tracking business records, jobs, products, customers, or internal workflows.",
    tags: ["Database", "Dashboard", "Tools"],
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-brand px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">
            Featured Work
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Basic Is Boring
            <br />
            <span className="text-accent">Built To Stand Out.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/55 sm:text-base">
            Real examples of websites, stores, and custom systems Bowen
            Websites can build, with clear pricing so business owners know what
            to expect.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.065] shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.09]"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden border-b border-white/10 bg-brand-light">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    quality={80}
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand via-brand/10 to-transparent" />

                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-brand/80 text-base text-accent backdrop-blur">
                    <Icon aria-hidden="true" />
                  </div>

                  <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-brand/80 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white/55 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-accent/75">
                    {project.category}
                  </p>

                  <h3 className="text-base font-black leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs font-medium leading-5 text-white/50">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Transparent Pricing */}
                  <div className="mt-5 rounded-xl border border-accent/20 bg-accent/10 p-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.14em] text-accent/80">
                      {project.priceNote}
                    </p>

                    <div className="mt-1 flex items-end justify-between gap-3">
                      <p className="text-2xl font-black tracking-[-0.05em] text-white">
                        {project.price}
                      </p>

                      <p className="pb-1 text-right text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">
                        Build only
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white/35">
                      Similar projects available
                    </p>

                    <a
                      href="#contact"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-brand transition group-hover:rotate-45 group-hover:bg-accent"
                      aria-label={`Ask about ${project.title}`}
                    >
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing Clarity Note */}
        <div className="mx-auto mt-6 max-w-4xl rounded-[1.15rem] border border-accent/20 bg-accent/10 p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-accent">
            Transparent Pricing
          </p>

          <h3 className="text-base font-black leading-tight text-white sm:text-lg">
            These examples show what similar builds would cost.
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-5 text-white/50">
            Final pricing depends on pages, features, forms, admin tools,
            databases, product listings, booking flows, and how much custom
            functionality your business needs.
          </p>
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.065] p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-black text-white">
              Need something custom?
            </p>
            <p className="mt-1 text-xs font-medium text-white/45">
              Bowen Websites can build around your business, services, and
              goals.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-brand transition hover:-translate-y-0.5 hover:bg-white"
          >
            Start Build
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;