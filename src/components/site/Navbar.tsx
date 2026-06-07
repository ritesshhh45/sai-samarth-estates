import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#office", label: "Office" },
  { href: "#layouts", label: "Layouts" },
  { href: "#brochures", label: "Brochures" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" aria-label="Shree Sai Samarth Developers — Home" className="flex items-center">
          <img
            src="/assets/brand/logo.png"
            alt="Shree Sai Samarth Developers"
            width={240}
            height={80}
            loading="eager"
            decoding="async"
            className="h-[60px] w-auto md:h-[72px] object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918787545154"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> 8787545154
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-md p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+918787545154"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
            >
              <Phone className="h-4 w-4" /> Call 8787545154
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
