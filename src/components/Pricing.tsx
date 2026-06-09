"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiDatabase,
  FiGlobe,
  FiShield,
  FiShoppingBag,
  type IconType,
} from "react-icons/fi";

type Plan = {
  icon: IconType;
  title: string;
  subtitle: string;
  price: string;
  monthly: string;
  featured: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    icon: FiGlobe,
    title: "Starter Site",
    subtitle: "Best for getting online fast",
    price: "$750",
    monthly: "$49/mo",
    featured: true,
    features: [
      "One-page custom website",
      "Mobile responsive layout",
      "Contact form or call button",
      "Basic SEO metadata",
      "Vercel deployment",
      "Launch-ready structure",
    ],
  },
  {
    icon: FiShoppingBag,
    title: "Business Site",
    subtitle: "For growing small businesses",
    price: "$1,500",
    monthly: "$99/mo",
    featured: false,
    features: [
      "Custom 3–5 section website",
      "Premium mobile-first design",
      "Contact/inquiry form setup",
      "Basic domain/DNS help",
      "SEO metadata and share preview",
      "Light monthly edits included",
    ],
  },
  {
    icon: FiDatabase,
    title: "Pro Site",
    subtitle: "For advanced business needs",
    price: "$2,500+",
    monthly: "$149/mo",
    featured: false,
    features: [
      "Custom pages and workflows",
      "Admin, blog, or database setup",
      "Product or service listings",
      "Advanced forms and integrations",
      "Booking/inquiry flow planning",
      "Priority support options",
    ],
  },
];

const careItems = [
  "Hosting management",
  "Small updates",
  "Form support",
  "DNS help",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
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
            Pricing
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Websites Built
            <br />
            <span className="text-accent">To Bring In Clients.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/55 sm:text-base">
            Simple website packages for local businesses that need to look
            professional, launch fast, and start getting real leads.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.title}
                className={`group relative rounded-[1.15rem] border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 ${
                  plan.featured
                    ? "border-accent/55 bg-white/[0.105] shadow-accent/10"
                    : "border-white/10 bg-white/[0.065] hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.085]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-brand">
                    Popular
                  </div>
                )}

                <div
                  className={`mb-5 flex h-9 w-9 items-center justify-center rounded-xl border text-base transition duration-300 ${
                    plan.featured
                      ? "border-accent/30 bg-accent text-brand"
                      : "border-white/10 bg-brand-light text-accent group-hover:border-accent/30"
                  }`}
                >
                  <Icon aria-hidden="true" />
                </div>

                <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-accent/75">
                  {plan.subtitle}
                </p>

                <h3 className="text-base font-black text-white">
                  {plan.title}
                </h3>

                <div className="mt-5">
                  <p className="text-4xl font-black leading-none tracking-[-0.05em] text-white">
                    {plan.price}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Starting build price
                  </p>

                  <div className="mt-3 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-accent">
                      + {plan.monthly} care plan
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`mt-5 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] transition duration-300 ${
                    plan.featured
                      ? "bg-accent text-brand hover:bg-white"
                      : "bg-white text-brand hover:bg-accent"
                  }`}
                >
                  Start This Plan
                  <FiArrowUpRight aria-hidden="true" />
                </a>

                <div className="my-5 h-px bg-white/10" />

                <p className="mb-3 text-[9px] font-black uppercase tracking-[0.14em] text-white/30">
                  Includes
                </p>

                <div className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                        <FiCheck size={10} aria-hidden="true" />
                      </div>

                      <p className="text-xs font-medium leading-5 text-white/52">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2.5">
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-accent">
                    Monthly care keeps your site updated and supported
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Intro Offer */}
        <div className="mx-auto mt-6 max-w-4xl rounded-[1.15rem] border border-accent/25 bg-accent/10 p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-accent">
            Launch Special
          </p>

          <h3 className="text-base font-black leading-tight text-white sm:text-lg">
            Need to start smaller? Ask about{" "}
            <span className="text-accent">$500 down + monthly payments.</span>
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-5 text-white/50">
            Built for serious small businesses that need a professional website
            now without paying the full build cost upfront.
          </p>
        </div>

        {/* Care Plan Strip */}
        <div className="mx-auto mt-6 max-w-4xl rounded-[1.15rem] border border-white/10 bg-white/[0.065] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-brand">
                <FiShield aria-hidden="true" />
                Website Care Plan
              </div>

              <h3 className="text-base font-black leading-tight text-white sm:text-lg">
                Ongoing support starting at{" "}
                <span className="text-accent">$49/month.</span>
              </h3>

              <p className="mt-2 max-w-xl text-xs font-medium leading-5 text-white/45">
                Care plans cover the ongoing work that keeps your site live,
                clean, supported, and ready for customers.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-4">
              {careItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-brand-light px-3 py-2 text-[11px] font-bold text-white/65"
                >
                  <span className="text-accent">
                    <FiCheck size={12} aria-hidden="true" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;