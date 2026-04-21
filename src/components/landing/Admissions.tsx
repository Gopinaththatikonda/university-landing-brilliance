import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import campus from "@/assets/hero-campus.jpg";

const steps = [
  { n: "01", t: "Apply Online", d: "Complete your application in under 20 minutes." },
  { n: "02", t: "Submit Documents", d: "Upload transcripts, ID and recommendations." },
  { n: "03", t: "Entrance & Interview", d: "Take the AET or submit qualifying scores." },
  { n: "04", t: "Offer & Enrollment", d: "Receive your offer and join the community." },
];

export const Admissions = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="admissions" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${campus})` }}
      />
      <div className="absolute inset-0 -z-10 bg-primary/85" />

      <div className="container">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">Admissions 2025</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mt-4 leading-[1.05]">
            Your journey begins in four steps.
          </h2>
          <p className="text-primary-foreground/80 text-lg mt-5">
            Applications for Fall 2025 are now open across all schools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s) => (
            <div key={s.n} className="glass-dark rounded-lg p-7 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1">
              <div className="font-serif text-5xl text-accent mb-4">{s.n}</div>
              <h3 className="font-serif text-2xl text-primary-foreground mb-3">{s.t}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="gold" size="lg">Start Application</Button>
          <Button variant="outlineLight" size="lg">Download Brochure</Button>
        </div>
      </div>
    </section>
  );
};