import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  requirement: z.string().trim().min(2, "Select a plot requirement").max(60),
  message: z.string().trim().max(500).optional(),
});

const REQ_OPTIONS = ["800 Sq Ft", "1000 Sq Ft", "1200 Sq Ft", "Custom Size", "Site Visit Booking"];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      mobile: String(form.get("mobile") ?? ""),
      requirement: String(form.get("requirement") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});

    // store lead locally
    try {
      const key = "sss_leads";
      const prev = JSON.parse(localStorage.getItem(key) ?? "[]");
      prev.push({ ...parsed.data, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
    } catch { /* noop */ }

    const text =
      `*New Plot Enquiry*%0A` +
      `Name: ${encodeURIComponent(parsed.data.name)}%0A` +
      `Mobile: ${encodeURIComponent(parsed.data.mobile)}%0A` +
      `Requirement: ${encodeURIComponent(parsed.data.requirement)}%0A` +
      `Message: ${encodeURIComponent(parsed.data.message ?? "-")}`;
    setSent(true);
    window.open(`https://wa.me/918787545154?text=${text}`, "_blank", "noopener");
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get in touch</div>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Book a <span className="text-gradient-warm">free site visit</span></h2>
            <p className="mt-5 max-w-md text-muted-foreground md:text-lg">
              Share a few details and our team will reach out within minutes on WhatsApp with availability, pricing and site visit slots.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem icon={Phone} label="Call us" value="+91 8787545154" href="tel:+918787545154" />
              <ContactItem icon={MessageCircle} label="WhatsApp" value="+91 8787545154" href="https://wa.me/918787545154" />
              <ContactItem icon={Mail} label="Email" value="info@shrisaisamarthdevelopers.in" href="mailto:info@shrisaisamarthdevelopers.in" />
              <ContactItem icon={MapPin} label="Site Address" value="Gat No. 203, Shendra Jahagir, Aurangabad" href="https://www.google.com/maps/dir/?api=1&destination=Shendra+Jahagir+Aurangabad" />
            </div>
          </div>

          <form
            onSubmit={handle}
            className="rounded-3xl border border-border bg-card p-6 shadow-luxe md:p-9"
          >
            <h3 className="font-display text-2xl font-semibold">Plot Enquiry Form</h3>
            <p className="mt-1 text-sm text-muted-foreground">All enquiries are sent directly to our WhatsApp.</p>

            <div className="mt-6 space-y-4">
              <Field name="name" label="Full Name" placeholder="Your name" error={errors.name} />
              <Field name="mobile" label="Mobile Number" placeholder="10-digit mobile" inputMode="numeric" error={errors.mobile} />
              <div>
                <label className="mb-1.5 block text-sm font-medium">Plot Requirement</label>
                <select
                  name="requirement"
                  defaultValue=""
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>Select size</option>
                  {REQ_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.requirement && <p className="mt-1 text-xs text-destructive">{errors.requirement}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message <span className="text-muted-foreground">(optional)</span></label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us more about your requirement"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:scale-[1.02]"
              >
                {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                {sent ? "Sent — Continue on WhatsApp" : "Send Enquiry on WhatsApp"}
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By submitting you agree to be contacted regarding your enquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, error, ...rest
}: { name: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:shadow-luxe"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground shadow-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}
