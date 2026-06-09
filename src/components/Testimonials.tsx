"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar, FiUser } from "react-icons/fi";

const reviews = [
  {
    name: "Frank B.",
    role: "Auto Concierge Owner",
    avatar: "FB",
    quote:
      "Cameron made the website feel premium right away. It gave my business a cleaner image and made it easier for people to send in serious inquiries.",
  },
  {
    name: "Maria L.",
    role: "Local Service Owner",
    avatar: "ML",
    quote:
      "The site looked custom, modern, and easy to use. I liked that the design actually matched the business instead of feeling like a template.",
  },
  {
    name: "Andre T.",
    role: "Retail Brand Owner",
    avatar: "AT",
    quote:
      "The product layout, cart flow, and branding made the store feel much more professional. It felt like something customers could trust.",
  },
  {
    name: "Nina R.",
    role: "Small Business Owner",
    avatar: "NR",
    quote:
      "Everything was clear from the beginning. The site explained what we offer, looked great on mobile, and made contacting us simple.",
  },
  {
    name: "James K.",
    role: "Operations Manager",
    avatar: "JK",
    quote:
      "The custom system made the business feel more organized. It was built around how we actually work, not just some generic dashboard.",
  },
  {
    name: "Sofia M.",
    role: "Startup Founder",
    avatar: "SM",
    quote:
      "The design helped the brand look more serious online. It gave us a polished first impression without overcomplicating the site.",
  },
];

const scrollingReviews = [...reviews, ...reviews];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden px-0 py-14 sm:px-4 lg:min-h-[680px]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
            <div className="absolute left-1/2 top-[260px] h-[360px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-3xl" />

            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-brand to-transparent" />
            <div className="absolute inset-y-0 left-0 z-20 hidden w-40 bg-gradient-to-r from-brand via-brand/85 to-transparent sm:block" />
            <div className="absolute inset-y-0 right-0 z-20 hidden w-40 bg-gradient-to-l from-brand via-brand/85 to-transparent sm:block" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.11),transparent_44%)]" />
          </div>

          {/* Phone Mockup */}
          <div className="pointer-events-none relative z-10 mx-auto h-[470px] w-[265px] rounded-[3rem] border border-accent/20 bg-[#050b12]/85 p-3 shadow-[0_0_90px_rgba(56,189,248,0.16)] sm:h-[540px] sm:w-[305px]">
            <div className="relative h-full overflow-hidden rounded-[2.4rem] border border-white/10 bg-brand">
              <div className="absolute left-1/2 top-5 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black/85" />

              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-white/[0.035]" />

              <div className="relative flex h-full flex-col items-center px-7 pt-28 text-center sm:pt-32">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-accent">
                  <FiUser />
                  Client Reviews
                </div>

                <h2 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-4xl">
                  What Our
                  <br />
                  Clients Are
                  <br />
                  Saying
                </h2>

                <p className="mt-5 text-xs font-medium leading-5 text-white/45">
                  Feedback from business owners, service brands, and project
                  partners.
                </p>
              </div>
            </div>
          </div>

          {/* Sliding Review Row */}
          <div className="relative z-30 -mt-40 overflow-hidden pb-6 pt-6 sm:-mt-44 lg:-mt-48">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 70,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-max gap-4"
            >
              {scrollingReviews.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="w-[310px] shrink-0 rounded-[1.15rem] border border-white/10 bg-white/[0.065] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl transition hover:border-accent/40 hover:bg-white/[0.085] sm:w-[380px]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-sm font-black text-accent">
                        {review.avatar}
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-white">
                          {review.name}
                        </h3>

                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.14em] text-white/35">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 text-accent">
  {Array.from({ length: 5 }).map((_, starIndex) => (
    <span key={starIndex} className="fill-accent">
      <FiStar size={12} />
    </span>
  ))}
</div>
                  </div>

                  <p className="text-sm font-medium leading-6 text-white/62">
                    “{review.quote}”
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-accent/70">
                      Project feedback
                    </p>

                    <a
                      href="#contact"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm text-brand transition hover:rotate-45 hover:bg-accent"
                      aria-label={`Build something similar for ${review.name}`}
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-30 mx-auto mt-2 max-w-xl text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-brand transition hover:-translate-y-0.5 hover:bg-white"
            >
              Build Something People Remember
              <FiArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;