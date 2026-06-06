import { Phone, MessageCircle, Award, Users, ShieldCheck, TrendingUp } from "lucide-react";
const founderAsset = { url: "/assets/team/founder.png" };
const directorAsset = { url: "/assets/team/director.png" };
const relationsAsset = { url: "/assets/team/relations.png" };

const team = [
  {
    img: founderAsset.url,
    role: "Founder & Managing Director",
    name: "Mr. Subhash Sisode",
    sub: "Shree Sai Samarth Developers",
  },
  {
    img: directorAsset.url,
    role: "Director",
    name: "Shree Sai Samarth Developers Team",
    sub: "Strategy & Land Development",
  },
  {
    img: relationsAsset.url,
    role: "Project & Customer Relations",
    name: "Shree Sai Samarth Developers Team",
    sub: "Bookings, Site Visits & Support",
  },
];

const stats = [
  { icon: Award, k: "15+", l: "Years Experience" },
  { icon: Users, k: "500+", l: "Happy Families" },
  { icon: ShieldCheck, k: "100%", l: "Clear Titles" },
  { icon: TrendingUp, k: "12+", l: "Projects Delivered" },
];

const WA = "https://wa.me/918787545154?text=Hello%20Shree%20Sai%20Samarth%20Developers%2C%20I%27d%20like%20to%20connect%20with%20your%20team.";

export function Leadership() {
  return (
    <section id="leadership" className="relative scroll-mt-24 overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-warm)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-warm)" }} />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our People</div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Meet Our <span className="text-gradient-warm">Leadership</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A trusted team committed to transparent land development and customer satisfaction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.role}
              className="group relative flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-card transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxe"
            >
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-full opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "var(--gradient-warm)" }}
                />
                <div
                  className="relative aspect-square w-44 rounded-full p-[4px] shadow-gold transition-transform duration-500 group-hover:scale-[1.03] md:w-52"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  <div className="h-full w-full overflow-hidden rounded-full bg-background ring-4 ring-background">
                    <img
                      src={m.img}
                      alt={`${m.name} — ${m.role}, Shree Sai Samarth Developers`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{m.role}</div>
              <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.sub}</p>

              <div className="mt-5 h-px w-16 bg-gradient-warm opacity-60" />
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-card transition hover:-translate-y-1 hover:shadow-luxe"
            >
              <s.icon className="mx-auto h-5 w-5" style={{ color: "var(--gold)" }} />
              <div className="mt-2 font-display text-2xl font-bold text-gradient-warm md:text-3xl">{s.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+918787545154"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.03]"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
