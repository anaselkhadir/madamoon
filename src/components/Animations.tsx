"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global scroll choreography: Lenis smooth scroll + GSAP reveals.
 * Declarative — sections opt in via .reveal / .mask-img / data-parallax,
 * so every section stays a server component.
 */
export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Anchor links ride the smooth scroll
    const onAnchorClick = (e: Event) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href") || "");
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.6 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    const ctx = gsap.context(() => {
      // Fade + translate reveals, staggered per group
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll(".reveal");
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 82%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal:not([data-reveal-group] .reveal)").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Curtain mask reveal + slow settle-zoom on images
      gsap.utils.toArray<HTMLElement>(".mask-img").forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
        tl.to(el, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.5,
          ease: "power4.inOut",
        });
        if (img) {
          tl.to(img, { scale: 1, duration: 2.2, ease: "power2.out" }, "<0.1");
        }
      });

      // Gentle parallax drift
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = parseFloat(el.dataset.parallax || "8");
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // Slow drift of the hero image while scrolling away
      // (the entrance itself is pure CSS — .hero-rise / .hero-settle)
      const hero = document.querySelector("[data-hero]");
      if (hero) {
        gsap.to("[data-hero-img]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
      }
    });

    return () => {
      document.removeEventListener("click", onAnchorClick);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
