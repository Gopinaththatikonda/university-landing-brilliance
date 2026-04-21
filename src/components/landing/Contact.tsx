import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16">
        <div ref={ref} className="reveal">
          <span className="text-accent text-xs uppercase tracking-[0.3em]">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 leading-[1.05]">
            We'd love to hear from you.
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-md">
            Questions about admissions, programs or campus life? Our team is here to help.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-medium text-foreground">Visit Us</div>
                <p className="text-muted-foreground text-sm">Aurelia University Campus, 12 Heritage Lane, New Delhi 110001</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <p className="text-muted-foreground text-sm">admissions@aurelia.edu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-medium text-foreground">Call</div>
                <p className="text-muted-foreground text-sm">+91 11 4000 8000 · Mon–Sat, 9 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thank you! We'll be in touch within 24 hours.");
            (e.target as HTMLFormElement).reset();
          }}
          className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-soft space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">First Name</label>
              <Input required placeholder="Ananya" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Last Name</label>
              <Input required placeholder="Sharma" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
            <Input required type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Program of Interest</label>
            <Input placeholder="e.g. B.Tech Computer Science" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
            <Textarea rows={4} placeholder="Tell us how we can help..." />
          </div>
          <Button type="submit" variant="gold" size="lg" className="w-full">Send Inquiry</Button>
        </form>
      </div>
    </section>
  );
};