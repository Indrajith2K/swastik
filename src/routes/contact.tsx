import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import { Section } from "../components/site/Section";
import { company } from "../data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Swastik & Company | Hardware Enquiry" },
    { name: "description", content: "Contact Swastik & Company in Erode for hardware, plywood, laminates, fittings, tools and project enquiries." },
    { property: "og:title", content: "Contact Swastik & Company" },
    { property: "og:description", content: "Send a fast enquiry for hardware, plywood, fittings and tools in Erode." },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="Let’s source the right hardware for your next project." text="Call, WhatsApp or send the enquiry form with your category, quantity and requirement details.">
        <div className="grid gap-5 lg:grid-cols-3">
          <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="rounded-xl border border-border bg-card p-6 shadow-premium transition-transform hover:-translate-y-1"><Phone className="h-8 w-8 text-copper" /><p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Call</p><p className="mt-2 text-xl font-semibold">{company.phone}</p></a>
          <a href={company.whatsapp} className="rounded-xl border border-border bg-card p-6 shadow-premium transition-transform hover:-translate-y-1"><MessageCircle className="h-8 w-8 text-copper" /><p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">WhatsApp</p><p className="mt-2 text-xl font-semibold">Chat now</p></a>
          <div className="rounded-xl border border-border bg-card p-6 shadow-premium"><MapPin className="h-8 w-8 text-copper" /><p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Location</p><p className="mt-2 text-xl font-semibold">{company.location}</p></div>
        </div>
      </Section>
      <Section className="pt-0" eyebrow="Enquiry form" title="Send a requirement.">
        <EnquiryPanel />
      </Section>
    </main>
  );
}
