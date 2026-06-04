import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the plot registration process?", a: "Once you confirm a plot, we prepare the sale deed, complete the agreement, and register the plot at the Sub-Registrar's office in your name. Our legal team handles documentation end-to-end." },
  { q: "Is bank loan available on these plots?", a: "Yes. As all plots are NA & AMRDA approved with clear titles, you can avail home loans from leading nationalized and private banks." },
  { q: "What plot dimensions are available?", a: "We offer 800, 1000 and 1200 Sq Ft plots as standard. Custom sizes from 800 to 7000 Sq Ft are available on request based on your budget." },
  { q: "Can I schedule a site visit?", a: "Absolutely. Call or WhatsApp us on 8787545154 and we'll arrange a free guided site visit at your preferred time." },
  { q: "Where exactly is the project located?", a: "Gat No. 203, Shendra Jahagir, Tq. & Dist. Aurangabad — adjacent to Shendra MIDC Smart City Nagar, just off the 150 Ft road and 80 Ft Aurangabad–Jalna road." },
  { q: "Is the project legally approved?", a: "Yes. The layout is NA-44 sanctioned and AMRDA approved with clear title — fully ready for registration." },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Common <span className="text-gradient-warm">questions</span></h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
