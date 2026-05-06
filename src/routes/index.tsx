import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MessageCircle } from "lucide-react";
import heroBg from "../assets/hero-showroom.png";
import kitchen from "../assets/modular-kitchen.png";
import hardware from "../assets/hardware-collection.png";
import { company } from "../data/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="font-sans text-[#2a2824] bg-[#Fcfbf9] selection:bg-[#cca65c] selection:text-white">
      
      {/* ── ULTRA-PREMIUM HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[900px] bg-[#1a1814] overflow-hidden">
        {/* Cinematic Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1814] via-[#1a1814]/90 to-transparent z-10" />
          <img src={heroBg} alt="Premium Hardware Background" className="absolute right-0 top-0 w-[70%] h-full object-cover opacity-60 mix-blend-luminosity" />
        </div>

        <div className="relative z-20 h-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-40 pb-64 flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight">
              All Your Hardware <br />
              Needs in <span className="text-[#cca65c] relative whitespace-nowrap">
                One Place
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#cca65c]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            
            <p className="mt-10 text-xl text-stone-400 font-light max-w-xl leading-[1.8]">
              Empowering your architectural vision with uncompromising tools and highly dependable hardware solutions.
            </p>
            
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
              <Link to="/contact" className="group relative w-full sm:w-auto inline-flex h-14 items-center justify-center overflow-hidden bg-[#cca65c] px-10 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:shadow-[0_0_40px_rgba(204,166,92,0.4)]">
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-full">Enquire Now</span>
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 bg-[#b5904a]">
                  Enquire Now
                </span>
              </Link>
              <Link to="/products" className="group w-full sm:w-auto inline-flex h-14 items-center justify-center border border-white/30 bg-transparent px-10 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-[#1a1814]">
                Explore All
              </Link>
            </div>
          </div>
          
          {/* Staggered Art Gallery Layout */}
          <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 w-[600px] h-[600px]">
             <img src={hardware} className="absolute left-0 top-0 w-[280px] h-[380px] object-cover rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20 transition-transform duration-1000 hover:scale-105 hover:z-50" alt="Hardware Details" />
             <img src={kitchen} className="absolute right-0 bottom-0 w-[340px] h-[460px] object-cover rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-10 transition-transform duration-1000 hover:scale-105 hover:z-50 filter brightness-90" alt="Kitchen Interior" />
             <div className="absolute left-20 bottom-10 w-[200px] h-[150px] border border-[#cca65c]/30 backdrop-blur-md bg-white/5 z-30 rounded-sm flex flex-col justify-center items-center">
               <span className="text-3xl font-display text-white">1994</span>
               <span className="text-[10px] uppercase tracking-widest text-[#cca65c] mt-1">Established</span>
             </div>
          </div>
        </div>

      </section>

      {/* Floating Glass Stats Bar */}
      <div className="relative z-30 max-w-[1400px] mx-auto w-[95%] sm:w-[90%] -mt-[70px]">
        <div className="bg-white/90 backdrop-blur-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-xl py-6 sm:py-10 px-2 sm:px-16 grid grid-cols-3 divide-x divide-stone-200">
          <div className="text-center px-2 sm:px-4">
            <p className="text-2xl sm:text-5xl font-display font-bold text-[#1a1814]">250<span className="text-[#cca65c]">+</span></p>
            <p className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-stone-400 mt-2 sm:mt-3">Happy Clients</p>
          </div>
          <div className="text-center px-2 sm:px-4">
            <p className="text-2xl sm:text-5xl font-display font-bold text-[#1a1814]">30<span className="text-[#cca65c]">+</span></p>
            <p className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-stone-400 mt-2 sm:mt-3">Years Service</p>
          </div>
          <div className="text-center px-2 sm:px-4">
            <p className="text-2xl sm:text-5xl font-display font-bold text-[#1a1814]">5000<span className="text-[#cca65c]">+</span></p>
            <p className="text-[8px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-stone-400 mt-2 sm:mt-3">Our Products</p>
          </div>
        </div>
      </div>

      {/* ── CATEGORIES BAR (EDITORIAL GRID) ──────────────────────── */}
      <section className="pt-32 pb-20 sm:pb-32 bg-[#Fcfbf9]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap justify-center xl:justify-between gap-8 sm:gap-12 lg:gap-8 text-center">
            {[
              { title: "DOOR HARDWARE", icon: "🚪" },
              { title: "PLYWOOD & LAMINATES", icon: "🪵" },
              { title: "MODULAR KITCHEN", icon: "🍳" },
              { title: "BATHROOM & GLASS", icon: "🚿" },
              { title: "TOOLS & INDUSTRIAL", icon: "🔧" },
              { title: "SLIDING & ALUMINIUM", icon: "🪟" }
            ].map((cat, i) => (
              <div key={cat.title} className="flex flex-col items-center gap-6 w-[160px] cursor-pointer group">
                <div className="relative h-20 w-20 bg-white border border-stone-200 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:scale-110 group-hover:border-[#cca65c] group-hover:shadow-[0_15px_40px_rgba(204,166,92,0.15)]">
                  <div className="absolute inset-0 rounded-full bg-[#cca65c] scale-0 transition-transform duration-500 ease-out group-hover:scale-100 opacity-10"></div>
                  <span className="relative z-10 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">{cat.icon}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-stone-400 mb-1">0{i+1}</span>
                  <p className="text-[11px] font-bold text-[#2a2824] tracking-[0.15em] transition-colors duration-500 group-hover:text-[#cca65c]">{cat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT US SECTION ─────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#cca65c]"></span>
              <span className="text-[#cca65c] text-[10px] font-bold tracking-[0.2em] uppercase">About Us</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#1a1814] leading-[1.1] tracking-tight">
              Powering Today's Work, <br /> Building Tomorrow's Future
            </h2>
            
            <div className="mt-16 space-y-8">
              <div className="group flex items-start gap-8 bg-[#Fcfbf9] border border-stone-100 p-8 rounded-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-[#cca65c]/30">
                <div className="bg-white p-4 rounded-sm border border-stone-100 text-[#cca65c] shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#1a1814]">Our Vision</h4>
                  <p className="mt-3 text-sm text-stone-500 leading-[1.8] font-light">To become the absolute pinnacle of trust and preference for hardware and plywood supply across the entire Tamil Nadu region.</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-8 bg-[#Fcfbf9] border border-stone-100 p-8 rounded-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-[#cca65c]/30">
                <div className="bg-white p-4 rounded-sm border border-stone-100 text-[#cca65c] shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#1a1814]">Our Mission</h4>
                  <p className="mt-3 text-sm text-stone-500 leading-[1.8] font-light">To flawlessly provide top-tier products, unparalleled service, and undeniable long-term value to our distinguished clientele.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[800px] w-full mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#cca65c]/5 rounded-sm translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 border border-[#cca65c]/20"></div>
            <img src={hardware} alt="Hardware Showcase" className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </section>

      {/* ── BUILDING TRUST SECTION ───────────────────────────────── */}
      <section className="py-24 sm:py-40 bg-[#Fcfbf9]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 sm:gap-24 items-center">
          <div className="relative h-[400px] sm:h-[700px] order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#cca65c]/5 rounded-sm -translate-x-4 -translate-y-4 sm:-translate-x-6 sm:-translate-y-6 border border-[#cca65c]/20"></div>
            <img src={heroBg} alt="Door Handle" className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.1)]" />
            
            {/* Minimalist Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.08)] hidden md:block border border-stone-100">
               <span className="block font-display text-6xl font-black text-[#1a1814]">30+</span>
               <span className="block text-[10px] uppercase tracking-[0.2em] text-[#cca65c] mt-2 font-bold">Years of Trust</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:pl-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#cca65c]"></span>
              <span className="text-[#cca65c] text-[10px] font-bold tracking-[0.2em] uppercase">Excellence Delivered</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1a1814] leading-[1.1] tracking-tight">
              Building Trust with <br/> Quality Tools for Over <br/> 30 Years
            </h2>
            <p className="mt-8 text-lg text-stone-500 leading-[1.8] font-light max-w-xl">
              We provide high-quality hardware and building materials, from door fittings and laminates to kitchen, bathroom, and industrial solutions, ensuring durability, performance, and unmatched reliability for every single project.
            </p>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
              <Link to="/about" className="group w-full sm:w-auto relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#1a1814] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:shadow-[0_0_30px_rgba(26,24,20,0.3)]">
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-full">Learn More</span>
                <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 bg-[#cca65c]">
                  Learn More
                </span>
              </Link>
              <Link to="/products" className="group w-full sm:w-auto inline-flex h-14 items-center justify-center border border-stone-300 bg-transparent px-10 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1814] transition-all hover:border-[#1a1814] hover:bg-[#1a1814] hover:text-white">
                Explore Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ────────────────────────────────── */}
      <section className="py-24 sm:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="mb-16 sm:mb-24 flex flex-col items-center text-center">
            <span className="text-[#cca65c] text-[10px] font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
            <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl font-bold text-[#1a1814] leading-[1.2] tracking-tight max-w-3xl">
              Delivering uncompromised quality products and highly reliable solutions you can trust blindly.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
            <div className="relative overflow-hidden h-[400px] sm:h-[600px] rounded-sm group cursor-pointer">
              <img src={hardware} alt="Swastik & Company Building" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 filter brightness-90 saturate-50 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-[#1a1814]/40 to-transparent flex flex-col justify-end p-8 sm:p-12 transition-opacity duration-700">
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">30+ Years Experience</h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-[1.8] font-light max-w-md">The bedrock of our reputation. We have spent three decades building an unbreakable bond of reliability and absolute trust across Erode.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 h-auto sm:h-[600px]">
              <div className="col-span-1 sm:col-span-2 bg-white border border-stone-200 rounded-sm p-8 sm:p-12 flex flex-col justify-center items-center text-center transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:border-[#cca65c]/30 group">
                <h3 className="text-3xl font-display font-bold text-[#1a1814]">Expert Guidance</h3>
                <p className="text-stone-500 mt-5 max-w-lg text-sm leading-[1.8] font-light">Our deeply experienced team helps you curate the precise products for your high-end project, meticulously saving your time and costs while maximizing aesthetics.</p>
                <div className="flex gap-3 mt-10">
                  <div className="w-2 h-2 rounded-full bg-stone-200 transition-colors duration-500 group-hover:bg-[#cca65c]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-stone-200 transition-colors duration-500 group-hover:bg-[#cca65c]/60"></div>
                  <div className="w-2 h-2 rounded-full bg-[#cca65c] shadow-[0_0_10px_rgba(204,166,92,0.5)]"></div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-sm group cursor-pointer min-h-[300px] sm:min-h-0">
                <img src={kitchen} alt="Products" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 filter brightness-75" />
                <div className="absolute inset-0 bg-[#1a1814]/60 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-80" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-5xl font-display font-bold text-white">5000<span className="text-[#cca65c]">+</span></h3>
                  <p className="text-stone-300 mt-4 text-[11px] uppercase tracking-widest font-bold">In Stock Products</p>
                </div>
              </div>
              
              <div className="bg-white border border-stone-200 rounded-sm p-8 flex flex-col justify-center items-center text-center transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:border-[#cca65c]/30 min-h-[300px] sm:min-h-0">
                <div className="flex items-end gap-3">
                  <span className="text-6xl font-display font-bold text-[#1a1814] leading-none">4.9</span>
                  <Star className="w-8 h-8 fill-[#cca65c] text-[#cca65c] mb-1" />
                </div>
                <p className="text-stone-500 mt-6 text-[10px] uppercase tracking-widest font-bold">Highly Rated by Builders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
