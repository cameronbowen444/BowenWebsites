import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiTarget,
} from "react-icons/fi";

const points = [
  "Custom websites built around real businesses",
  "Simple process without confusing tech talk",
  "Designs made to help people trust you faster",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl text-center" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Top Label */}
        {/* Header */}
<div className="mx-auto mb-12 max-w-2xl text-center">
  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">
    About Us
  </p>

  <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
    Built By Family.
    <br />
    <span className="text-accent">Made To Serve Yours.</span>
  </h2>

  <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-white/55 sm:text-base">
    Bowen Websites was started with a simple goal: help small businesses
    look professional online without making the process confusing,
    overpriced, or stressful.
  </p>
</div>

        {/* Main Layout */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="relative min-h-[480px] overflow-hidden rounded-[1.6rem] bg-brand-light sm:min-h-[580px] lg:h-full">
              <Image
                src="/assets/about.jpg"
                alt="Cameron and Nicolle Bowen"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/10 bg-brand/75 p-4 backdrop-blur-xl">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-accent">
                  Cameron & Nicolle Bowen
                </p>

                <h3 className="text-xl font-black tracking-[-0.04em] text-white">
                  Building something real, together.
                </h3>

                <p className="mt-2 text-xs font-medium leading-5 text-white/50">
                  A husband-and-wife team focused on helping small businesses
                  look professional online.
                </p>
              </div>
            </div>
          </div>

          {/* Story Card */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.065] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-accent">
              <FiHeart />
              Why We Started
            </div>

            <h3 className="max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-4xl">
              We know what it means to build from the ground up.
            </h3>

            <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-white/55">
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

            <div className="my-7 h-px bg-white/10" />

            <div className="grid gap-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-light/60 px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                    <FiCheckCircle size={15} />
                  </div>

                  <p className="text-sm font-bold text-white/65">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.25rem] border border-accent/20 bg-accent/10 p-4 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-xl text-brand">
                <FiTarget />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-accent">
                  Our Mission
                </p>

                <p className="mt-1 text-sm font-bold leading-6 text-white/70">
                  To help small businesses look professional, build trust
                  faster, and turn more visitors into real leads.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-brand transition hover:-translate-y-0.5 hover:bg-white"
            >
              Work With Us
              <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
