"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiClipboard,
  FiEdit3,
  FiEye,
  FiImage,
  FiLayers,
  FiMessageSquare,
  FiPackage,
  FiPenTool,
  FiTarget,
} from "react-icons/fi";

const processSteps = [
  {
    icon: <FiMessageSquare />,
    step: "01",
    title: "Tell me what you want",
    description:
      "We start with your idea, your business, and what you want the website or project to actually do.",
    items: ["Main goal", "Business type", "Target customers"],
  },
  {
    icon: <FiLayers />,
    step: "02",
    title: "Choose the pages",
    description:
      "We decide what pages or sections your project needs so the structure feels clear from the beginning.",
    items: ["Home", "Services", "Contact", "Shop", "Dashboard"],
  },
  {
    icon: <FiImage />,
    step: "03",
    title: "Send examples",
    description:
      "You can send websites, colors, layouts, or styles you like so I can understand the direction.",
    items: ["Example sites", "Favorite layouts", "Design inspiration"],
  },
  {
    icon: <FiPenTool />,
    step: "04",
    title: "Pick the theme",
    description:
      "We shape the brand style with colors, fonts, images, and the overall feeling of the website.",
    items: ["Colors", "Fonts", "Images", "Mood"],
  },
  {
    icon: <FiBriefcase />,
    step: "05",
    title: "Add business details",
    description:
      "I collect the important business info needed to make the site useful, clear, and ready for customers.",
    items: ["Services", "Pricing", "Location", "Phone", "Email"],
  },
  {
    icon: <FiEye />,
    step: "06",
    title: "Review and launch",
    description:
      "You review the finished build, we make final changes, then prepare it to go live.",
    items: ["Final edits", "Mobile check", "Launch help"],
  },
];

const clientChecklist = [
  "Business name",
  "Logo or brand idea",
  "Pages you need",
  "Colors you like",
  "Example websites",
  "Services or products",
  "Contact info",
  "Images or content",
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f7f3ea] px-4 py-28 text-black"
    >
      <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-[#f8c14a]/35 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.75fr]"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white">
              <FiClipboard className="text-[#f8c14a]" />
              Simple process
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              You bring the business. I help turn it into a{" "}
              <span className="text-orange-500">clean digital build.</span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-black/35">
              How it works
            </p>

            <p className="mt-4 text-lg font-semibold leading-8 text-black/65">
              The goal is simple: understand what you want, organize the
              details, design the look, build it, review it, and launch.
            </p>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-5 shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative mb-5 overflow-hidden rounded-[1.5rem] bg-black p-6 text-white">
                <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-[#f8c14a]/30 blur-3xl" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8c14a] text-2xl text-black">
                    {step.icon}
                  </div>

                  <p className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#f8c14a]">
                    {step.step}
                  </p>
                </div>

                <h3 className="relative mt-16 text-3xl font-black leading-none">
                  {step.title}
                </h3>
              </div>

              <div className="p-2">
                <p className="min-h-[84px] text-sm font-medium leading-7 text-black/60">
                  {step.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f7f3ea] px-4 py-2 text-xs font-bold text-black/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Need From You */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-black p-1 text-white shadow-2xl shadow-black/20"
        >
          <div className="relative overflow-hidden rounded-[1.7rem] bg-black p-8 md:p-10">
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#f8c14a]/35 blur-3xl" />
            <div className="absolute bottom-[-80px] left-[-80px] h-56 w-56 rounded-full bg-orange-500/25 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f8c14a] px-4 py-2 text-sm font-black text-black">
                  <FiPackage />
                  What I need from you
                </div>

                <h3 className="text-3xl font-black leading-tight md:text-5xl">
                  The better the details, the better the build.
                </h3>

                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/55 md:text-base">
                  You do not need to have everything perfect. Even rough ideas,
                  screenshots, colors, or examples help shape the direction.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {clientChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 font-bold"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8c14a] text-black">
                      <FiCheck size={16} />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl text-[#f8c14a]">
              <FiTarget />
            </div>

            <h3 className="text-3xl font-black">Business details matter.</h3>

            <p className="mt-4 text-sm font-medium leading-7 text-black/60">
              A website is not just decoration. It should explain what you do,
              who you help, why people should trust you, and how they can take
              the next step.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-black text-white transition hover:bg-[#f8c14a] hover:text-black"
            >
              Start Planning
              <FiArrowUpRight />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "What does your business offer?",
              "Who is your ideal customer?",
              "What action should visitors take?",
              "What makes you different?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8c14a] text-black">
                  <FiEdit3 />
                </div>

                <p className="text-lg font-black leading-7">{question}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;