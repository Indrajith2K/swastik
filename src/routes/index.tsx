import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Quote, Send, Star, TrendingUp, Award, ShieldCheck } from "lucide-react";
import heroShowroom from "../assets/hero-showroom.png";
import hardwareCollection from "../assets/hardware-collection.png";
import modularKitchen from "../assets/modular-kitchen.png";
import { company, productCategories, testimonials } from "../data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastik & Company | Premium Hardware & Plywood in Erode" },
      { name: "description", content: "30+ years of trusted hardware, plywood, laminates, modular kitchen & glass fittings. 5000+ products. Serving Erode's top builders & contractors." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "30+", label: "Years of Excellence", icon: TrendingUp },
  { value: "5000+", label: "Premium Products", icon: CheckCircle2 },
  { value: "250+", label: "Happy Clients", icon: Star },
  { value: "4.9★", label: "Builder Rating", icon: Star },
];

const trustBadges = [
  "Godrej Authorized", "Hettich Partner", "Hafele Dealer", "Greenply Stock",
  "CenturyPly Distributor", "Saint-Gobain Glass",
];

const whyUs = [
  {
    number: "01",
    title: "Widest Selection",
    desc: "5000+ SKUs across door hardware, plywood, laminates, kitchen systems, glass and tools — all under one roof.",
  },
  {
    number: "02",
    title: "Verified Quality",
    desc: "Only branded, certified materials from Godrej, Hettich, Hafele, Greenply and 20+ trusted manufacturers.",
  },
  {
    number: "03",
    title: "Trade & Retail Pricing",
    desc: "Transparent pricing for homeowners, architects, contractors and bulk project requirements.",
  },
  {
    number: "04",
    title: "Expert Guidance",
    desc: "30 years of field knowledge. We match the right product to your budget, site and timeline.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* ── ANNOUNCEMENT BAR ─────────────────────────────── */}
      <div className="bg-zinc-950 px-4 py-3 text-center text-sm font-medium tracking-wide text-zinc-300">
        <span className="relative mr-3 inline-block h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
        </span>
        Now serving bulk project orders across Erode, Namakkal & Coimbatore — 
        <a href={company.whatsapp} className="ml-2 font-semibold text-amber-500 hover:text-amber-400 hover:underline transition-colors">
          Get a quote →
        </a>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img src={heroShowroom} alt="Premium Showroom" className="h-full w-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-medium tracking-wide text-amber-500 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Trusted by 250+ top builders in Tamil Nadu
            </div>
            
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Elevating Spaces with <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Premium Hardware</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Discover unparalleled quality in door fittings, plywood, laminates, and modular kitchen systems. Backed by 30 years of excellence.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="/products" className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold tracking-wide text-zinc-950 transition-all hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]">
                Explore Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={company.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white">
                <MessageCircle className="h-4 w-4" /> Expert Consultation
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800/60 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-white lg:text-4xl">{s.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST LOGOS RIBBON ───────────────────────────── */}
      <div className="border-b border-zinc-200 bg-white py-12">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Authorized Dealer & Partner For</p>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...trustBadges, ...trustBadges, ...trustBadges].map((b, i) => (
              <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest text-zinc-800/40 transition-colors hover:text-zinc-800">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORIES GRID ──────────────────────────────── */}
      <section className="bg-zinc-50 px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">Our Collections</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Curated for Excellence</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">Explore our comprehensive range of premium building materials and architectural hardware.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link to="/products" key={cat.slug} className="group relative overflow-hidden rounded-3xl bg-zinc-950 p-10 text-white shadow-2xl shadow-zinc-950/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-amber-500/10">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-zinc-900 transition-transform duration-700 group-hover:scale-[2.5] group-hover:bg-zinc-900/50" />
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-amber-500 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-zinc-950">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-display text-6xl font-black text-zinc-800 transition-colors duration-500 group-hover:text-zinc-800/50">0{i + 1}</span>
                  </div>
                  
                  <h3 className="relative z-10 mt-12 font-display text-2xl font-bold tracking-wide text-white">{cat.title}</h3>
                  <p className="relative z-10 mt-4 text-sm leading-relaxed text-zinc-400">{cat.summary}</p>
                  
                  <div className="relative z-10 mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-500 transition-transform group-hover:translate-x-2">
                    Explore Range <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT / FEATURE SPLIT ────────────────────────── */}
      <section className="bg-zinc-950 px-6 py-32 text-white sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <img src="https://img1.wsimg.com/isteam/ip/05b2828b-df96-46c1-9c7a-7870b6519c5e/Gemini_Generated_Image_qfzbnbqfzbnbqfzb.png" alt="Hardware Collection" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <div className="absolute -bottom-8 -right-8 rounded-2xl bg-amber-500 p-8 shadow-2xl">
                <p className="font-display text-5xl font-black text-zinc-950">30+</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-900">Years of Trust</p>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">About Swastik & Company</span>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">The Foundation of <br/><span className="text-zinc-500">Beautiful Spaces</span></h2>
              
              <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                Since 1994, we have been the silent strength behind Erode's most stunning architectural projects. We supply uncompromising quality in hardware and materials to builders who demand the very best.
              </p>
              
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <ShieldCheck className="mb-4 h-8 w-8 text-amber-500" />
                  <h4 className="text-lg font-bold">Unrivaled Quality</h4>
                  <p className="mt-2 text-sm text-zinc-500">Partnering exclusively with globally recognized, certified manufacturers.</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <Award className="mb-4 h-8 w-8 text-amber-500" />
                  <h4 className="text-lg font-bold">Expert Curation</h4>
                  <p className="mt-2 text-sm text-zinc-500">Every product in our 5000+ SKU inventory is hand-selected for durability and aesthetics.</p>
                </div>
              </div>
              
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center gap-2 border-b-2 border-amber-500 pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-amber-500">
                  Discover Our Journey <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-white px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">Client Voices</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Trusted by Professionals</h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="relative rounded-3xl border border-zinc-100 bg-zinc-50 p-10 transition-shadow hover:shadow-xl">
                <Quote className="absolute right-10 top-10 h-12 w-12 text-zinc-200" />
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="mb-8 text-lg leading-relaxed text-zinc-700">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-lg font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-950">{t.name}</h4>
                    <p className="text-sm font-medium text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY ──────────────────────────────────────── */}
      <section className="bg-zinc-50 px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-zinc-950 overflow-hidden shadow-2xl lg:flex">
          <div className="relative p-12 lg:w-5/12 lg:p-20">
            <div className="absolute inset-0 z-0">
              <img src={modularKitchen} alt="Modular Kitchen" className="h-full w-full object-cover opacity-20 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-950/80" />
            </div>
            <div className="relative z-10 text-white">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">Get in Touch</span>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Ready to upgrade your space?</h2>
              <p className="mt-6 text-lg text-zinc-400">Our experts are ready to assist you with product selection, bulk pricing, and technical details.</p>
              
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Call Us</p>
                    <p className="font-bold">{company.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                    <MessageCircle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">WhatsApp</p>
                    <p className="font-bold">Chat with our team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-12 lg:w-7/12 lg:p-20">
            <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">Full Name</label>
                  <input type="text" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" placeholder="John Doe" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">Phone Number</label>
                  <input type="tel" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">Interest Area</label>
                <select className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10">
                  <option>Select a category</option>
                  {productCategories.map(c => <option key={c.slug}>{c.title}</option>)}
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 py-4 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/20">
                Send Request <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── STICKY WHATSAPP FLOAT ────────────────────────── */}
      <a href={company.whatsapp} className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition-transform hover:scale-110" aria-label="Chat on WhatsApp">
        <MessageCircle className="h-8 w-8" />
      </a>

    </main>
  );
}

