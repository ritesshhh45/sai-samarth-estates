import { useState } from "react";
import { Download, ZoomIn, FileText, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const brochures = [
  {
    title: "Yashwant Nagar — Phase 3",
    subtitle: "Gut No. 203, Shendra Jahagir, Aurangabad",
    cover: "/brochure/b1-1.jpg",
    pages: ["/brochure/b1-1.jpg", "/brochure/b1-2.jpg", "/brochure/b1-3.jpg"],
    pdf: "/brochure/yashwant-nagar-phase-3.pdf",
    chips: ["NA-42(B) Approved", "150 Ft Road", "80 Ft Road", "Near ISKCON Temple"],
  },
  {
    title: "Shree Nath Nagar — Phase 3",
    subtitle: "Gut No. 255, Zalta Phata (Adgaon), Aurangabad",
    cover: "/brochure/b2-1.jpg",
    pages: ["/brochure/b2-1.jpg", "/brochure/b2-2.jpg", "/brochure/b2-3.jpg"],
    pdf: "/brochure/shree-nath-nagar-phase-3.pdf",
    chips: ["AMRDA Approved", "60 M Wide Road", "77 Plots", "Solapur-Dhule Highway"],
  },
];

export function BrochureSection() {
  return (
    <section id="brochures" className="relative scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Project Brochures</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Brochures &amp; <span className="text-gradient-warm">Layout Plans</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Preview every page in HD or download the full PDF brochure with layout, location and contact details.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {brochures.map((b) => (
            <BrochureCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrochureCard({ title, subtitle, cover, pages, pdf, chips }: typeof brochures[number]) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-luxe">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="relative block w-full overflow-hidden" onClick={() => setActive(0)}>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <Loader2 className="h-7 w-7 animate-spin text-primary" />
              </div>
            )}
            <img
              src={cover}
              alt={`${title} brochure cover`}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              className="aspect-[4/3] w-full bg-white object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-foreground shadow-card">
              <ZoomIn className="h-3.5 w-3.5" /> View {pages.length} pages
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                <FileText className="h-3.5 w-3.5" /> PDF Brochure
              </div>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] p-2 sm:p-4 md:max-w-6xl">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="max-h-[80vh] overflow-auto rounded-lg">
            <img src={pages[active]} alt={`${title} — page ${active + 1}`} className="mx-auto h-auto w-full" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 w-8 rounded-full transition ${i === active ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{c}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
          >
            <ZoomIn className="h-4 w-4" /> Preview Brochure
          </button>
          <a
            href={pdf}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
      </div>
    </article>
  );
}
