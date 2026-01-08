import { Button } from "@/components/ui/button";

interface FinalCtaProps {
  showPrograms: boolean;
  setShowPrograms: (value: boolean) => void;
}

const FinalCta = ({ showPrograms, setShowPrograms }: FinalCtaProps) => {
  return (
    <section id="contacto" className="relative py-16 md:py-24 bg-navy">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-60 lg:opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br 
                      from-[hsl(210_20%_85%/_0.4)] 
                      via-transparent 
                      to-[hsl(210_90%_70%/_0.4)]
                      animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="hero-pattern" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-foreground">
          ¿Lista para cruzar el puente digital?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-navy-foreground/90 max-w-2xl mx-auto">
          Cuéntanos en qué etapa estás y te recomendamos el programa ideal para ti.
        </p>

        <div
          className="
            flex 
            flex-col md:flex-row 
            items-center justify-center
            gap-4 mt-6
          "
        >
          <Button
            size="lg"
            className="text-base px-8 w-full md:w-auto"
            onClick={() =>
              (window.location.href = "https://wa.me/13054392165?text=Hola,%20vengo%20desde%20tu%20sitio%20web")
            }
          >
            Hablar con nosotros
          </Button>

          <Button
            size="lg"
            className="text-base px-8 w-full md:w-auto"
            onClick={() => setShowPrograms(!showPrograms)}
          >
            {showPrograms ? "Ocultar programas" : "Ver más programas"}
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FinalCta;
