import { ArrowRight } from "lucide-react";
import type { productCategories } from "../../data/site";

type Product = (typeof productCategories)[number];

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-amber-500/10 sm:p-10">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-amber-500 transition-colors duration-500 group-hover:bg-amber-500 group-hover:text-zinc-950">
            <Icon className="h-8 w-8" />
          </div>
          <span className="font-display text-6xl font-black text-zinc-800 transition-colors duration-500 group-hover:text-zinc-800/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        
        <h3 className="mt-12 font-display text-2xl font-bold tracking-wide text-white">{product.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{product.summary}</p>
        
        <ul className="mt-8 flex flex-col gap-3">
          {product.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-10">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-500 transition-transform group-hover:translate-x-2">
            Explore range <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
