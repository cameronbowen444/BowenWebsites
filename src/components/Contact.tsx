"use client";

import { type SyntheticEvent, useState } from "react";
import { motion } from "framer-motion";

import { FiArrowUpRight, FiMail, FiPhone, FiSend } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Status = "idle" | "loading" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      nextErrors.name = "Full name is required.";
    }

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Please tell me a little about the project.";
    } else if (message.length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name as keyof FormData]) return prev;

      return {
        ...prev,
        [name]: "",
      };
    });

    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Message failed to send.");
      }

      setStatus("success");
      setStatusMessage("Message sent. I’ll reach out after reviewing it.");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
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
            Start Your Project
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            Tell Me What You Need.
            <br />
            <span className="text-[#c89455]">
              I&apos;ll Help You Build It.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-[#f8f6f1]/55 sm:text-base">
            You do not need everything figured out yet. Send the basics and
            I&apos;ll help you plan the cleanest way to start.
          </p>
        </motion.div>

        {/* Contact Box */}
        <div className="grid overflow-hidden rounded-[2rem] border border-[#f8f6f1]/10 bg-[#061525] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.34)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info Side */}
          <div className="relative overflow-hidden rounded-[1.65rem] border border-[#f8f6f1]/10 bg-[#102d4d] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute right-[-30%] top-[-20%] h-80 w-80 rounded-full bg-[#c89455]/15 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89455] text-xl text-[#081523]">
                <FiSend aria-hidden="true" />
              </div>

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#c89455]">
                Simple Next Step
              </p>

              <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl">
                Start With A Quick Message.
              </h3>

              <p className="mt-5 text-sm font-medium leading-6 text-[#f8f6f1]/50">
                Tell me what kind of website you need, what your business does,
                and any ideas you already have. I&apos;ll help you figure out
                the rest.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="mailto:cameronbowen888@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.04] text-sm text-[#f8f6f1]/65 transition hover:border-[#c89455]/40 hover:text-[#c89455]"
                  aria-label="Email"
                >
                  <FiMail aria-hidden="true" />
                </a>

                <a
                  href="tel:+18182927352"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.04] text-sm text-[#f8f6f1]/65 transition hover:border-[#c89455]/40 hover:text-[#c89455]"
                  aria-label="Call"
                >
                  <FiPhone aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative overflow-hidden rounded-[1.65rem] bg-[#061525] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-20%] top-[-20%] h-72 w-72 rounded-full bg-[#c89455]/10 blur-3xl" />
              <div className="absolute bottom-[-25%] right-[-20%] h-80 w-80 rounded-full bg-[#12345a]/20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#c89455]">
                  Project Form
                </p>

                <h3 className="text-4xl font-black tracking-[-0.05em] text-[#f8f6f1] sm:text-5xl">
                  Get in touch
                </h3>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-[#f8f6f1]/55"
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
                      className={`w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455] ${
                        errors.name ? "border-red-400" : "border-[#f8f6f1]/25"
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
                      className="mb-2 block text-xs font-bold text-[#f8f6f1]/55"
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
                      className={`w-full border-0 border-b bg-transparent px-0 py-2.5 text-sm text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455] ${
                        errors.email ? "border-red-400" : "border-[#f8f6f1]/25"
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
                      className="mb-2 block text-xs font-bold text-[#f8f6f1]/55"
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
                      className="w-full border-0 border-b border-[#f8f6f1]/25 bg-transparent px-0 py-2.5 text-sm text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-xs font-bold text-[#f8f6f1]/55"
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
                      className="w-full border-0 border-b border-[#f8f6f1]/25 bg-transparent px-0 py-2.5 text-sm text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-[#f8f6f1]/55"
                  >
                    What do you need?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business, the website you want, colors you like, pages you need, or example websites..."
                    aria-invalid={!!errors.message}
                    className={`w-full resize-none border-0 border-b bg-transparent px-0 py-2.5 text-sm leading-6 text-[#f8f6f1] outline-none transition placeholder:text-[#f8f6f1]/25 focus:border-[#c89455] ${
                      errors.message
                        ? "border-red-400"
                        : "border-[#f8f6f1]/25"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs font-bold text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status !== "idle" && status !== "loading" && (
                  <div
                    className={`rounded-xl px-4 py-3 ${
                      status === "success"
                        ? "border border-[#c89455]/30 bg-[#c89455]/10"
                        : "border border-red-400/30 bg-red-400/10"
                    }`}
                  >
                    <p
                      className={`text-xs font-bold ${
                        status === "success" ? "text-[#c89455]" : "text-red-400"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#c89455]/50 bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#f8f6f1] transition hover:border-[#c89455] hover:bg-[#c89455] hover:text-[#081523] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}

                  <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </button>

                <p className="text-center text-[10px] font-black uppercase tracking-[0.14em] text-[#f8f6f1]/25">
                  I&apos;ll reach out after reviewing your message
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;