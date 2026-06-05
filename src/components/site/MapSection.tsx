import { Navigation, MapPin } from "lucide-react";

const ADDRESS = "Shop No. 207, MIDC Industrial Area, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431006";
const MAP_URL = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const DIR_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

export function MapSection() {
  return (
    <section id="map" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Find Us</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Visit our <span className="text-gradient-warm">office</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {ADDRESS}
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
          <div className="relative">
            <iframe
              title="Shree Sai Samarth Developers Office Location"
              src={MAP_URL}
              className="h-72 w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 hidden rounded-xl glass-dark px-4 py-2 text-sm font-medium text-white shadow-luxe md:flex md:items-center md:gap-2">
              <MapPin className="h-4 w-4" style={{ color: "var(--gold)" }} />
              {ADDRESS}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="font-display text-lg font-semibold">Shree Sai Samarth Developers</div>
              <div className="mt-1 text-sm text-muted-foreground">{ADDRESS}</div>
            </div>
            <a
              href={DIR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
