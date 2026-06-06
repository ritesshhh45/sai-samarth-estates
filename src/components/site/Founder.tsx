import { Quote, ShieldCheck, Award, Users, TrendingUp, Phone, MessageCircle } from "lucide-react";

const stats = [
  { icon: Award, k: "15+", l: "Years Experience" },
  { icon: Users, k: "500+", l: "Happy Families" },
  { icon: ShieldCheck, k: "100%", l: "Clear Titles" },
  { icon: TrendingUp, k: "12+", l: "Projects Delivered" },
];

export function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-24 overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Leadership</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Meet our <span className="text-gradient-warm">Founder</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A vision built on trust, transparency and an uncompromising commitment to clear-title land.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-5">
          {/* Portrait */}
          <div className="relative flex justify-center lg:col-span-2">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full opacity-40 blur-2xl"
                style={{ background: "var(--gradient-warm)" }}
              />
              <div
                className="relative aspect-square w-64 rounded-full p-[6px] shadow-luxe md:w-80"
                style={{ background: "var(--gradient-warm)" }}
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-card">
                  {/* Premium monogram (swap with portrait when uploaded) */}
                  <div
                    className="absolute inset-2 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 60%), var(--card)",
                    }}
                  />
                  <div className="relative text-center">
                    <div
                      className="font-display text-7xl font-bold leading-none md:text-8xl"
                      style={{ color: "var(--gold)" }}
                    >
                      SS
                    </div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      Founder
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full bg-card px-5 py-2 shadow-luxe md:block">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4" style={{ color: "var(--gold)" }} />
                  Trusted Since 2010
                </div>
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-luxe md:p-10">
              <Quote className="absolute right-6 top-6 h-12 w-12 opacity-10" style={{ color: "var(--gold)" }} />

              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Founder &amp; Managing Director</div>
              <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">Mr. Subhash Sisode</h3>
              <div className="mt-1 text-sm text-muted-foreground">Shree Sai Samarth Developers · Chhatrapati Sambhajinagar</div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                “Land is more than an investment — it’s a foundation for generations. Every plot we deliver carries
                a promise of clear title, transparent dealing and unwavering customer trust. That promise is the
                soul of Shree Sai Samarth Developers.”
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-border bg-background p-4 text-center transition hover:-translate-y-1 hover:shadow-card"
                  >
                    <s.icon className="mx-auto h-5 w-5" style={{ color: "var(--gold)" }} />
                    <div className="mt-2 font-display text-2xl font-bold text-gradient-warm">{s.k}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+918787545154"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> Call the Founder
                </a>
                <a
                  href="https://wa.me/918787545154?text=Hello%20Mr.%20Sisode%2C%20I%27d%20like%20to%20know%20more%20about%20your%20plots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.03]"
                  style={{ background: "var(--whatsapp)" }}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
