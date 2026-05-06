import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import heroBg from "../assets/hero-showroom.png";
import { brandNames } from "../data/site";

export const Route = createFileRoute("/brands")({
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <main className="font-sans text-stone-800 bg-white pb-0">
      
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Brands Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#cca65c]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-white/80">Trusted Partners</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide">
            OUR BRANDS
          </h1>
          <p className="mt-4 text-lg text-white/90 font-medium max-w-xl mx-auto">
            Names builders recognize. Quality customers can feel.
          </p>
        </div>
      </section>

      {/* ── BRANDS GRID ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-800">Dependable Across Every Build</h2>
            <p className="mt-4 text-stone-500 leading-relaxed">
              We work exclusively with dependable brands across security hardware, kitchen systems, plywood, laminates, tools, adhesives, glass and bathroom fittings.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brandNames.map((brand) => (
              <div key={brand} className="flex h-32 items-center justify-center rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#cca65c] hover:shadow-lg">
                <span className="font-display text-lg font-bold tracking-wide text-stone-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND PROMISE ──────────────────────────────────────── */}
      <section className="bg-[#f9f7f2] border-y border-stone-200 py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#cca65c] text-sm font-bold tracking-widest uppercase">The Brand Promise</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-stone-800">
              Every recommendation balances finish, function and after-use reliability.
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Durability First" }, { icon: Sparkles, title: "Finish Conscious" }, { icon: Award, title: "Trade Trusted" }].map((item) => { 
              const Icon = item.icon; 
              return (
                <article key={item.title} className="rounded-xl border border-stone-200 bg-white p-10 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-[#f9f7f2] border border-stone-100 shadow-sm">
                    <Icon className="h-8 w-8 text-[#cca65c]" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone-500">Products are selected to suit real site conditions, design intent and long-term use.</p>
                </article>
              ); 
            })}
          </div>
        </div>
      </section>
      
    </main>
  );
}
