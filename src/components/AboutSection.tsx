import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import foto_katherine from "@/assets/testimonios/fundadoradeedb.jpg";
import foto_troy from "@/assets/founder-troy-premium.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CoFounder {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const coFounders: CoFounder[] = [
  {
    name: "Katherine",
    role: "Fundadora y Directora",
    photo: foto_katherine,
    bio: "Experta en marketing digital y estrategia de contenido.",
  },
  {
    name: "Troy",
    role: "Co-fundador y Estratega",
    photo: foto_troy,
    bio: "Especialista en transformación digital, IA y reclutador IT.",
  },
];

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const highlights = [
    "Experiencia real en marketing y educación digital",
    "Metodologías aplicadas al mercado hispanohablante",
    "Comunidad y acompañamiento continuo",
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? coFounders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === coFounders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="sobre-nosotros" className="relative py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              El Digital Bridge nace de la necesidad de ofrecer formación práctica,
              ética y actualizada para profesionales que quieren monetizar su
              conocimiento en el entorno digital.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-justify">
              Trabajamos con metodologías probadas, enfocadas en resultados reales
              y sostenibles, sin promesas exageradas ni atajos que comprometan tu
              credibilidad.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Founders Sliding Deck */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto group">
              {/* Main Slide Container */}
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.02]">
                {/* Slides */}
                <div 
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {coFounders.map((founder, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      {/* Background Image */}
                      <img 
                        src={founder.photo}
                        alt={founder.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Content - Lower Left */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                          {founder.name}
                        </h3>
                        <p className="text-lg md:text-xl text-white font-semibold mb-3">
                          {founder.role}
                        </p>
                        <p className="text-base text-white/80 leading-relaxed max-w-md">
                          {founder.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                  aria-label="Previous founder"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                  aria-label="Next founder"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Bottom Progress Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {coFounders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={cn(
                        "h-1 rounded-full transition-all duration-300",
                        index === currentSlide 
                          ? "w-12 bg-white" 
                          : "w-8 bg-white/40 hover:bg-white/60"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default AboutSection;
