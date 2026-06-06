import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBadges } from "@/components/site/TrustBadges";
import { Founder } from "@/components/site/Founder";
import { Leadership } from "@/components/site/Leadership";
import { OfficeSection } from "@/components/site/OfficeSection";
import { About } from "@/components/site/About";
import { LayoutPlans } from "@/components/site/LayoutPlans";
import { BrochureSection } from "@/components/site/BrochureSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Highlights } from "@/components/site/Highlights";
import { Plots } from "@/components/site/Plots";
import { Location } from "@/components/site/Location";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { MapSection } from "@/components/site/MapSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Sai Samarth Developers | Premium NA Plots in Aurangabad" },
      { name: "description", content: "Buy premium AMRDA-approved residential & commercial NA plots from Shree Sai Samarth Developers. Clear title, wide roads, modern amenities — ready for registration." },
      { property: "og:title", content: "Shree Sai Samarth Developers | Premium NA Plots" },
      { property: "og:description", content: "AMRDA-approved residential & commercial NA plots in Shendra & Adgaon, Aurangabad. Clear title, ready registration, investment friendly." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Founder />
        <Leadership />
        <OfficeSection />
        <About />
        <LayoutPlans />
        <BrochureSection />
        <WhyChooseUs />
        <Highlights />
        <Plots />
        <Location />
        <Gallery />
        <Testimonials />
        <Faq />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
