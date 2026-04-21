import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import campus from "@/assets/hero-campus.jpg";
import library from "@/assets/hero-library.jpg";
import students from "@/assets/hero-students.jpg";
import lab from "@/assets/hero-lab.jpg";
import convocation from "@/assets/hero-convocation.jpg";
import classroom from "@/assets/hero-classroom.jpg";
import cultural from "@/assets/hero-cultural.jpg";
import sports from "@/assets/hero-sports.jpg";
import hostel from "@/assets/hero-hostel.jpg";
import placement from "@/assets/hero-placement.jpg";

const slides = [
  {
    image: campus,
    eyebrow: "Est. 1962",
    title: "Where Tradition Meets Tomorrow",
    subtitle: "A 200-acre campus shaped by heritage, designed for the future.",
  },
  {
    image: library,
    eyebrow: "Knowledge Without Limits",
    title: "Libraries that Inspire Lifelong Learning",
    subtitle: "Over 1.2 million volumes, archives, and digital research collections.",
  },
  {
    image: students,
    eyebrow: "Class of Excellence",
    title: "Graduates Who Shape the World",
    subtitle: "Join an alumni network spanning 60+ countries and Fortune 500 leaders.",
  },
  {
    image: lab,
    eyebrow: "Research that Matters",
    title: "Discovery in Every Lab, Every Day",
    subtitle: "State-of-the-art facilities driving innovation across disciplines.",
  },
  {
    image: convocation,
    eyebrow: "Convocation 2024",
    title: "A Moment to Remember Forever",
    subtitle: "Celebrating six decades of academic milestones and proud achievements.",
  },
  {
    image: classroom,
    eyebrow: "Learning Reimagined",
    title: "Classrooms that Spark Curiosity",
    subtitle: "Interactive lectures, mentorship and India's finest faculty under one roof.",
  },
  {
    image: cultural,
    eyebrow: "Culture & Festivals",
    title: "Where Heritage Comes Alive",
    subtitle: "From Bharatanatyam to band nights — a vibrant calendar all year round.",
  },
  {
    image: sports,
    eyebrow: "Spirit of the Game",
    title: "Champions Made on These Grounds",
    subtitle: "World-class cricket, athletics and indoor sports facilities for every student.",
  },
  {
    image: hostel,
    eyebrow: "A Home Away From Home",
    title: "Living and Learning, Together",
    subtitle: "Modern hostels, dining halls and 24×7 wellness — designed for student life.",
  },
  {
    image: placement,
    eyebrow: "Careers Launchpad",
    title: "Recruited by India's Top Companies",
    subtitle: "650+ recruiters. 97% placements. Average package of ₹12.4 LPA.",
  },
];

export const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="embla__slide relative h-full min-w-0 flex-[0_0_100%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1920}
                  height={1080}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`h-full w-full object-cover ${selected === i ? "ken-burns" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-hero" />
              </div>

              <div className="relative h-full container flex items-end pb-32 md:pb-40">
                <div className={`max-w-3xl ${selected === i ? "animate-slide-up" : "opacity-0"}`}>
                  <span className="inline-block text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-5">
                    {s.eyebrow}
                  </span>
                  <h1 className="font-serif text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6">
                    {s.title}
                  </h1>
                  <p className="text-primary-foreground/85 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                    {s.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gold" size="lg">Apply Now</Button>
                    <Button variant="outlineLight" size="lg">Explore Programs</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full glass-dark text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full glass-dark text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              selected === i ? "w-12 bg-accent" : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-8 hidden md:block z-20 text-primary-foreground/80 font-mono text-sm tracking-wider">
        <span className="text-accent">{String(selected + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
};