import { Download, ZoomIn, Loader2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const plans = [
  {
    title: "Phase 1 Layout Plan",
    subtitle: "Radhakrishna Nagar Phase II — Shendra, Aurangabad",
    img: "/layouts/phase1.jpg",
    file: "shri-sai-samarth-phase-1-layout.jpg",
    chips: ["A · B · C · D · E Parts", "9.00 m Wide Roads", "Open Spaces", "Radhakrishna Mandir"],
  },
  {
    title: "Phase 2 Layout Plan",
    subtitle: "60 Ft Internal Road Sector — Plots 01 to 29",
    img: "/layouts/phase2.jpg",
    file: "shri-sai-samarth-phase-2-layout.jpg",
    chips: ["NA-44 Approved", "60 Ft Wide Roads", "9 m Internal Road", "Open Space Sector"],
  },
];

export function LayoutPlans() {
  return (
    <section id="layouts" className="relative scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Layout Plans</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Project <span className="text-gradient-warm">Layout Plans</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Sanctioned, AMRDA-approved layouts. Click any plan to zoom in HD or download the full sheet.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {plans.map((p) => (
            <PlanCard key={p.title} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: typeof plans[number] }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-luxe">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="relative block w-full overflow-hidden">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            <img
              src={plan.img}
              alt={`${plan.title} — official sanctioned layout`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="aspect-[16/10] w-full bg-white object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-foreground shadow-card">
              <ZoomIn className="h-3.5 w-3.5" /> Click to zoom
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] p-2 sm:p-4 md:max-w-6xl">
          <DialogTitle className="sr-only">{plan.title}</DialogTitle>
          <div className="max-h-[85vh] overflow-auto rounded-lg">
            <img src={plan.img} alt={plan.title} className="mx-auto h-auto w-full" />
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold">{plan.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {plan.chips.map((c) => (
            <span key={c} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{c}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
          >
            <ZoomIn className="h-4 w-4" /> View HD
          </button>
          <a
            href={plan.img}
            download={plan.file}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            <Download className="h-4 w-4" /> Download
          </a>
        </div>
      </div>
    </article>
  );
}
