import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import hardwareCloseup from "../assets/hardware-collection.png";
import plywoodWorkshop from "../assets/modular-kitchen.png";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import { ProductCard } from "../components/site/ProductCard";
import { productCategories } from "../data/site";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products | Premium Hardware, Plywood, Kitchen & Tools" },
    { name: "description", content: "Explore door hardware, plywood, laminates, modular kitchen fittings, bathroom glass, tools and sliding aluminium systems." },
    { property: "og:title", content: "Products | Swastik & Company" },
    { property: "og:description", content: "Premium categories for hardware, boards, kitchen fittings, glass systems and tools in Erode." },
  ] }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="bg-zinc-50 pb-24">
      {/* Hero Section for Products */}
      <section className="bg-zinc-950 px-6 py-32 text-center text-white sm:px-12 lg:px-24 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block text-xs font-bold uppercase tracking-widest text-amber-500">Product Catalogue</span>
          <h1 className="font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            A modular catalogue for <br />
            <span className="text-zinc-500">every build stage.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            From the first plywood board to the final handle finish, each range is organized so you can compare, select and source faster.
          </p>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="-mt-32 mb-20 grid gap-8 lg:grid-cols-2">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
              <img src={hardwareCloseup} alt="Premium door handles, lock cylinders, hinges" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl lg:mt-16">
              <img src={plywoodWorkshop} alt="Plywood sheets, laminates, kitchen" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
        </div>
      </section>

      {/* Selection Support */}
      <section className="bg-white px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">Selection Support</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Expert Guidance</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">Share the usage, surface, budget and quantity. Our team can guide practical options for homes, workshops and construction sites.</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {["Residential Interiors", "Contractor Bulk Supply", "Architectural Finishing"].map((item) => (
              <article key={item} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center shadow-xl shadow-zinc-200/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-200">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950">{item}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">Curated recommendations across strength, design, durability and availability.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Panel */}
      <section className="px-6 pt-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">Request Availability</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">Get a product check before you visit.</h2>
          </div>
          <EnquiryPanel />
        </div>
      </section>
    </main>
  );
}
