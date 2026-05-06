import { ArrowRight } from "lucide-react";
import type { productCategories } from "../../data/site";

type Product = (typeof productCategories)[number];

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white border border-stone-200 p-8 text-stone-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-10">
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#f9f7f2] text-[#cca65c] transition-colors duration-500 group-hover:bg-[#cca65c] group-hover:text-white shadow-sm border border-stone-100">
            <Icon className="h-8 w-8" />
          </div>
          <span className="font-display text-5xl font-black text-stone-200 transition-colors duration-500 group-hover:text-stone-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        
        <h3 className="mt-10 font-display text-2xl font-bold tracking-wide text-stone-800">{product.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-stone-500">{product.summary}</p>
        
        <ul className="mt-8 flex flex-col gap-3">
          {product.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-medium text-stone-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#cca65c]" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cca65c] transition-transform group-hover:translate-x-2">
            Explore range <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
