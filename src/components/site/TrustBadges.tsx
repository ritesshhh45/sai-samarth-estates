import { ShieldCheck, FileCheck, ScrollText, MapPin, Route, Banknote } from "lucide-react";
import { CountUp, Reveal } from "@/components/site/Reveal";

const items = [
  { icon: ShieldCheck, t: "AMRDA Approved Layout" },
  { icon: FileCheck, t: "Clear Title Property" },
  { icon: ScrollText, t: "Ready Registration" },
  { icon: MapPin, t: "Prime Location" },
  { icon: Route, t: "60 / 80 Ft Wide Roads" },
  { icon: Banknote, t: "Bank Loan Assistance" },
];

const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 500, suffix: "+", label: "Happy Families" },
  { value: 12, suffix: "+", label: "Years of Trust" },
  { value: 100, suffix: "%", label: "AMRDA Approved" },
  { value: 25, suffix: "+", label: "Acres Developed" },
];

export function TrustBadges() {
  return (
    <section id="trust" className="relative border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 60}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold leading-tight">{i.t}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient-warm md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
