import { Link, Outlet } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navItems } from "../../data/site";

export function SiteShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-950 selection:bg-zinc-900 selection:text-white">
      {/* HEADER */}
      <header className={`fixed left-0 top-0 z-50 flex w-full justify-center transition-all duration-500 ${isScrolled ? "px-4 pt-4 sm:px-6" : "px-0 pt-0"}`}>
        <div 
          className={`relative w-full transition-all duration-500 ${
            isScrolled 
              ? "max-w-5xl rounded-full border border-white/20 bg-white/70 shadow-2xl shadow-zinc-900/10 backdrop-blur-2xl" 
              : "max-w-full rounded-none border-b border-zinc-200/50 bg-white/90 shadow-none backdrop-blur-xl"
          }`}
        >
          <div 
            className={`mx-auto flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-16 px-3 sm:px-4" : "h-20 max-w-7xl px-6 sm:px-12 lg:px-24"
            }`}
          >
            <Link to="/" className="group flex items-center gap-3 pl-2 outline-none" aria-label="Swastik & Company home" onClick={() => setIsMobileMenuOpen(false)}>
              <div className={`flex items-center justify-center bg-zinc-950 font-display font-black text-white shadow-lg transition-all duration-500 group-hover:scale-105 ${isScrolled ? "h-10 w-10 rounded-full text-lg" : "h-10 w-10 rounded-xl text-lg"}`}>S</div>
              <span className="hidden leading-none sm:block">
                <span className={`block font-display font-bold tracking-tight text-zinc-950 transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl"}`}>Swastik & Co.</span>
              </span>
            </Link>
            
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link 
                  key={item.to} 
                  to={item.to} 
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                  activeProps={{ className: "bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-200/50" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 sm:flex">
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className={`inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105 ${isScrolled ? "h-10" : "h-12"}`}>
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>

            <button 
              className={`inline-flex items-center justify-center rounded-full bg-zinc-100 text-zinc-950 transition-colors hover:bg-zinc-200 lg:hidden ${isScrolled ? "h-10 w-10" : "h-12 w-12"}`} 
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full mt-4 w-full rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl shadow-zinc-900/10 backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item.to} 
                  to={item.to} 
                  className="rounded-2xl px-5 py-4 text-base font-bold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                  activeProps={{ className: "bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-200/50" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 pt-4">
                <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-zinc-950 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105">
                  <Phone className="h-5 w-5" /> Call Us Now
                </a>
                <a href={company.whatsapp} className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-green-500 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-display text-3xl font-black tracking-tight text-white">Swastik & Co.</span>
              </Link>
              <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
                Erode's premier destination for high-end architectural hardware, plywood, laminates, and modular kitchen systems. Supplying excellence since 1994.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={company.whatsapp} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-amber-500 hover:text-zinc-950">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Navigation</h4>
              <ul className="mt-6 grid gap-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm font-medium text-zinc-300 transition-colors hover:text-amber-500" onClick={() => window.scrollTo(0, 0)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contact</h4>
              <ul className="mt-6 grid gap-4 text-sm text-zinc-300">
                <li><span className="block text-zinc-500">Phone</span> <a href={`tel:${company.phone}`} className="hover:text-amber-500">{company.phone}</a></li>
                <li><span className="block text-zinc-500">Email</span> <a href={`mailto:${company.email}`} className="hover:text-amber-500">{company.email}</a></li>
                <li><span className="block text-zinc-500">Location</span> {company.address}</li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between border-t border-zinc-900 pt-8 sm:flex-row">
            <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Swastik & Company. All rights reserved.</p>
            <p className="mt-4 text-xs text-zinc-500 sm:mt-0">Premium Hardware & Boards</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
