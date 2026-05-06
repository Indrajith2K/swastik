import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Menu, MessageCircle, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/Swastik-logo.png";
import { company, navItems } from "../../data/site";

export function SiteShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#Fcfbf9] font-sans text-[#2a2824] selection:bg-[#cca65c] selection:text-white">
      {/* ULTRA-PREMIUM NAVBAR */}
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl border-stone-200/50 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.03)]" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 lg:px-16">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-4 outline-none" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-sm flex items-center justify-center border border-stone-100 transition-transform duration-700 group-hover:scale-105 group-hover:shadow-md">
              <img src={logo} alt="Swastik & Company Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className={`font-display tracking-[0.1em] font-bold uppercase transition-colors duration-500 ${isScrolled ? 'text-[#2a2824]' : 'text-white'} text-lg`}>
              Swastik & Co.
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-12 lg:flex">
            {navItems.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className={`relative text-[13px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#cca65c] group ${isScrolled ? 'text-[#5e5850]' : 'text-white/80'}`}
                activeProps={{ className: "text-[#cca65c]" }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#cca65c] transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-[#2a2824] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:shadow-[0_0_30px_rgba(42,40,36,0.3)]">
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-full">Enquire Now</span>
              <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 bg-[#cca65c]">
                Enquire Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`flex items-center justify-center lg:hidden transition-colors duration-500 ${isScrolled ? 'text-[#2a2824]' : 'text-white'}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute left-0 top-full w-full bg-white px-8 py-8 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden lg:hidden ${isMobileMenuOpen ? 'max-h-[500px] border-t border-stone-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className="text-lg font-bold uppercase tracking-widest text-[#2a2824] flex justify-between items-center group"
                activeProps={{ className: "text-[#cca65c]" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-[#cca65c] transition-colors" />
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-stone-100">
              <Link to="/contact" className="inline-flex h-14 w-full items-center justify-center bg-[#cca65c] text-sm font-bold uppercase tracking-widest text-white" onClick={() => setIsMobileMenuOpen(false)}>
                Start an Enquiry
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* MASTERPIECE FOOTER */}
      <footer className="relative bg-[#1a1814] text-stone-400 overflow-hidden pt-32 pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-px bg-gradient-to-r from-transparent via-[#cca65c]/30 to-transparent"></div>
        
        {/* Giant Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[120%] overflow-hidden flex justify-center">
          <span className="font-display text-[25vw] font-black leading-none whitespace-nowrap text-white">SWASTIK</span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-16">
          <div className="grid gap-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block" onClick={() => window.scrollTo(0, 0)}>
                <span className="font-display text-3xl font-bold tracking-[0.15em] text-white uppercase">Swastik & Co.</span>
              </Link>
              <p className="mt-8 max-w-md text-sm leading-[2] text-stone-400 font-light">
                Erode's premier destination for high-end architectural hardware, plywood, laminates, and modular kitchen systems. Establishing benchmarks in quality and supply since 1994.
              </p>
              
              <div className="mt-12 flex gap-4">
                <a href={company.whatsapp} className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-800 text-stone-400 transition-all duration-500 hover:border-[#cca65c] hover:bg-[#cca65c] hover:text-white hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Sitemap</h4>
              <ul className="mt-10 grid gap-5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm font-light text-stone-400 transition-colors hover:text-[#cca65c]" onClick={() => window.scrollTo(0, 0)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Reach Us</h4>
              <ul className="mt-10 grid gap-6 text-sm font-light">
                <li className="group">
                  <span className="block text-stone-600 text-[10px] uppercase tracking-widest mb-2 transition-colors group-hover:text-[#cca65c]">Phone</span> 
                  <a href={`tel:${company.phone}`} className="text-stone-300 transition-colors group-hover:text-white">{company.phone}</a>
                </li>
                <li className="group">
                  <span className="block text-stone-600 text-[10px] uppercase tracking-widest mb-2 transition-colors group-hover:text-[#cca65c]">Email</span> 
                  <a href={`mailto:${company.email}`} className="text-stone-300 transition-colors group-hover:text-white">{company.email}</a>
                </li>
                <li className="group">
                  <span className="block text-stone-600 text-[10px] uppercase tracking-widest mb-2 transition-colors group-hover:text-[#cca65c]">Location</span> 
                  <span className="text-stone-300 leading-relaxed">{company.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-32 flex flex-col items-center justify-between border-t border-stone-800/50 pt-8 sm:flex-row text-xs tracking-wider text-stone-600 font-light">
            <p>&copy; {new Date().getFullYear()} Swastik & Company. Built for the elite.</p>
            <p className="mt-4 sm:mt-0 uppercase">Premium Architectural Hardware</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={company.whatsapp} className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)]" aria-label="Chat on WhatsApp">
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
