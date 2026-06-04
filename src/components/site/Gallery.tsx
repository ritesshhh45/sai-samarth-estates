import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import aerial from "@/assets/site-aerial.jpg";
import road from "@/assets/site-road.jpg";
import entrance from "@/assets/site-entrance.jpg";
import temple from "@/assets/site-temple.jpg";
import plot from "@/assets/site-plot.jpg";
import hero from "@/assets/hero.jpg";

const images = [
  { src: aerial, alt: "Aerial view of plotted layout", span: "md:col-span-2 md:row-span-2" },
  { src: road, alt: "Wide internal tar road with street lights" },
  { src: temple, alt: "Radha Krishna temple inside project" },
  { src: entrance, alt: "Project entrance with stone pillars" },
  { src: plot, alt: "Boundary-marked ready plot" },
  { src: hero, alt: "Project site at sunrise" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Site Gallery</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Real photos. <span className="text-gradient-warm">Real progress.</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            On-site infrastructure, roads, greenery and project amenities — exactly as it is.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-card transition hover:shadow-luxe ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium drop-shadow">{img.alt}</span>
                <ZoomIn className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent className="max-w-[95vw] p-2 md:max-w-5xl">
            <DialogTitle className="sr-only">Gallery image</DialogTitle>
            {active && <img src={active} alt="Gallery preview" className="h-auto w-full rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
