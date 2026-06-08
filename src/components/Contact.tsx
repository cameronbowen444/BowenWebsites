"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiMail,
  FiPhone,
  FiSend,
  FiShoppingBag,
} from "react-icons/fi";

const projectTypes = [
  {
    icon: <FiGlobe />,
    title: "Starter Site",
    price: "$750",
  },
  {
    icon: <FiShoppingBag />,
    title: "Business Site",
    price: "$1,500",
  },
  {
    icon: <FiDatabase />,
    title: "Pro Site",
    price: "$2,500+",
  },
  {
    icon: <FiCode />,
    title: "Redesign",
    price: "Custom",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">
            Start Your Project
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Let&apos;s Build Something
            <br />
            <span className="text-accent">That Brings In Clients.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/55 sm:text-base">
            Tell me what you need, what style you like, and what your business
            does. You do not need everything figured out yet.
          </p>
        </motion.div>

        {/* Split Contact Layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black p-2 shadow-[0_26px_90px_rgba(0,0,0,0.34)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          {/* Form Side */}
          <div className="relative overflow-hidden rounded-[1.65rem] bg-[#0b0f13] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-20%] top-[-20%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute bottom-[-25%] right-[-20%] h-80 w-80 rounded-full bg-white/[0.035] blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-10 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                    Project Details
                  </p>

                  <h3 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                    Get in touch
                  </h3>

                  <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/45">
                    Send over the basics and I&apos;ll help you figure out the
                    cleanest way to start.
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-accent sm:flex">
                  <FiSend />
                </div>
              </div>

              <form className="space-y-7">
                {/* Project Type */}
                <div>
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                    What are you interested in?
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {projectTypes.map((type) => (
                      <label
                        key={type.title}
                        className="group flex cursor-pointer items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2.5 transition hover:border-accent/45 hover:bg-white/[0.045]"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            name="projectTypes"
                            value={type.title}
                            className="h-3.5 w-3.5 accent-accent"
                          />

                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-sm text-accent">
                            {type.icon}
                          </div>

                          <p className="text-xs font-bold text-white/72">
                            {type.title}
                          </p>
                        </div>

                        <span className="text-[10px] font-black uppercase tracking-[0.1em] text-accent/80">
                          {type.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Business name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Your business"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="projectCategory"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Project category
                    </label>
                    <select
                      id="projectCategory"
                      name="projectCategory"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition focus:border-accent [&>option]:bg-brand"
                    >
                      <option>Website</option>
                      <option>Business Site</option>
                      <option>Ecommerce</option>
                      <option>Custom System</option>
                      <option>Redesign</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs font-bold text-white/55"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition focus:border-accent [&>option]:bg-brand"
                    >
                      <option>$750+</option>
                      <option>$1,500+</option>
                      <option>$2,500+</option>
                      <option>Need help deciding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-white/55"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your business, pages, colors, example websites, or features..."
                    className="w-full resize-none border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-accent/50 bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-accent hover:bg-accent hover:text-brand"
                >
                  Send Message
                  <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:cameronbowen555@gmail.com"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/65 transition hover:border-accent/40 hover:text-accent"
                      aria-label="Email"
                    >
                      <FiMail />
                    </a>

                    <a
                      href="tel:+15555555555"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/65 transition hover:border-accent/40 hover:text-accent"
                      aria-label="Call"
                    >
                      <FiPhone />
                    </a>
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/30">
                    Simple next steps
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden min-h-[720px] overflow-hidden rounded-[1.65rem] border border-white/10 bg-brand-light lg:block">
            <Image
              src="/assets/back1.png"
              alt="Modern website design project preview"
              fill
              priority={false}
              className="object-cover"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-brand/50 via-brand/10 to-black/45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_48%)]" />

            <div className="absolute bottom-8 left-8 right-8 rounded-[1.25rem] border border-white/10 bg-brand/75 p-5 backdrop-blur-xl">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-accent">
                Clear Pricing
              </p>

              <h4 className="text-2xl font-black tracking-[-0.04em] text-white">
                Websites start at $750.
              </h4>

              <p className="mt-3 text-sm font-medium leading-6 text-white/55">
                Starter sites, business websites, ecommerce builds, and custom
                systems are priced clearly before the project begins.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["$750+", "$1,500+", "$2,500+"].map((price) => (
                  <div
                    key={price}
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-center"
                  >
                    <p className="text-sm font-black text-accent">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;