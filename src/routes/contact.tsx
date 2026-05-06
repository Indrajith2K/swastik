import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
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
    <main className="bg-zinc-50 pb-24">
      {/* Hero Section for Contact */}
      <section className="bg-zinc-950 px-6 py-32 text-center text-white sm:px-12 lg:px-24 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">Contact Us</span>
          <h1 className="font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Let's source the right <br />
            <span className="text-zinc-500">hardware for your next project.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Call, WhatsApp or send an enquiry with your category, quantity and requirement details. Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="group rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl shadow-zinc-200/50 transition-all hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 transition-colors group-hover:bg-amber-100">
                <Phone className="h-8 w-8 text-zinc-950 transition-colors group-hover:text-amber-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Call Us</p>
              <p className="mt-4 font-display text-2xl font-bold text-zinc-950">{company.phone}</p>
            </a>
            
            <a href={company.whatsapp} className="group rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl shadow-zinc-200/50 transition-all hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 transition-colors group-hover:bg-amber-100">
                <MessageCircle className="h-8 w-8 text-zinc-950 transition-colors group-hover:text-amber-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">WhatsApp</p>
              <p className="mt-4 font-display text-2xl font-bold text-zinc-950">Chat now</p>
            </a>
            
            <div className="rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl shadow-zinc-200/50">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50">
                <MapPin className="h-8 w-8 text-zinc-950" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Location</p>
              <p className="mt-4 font-display text-2xl font-bold text-zinc-950">{company.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="px-6 pb-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <EnquiryPanel />
        </div>
      </section>
    </main>
  );
}
