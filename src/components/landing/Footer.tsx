import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="font-serif text-3xl font-semibold mb-3">Aurelia</div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A Deemed-to-be University. Where heritage meets innovation since 1962.
          </p>
          <div className="flex gap-3 mt-6">
            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="h-9 w-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { t: "Academics", l: ["Undergraduate", "Postgraduate", "Doctoral", "Online Programs"] },
          { t: "Campus", l: ["Library", "Hostels", "Sports", "Clubs & Societies"] },
          { t: "Resources", l: ["Admissions", "Scholarships", "International Students", "Alumni"] },
        ].map((c) => (
          <div key={c.t}>
            <h4 className="font-serif text-xl mb-5 text-accent">{c.t}</h4>
            <ul className="space-y-3">
              {c.l.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Aurelia Deemed University. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);