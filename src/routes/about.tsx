import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import showroom from "../assets/hero-showroom.png";
import { stats, strengths } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Swastik & Company | 30+ Years in Erode" },
    { name: "description", content: "Learn about Swastik & Company, a trusted Erode supplier for hardware, plywood, laminates, fittings and tools." },
    { property: "og:title", content: "About Swastik & Company" },
    { property: "og:description", content: "Three decades of trusted hardware and building material supply in Erode." },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-zinc-50 pb-24">
      {/* Hero Section for About */}
      <section className="bg-zinc-950 px-6 py-32 text-center text-white sm:px-12 lg:px-24 lg:py-48">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">About Our Journey</span>
          <h1 className="font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Powering today's work, <br />
            <span className="text-zinc-500">building tomorrow's interiors.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Swastik & Company has grown as a trusted destination for homeowners, contractors, dealers and builders who need dependable material, practical guidance and consistent stock.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <img src={showroom} alt="Swastik and Company showroom concept" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/50 transition-transform hover:-translate-y-2">
                  <p className="font-display text-5xl font-black text-zinc-950">{stat.value}</p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-widest text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-zinc-100 px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">Vision & Mission</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">A supplier you can return to with confidence.</h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 bg-white p-12 shadow-xl shadow-zinc-200/50 transition-shadow hover:shadow-2xl">
              <h2 className="font-display text-3xl font-bold text-zinc-950">Our Vision</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                To become the most trusted and preferred hardware and plywood supplier in Tamil Nadu through quality, clarity and reliable service.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-950 p-12 text-white shadow-xl shadow-zinc-900/20 transition-shadow hover:shadow-2xl">
              <h2 className="font-display text-3xl font-bold text-white">Our Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                To provide high-quality products, excellent service and long-term value for every customer, from small home upgrades to large trade requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">What makes us different</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Premium feel, grounded trade expertise.</h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength) => { 
              const Icon = strength.icon; 
              return (
                <article key={strength.title} className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-200">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 transition-colors group-hover:bg-amber-50">
                    <Icon className="h-8 w-8 text-zinc-950 transition-colors group-hover:text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">{strength.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">{strength.text}</p>
                </article>
              ); 
            })}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/20">
              Start an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
