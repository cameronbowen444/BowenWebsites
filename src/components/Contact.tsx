"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import type { IconType } from "react-icons";

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

type ProjectType = {
  icon: IconType;
  title: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectCategory: string;
  budget: string;
  message: string;
  projectTypes: string[];
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const projectTypes: ProjectType[] = [
  {
    icon: FiGlobe,
    title: "Starter Site"
  },
  {
    icon: FiShoppingBag,
    title: "Business Site"
  },
  {
    icon: FiDatabase,
    title: "Pro Site"
  },
  {
    icon: FiCode,
    title: "Redesign"
  },
];

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  projectCategory: "Website",
  budget: "$750+",
  message: "",
  projectTypes: [],
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please tell me a little about the project.";
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = "Message should be at least 15 characters.";
    }

    if (formData.projectTypes.length === 0) {
      nextErrors.projectTypes = "Choose at least one project type.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("idle");
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.projectTypes.includes(value);

      return {
        ...prev,
        projectTypes: alreadySelected
          ? prev.projectTypes.filter((item) => item !== value)
          : [...prev.projectTypes, value],
      };
    });

    setErrors((prev) => ({
      ...prev,
      projectTypes: "",
    }));

    setStatus("idle");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Contact form submitted:", formData);

    setStatus("success");
    setFormData(initialFormData);
  };

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
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
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
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black p-2 shadow-[0_26px_90px_rgba(0,0,0,0.34)] lg:grid-cols-[0.95fr_1.05fr]">
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
                  <FiSend aria-hidden="true" />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                {/* Project Type */}
                <div>
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                    What are you interested in?
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      const checked = formData.projectTypes.includes(type.title);

                      return (
                        <label
                          key={type.title}
                          className={`group flex cursor-pointer items-center justify-between gap-3 rounded-full border px-3 py-2.5 transition ${
                            checked
                              ? "border-accent/60 bg-accent/10"
                              : "border-white/10 bg-white/[0.025] hover:border-accent/45 hover:bg-white/[0.045]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="checkbox"
                              name="projectTypes"
                              value={type.title}
                              checked={checked}
                              onChange={() => handleProjectTypeChange(type.title)}
                              className="h-3.5 w-3.5 accent-accent"
                            />

                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-sm text-accent">
                              <Icon aria-hidden="true" />
                            </div>

                            <p className="text-xs font-bold text-white/72 whitespace-nowrap">
                              {type.title}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {errors.projectTypes && (
                    <p className="mt-2 text-xs font-bold text-red-400">
                      {errors.projectTypes}
                    </p>
                  )}
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
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      aria-invalid={!!errors.name}
                      className={`w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent ${
                        errors.name ? "border-red-400" : "border-white/25"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-2 text-xs font-bold text-red-400">
                        {errors.name}
                      </p>
                    )}
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      className={`w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent ${
                        errors.email ? "border-red-400" : "border-white/25"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-2 text-xs font-bold text-red-400">
                        {errors.email}
                      </p>
                    )}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.businessName}
                      onChange={handleChange}
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
                      value={formData.projectCategory}
                      onChange={handleChange}
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
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition focus:border-accent [&>option]:bg-brand"
                    >
                      <option>$500+</option>
                      <option>$1,000+</option>
                      <option>$2,500+</option>
                      <option>Not sure yet?</option>
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business, pages, colors, example websites, or features..."
                    aria-invalid={!!errors.message}
                    className={`w-full resize-none border-0 border-b bg-transparent px-0 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-accent ${
                      errors.message ? "border-red-400" : "border-white/25"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs font-bold text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "success" && (
                  <div className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3">
                    <p className="text-xs font-bold text-accent">
                      Message ready. Connect this form to Resend or your API route
                      next.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-accent/50 bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-accent hover:bg-accent hover:text-brand"
                >
                  Send Message

                  <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:cameronbowen888@gmail.com"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/65 transition hover:border-accent/40 hover:text-accent"
                      aria-label="Email"
                    >
                      <FiMail aria-hidden="true" />
                    </a>

                    <a
                      href="tel:+18182927352"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-sm text-white/65 transition hover:border-accent/40 hover:text-accent"
                      aria-label="Call"
                    >
                      <FiPhone aria-hidden="true" />
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
              className="object-cover"
              sizes="50vw"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/50 via-brand/10 to-black/45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_48%)]" />

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
        </div>
      </div>
    </section>
  );
};

export default Contact;