import { Award, Eye, MapPinned, TrendingUp, FileCheck2, Headphones } from "lucide-react";

const cards = [
  { icon: Award, t: "Trusted Developer", d: "Years of successful NA plot delivery with verified customer references." },
  { icon: Eye, t: "Transparent Dealings", d: "No hidden charges. Every cost, approval and document shared upfront." },
  { icon: MapPinned, t: "Prime Location Projects", d: "Strategically placed near MIDC, highways, schools and city growth zones." },
  { icon: TrendingUp, t: "Investment Growth", d: "High-appreciation corridors handpicked for long-term capital growth." },
  { icon: FileCheck2, t: "Clear Documentation", d: "AMRDA-approved, NA-sanctioned, ready-to-register clean title plots." },
  { icon: Headphones, t: "Dedicated Support", d: "Personal relationship manager from site visit to registration and beyond." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Choose Us</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Built on <span className="text-gradient-warm">trust &amp; transparency</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Six reasons families and investors choose Shree Sai Samarth Developers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.t}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-luxe"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-20" style={{ background: "var(--gradient-warm)" }} />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-gold transition group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
