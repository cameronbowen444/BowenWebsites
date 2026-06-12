// src/lib/scrollToSection.ts

export const scrollToSection = (href: string, offset = 88) => {
  if (typeof window === "undefined") return;

  const section = document.querySelector(href);

  if (!section) return;

  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};