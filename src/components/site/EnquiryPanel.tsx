import { MessageCircle, Send } from "lucide-react";
import { company, enquiryOptions } from "../../data/site";

export function EnquiryPanel() {
  return (
    <div className="grid gap-8 rounded-xl border border-border bg-card p-5 shadow-premium lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div className="hero-field rounded-lg p-8 text-primary-foreground">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary-foreground/60">Fast enquiry</p>
        <h3 className="mt-4 font-display text-4xl font-semibold leading-tight">Tell us what your project needs.</h3>
        <p className="mt-5 text-sm leading-7 text-primary-foreground/75">Share a product category, quantity or site requirement. The team can guide availability, suitable alternatives and bulk pricing.</p>
        <a href={company.whatsapp} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-copper px-5 py-3 text-sm font-bold text-copper-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2">
          <MessageCircle className="h-4 w-4" /> WhatsApp now
        </a>
      </div>
      <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2 text-sm font-bold text-foreground">Your name<input className="h-12 rounded-lg border border-input bg-background px-4 font-normal focus-visible:outline-2" placeholder="Enter your name" /></label>
        <label className="grid gap-2 text-sm font-bold text-foreground">Phone number<input className="h-12 rounded-lg border border-input bg-background px-4 font-normal focus-visible:outline-2" placeholder="+91" /></label>
        <div className="grid gap-2 text-sm font-bold text-foreground">
          Product category
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {enquiryOptions.map((option) => <button key={option} className="rounded-lg border border-input bg-background px-3 py-3 text-left text-xs font-semibold text-muted-foreground transition-colors hover:border-copper hover:text-foreground focus-visible:outline-2" type="button">{option}</button>)}
          </div>
        </div>
        <label className="grid gap-2 text-sm font-bold text-foreground">Requirement<textarea className="min-h-28 rounded-lg border border-input bg-background px-4 py-3 font-normal focus-visible:outline-2" placeholder="Mention quantity, project type, preferred brand or delivery need" /></label>
        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-premium transition-transform hover:-translate-y-0.5 focus-visible:outline-2" type="submit">
          <Send className="h-4 w-4" /> Submit enquiry
        </button>
      </form>
    </div>
  );
}
