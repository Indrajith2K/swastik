import { MessageCircle, Send } from "lucide-react";
import { company, enquiryOptions } from "../../data/site";

export function EnquiryPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-[#f9f7f2] p-8 text-stone-800 sm:p-12 border-r border-stone-100">
          <p className="text-xs font-bold uppercase tracking-widest text-[#cca65c]">Fast enquiry</p>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight text-stone-800">Tell us what your project needs.</h3>
          <p className="mt-6 text-sm leading-relaxed text-stone-500">
            Share a product category, quantity or site requirement. The team can guide availability, suitable alternatives and bulk pricing.
          </p>
          <a href={company.whatsapp} className="mt-10 inline-flex items-center justify-center gap-2 rounded bg-[#cca65c] px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#b5904a] shadow-md">
            <MessageCircle className="h-5 w-5" /> WhatsApp now
          </a>
        </div>
        
        <form className="p-8 sm:p-12 bg-white" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Your name</span>
              <input className="mt-2 w-full rounded border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-[#cca65c] focus:bg-[#f9f7f2]" placeholder="Enter your name" />
            </label>
            
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Phone number</span>
              <input className="mt-2 w-full rounded border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-[#cca65c] focus:bg-[#f9f7f2]" placeholder="+91" />
            </label>
            
            <div className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Product category</span>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {enquiryOptions.map((option) => (
                  <button key={option} className="rounded border border-stone-200 bg-white px-4 py-3 text-left text-xs font-bold text-stone-500 transition-all hover:border-[#cca65c] hover:text-stone-800 focus:border-[#cca65c] focus:text-stone-800 focus:outline-none focus:bg-[#f9f7f2]" type="button">
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Requirement</span>
              <textarea className="mt-2 min-h-[120px] w-full resize-none rounded border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-[#cca65c] focus:bg-[#f9f7f2]" placeholder="Mention quantity, project type, preferred brand or delivery need" />
            </label>
            
            <button className="mt-4 inline-flex items-center justify-center gap-2 rounded bg-[#cca65c] px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-[#b5904a] shadow-md" type="submit">
              <Send className="h-4 w-4" /> Submit enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
