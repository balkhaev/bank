"use client";

import { useEffect } from "react";

export function MotionOrchestrator() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    document.documentElement.classList.add("motion-ready");

    for (const node of nodes) {
      const delay = Number(node.dataset.revealDelay || 0);
      node.style.setProperty("--reveal-delay", `${Math.max(0, delay)}ms`);
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      for (const node of nodes) node.classList.add("is-visible");
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    for (const node of nodes) observer.observe(node);

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
