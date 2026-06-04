import { Ruler, MessageCircle, Phone } from "lucide-react";

const WA = (size: string) =>
  `https://wa.me/918787545154?text=${encodeURIComponent(
    `Hello, I'm interested in a ${size} plot at Shri Sai Samarth Developers. Please share details.`
  )}`;

const plots = [
  { size: "800", unit: "Sq Ft", tag: "Starter", desc: "Ideal entry-level NA plot for first-time buyers and small homes.", featured: false },
  { size: "1000", unit: "Sq Ft", tag: "Most Popular", desc: "Best-selling configuration with great Vastu and spacious living.", featured: true },
  { size: "1200", unit: "Sq Ft", tag: "Premium", desc: "Larger plots for bungalows with garden and parking space.", featured: false },
  { size: "Custom", unit: "Sizes", tag: "On Request", desc: "Custom plot sizes available based on your specific requirement.", featured: false },
];

export function Plots() {
  return (
    <section id="plots" className="relative scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Available Plots</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Find your <span className="text-gradient-warm">perfect plot</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">Multiple sizes, all NA-approved, all ready for registration.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plots.map((p) => (
            <div
              key={p.size}
              className={`relative overflow-hidden rounded-3xl border p-7 shadow-card transition hover:-translate-y-2 hover:shadow-luxe ${
                p.featured
                  ? "border-primary/40 bg-gradient-warm text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <div className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                p.featured ? "bg-white/20 text-white" : "bg-accent text-accent-foreground"
              }`}>
                {p.tag}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold leading-none">{p.size}</span>
                <span className={`text-sm font-semibold ${p.featured ? "text-white/90" : "text-muted-foreground"}`}>{p.unit}</span>
              </div>
              <div className={`mt-1 flex items-center gap-1.5 text-xs ${p.featured ? "text-white/85" : "text-muted-foreground"}`}>
                <Ruler className="h-3.5 w-3.5" /> NA Approved Plot
              </div>
              <p className={`mt-5 text-sm leading-relaxed ${p.featured ? "text-white/90" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-7 flex flex-col gap-2">
                <a
                  href={WA(`${p.size} ${p.unit}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    p.featured ? "bg-white text-primary hover:bg-white/90" : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </a>
                <a
                  href="tel:+918787545154"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    p.featured ? "border-white/40 text-white hover:bg-white/10" : "border-border text-foreground hover:bg-accent"
                  }`}
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
