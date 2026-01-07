import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const EnrollmentSection = () => {
  const features = [
    "Acceso completo a los programas",
    "Entrenamientos en vivo y grabados",
    "Mentoring personalizado",
    "Comunidad privada exclusiva",
    "Derechos de reventa del 100%",
    "Material descargable",
    "Soporte humano",
  ];

  return (
    <section id="inscripcion" className="relative py-20 bg-navy overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Únete a El Digital Bridge
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Accede a todos los programas, mentorías y eventos exclusivos.
          </p>
        </div>

        {/* Single centered plan card */}
        <div className="max-w-lg mx-auto mb-8">
          <Card className="relative border-primary border-2 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
              Oferta Completa
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-3xl mb-2">Plan Profesional</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">
                USD 499
              </div>
              <CardDescription className="text-base">
                Acceso total al ecosistema digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                onClick={() =>
                (window.location.href =
                  "https://shop.beacons.ai/katherinee_ugc/8b96a046-edae-4c3d-a36e-db66d661570e")
                }
              >
                Unirme
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-white/80">
          ¿Tienes dudas? Contáctanos y te ayudamos a empezar!
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default EnrollmentSection;
