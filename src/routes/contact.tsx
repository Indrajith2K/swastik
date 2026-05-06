import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import heroBg from "../assets/hero-showroom.png";
import { company } from "../data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="font-sans text-stone-800 bg-white pb-0">
      
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contact Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#cca65c]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide uppercase">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-white/90 font-medium max-w-xl mx-auto">
            Let's source the right hardware for your next project. Call, WhatsApp or send an enquiry.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="group rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-md transition-all hover:-translate-y-2 hover:border-[#cca65c] hover:shadow-xl">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-[#f9f7f2] border border-stone-100 transition-colors group-hover:bg-[#cca65c] group-hover:border-[#cca65c]">
                <Phone className="h-8 w-8 text-[#cca65c] transition-colors group-hover:text-white" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Call Us</p>
              <p className="mt-4 font-display text-2xl font-bold text-stone-800">{company.phone}</p>
            </a>
            
            <a href={company.whatsapp} className="group rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-md transition-all hover:-translate-y-2 hover:border-[#cca65c] hover:shadow-xl">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-[#f9f7f2] border border-stone-100 transition-colors group-hover:bg-[#cca65c] group-hover:border-[#cca65c]">
                <MessageCircle className="h-8 w-8 text-[#cca65c] transition-colors group-hover:text-white" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">WhatsApp</p>
              <p className="mt-4 font-display text-2xl font-bold text-stone-800">Chat now</p>
            </a>
            
            <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-md">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-[#f9f7f2] border border-stone-100">
                <MapPin className="h-8 w-8 text-[#cca65c]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Location</p>
              <p className="mt-4 font-display text-2xl font-bold text-stone-800">{company.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────────────── */}
      <section className="bg-[#f9f7f2] py-24 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[#cca65c] text-sm font-bold tracking-widest uppercase">Direct Message</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-stone-800">Drop your requirements below.</h2>
          </div>
          <EnquiryPanel />
        </div>
      </section>
      
    </main>
  );
}
