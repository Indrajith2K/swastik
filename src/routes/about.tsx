import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import showroom from "../assets/swastik-premium-showroom.jpg";
import { Section } from "../components/site/Section";
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
    <main>
      <Section eyebrow="About us" title="Powering today’s work, building tomorrow’s interiors." text="Swastik & Company has grown as a trusted destination for homeowners, contractors, dealers and builders who need dependable material, practical guidance and consistent stock.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <img src={showroom} alt="Swastik and Company showroom concept" loading="lazy" width={1600} height={960} className="rounded-xl border border-border shadow-premium" />
          <div className="grid gap-4">
            {stats.map((stat) => <div key={stat.label} className="rounded-xl border border-border bg-card p-6 shadow-premium"><p className="font-display text-5xl font-semibold text-copper">{stat.value}</p><p className="mt-2 font-bold">{stat.label}</p></div>)}
          </div>
        </div>
      </Section>
      <Section className="bg-secondary/45" eyebrow="Vision & mission" title="A supplier customers can return to with confidence.">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-8 shadow-premium"><h2 className="font-display text-4xl font-semibold">Our Vision</h2><p className="mt-5 leading-8 text-muted-foreground">To become the most trusted and preferred hardware and plywood supplier in Tamil Nadu through quality, clarity and reliable service.</p></article>
          <article className="rounded-xl border border-border bg-card p-8 shadow-premium"><h2 className="font-display text-4xl font-semibold">Our Mission</h2><p className="mt-5 leading-8 text-muted-foreground">To provide high-quality products, excellent service and long-term value for every customer, from small home upgrades to large trade requirements.</p></article>
        </div>
      </Section>
      <Section eyebrow="What makes us different" title="Premium feel, grounded trade expertise.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((strength) => { const Icon = strength.icon; return <article key={strength.title} className="rounded-xl border border-border bg-card p-6 shadow-premium"><Icon className="h-9 w-9 text-copper" /><h3 className="mt-6 text-xl font-semibold">{strength.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{strength.text}</p></article>; })}
        </div>
        <Link to="/contact" className="mt-10 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-transform hover:-translate-y-0.5">Start an enquiry <ArrowRight className="h-4 w-4" /></Link>
      </Section>
    </main>
  );
}
