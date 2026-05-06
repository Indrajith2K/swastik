import { MessageCircle, Send } from "lucide-react";
import { company, enquiryOptions } from "../../data/site";

export function EnquiryPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50">
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-zinc-950 p-8 text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500">Fast enquiry</p>
          <h3 className="mt-4 font-display text-4xl font-bold leading-tight">Tell us what your project needs.</h3>
          <p className="mt-6 text-sm leading-relaxed text-zinc-400">
            Share a product category, quantity or site requirement. The team can guide availability, suitable alternatives and bulk pricing.
          </p>
          <a href={company.whatsapp} className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold tracking-wide text-zinc-950 transition-transform hover:scale-105 hover:bg-amber-400">
            <MessageCircle className="h-5 w-5" /> WhatsApp now
          </a>
        </div>
        
        <form className="p-8 sm:p-12" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your name</span>
              <input className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-950 outline-none transition-colors focus:border-amber-500 focus:bg-white" placeholder="Enter your name" />
            </label>
            
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone number</span>
              <input className="mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-950 outline-none transition-colors focus:border-amber-500 focus:bg-white" placeholder="+91" />
            </label>
            
            <div className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Product category</span>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {enquiryOptions.map((option) => (
                  <button key={option} className="rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-xs font-bold text-zinc-500 transition-all hover:border-amber-500 hover:text-zinc-950 focus:border-amber-500 focus:text-zinc-950 focus:outline-none" type="button">
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Requirement</span>
              <textarea className="mt-2 min-h-32 w-full resize-none rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-950 outline-none transition-colors focus:border-amber-500 focus:bg-white" placeholder="Mention quantity, project type, preferred brand or delivery need" />
            </label>
            
            <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold tracking-wide text-white transition-transform hover:scale-105 hover:bg-zinc-800" type="submit">
              <Send className="h-4 w-4" /> Submit enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
