"use client";

import Image from "next/image";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiTarget,
} from "react-icons/fi";
import { scrollToSection } from "@/lib/scrollToSection";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#081523] px-4 py-20 text-[#f8f6f1] sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#c89455]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#12345a]/30 blur-3xl text-center" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Top Label */}
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c89455]">
            About Us
          </p>

          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f6f1] sm:text-4xl md:text-5xl">
            Built By Family.
            <br />
            <span className="text-[#c89455]">Made To Serve Yours.</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="relative min-h-[480px] overflow-hidden rounded-[1.6rem] bg-[#102d4d] sm:min-h-[580px] lg:h-full">
              <Image
                src="/assets/about.jpg"
                alt="Cameron and Nicolle Bowen"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_29%]"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081523]/90 via-[#081523]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-[#f8f6f1]/10 bg-[#081523]/75 p-4 backdrop-blur-xl">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#c89455]">
                  Cameron & Nicolle Bowen
                </p>

                <h3 className="text-xl font-black tracking-[-0.04em] text-[#f8f6f1]">
                  Building something real, together.
                </h3>
              </div>
            </div>
          </div>

          {/* Story Card */}
          <div className="rounded-[2rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c89455]/25 bg-[#c89455]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#c89455]">
              <FiHeart />
              Why We Started
            </div>

            <h3 className="max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#f8f6f1] sm:text-4xl">
              We Serve L.A.
            </h3>

            <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-[#f8f6f1]/55">
              <p>
                Bowen Websites started because we wanted to create something
                that could serve real people, real families, and real small
                businesses. A lot of business owners are great at what they do,
                but their website does not always show the quality of their
                work.
              </p>

              <p>
                Cameron handles the development side, building clean,
                responsive, custom websites that feel modern and work smoothly.
                Nicolle brings a strong eye for presentation, communication, and
                how a brand should connect with people.
              </p>

              <p>
                Together, we want to make the website process simple, honest,
                and useful. Our goal is to help business owners look trusted,
                explain what they do clearly, and give customers an easy way to
                reach out.
              </p>
            </div>

            <div className="mt-auto flex justify-end pt-8">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#c89455] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
              >
                Work With Us
                <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;