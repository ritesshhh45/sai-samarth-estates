import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Map, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const WA = "https://wa.me/918787545154";

export function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance after intro completes
    const t = window.setTimeout(() => setMounted(true), 100);

    // Parallax on hero image
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (imgRef.current && y < window.innerHeight) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.05)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const entered = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
  const heroZoom = mounted ? "scale-100" : "scale-110";

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        ref={imgRef}
        src={heroImg}
        alt="Shree Sai Samarth Developers project site at sunrise"
        width={1920}
        height={1080}
        className={`absolute inset-0 h-[115%] w-full object-cover will-change-transform transition-all duration-[2500ms] ${heroZoom}`}
        style={{ transform: "translate3d(0,0,0) scale(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B18]/85 via-[#5A2328]/55 to-[#2B1B18]/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 md:px-8">
        <div className="max-w-3xl">
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-all duration-700 ${entered}`}>
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
            AMRDA Approved NA Plots
          </div>

          <h1 className={`scroll-animation font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl transition-all duration-1000 delay-150 ${entered}`}>
            Shree Sai Samarth <span className="text-gradient-warm">Developers</span>
          </h1>

          <p className={`scroll-animation mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl transition-all duration-1000 delay-300 ${entered}`}>
            Trusted NA Residential &amp; Commercial Plot Development Projects — clear title, legally approved layouts and an address you can build your future on.
          </p>

          <div className={`scroll-animation mt-9 flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${entered}`}>
            <a
              href="tel:+918787545154"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] md:text-base"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl md:text-base premium-btn"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href="#layouts"
             className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl md:text-base premium-btn"
            >
              <Map className="h-4 w-4" /> View Layout Plan
            </a>
          </div>

          <div className={`scroll-animation mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4 transition-all duration-1000 delay-700 ${entered}`}>
            {[
              ["AMRDA", "Approved"],
              ["60 / 80 Ft", "Wide Roads"],
              ["Clear", "Title Property"],
              ["Ready", "Registration"],
            ].map(([a, b]) => (
              <div key={a} className="glass-dark rounded-xl px-4 py-3 text-white">
                <div className="font-display text-lg leading-tight" style={{ color: "var(--gold)" }}>{a}</div>
                <div className="text-xs uppercase tracking-wider opacity-85">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
