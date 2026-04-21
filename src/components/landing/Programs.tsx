import { Atom, Briefcase, Cpu, Palette, Scale, Stethoscope, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const programs = [
  { icon: Cpu, title: "Engineering & Technology", count: "32 programs", desc: "AI, Computer Science, Robotics, Civil & beyond." },
  { icon: Briefcase, title: "Business & Management", count: "18 programs", desc: "MBA, BBA, Finance, Marketing, Analytics." },
  { icon: Stethoscope, title: "Health Sciences", count: "24 programs", desc: "Medicine, Nursing, Biotech, Public Health." },
  { icon: Atom, title: "Sciences & Research", count: "21 programs", desc: "Physics, Chemistry, Mathematics, Life Sciences." },
  { icon: Palette, title: "Arts & Humanities", count: "26 programs", desc: "Literature, Design, Media, Performing Arts." },
  { icon: Scale, title: "Law & Policy", count: "12 programs", desc: "BA-LLB, LLM, Public Policy, Constitutional Law." },
];

export const Programs = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="programs" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">Programs</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 leading-[1.05]">
            Choose your path. Shape your future.
          </h2>
          <p className="text-muted-foreground text-lg mt-5">
            Ten schools. Over 180 programs. Endless possibilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <a
              key={p.title}
              href="#admissions"
              className="group relative bg-card border border-border rounded-lg p-8 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" />
              <p.icon className="h-9 w-9 text-accent mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-serif text-2xl text-foreground mb-2">{p.title}</h3>
              <div className="text-xs uppercase tracking-wider text-accent mb-4">{p.count}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};