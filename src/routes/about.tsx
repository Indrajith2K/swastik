import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Shield, Users, CheckCircle, Heart } from "lucide-react";
import heroBg from "../assets/hero-showroom.png";
import hardware from "../assets/hardware-collection.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="font-sans text-stone-800 bg-white pb-0">
      
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img src={heroBg} alt="About Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#cca65c]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-wide">
            ABOUT US
          </h1>
          <p className="mt-4 text-lg text-white/90 font-medium max-w-md">
            Premium hardware & Interiors for Erode's leading builders and homeowners
          </p>
        </div>
      </section>

      {/* ── BUILDING TRUST SECTION ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#cca65c] text-sm font-bold tracking-widest uppercase">About Us</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-stone-800 leading-tight">
              Building Trust with Quality <br /> Tools for Over 30 Years
            </h2>
            <p className="mt-6 text-stone-500 leading-relaxed">
              We provide high-quality hardware and building materials, from door fittings and laminates to kitchen, bathroom, and industrial solutions, ensuring durability, performance, and reliability for every project.
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded bg-[#cca65c] px-8 font-bold text-white transition-all hover:bg-[#b5904a]">
                Enquire Now
              </Link>
              <Link to="/products" className="inline-flex h-12 items-center justify-center rounded border border-[#cca65c] text-[#cca65c] px-8 font-bold transition-all hover:bg-[#cca65c] hover:text-white">
                Explore Product
              </Link>
            </div>
          </div>
          
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img src={hardware} alt="Door Hardware" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── CORE VALUES SECTION ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-800">Our Core Values</h2>
            <p className="mt-4 text-stone-500 leading-relaxed">
              The principles that guide our commitment to quality, trust, and customer satisfaction
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality First", desc: "We provide high-quality products that ensure durability, strength, and long-lasting performance for every project.", icon: Shield },
              { title: "Customer Satisfaction", desc: "We focus on delivering the best service and a smooth experience, ensuring every customer is fully satisfied.", icon: Users },
              { title: "Trust & Transparency", desc: "We value honest pricing and transparent practices, building trust through reliable and consistent service.", icon: CheckCircle },
              { title: "Commitment", desc: "We are dedicated to long-term relationships, offering dependable support and continuous service improvement.", icon: Heart }
            ].map(val => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-[#f9f7f2] border border-stone-200 rounded-xl p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto w-12 h-12 bg-[#cca65c] rounded flex items-center justify-center mb-6 text-white shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wide">{val.title}</h3>
                  <p className="mt-4 text-xs text-stone-500 leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GOLD BANNER STATS ────────────────────────────────────── */}
      <section className="bg-[#cca65c] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
            <div className="px-4">
              <p className="text-3xl sm:text-5xl font-bold text-white">30+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/80">Years of Trust</p>
            </div>
            <div className="px-4">
              <p className="text-3xl sm:text-5xl font-bold text-white">250+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/80">Satisfied Clients</p>
            </div>
            <div className="px-4">
              <p className="text-3xl sm:text-5xl font-bold text-white">5000+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/80">Our Products</p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
