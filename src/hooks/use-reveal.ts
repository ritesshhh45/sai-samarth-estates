import { useEffect, useRef, useState } from "react";

/** Reveal an element when it scrolls into view. Adds `is-revealed` class. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [revealed, options]);

  return { ref, revealed };
}

/** Count from 0 → target when in view. */
export function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const { ref, revealed } = useReveal<HTMLSpanElement>();

  useEffect(() => {
    if (!revealed) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, target, duration]);

  return { ref, value };
}
