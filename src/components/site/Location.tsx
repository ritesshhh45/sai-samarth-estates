import { GraduationCap, Hospital, ShoppingBag, Milestone, TrendingUp, MapPin, Navigation } from "lucide-react";

const benefits = [
  { icon: GraduationCap, t: "Schools Nearby", d: "Reputed schools within 5–10 minutes drive." },
  { icon: Hospital, t: "Hospitals Nearby", d: "Multi-specialty hospitals close to project." },
  { icon: ShoppingBag, t: "Market Nearby", d: "Daily-needs markets at walking distance." },
  { icon: Milestone, t: "Highway Connectivity", d: "150 Ft road & 80 Ft Aurangabad–Jalna road access." },
  { icon: TrendingUp, t: "Future Growth Potential", d: "Adjacent to Shendra MIDC Smart City Nagar." },
  { icon: MapPin, t: "Prime Address", d: "Gat No. 203, Shendra Jahagir, Tq. & Dist. Aurangabad." },
];

export function Location() {
  return (
    <section id="location" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Location Benefits</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">A location that <span className="text-gradient-warm">appreciates</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Strategically located adjacent to Shendra MIDC Smart City Nagar — close to highways, schools, hospitals and growing infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {benefits.map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <iframe
              title="Project Location"
              src="https://www.google.com/maps?q=Shendra+Jahagir,+Aurangabad,+Maharashtra&output=embed"
              className="h-72 w-full lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <div className="font-display text-lg font-semibold">Shendra Jahagir, Aurangabad</div>
                <div className="text-xs text-muted-foreground">Gat No. 203 · Tq. & Dist. Aurangabad</div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Shendra+Jahagir+Aurangabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
