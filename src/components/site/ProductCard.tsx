import { ArrowUpRight } from "lucide-react";
import type { productCategories } from "../../data/site";

type Product = (typeof productCategories)[number];

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-copper/70">
      <div className="h-2 bg-primary transition-colors group-hover:bg-copper" />
      <div className="p-6">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-copper transition-colors group-hover:bg-copper group-hover:text-copper-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <span className="font-display text-5xl text-muted">0{index + 1}</span>
      </div>
      <h3 className="mt-7 text-2xl font-semibold text-card-foreground">{product.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-muted-foreground">{product.summary}</p>
      <ul className="mt-5 grid gap-2 text-sm text-foreground">
        {product.items.map((item) => <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-copper" />{item}</li>)}
      </ul>
      <div className="mt-7 flex items-center gap-2 text-sm font-bold text-copper">Explore range <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
      </div>
    </article>
  );
}
