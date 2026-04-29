import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, Menu, MessageCircle, Phone } from "lucide-react";
import { company, navItems } from "../../data/site";

export function SiteShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="Swastik & Company home">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-lg font-black text-primary-foreground shadow-premium transition-transform group-hover:-rotate-3">S</span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold">Swastik</span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">& Company</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground lg:flex">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="premium-link" activeProps={{ className: "text-foreground" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2">
              <Phone className="h-4 w-4 text-copper" /> Call
            </a>
            <a href={company.whatsapp} className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground shadow-premium transition-transform hover:-translate-y-0.5 focus-visible:outline-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <Link to="/contact" className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden" aria-label="Open contact page">
            <Menu className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
          <div>
            <p className="font-display text-3xl font-semibold">Swastik & Company</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">Premium hardware, plywood, laminates, kitchen fittings, glass systems and industrial tools for homes, contractors and builders across Erode.</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground/55">Pages</p>
            <div className="mt-4 grid gap-3 text-sm text-primary-foreground/80">
              {navItems.map((item) => <Link key={item.to} to={item.to} className="hover:text-primary-foreground">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground/55">Enquiry</p>
            <a href={company.whatsapp} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground hover:underline">Chat on WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
            <p className="mt-4 text-sm text-primary-foreground/70">{company.location}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
