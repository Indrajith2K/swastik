import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import hardwareCloseup from "../assets/hardware-collection.png";
import plywoodWorkshop from "../assets/modular-kitchen.png";
import heroBg from "../assets/hero-showroom.png";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import { ProductCard } from "../components/site/ProductCard";
import { productCategories } from "../data/site";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="bg-white pb-24 font-sans text-stone-800">
      
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Products Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#cca65c]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-white/80">Product Catalogue</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide">
            OUR PRODUCTS
          </h1>
          <p className="mt-4 text-lg text-white/90 font-medium max-w-xl mx-auto">
            A modular catalogue for every build stage. Organized so you can compare, select, and source faster.
          </p>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="-mt-24 mb-20 grid gap-8 lg:grid-cols-2 relative z-20">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img src={hardwareCloseup} alt="Premium door handles" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border-4 border-white lg:mt-16">
              <img src={plywoodWorkshop} alt="Plywood sheets" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
        </div>
      </section>

      {/* Selection Support */}
      <section className="bg-[#f9f7f2] border-y border-stone-200 px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#cca65c] text-sm font-bold tracking-widest uppercase">Selection Support</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-stone-800">Expert Guidance</h2>
            <p className="mt-4 text-stone-500 leading-relaxed">Share the usage, surface, budget and quantity. Our team can guide practical options for homes, workshops and construction sites.</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {["Residential Interiors", "Contractor Bulk Supply", "Architectural Finishing"].map((item) => (
              <article key={item} className="rounded-xl border border-stone-200 bg-white p-10 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#f9f7f2] border border-stone-100 text-[#cca65c] shadow-sm">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-stone-800">{item}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">Curated recommendations across strength, design, durability and availability.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Panel */}
      <section className="bg-white px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[#cca65c] text-sm font-bold tracking-widest uppercase">Request Availability</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-stone-800">Get a product check before you visit.</h2>
          </div>
          <EnquiryPanel />
        </div>
      </section>
    </main>
  );
}
