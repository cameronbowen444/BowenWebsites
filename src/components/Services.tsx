"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import { scrollToSection } from "@/lib/scrollToSection";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiX,
  FiZap,
} from "react-icons/fi";

type Service = {
  icon: IconType;
  title: string;
  price: string;
  short: string;
  details: string;
  includes: string[];
};

const services: Service[] = [
  {
    icon: FiGlobe,
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
    icon: FiZap,
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
    icon: FiLayers,
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
    icon: FiArrowUpRight,
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeService = useMemo(() => {
    if (activeIndex === null) return null;
    return services[activeIndex];
  }, [activeIndex]);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (!activeService) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService, closeModal]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#081523] px-4 py-20 text-[#f8f6f1] sm:px-6 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] px-0 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-11 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c89455]">
            Services
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            More Than A{" "}
            <span className="rounded-xl bg-[#c89455] px-3 py-1 text-[#081523]">
              Website
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative rounded-[1.5rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.07] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#c89455]/40 hover:bg-[#f8f6f1]/[0.09] hover:shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute -top-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f8f6f1]/10 bg-[#c89455] text-lg text-[#081523] shadow-[0_14px_30px_rgba(200,148,85,0.18)]">
                  <Icon aria-hidden="true" />
                </div>

                <div className="flex h-full flex-col pt-8">
                  <div className="mb-5 inline-flex w-fit rounded-full border border-[#c89455]/25 bg-[#c89455]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#c89455]">
                    {service.price}
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#f8f6f1]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm font-medium leading-6 text-[#f8f6f1]/55">
                    {service.short}
                  </p>

                  <div className="mt-auto ">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-black text-[#c89455] transition hover:text-[#f8f6f1]"
                      aria-label={`Read more about ${service.title}`}
                    >
                      Read more
                      <FiArrowRight aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-11 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-[#c89455] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
          >
            Start Your Website
            <FiArrowUpRight aria-hidden="true" />
          </button>
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
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[1.5rem] border border-[#f8f6f1]/10 bg-[#081523] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.06] text-[#f8f6f1]/70 transition hover:bg-[#c89455] hover:text-[#081523]"
                aria-label="Close modal"
              >
                <FiX aria-hidden="true" />
              </button>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89455] text-xl text-[#081523]">
                <activeService.icon aria-hidden="true" />
              </div>

              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]">
                {activeService.price}
              </p>

              <h3
                id="service-modal-title"
                className="text-2xl font-black tracking-[-0.04em] text-[#f8f6f1]"
              >
                {activeService.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-6 text-[#f8f6f1]/55">
                {activeService.details}
              </p>

              <div className="my-5 h-px bg-[#f8f6f1]/10" />

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#f8f6f1]/35">
                Includes
              </p>

              <div className="grid gap-2">
                {activeService.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c89455] text-[#081523]">
                      <FiCheck size={11} aria-hidden="true" />
                    </div>

                    <p className="text-sm font-bold text-[#f8f6f1]/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();

                  closeModal();

                  requestAnimationFrame(() => {
                    scrollToSection("#contact");
                  });
                }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c89455] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#081523] transition hover:bg-[#f8f6f1]"
              >
                Start This Project
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;