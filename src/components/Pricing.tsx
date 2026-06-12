"use client";

import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiShield,
  FiZap,
} from "react-icons/fi";

import { scrollToSection } from "@/lib/scrollToSection";

const includedFeatures = [
  "Custom website design",
  "Mobile responsive layout",
  "Navbar and footer included",
  "Custom contact or inquiry form",
  "Branding direction",
  "Organic SEO basics",
  "Social media link preview",
  "Clean animations included",
  "Custom styling for your business",
  "Built around your goals",
];

const bonusItems = [
  {
    icon: FiLayers,
    title: "Custom Layout",
    text: "Your site is designed around your business, not copied from a template.",
  },
  {
    icon: FiZap,
    title: "Fast Launch",
    text: "Built to get you online quickly with a clean, professional presence.",
  },
  {
    icon: FiShield,
    title: "Clear Price",
    text: "One simple starting price so clients know what to expect upfront.",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
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
            Simple Pricing
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            Your Website.
            <br />
            <span className="text-[#c89455]">One Price.</span>
          </h2>
        </motion.div>

        {/* Main Price Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] border border-[#c89455]/40 bg-[#f8f6f1]/[0.08] shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Price Side */}
            <div className="relative overflow-hidden border-b border-[#f8f6f1]/10 bg-[#c89455]/10 p-6 text-center lg:border-b-0 lg:border-r lg:text-left">
              <div className="pointer-events-none absolute right-[-30%] top-[-30%] h-72 w-72 rounded-full bg-[#c89455]/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c89455]/30 bg-[#c89455] text-xl text-[#081523] shadow-[0_18px_40px_rgba(0,0,0,0.2)] lg:mx-0">
                  <FiGlobe aria-hidden="true" />
                </div>

                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]">
                  Website Build
                </p>

                <div className="mb-4 inline-flex rounded-full border border-[#c89455]/25 bg-[#c89455]/10 px-3 py-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#c89455]">
                    No Limitations
                  </p>
                </div>

                <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#f8f6f1] sm:text-3xl">
                  Get Everything You Want In Your Website
                </h3>

                <div className="mt-7">
                  <p className="text-7xl font-black leading-none tracking-[-0.08em] text-[#f8f6f1] sm:text-8xl">
                    $750
                  </p>

                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#f8f6f1]/40">
                    Build price
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c89455] px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1] sm:w-auto"
                >
                  Start My Website
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Includes Side */}
            <div className="p-6">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#c89455]/80">
                Included With Your Build
              </p>

              <h4 className="text-xl font-black leading-tight text-[#f8f6f1]">
                A custom website built to look professional, explain your
                business, and help people contact you.
              </h4>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c89455] text-[#081523]">
                      <FiCheck size={10} aria-hidden="true" />
                    </div>

                    <p className="text-xs font-medium leading-5 text-[#f8f6f1]/55">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.045] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#c89455]">
                  No confusing packages
                </p>

                <p className="mt-2 text-xs font-medium leading-5 text-[#f8f6f1]/50">
                  Pricing is kept simple for now. If your build needs something
                  much bigger, like a full backend system, dashboard, database,
                  or large custom feature, we will talk through it clearly
                  before anything starts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Feature Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {bonusItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="rounded-[1.15rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#c89455]/40 hover:bg-[#f8f6f1]/[0.085]"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#f8f6f1]/10 bg-[#102d4d] text-base text-[#c89455]">
                  <Icon aria-hidden="true" />
                </div>

                <h4 className="text-base font-black text-[#f8f6f1]">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs font-medium leading-5 text-[#f8f6f1]/45">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-[1.15rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-black text-[#f8f6f1]">
              Ready to start your website?
            </p>

            <p className="mt-1 text-xs font-medium text-[#f8f6f1]/45">
              Tell us what you need and we’ll help turn it into a clean,
              professional site.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-[#c89455] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
          >
            Start For $750
            <FiArrowUpRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;