import { Phone, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/918787545154?text=Hello%20Shri%20Sai%20Samarth%20Developers%2C%20I%27m%20interested%20in%20your%20NA%20plots.";

export function FloatingActions() {
  return (
    <>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-float items-center justify-center rounded-full text-white shadow-luxe transition-transform hover:scale-110"
        style={{ background: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>
      <a
        href="tel:+918787545154"
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground shadow-luxe transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
