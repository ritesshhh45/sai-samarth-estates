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
      id="site-header"
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-[rgba(43,27,24,0.45)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8 md:py-2.5">
        <a
          href="#top"
          aria-label="Shree Sai Samarth Developers — Home"
          className="flex items-center"
        >
          <img
            src="/assets/brand/logo.png"
            alt="Shree Sai Samarth Developers"
            width={162}
            height={50}
            loading="eager"
            decoding="async"
            className="h-[40px] md:h-[49px] w-auto object-contain drop-shadow-[0_4px_14px_rgba(200,155,74,0.45)]"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-[#C89B4A]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918787545154"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5A2328] to-[#C89B4A] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(200,155,74,0.6)] transition-all hover:shadow-[0_10px_30px_-6px_rgba(200,155,74,0.85)] hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> 8787545154
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-[rgba(56,189,248,0.18)] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+918787545154"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] px-5 py-3 text-sm font-semibold text-white shadow-gold"
            >
              <Phone className="h-4 w-4" /> Call 8787545154
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
