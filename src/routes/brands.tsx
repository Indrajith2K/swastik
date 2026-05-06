import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { brandNames } from "../data/site";

export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [
    { title: "Brands | Trusted Hardware & Interior Brands" },
    { name: "description", content: "Explore trusted brands available through Swastik & Company for hardware, plywood, fittings, tools and interior solutions." },
    { property: "og:title", content: "Brands | Swastik & Company" },
    { property: "og:description", content: "A premium brand wall of trusted hardware, plywood, fitting and tool names." },
  ] }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <main className="bg-zinc-50 pb-24">
      {/* Hero Section for Brands */}
      <section className="bg-zinc-950 px-6 py-32 text-center text-white sm:px-12 lg:px-24 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">Trusted Partners</span>
          <h1 className="font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Names builders recognize. <br />
            <span className="text-zinc-500">Quality customers can feel.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            We work exclusively with dependable brands across security hardware, kitchen systems, plywood, laminates, tools, adhesives, glass and bathroom fittings.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brandNames.map((brand) => (
              <div key={brand} className="flex h-32 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-lg shadow-zinc-200/50 transition-all hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl">
                <span className="font-display text-lg font-bold tracking-wide text-zinc-950">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="bg-zinc-950 px-6 py-32 text-white sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">The Brand Promise</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Every recommendation balances finish, function and after-use reliability.</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Durability First" }, { icon: Sparkles, title: "Finish Conscious" }, { icon: Award, title: "Trade Trusted" }].map((item) => { 
              const Icon = item.icon; 
              return (
                <article key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center transition-all hover:bg-zinc-800/80">
                  <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800">
                    <Icon className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">Products are selected to suit real site conditions, design intent and long-term use.</p>
                </article>
              ); 
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
