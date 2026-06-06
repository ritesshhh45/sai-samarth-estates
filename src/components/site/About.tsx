import { ShieldCheck, FileCheck2, HandshakeIcon, Award, Navigation, MapPin } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "AMRDA Approved", text: "Sanctioned layouts with 100% NA approval and clear title plots." },
  { icon: FileCheck2, title: "Ready Registration", text: "Documentation handled end-to-end so you register with confidence." },
  { icon: HandshakeIcon, title: "Customer First", text: "Honest pricing, no hidden charges and lifetime project support." },
  { icon: Award, title: "15+ Years of Trust", text: "Hundreds of happy families across Aurangabad's growing corridors." },
];

const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Golden City Center, Prozone Mall, Chilkalthana, Chhatrapati Sambhajinagar")}`;

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
          <img
            src="/office/office-front.jpg"
            alt="Shree Sai Samarth Developers — corporate office at Golden City Center, Chhatrapati Sambhajinagar"
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
            className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-luxe"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card px-6 py-4 shadow-luxe md:block">
            <div className="font-display text-3xl text-gradient-warm">15+ Yrs</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Of Trust</div>
          </div>
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white">
            <MapPin className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
            Our Corporate Office
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Us</div>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Building <span className="text-gradient-warm">trust</span><br/>one plot at a time.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Shree Sai Samarth Developers specializes in AMRDA-approved, NA-sanctioned residential and
            commercial plot development across Aurangabad. With over 15 years of expertise, our projects
            are crafted around transparency, legal clarity and long-term value — so every family that
            joins our community owns more than land; they own a future.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={MAPS_DIR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              <Navigation className="h-4 w-4" /> Visit Our Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
