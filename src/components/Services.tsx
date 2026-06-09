"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiX,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    icon: <FiGlobe />,
    title: "Custom Built For You",
    price: "No Templates",
    short:
      "Every website is designed around your business, not copied from a generic layout.",
    details:
      "Most business owners can make a basic website on their own, but it usually looks generic, feels unfinished, or does not clearly guide customers. I build custom websites around your brand, your services, your style, and the way your customers should move through the site.",
    includes: [
      "Custom design direction",
      "Built around your business",
      "No generic template feel",
      "Clear sections that fit your goals",
    ],
  },
  {
    icon: <FiZap />,
    title: "Fast & Responsive",
    price: "Built To Perform",
    short:
      "Your site will feel smooth, load cleanly, and work across phones, tablets, and desktops.",
    details:
      "A website should not just look good on a laptop. It needs to feel fast, clean, and easy to use on every screen. I build responsive layouts with smooth sections, clear spacing, mobile-friendly forms, and a structure that feels natural for customers to use.",
    includes: [
      "Mobile-first layouts",
      "Fast page experience",
      "Clean responsive sections",
      "Smooth user flow",
    ],
  },
  {
    icon: <FiLayers />,
    title: "Exactly What You Want",
    price: "Your Style",
    short:
      "The design is shaped around your taste, your examples, and the feeling you want your brand to give.",
    details:
      "You can send colors, example websites, screenshots, ideas, or even just a rough vision. I turn that into a polished website that matches the feeling you want: luxury, clean, bold, simple, modern, local, premium, or anything in between.",
    includes: [
      "Style matching",
      "Example-site inspiration",
      "Custom colors and layout",
      "Revisions toward your vision",
    ],
  },
  {
    icon: <FiArrowUpRight />,
    title: "Made To Get Leads",
    price: "Business Focused",
    short:
      "Your website is built to help people trust you, understand you, and contact you.",
    details:
      "A nice design is only part of the job. The website also needs to explain what you do, make your business look trustworthy, and give visitors a simple path to call, book, request a quote, or send a message.",
    includes: [
      "Clear call-to-actions",
      "Contact-focused sections",
      "Trust-building layout",
      "Easy customer flow",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] px-0 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-11 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">
            Services
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            More Than A{" "}
            <span className="rounded-xl bg-accent px-3 py-1 text-brand">
              Website
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/55 sm:text-base">
            You get a custom-built website that looks professional, works on
            every screen, loads fast, and is shaped around exactly what your
            business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.09]"
            >
              <div className="absolute -top-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-accent text-lg text-brand shadow-[0_14px_30px_rgba(56,189,248,0.18)]">
                {service.icon}
              </div>

              <div className="pt-8">
                <div className="mb-5 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-accent">
                  {service.price}
                </div>

                <h3 className="text-xl font-black tracking-[-0.03em] text-white">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm font-medium leading-6 text-white/55">
                  {service.short}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black text-accent transition hover:text-white"
                >
                  Read more
                  <FiArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-11 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand transition hover:-translate-y-0.5 hover:bg-white"
          >
            Start Your Website
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-[1.5rem] border border-white/10 bg-brand p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
            >
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:bg-accent hover:text-brand"
                aria-label="Close modal"
              >
                <FiX />
              </button>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-xl text-brand">
                {activeService.icon}
              </div>

              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
                {activeService.price}
              </p>

              <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                {activeService.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-6 text-white/55">
                {activeService.details}
              </p>

              <div className="my-5 h-px bg-white/10" />

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                Includes
              </p>

              <div className="grid gap-2">
                {activeService.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-brand">
                      <FiCheck size={11} />
                    </div>

                    <p className="text-sm font-bold text-white/65">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setActiveService(null)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand transition hover:bg-white"
              >
                Start This Project
                <FiArrowUpRight />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;