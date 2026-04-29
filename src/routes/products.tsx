import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import hardwareCloseup from "../assets/swastik-hardware-closeup.jpg";
import plywoodWorkshop from "../assets/swastik-plywood-workshop.jpg";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import { ProductCard } from "../components/site/ProductCard";
import { Section } from "../components/site/Section";
import { productCategories } from "../data/site";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products | Hardware, Plywood, Kitchen & Tools" },
    { name: "description", content: "Explore door hardware, plywood, laminates, modular kitchen fittings, bathroom glass, tools and sliding aluminium systems." },
    { property: "og:title", content: "Products | Swastik & Company" },
    { property: "og:description", content: "Premium categories for hardware, boards, kitchen fittings, glass systems and tools in Erode." },
  ] }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main>
      <Section eyebrow="Product catalogue" title="A modular catalogue for every build stage." text="From the first plywood board to the final handle finish, each range is organized so you can compare, select and source faster.">
        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          <img src={hardwareCloseup} alt="Premium door handles, lock cylinders, hinges and channels displayed on a dark workbench" loading="lazy" width={1600} height={1100} className="h-80 w-full rounded-lg border border-border object-cover shadow-premium" />
          <img src={plywoodWorkshop} alt="Plywood sheets, laminates, aluminium profiles and measuring tools in a hardware showroom" loading="lazy" width={1400} height={1100} className="h-80 w-full rounded-lg border border-border object-cover shadow-premium" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </Section>
      <Section className="bg-secondary/45" eyebrow="Selection support" title="Not sure which grade, finish or fitting works best?" text="Share the usage, surface, budget and quantity. The team can guide practical options for homes, workshops and construction sites.">
        <div className="grid gap-5 lg:grid-cols-3">
          {["Residential interiors", "Contractor bulk supply", "Architectural finishing"].map((item) => <article key={item} className="rounded-xl border border-border bg-card p-6 shadow-premium"><CheckCircle2 className="h-8 w-8 text-copper" /><h3 className="mt-5 text-xl font-semibold">{item}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Curated recommendations across strength, design, durability and availability.</p></article>)}
        </div>
      </Section>
      <Section eyebrow="Request availability" title="Get a product check before you visit.">
        <EnquiryPanel />
      </Section>
    </main>
  );
}
