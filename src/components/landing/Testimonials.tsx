import { Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    name: "Ananya Sharma",
    role: "Software Engineer, Google",
    year: "Class of 2022",
    quote:
      "Aurelia gave me more than a degree. The faculty pushed me to think originally, and the research labs felt like a playground for ideas.",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Verdant Health",
    year: "Class of 2019",
    quote:
      "From the very first semester, I was surrounded by mentors who treated me like a colleague. That confidence shaped my entire career.",
  },
  {
    name: "Priya Iyer",
    role: "Doctoral Researcher, MIT",
    year: "Class of 2021",
    quote:
      "The interdisciplinary culture at Aurelia is unmatched. I worked across three labs and presented at two international conferences.",
  },
];

export const Testimonials = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">Voices of Aurelia</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 leading-[1.05]">
            Stories from our community.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="relative bg-card border border-border rounded-lg p-8 hover-lift flex flex-col"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="h-9 w-9 text-accent/30 mb-4" />
              <blockquote className="font-serif text-xl text-foreground leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <div className="text-xs text-accent uppercase tracking-wider mt-1">{t.year}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};