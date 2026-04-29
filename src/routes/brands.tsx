import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "../components/site/Section";
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
    <main>
      <Section eyebrow="Trusted brands" title="Names builders recognize. Quality customers can feel." text="The store works with dependable brands across security hardware, kitchen systems, plywood, laminates, tools, adhesives, glass and bathroom fittings.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandNames.map((brand) => <div key={brand} className="rounded-lg border border-border bg-card px-4 py-6 text-center text-sm font-bold shadow-premium transition-transform hover:-translate-y-1">{brand}</div>)}
        </div>
      </Section>
      <Section className="bg-primary text-primary-foreground" eyebrow="Brand promise" title="Every recommendation balances finish, function and after-use reliability.">
        <div className="grid gap-5 md:grid-cols-3">
          {[{ icon: ShieldCheck, title: "Durability first" }, { icon: Sparkles, title: "Finish conscious" }, { icon: Award, title: "Trade trusted" }].map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-xl border border-primary-foreground/12 bg-primary-foreground/8 p-6 shadow-inset-line"><Icon className="h-9 w-9 text-copper" /><h3 className="mt-6 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/72">Products are selected to suit real site conditions, design intent and long-term use.</p></article>; })}
        </div>
      </Section>
    </main>
  );
}
