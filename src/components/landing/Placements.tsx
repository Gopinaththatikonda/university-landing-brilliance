import { TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const recruiters = ["Google", "Microsoft", "Goldman Sachs", "Tata", "Deloitte", "Amazon", "McKinsey", "Infosys", "JP Morgan", "Accenture"];

const highlights = [
  { v: "₹64 LPA", l: "Highest Package" },
  { v: "₹12.4 LPA", l: "Average Package" },
  { v: "97%", l: "Placement Rate" },
  { v: "650+", l: "Recruiters" },
];

export const Placements = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="placements" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">Placements</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 leading-[1.05]">
            Careers that <em className="text-gradient-gold not-italic">launch here</em>.
          </h2>
          <p className="text-muted-foreground text-lg mt-5">
            Our graduates are sought after by the world's most ambitious organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((h) => (
            <div key={h.l} className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <TrendingUp className="h-6 w-6 text-accent mx-auto mb-3" />
              <div className="font-serif text-4xl md:text-5xl text-foreground">{h.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{h.l}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden border-y border-border py-8">
          <div className="flex gap-12 animate-[shimmer_30s_linear_infinite] whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
            {[...recruiters, ...recruiters].map((r, i) => (
              <span key={i} className="font-serif text-2xl md:text-3xl text-muted-foreground/70 tracking-wide">
                {r} <span className="text-accent mx-6">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
};