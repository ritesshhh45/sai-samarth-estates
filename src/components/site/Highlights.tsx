import {
  BadgeCheck, Route, Droplets, Zap, Trees, Landmark,
  TrendingUp, FileCheck, ScrollText, Building2, Sun, ShieldCheck,
} from "lucide-react";

const items = [
  { icon: BadgeCheck, t: "NA & AMRDA Approved" },
  { icon: Route, t: "60 Ft & 80 Ft Wide Roads" },
  { icon: Droplets, t: "Water Facility" },
  { icon: Zap, t: "Electricity & Street Lights" },
  { icon: Trees, t: "Landscaped Open Space" },
  { icon: Landmark, t: "Temple Inside Project" },
  { icon: TrendingUp, t: "Investment Friendly Location" },
  { icon: FileCheck, t: "Clear Title Property" },
  { icon: ScrollText, t: "Ready for Registration" },
  { icon: Building2, t: "Internal Drainage Lines" },
  { icon: Sun, t: "Vastu-Compliant Plots" },
  { icon: ShieldCheck, t: "Compound Wall & Security" },
];

export function Highlights() {
  return (
    <section id="highlights" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Choose Us</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Project <span className="text-gradient-warm">Highlights</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Every plot is backed by full legal clarity, modern infrastructure and amenities that protect your investment.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.t}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-luxe"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold transition group-hover:scale-110">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="font-medium">{i.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
