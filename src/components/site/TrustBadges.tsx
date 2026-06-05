import { ShieldCheck, FileCheck, ScrollText, MapPin, Route, Banknote } from "lucide-react";

const items = [
  { icon: ShieldCheck, t: "AMRDA Approved Layout" },
  { icon: FileCheck, t: "Clear Title Property" },
  { icon: ScrollText, t: "Ready Registration" },
  { icon: MapPin, t: "Prime Location" },
  { icon: Route, t: "60 / 80 Ft Wide Roads" },
  { icon: Banknote, t: "Bank Loan Assistance" },
];

export function TrustBadges() {
  return (
    <section id="trust" className="relative border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((i) => (
            <div key={i.t} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold leading-tight">{i.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
