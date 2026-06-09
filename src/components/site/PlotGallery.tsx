import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Ruler, Compass, ZoomIn, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import aerial from "@/assets/site-aerial.jpg";
import road from "@/assets/site-road.jpg";
import entrance from "@/assets/site-entrance.jpg";
import temple from "@/assets/site-temple.jpg";
import plot from "@/assets/site-plot.jpg";
import hero from "@/assets/hero.jpg";

type PlotItem = {
  id: string;
  title: string;
  image: string;
  size: string;
  facing: string;
  address: string;
  description: string;
};

// Placeholder content — replace with real plot photos and details.
const PLOTS: PlotItem[] = [
  {
    id: "p1",
    title: "Shendra Phase 1 — Plot 14",
    image: aerial,
    size: "1000 Sq Ft",
    facing: "East Facing",
    address: "Shendra MIDC Road, Aurangabad, MH 431201",
    description:
      "Corner NA plot on 60ft internal road with garden frontage and Vastu-compliant orientation. AMRDA approved, clear title, ready for registration.",
  },
  {
    id: "p2",
    title: "Adgaon Greens — Plot 27",
    image: road,
    size: "1200 Sq Ft",
    facing: "North-East",
    address: "Adgaon Khurd, Near Ring Road, Aurangabad, MH 431005",
    description:
      "Premium boulevard-facing plot on the 80ft main spine. Adjacent to landscaped park and Radha Krishna temple zone.",
  },
  {
    id: "p3",
    title: "Sai Heights — Plot 09",
    image: entrance,
    size: "800 Sq Ft",
    facing: "South",
    address: "Shendra Bidkin Industrial Corridor, Aurangabad, MH 431201",
    description:
      "Compact starter plot with grand stone-pillar entrance, 24x7 security cabin and street lighting on every road.",
  },
  {
    id: "p4",
    title: "Temple View — Plot 03",
    image: temple,
    size: "1500 Sq Ft",
    facing: "West",
    address: "Radha Krishna Mandir Road, Adgaon, Aurangabad, MH 431005",
    description:
      "Spiritual-front premium plot directly facing the in-project Radha Krishna temple. Ideal for luxury bungalow.",
  },
  {
    id: "p5",
    title: "Boundary Marked — Plot 41",
    image: plot,
    size: "1000 Sq Ft",
    facing: "East",
    address: "Phase 2, Shendra MIDC, Aurangabad, MH 431201",
    description:
      "Physically demarcated NA plot with corner pillars, internal tar road access and underground utilities ready.",
  },
  {
    id: "p6",
    title: "Sunrise Crest — Plot 18",
    image: hero,
    size: "1100 Sq Ft",
    facing: "North-East",
    address: "Sunrise Boulevard, Shendra, Aurangabad, MH 431201",
    description:
      "Elevated plot with open eastern horizon — gets the first sunrise. Walking distance to commercial high street.",
  },
];

const WA = (title: string) =>
  `https://wa.me/918787545154?text=${encodeURIComponent(
    `Hello, I'm interested in ${title} at Shree Sai Samarth Developers. Please share full details.`
  )}`;

export function PlotGallery() {
  const [active, setActive] = useState<PlotItem | null>(null);

  return (
    <section id="plot-gallery" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Available Plot Photos</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Plot images, <span className="text-gradient-warm">addresses & details</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            High-definition photos of every available plot. Tap any card to zoom and view full details.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLOTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <button
                onClick={() => setActive(p)}
                className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-card transition hover:-translate-y-1.5 hover:shadow-luxe"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.address}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <ZoomIn className="h-3 w-3" /> HD
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-display text-lg leading-tight">{p.title}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs opacity-90">
                      <MapPin className="h-3 w-3" /> {p.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Ruler className="h-3.5 w-3.5" /> {p.size}</span>
                    <span className="inline-flex items-center gap-1"><Compass className="h-3.5 w-3.5" /> {p.facing}</span>
                  </div>
                  <span className="text-xs font-semibold text-primary">View details →</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent className="max-w-[96vw] overflow-hidden p-0 md:max-w-4xl">
            <DialogTitle className="sr-only">{active?.title ?? "Plot details"}</DialogTitle>
            {active && (
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3">
                  <img
                    src={active.image}
                    alt={`${active.title} — ${active.address}`}
                    className="h-full max-h-[70vh] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 md:col-span-2">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">Plot details</div>
                    <h3 className="mt-1 font-display text-2xl leading-tight">{active.title}</h3>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{active.address}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 rounded-xl bg-secondary/60 p-3 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Size</div>
                      <div className="font-semibold">{active.size}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Facing</div>
                      <div className="font-semibold">{active.facing}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{active.description}</p>
                  <div className="mt-auto flex flex-col gap-2 pt-2">
                    <a
                      href={WA(active.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                    </a>
                    <a
                      href="tel:+918787545154"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent"
                    >
                      <Phone className="h-4 w-4" /> Call 8787545154
                    </a>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
