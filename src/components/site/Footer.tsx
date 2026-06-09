import { Phone, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 opacity-[0.06]" style={{ background: "var(--gradient-warm)" }} />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-warm font-display text-xl font-bold text-primary-foreground shadow-gold">S</div>
              <div>
                <div className="font-display text-xl font-semibold">Shree Sai Samarth Developers</div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-70">Premium NA Plots · Aurangabad</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
              AMRDA-approved residential and commercial NA plot development with clear titles, wide roads and modern amenities. Your trusted partner in land investment.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold" style={{ color: "var(--gold)" }}>Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100">About</a></li>
              <li><a href="#layouts" className="hover:opacity-100">Layout Plans</a></li>
              <li><a href="#plots" className="hover:opacity-100">Available Plots</a></li>
              <li><a href="#gallery" className="hover:opacity-100">Gallery</a></li>
              <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold" style={{ color: "var(--gold)" }}>Contact</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-90">
              <li><a href="tel:+918787545154" className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 8787545154</a></li>
              <li><a href="https://wa.me/918787545154" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp Chat</a></li>
              <li className="inline-flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Shop No. 207, 2nd Floor, Golden City Center, Near Prozone Mall, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431006</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-70 md:flex-row">
          <div>© {new Date().getFullYear()} Shree Sai Samarth Developers. All rights reserved.</div>
          <div>NA Approved · AMRDA Sanctioned · Clear Title Plots</div>
        </div>

        <div className="mt-6 text-center text-[11px] tracking-wide opacity-80">
          Designed &amp; Developed by{" "}
          <a
            href="https://riteshpawarwebstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-opacity hover:opacity-100"
            style={{ color: "#D4AF37" }}
          >
            Ritesh Web Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
