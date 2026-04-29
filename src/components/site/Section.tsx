import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, text, children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl reveal">
          {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-copper">{eyebrow}</p>}
          <h2 className="text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">{title}</h2>
          {text && <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{text}</p>}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
