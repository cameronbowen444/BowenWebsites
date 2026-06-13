"use client";

import { useAnimationFrame } from "framer-motion";
import { useCallback, useLayoutEffect, useRef } from "react";
import { FiArrowUpRight, FiStar, FiUser } from "react-icons/fi";

import { scrollToSection } from "@/lib/scrollToSection";

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

const COPIES = 5;
const scrollingReviews = Array.from({ length: COPIES }, () => reviews).flat();
const stars = Array.from({ length: 5 });

const Testimonials = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isInteractingRef = useRef(false);
  const isReadyRef = useRef(false);

  const getSingleSetWidth = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;

    return scroller.scrollWidth / COPIES;
  }, []);

  const keepScrollLooping = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !isReadyRef.current) return;

    const singleSetWidth = getSingleSetWidth();
    if (!singleSetWidth) return;

    if (scroller.scrollLeft >= singleSetWidth * (COPIES - 1)) {
      scroller.scrollLeft -= singleSetWidth * 2;
    }

    if (scroller.scrollLeft <= singleSetWidth * 0.5) {
      scroller.scrollLeft += singleSetWidth * 2;
    }
  }, [getSingleSetWidth]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const setToMiddle = () => {
      const singleSetWidth = getSingleSetWidth();
      if (!singleSetWidth) return;

      scroller.scrollLeft = singleSetWidth * Math.floor(COPIES / 2);
      isReadyRef.current = true;
    };

    setToMiddle();

    const frame = requestAnimationFrame(setToMiddle);

    return () => {
      cancelAnimationFrame(frame);
      isReadyRef.current = false;
    };
  }, [getSingleSetWidth]);

  useAnimationFrame(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !isReadyRef.current || isInteractingRef.current) return;

    const singleSetWidth = getSingleSetWidth();
    if (!singleSetWidth) return;

    scroller.scrollLeft += 0.35;

    if (scroller.scrollLeft >= singleSetWidth * (COPIES - 2)) {
      scroller.scrollLeft -= singleSetWidth;
    }

    if (scroller.scrollLeft <= singleSetWidth) {
      scroller.scrollLeft += singleSetWidth;
    }
  });

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scroller.scrollLeft += e.deltaY;
    }
  }, []);

  const startInteraction = useCallback(() => {
    isInteractingRef.current = true;
  }, []);

  const endInteraction = useCallback(() => {
    isInteractingRef.current = false;
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#081523] px-4 py-16 text-[#f8f6f1] sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative overflow-hidden px-0 py-14 sm:px-4 lg:min-h-[680px]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#c89455]/12 blur-3xl" />
            <div className="absolute left-1/2 top-[260px] h-[360px] w-[1000px] -translate-x-1/2 rounded-full bg-[#f8f6f1]/[0.045] blur-3xl" />

            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#081523] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-[#081523] to-transparent" />
            <div className="absolute inset-y-0 left-0 z-20 hidden w-40 bg-gradient-to-r from-[#081523] via-[#081523]/85 to-transparent sm:block" />
            <div className="absolute inset-y-0 right-0 z-20 hidden w-40 bg-gradient-to-l from-[#081523] via-[#081523]/85 to-transparent sm:block" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,148,85,0.11),transparent_44%)]" />
          </div>

          {/* Phone Mockup */}
          <div className="pointer-events-none relative z-10 mx-auto h-[470px] w-[265px] rounded-[3rem] border border-[#c89455]/20 bg-[#061525]/85 p-3 shadow-[0_0_90px_rgba(200,148,85,0.16)] sm:h-[540px] sm:w-[305px]">
            <div className="relative h-full overflow-hidden rounded-[2.4rem] border border-[#f8f6f1]/10 bg-[#081523]">
              <div className="absolute left-1/2 top-5 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black/85" />

              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(248,246,241,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(248,246,241,0.8)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#c89455]/10 via-transparent to-[#f8f6f1]/[0.035]" />

              <div className="relative flex h-full flex-col items-center px-7 pt-28 text-center sm:pt-32">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c89455]/25 bg-[#c89455]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#c89455]">
                  <FiUser aria-hidden="true" />
                  Client Reviews
                </div>

                <h2 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#f8f6f1] sm:text-4xl">
                  What Our
                  <br />
                  Clients Are
                  <br />
                  Saying
                </h2>

                <p className="mt-5 text-xs font-medium leading-5 text-[#f8f6f1]/45">
                  Feedback from business owners, service brands, and project
                  partners.
                </p>
              </div>
            </div>
          </div>

          {/* Sliding Review Row */}
          <div
            ref={scrollerRef}
            onScroll={keepScrollLooping}
            onWheel={handleWheel}
            onPointerDown={startInteraction}
            onPointerUp={endInteraction}
            onPointerCancel={endInteraction}
            onPointerLeave={endInteraction}
            className="relative z-30 -mt-40 cursor-grab overflow-x-auto overflow-y-hidden pb-6 pt-6 active:cursor-grabbing [scrollbar-width:none] sm:-mt-44 lg:-mt-48 [&::-webkit-scrollbar]:hidden"
            aria-label="Client review carousel"
          >
            <div className="flex w-max items-stretch gap-4">
              {scrollingReviews.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="flex min-h-[285px] w-[310px] shrink-0 flex-col rounded-[1.15rem] border border-[#f8f6f1]/10 bg-[#f8f6f1]/[0.065] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl transition hover:border-[#c89455]/40 hover:bg-[#f8f6f1]/[0.085] sm:w-[380px]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c89455]/25 bg-[#c89455]/10 text-sm font-black text-[#c89455]">
                        {review.avatar}
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-[#f8f6f1]">
                          {review.name}
                        </h3>

                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#f8f6f1]/35">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 text-[#c89455]">
                      {stars.map((_, starIndex) => (
                        <FiStar
                          key={starIndex}
                          size={12}
                          className="fill-[#c89455]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative flex-1 rounded-[1rem] border border-[#f8f6f1]/10 bg-[#081523]/35 p-4">
                    <span className="absolute -top-3 left-4 text-4xl font-black leading-none text-[#c89455]/35">
                      “
                    </span>

                    <p className="relative z-10 text-sm font-medium leading-6 text-[#f8f6f1]/65">
                      {review.quote}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-[#f8f6f1]/10 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#c89455]/70">
                      Project feedback
                    </p>

                    <button
                      type="button"
                      onClick={() => scrollToSection("#contact")}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8f6f1] text-sm text-[#081523] transition hover:rotate-45 hover:bg-[#c89455]"
                      aria-label={`Build something similar for ${review.name}`}
                    >
                      <FiArrowUpRight aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-30 mx-auto mt-2 max-w-xl text-center">
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 rounded-full bg-[#c89455] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-[#081523] transition hover:-translate-y-0.5 hover:bg-[#f8f6f1]"
            >
              Build Something People Remember
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;