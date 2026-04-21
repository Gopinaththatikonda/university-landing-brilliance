import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Placements", href: "#placements" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Aurelia
          </span>
          <span className={`hidden sm:inline text-xs uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            University
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300 ${
                  scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="gold" size="sm">Apply Now</Button>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-lg p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-foreground hover:text-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li><Button variant="gold" className="w-full mt-2">Apply Now</Button></li>
          </ul>
        </div>
      )}
    </header>
  );
};