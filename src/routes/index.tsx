import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import hardwareCloseup from "../assets/swastik-hardware-closeup.jpg";
import plywoodWorkshop from "../assets/swastik-plywood-workshop.jpg";
import showroom from "../assets/swastik-premium-showroom.jpg";
import { EnquiryPanel } from "../components/site/EnquiryPanel";
import { ProductCard } from "../components/site/ProductCard";
import { Section } from "../components/site/Section";
import { brandNames, company, productCategories, purchaseSteps, stats, strengths, testimonials } from "../data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastik & Company | Hardware, Plywood & Fittings" },
      { name: "description", content: "Premium hardware, plywood, laminates, modular kitchen fittings, glass systems and tools in Erode." },
      { property: "og:title", content: "Swastik & Company | Hardware, Plywood & Fittings" },
      { property: "og:description", content: "A refined one-stop destination for hardware, boards, fittings and tools in Erode." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="hero-field relative flex min-h-[620px] flex-col justify-between overflow-hidden rounded-xl p-7 text-primary-foreground shadow-premium sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-8 top-10 h-32 w-32 rounded-full border border-primary-foreground/15 animate-float" />
            <div className="reveal relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-foreground/60">Premium hardware destination • Erode</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-7xl">Hardware that makes every build feel considered.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">A more refined way to source door fittings, plywood, laminates, modular kitchen systems, glass hardware and industrial tools — all with trusted local guidance.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-copper px-6 text-sm font-bold text-copper-foreground shadow-premium transition-transform hover:-translate-y-0.5 focus-visible:outline-2">Explore products <ArrowRight className="h-4 w-4" /></Link>
                <a href={company.whatsapp} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-6 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2"><MessageCircle className="h-4 w-4" /> Enquire now</a>
              </div>
            </div>
            <div className="relative z-10 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex min-h-32 flex-col justify-center rounded-lg border border-primary-foreground/16 bg-primary-foreground/8 p-5 shadow-inset-line backdrop-blur sm:min-h-36">
                  <p className="font-display text-3xl font-black leading-none sm:text-4xl">{stat.value}</p>
                  <p className="mt-3 max-w-28 text-sm font-semibold leading-6 text-primary-foreground/68">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-border bg-card shadow-premium lg:min-h-[620px]">
            <img src={showroom} alt="Premium Swastik hardware showroom with door handles, plywood, glass fittings and tools" className="h-full w-full object-cover" width={1600} height={960} />
            <div className="absolute inset-x-5 bottom-5 rounded-lg border border-primary-foreground/18 bg-primary/82 p-5 text-primary-foreground shadow-premium backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/60">Signature sourcing desk</p>
              <p className="mt-2 text-2xl font-semibold">Retail, wholesale and project supply under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="flex w-max animate-marquee gap-10 text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">
          {[...productCategories, ...productCategories].map((item, index) => <span key={`${item.slug}-${index}`}>◆ {item.title}</span>)}
        </div>
      </div>

      <Section eyebrow="Product universe" title="Organized like a showroom, built like a supply partner." text="Every category is structured to help homeowners choose beautifully and contractors source quickly.">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <img src={hardwareCloseup} alt="Close-up of premium handles, lock cylinders and hinges on an industrial workbench" loading="lazy" width={1600} height={1100} className="h-80 w-full rounded-lg border border-border object-cover shadow-premium sm:h-96" />
          <img src={plywoodWorkshop} alt="Stacked plywood, laminates, aluminium profiles and contractor tools in a showroom workshop" loading="lazy" width={1400} height={1100} className="h-80 w-full rounded-lg border border-border object-cover shadow-premium sm:h-96" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </Section>

      <Section className="bg-secondary/45" eyebrow="Why choose us" title="A practical team, premium stock and the confidence of three decades." text="Swastik & Company combines showroom-level presentation with trade-level speed, clarity and reliability.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return <article key={strength.title} className="rounded-xl border border-border bg-card p-6 shadow-premium"><Icon className="h-9 w-9 text-copper" /><h3 className="mt-6 text-xl font-semibold">{strength.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{strength.text}</p></article>;
          })}
        </div>
      </Section>

      <Section eyebrow="Simple purchase flow" title="From requirement to ready stock — without confusion.">
        <div className="grid gap-4 md:grid-cols-4">
          {purchaseSteps.map((step, index) => <div key={step.title} className="rounded-lg border border-border bg-card p-6 shadow-premium"><div className="flex items-center justify-between gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-copper text-sm font-black text-copper-foreground">{index + 1}</span><span className="text-4xl" aria-hidden="true">{step.emoji}</span></div><p className="mt-6 text-lg font-black">{step.title}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p></div>)}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground" eyebrow="Trusted brands" title="The familiar names builders ask for, curated in one place." text="A brand wall for reliable hinges, boards, laminates, tools, adhesives, glass systems and bathroom fittings.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandNames.slice(0, 18).map((brand) => <div key={brand} className="rounded-lg border border-primary-foreground/12 bg-primary-foreground/8 px-4 py-5 text-center text-sm font-bold text-primary-foreground/86 shadow-inset-line">{brand}</div>)}
        </div>
      </Section>

      <Section eyebrow="Client words" title="Reliable stock. Honest guidance. Better project decisions.">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => <article key={testimonial.name} className="rounded-xl border border-border bg-card p-6 shadow-premium"><div className="flex gap-1 text-copper">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 text-sm leading-7 text-muted-foreground">“{testimonial.text}”</p><p className="mt-6 font-bold">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></article>)}
        </div>
      </Section>

      <Section className="pt-0" eyebrow="Enquiry" title="Need a product matched to your site?" text="Send the requirement and get a clear next step.">
        <EnquiryPanel />
      </Section>
    </main>
  );
}
