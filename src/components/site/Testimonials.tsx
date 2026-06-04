import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh Patil", role: "Plot Owner · Aurangabad", text: "Smooth registration, clear documents and exactly the plot they promised. Genuinely trustworthy team." },
  { name: "Sneha Deshmukh", role: "Investor · Pune", text: "I bought two plots as long-term investment. Location is excellent and prices have already appreciated." },
  { name: "Mahesh Kulkarni", role: "Home Buyer · Jalna", text: "Loved the AMRDA approval and wide roads. The team handled everything from site visit to sale deed." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Words from our <span className="text-gradient-warm">happy owners</span></h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-luxe">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />
              <div className="flex gap-0.5" style={{ color: "var(--gold)" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-warm font-display text-base font-bold text-primary-foreground shadow-gold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
