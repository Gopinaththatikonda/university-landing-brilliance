import { Award, Globe2, BookOpen, Users } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { icon: Users, value: "28,000+", label: "Students Enrolled" },
  { icon: BookOpen, value: "180+", label: "Academic Programs" },
  { icon: Globe2, value: "60+", label: "Countries Represented" },
  { icon: Award, value: "A++", label: "NAAC Accreditation" },
];

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="reveal">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">About Aurelia</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 leading-[1.05]">
            Six decades of <em className="text-gradient-gold not-italic">academic excellence</em> and unwavering purpose.
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Aurelia is a Deemed-to-be University recognized by the UGC, dedicated to nurturing
            scholars, scientists, and changemakers. Our interdisciplinary approach blends rigorous
            academics with research, social impact, and global partnerships.
          </p>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            From a single faculty in 1962 to ten schools today, our mission remains the same:
            to ignite curiosity and prepare leaders for what comes next.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="hover-lift bg-card border border-border rounded-lg p-8 shadow-soft"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <s.icon className="h-7 w-7 text-accent mb-4" />
              <div className="font-serif text-4xl md:text-5xl text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};