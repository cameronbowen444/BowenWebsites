"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { scrollToSection } from "@/lib/scrollToSection";

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
  image: string;
  website: string;
  description: string;
};

const projects: Project[] = [
  {
    icon: FiMusic,
    title: "Bowen Records",
    category: "Business Website",
    price: "$299",
    image: "/assets/land4.png",
    website: "https://bowenrecords.com",
    description: "A clean website for a local record store.",
  },
  {
    icon: FiTruck,
    title: "Luxury Chauffeur",
    category: "Business Website",
    price: "$299",
    image: "/assets/land1.png",
    website: "https://diamondwings369.com",
    description: "A premium site built for quotes and calls.",
  },
  {
    icon: FiShoppingBag,
    title: "Herbal Website & Blog",
    category: "Custom Website",
    price: "$299",
    image: "/assets/land3.png",
    website: "https://purple-leaf-herbs.vercel.app/",
    description: "A warm website with blog and email signup.",
  },
  {
    icon: FiDatabase,
    title: "Car Sales & Rentals",
    category: "Custom Website",
    price: "$299",
    image: "/assets/land2.png",
    website: "https://diamondwingsautos.com",
    description: "A vehicle site with listings and inquiry flow.",
  },
];

const Work = () => {
  const openProjectWebsite = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  const startSimilarProject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    requestAnimationFrame(() => {
      scrollToSection("#contact");
    });
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#081523] px-4 py-20 text-[#f8f6f1] sm:px-6 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c89455]">
            Featured Work
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            Basic Is Boring
            <br />
            <span className="text-[#c89455]">Built To Stand Out.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-[#f8f6f1]/55 sm:text-base">
            A few examples of clean websites built for real business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: index * 0.05 },
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.25 }}
                role="link"
                tabIndex={0}
                onClick={() => openProjectWebsite(project.website)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProjectWebsite(project.website);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.4rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-[border-color] duration-300 hover:border-[#c89455]/45"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#102d4d] pb-px">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    quality={85}
                    className="object-cover opacity-90 transition duration-500 "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081523]/90 via-[#081523]/20 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#081523]/80 text-base text-[#c89455] backdrop-blur">
                    <Icon aria-hidden="true" />
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-[#c89455] px-3 py-1 text-xs font-black text-[#081523] shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                    {project.price}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#c89455]">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-black leading-tight tracking-[-0.04em] text-[#f8f6f1]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-medium leading-5 text-[#f8f6f1]/50">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={startSimilarProject}
                    className="mt-auto flex w-full cursor-pointer items-center justify-between border-t border-[#f8f6f1]/10 pt-4 text-left"
                    aria-label={`Start one like ${project.title}`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#f8f6f1]/35">
                      Start one like this
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f6f1] text-sm text-[#081523] transition group-hover:rotate-45 group-hover:bg-[#c89455]">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-[1.15rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-black text-[#f8f6f1]">
              Need something custom?
            </p>

            <p className="mt-1 text-xs font-medium text-[#f8f6f1]/45">
              Bowen Websites can build around your business, services, and
              goals.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-[#c89455] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
          >
            Start Build
            <FiArrowUpRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;