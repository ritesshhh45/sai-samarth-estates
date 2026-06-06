import { Navigation, Phone, MessageCircle, MapPin, Building2, Mail } from "lucide-react";

const ADDRESS = "Shop No. 207, 2nd Floor, Golden City Center, Near Prozone Mall, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431006";
const DIR_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Golden City Center, Prozone Mall, Chilkalthana, Chhatrapati Sambhajinagar")}`;
const WA = "https://wa.me/918787545154?text=Hello%20Shree%20Sai%20Samarth%20Developers%2C%20I%27d%20like%20to%20visit%20your%20office.";

export function OfficeSection() {
  return (
    <section id="office" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Visit Our Office</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Visit our <span className="text-gradient-warm">Corporate Office</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Walk in for a personal consultation, layout walkthrough and instant booking assistance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl shadow-luxe lg:col-span-3">
            <img
              src="/office/office-front.jpg"
              alt="Shree Sai Samarth Developers — Corporate office, Shop No. 207, Golden City Center, Chhatrapati Sambhajinagar"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 rounded-2xl glass-dark px-4 py-3 text-white">
              <Building2 className="h-4 w-4" style={{ color: "var(--gold)" }} />
              <span className="text-sm font-semibold">Golden City Center, Shop No. 207</span>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-luxe lg:col-span-2">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-20" style={{ background: "var(--gradient-warm)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <MapPin className="h-3.5 w-3.5" /> Corporate Office
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Shree Sai Samarth Developers</h3>
              <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                Shop No. 207, 2nd Floor,<br />
                Golden City Center,<br />
                Near Prozone Mall, Chilkalthana,<br />
                Chhatrapati Sambhajinagar,<br />
                Maharashtra 431006
              </address>

              <div className="mt-5 grid gap-2 text-sm">
                <a href="tel:+918787545154" className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +91 8787545154
                </a>
                <a href="mailto:subhashsisode45@gmail.com" className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> subhashsisode45@gmail.com
                </a>
                <div className="text-xs text-muted-foreground">Open Mon–Sat · 10:00 AM – 7:00 PM</div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-1">
                <a
                  href={DIR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.02]"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+918787545154"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.02]"
                    style={{ background: "var(--whatsapp)" }}
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
