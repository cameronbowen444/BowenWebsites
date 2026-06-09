"use client";

import Image from "next/image";
import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const landingPages = [
  {
    title: "Chauffeur Service",
    image: "/assets/land1.png",
  },
  {
    title: "Luxury Auto Concierge",
    image: "/assets/land2.png",
  },
  {
    title: "Herbal Wellness",
    image: "/assets/land3.png",
  },
  {
    title: "Record Store",
    image: "/assets/land4.png",
  },
];

const COPIES = 5;

const repeatedPages = Array.from({ length: COPIES }, () => landingPages).flat();

const Hero = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isInteractingRef = useRef(false);

  const getSingleSetWidth = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;

    return scroller.scrollWidth / COPIES;
  }, []);

  const keepScrollLooping = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const singleSetWidth = getSingleSetWidth();
    if (!singleSetWidth) return;

    if (scroller.scrollLeft >= singleSetWidth * (COPIES - 1)) {
      scroller.scrollLeft -= singleSetWidth * 2;
    }

    if (scroller.scrollLeft <= singleSetWidth * 0.5) {
      scroller.scrollLeft += singleSetWidth * 2;
    }
  }, [getSingleSetWidth]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const setToMiddle = () => {
      const singleSetWidth = getSingleSetWidth();
      if (!singleSetWidth) return;

      scroller.scrollLeft = singleSetWidth * Math.floor(COPIES / 2);
    };

    const frame = requestAnimationFrame(setToMiddle);

    return () => cancelAnimationFrame(frame);
  }, [getSingleSetWidth]);

  useAnimationFrame(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isInteractingRef.current) return;

    const singleSetWidth = getSingleSetWidth();
    if (!singleSetWidth) return;

    scroller.scrollLeft += 0.45;

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
      id="home"
      className="relative min-h-screen overflow-hidden bg-brand px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-18%] top-[-18%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl md:h-[560px] md:w-[560px]" />
      <div className="pointer-events-none absolute bottom-[-18%] right-[-18%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl md:h-[560px] md:w-[560px]" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <div className="flex items-end gap-1">
            <span className="h-5 w-4 rounded-sm bg-white" />
            <span className="h-7 w-4 rounded-sm bg-accent-dark" />
            <span className="h-4 w-4 rounded-sm bg-accent" />
          </div>
        </div>

        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">
          Bowen Websites
        </p>

        <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
          Websites Built
          <br />
          <span className="text-accent">To Bring In Clients.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/60 sm:text-base">
          Premium websites, landing pages, and custom digital systems built to
          make small businesses look professional, trustworthy, and ready to
          grow.
        </p>

        <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/65 shadow-sm backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Live website previews
        </div>
      </div>

      {/* Scrolling website previews */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          ref={scrollerRef}
          onScroll={keepScrollLooping}
          onWheel={handleWheel}
          onPointerDown={startInteraction}
          onPointerUp={endInteraction}
          onPointerCancel={endInteraction}
          onPointerLeave={endInteraction}
          className="cursor-grab overflow-x-auto overflow-y-hidden pb-10 pt-4 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Website preview carousel"
        >
          <div className="flex w-max gap-6 px-1 sm:gap-8">
            {repeatedPages.map((page, index) => (
              <article
                key={`${page.title}-${index}`}
                className="group w-[285px] shrink-0 sm:w-[280px] md:w-[320px]"
              >
                {/* Website wrapper */}
                <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.08] shadow-[0_26px_75px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 group-hover:-translate-y-3 group-hover:border-accent/40 group-hover:shadow-[0_34px_95px_rgba(0,0,0,0.48)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] ring-1 ring-white/10" />

                  {/* Browser top bar */}
                  <div className="relative z-10 flex h-11 items-center gap-3 border-b border-white/10 bg-brand-light/95 px-4">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="h-3 w-3 rounded-full bg-accent" />
                      <span className="h-3 w-3 rounded-full bg-accent-dark" />
                      <span className="h-3 w-3 rounded-full bg-white/45" />
                    </div>

                    <div className="h-5 flex-1 rounded-full bg-white/[0.08]" />

                    <div className="hidden text-[10px] font-black uppercase tracking-[0.16em] text-white/35 sm:block">
                      Preview
                    </div>
                  </div>

                  {/* Website image */}
                  <div className="relative aspect-[1.18/1] overflow-hidden bg-soft">
                    <Image
                      src={page.image}
                      alt={`${page.title} website preview`}
                      fill
                      sizes="(max-width: 640px) 285px, (max-width: 768px) 280px, 320px"
                      quality={80}
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-white/10" />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/90 via-brand/35 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-white">
                        {page.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-4 flex items-center justify-between px-2">
                  <p className="text-sm font-black text-white/90">
                    {page.title}
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-accent shadow-sm backdrop-blur-md">
                    Website
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom style strip */}
        <div className="mx-auto mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-white/35">
          <span>Landing Pages</span>
          <span className="h-1 w-1 rounded-full bg-accent/50" />
          <span>Business Sites</span>
          <span className="h-1 w-1 rounded-full bg-accent/50" />
          <span>Mobile Ready</span>
          <span className="h-1 w-1 rounded-full bg-accent/50" />
          <span>Built To Convert</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;