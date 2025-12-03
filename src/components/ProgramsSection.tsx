import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart } from "lucide-react";

import cover_mujeres_de_impacto from "@/assets/covers/mujeres-de-impacto.jpg";
import cover_ugc from "@/assets/covers/ugc.png";
import cover_mente from "@/assets/covers/mente-exitosa.png";


const ProgramsSection = () => {
  const programs = [
    {
      title: "Mente exitosa",
      description: "8 módulos y 3 libros de mentalidad exitosa que te volarán la cabeza",
      duration: "6 semanas",
      level: "Principiante",
      image: cover_mente,
      link: "https://shop.beacons.ai/katherinee_ugc/19274d3d-211d-4f0c-b36d-589171438dbd?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fkatherinee_ugc&show_back_button=true",

    },
    {
      title: "Gana dinero con marcas sin ser influencer",
      description: "Aprende a crear contenido, contactar marcas y conseguir colaboraciones pagas.",
      duration: "6 semanas",
      level: "Principiante",
      image: cover_ugc,
      link: "https://shop.beacons.ai/katherinee_ugc/bd2a7062-b75d-4324-8385-86960ff63099",


    },
    {
      title: "Membresía: Mujeres de impacto",
      description: "Accede a una comunidad privada de apoyo femenino con soporte privado, orientación y motivación.",
      duration: "4 semanas",
      level: "Intermedio",
      image: cover_mujeres_de_impacto,
      link: "https://shop.beacons.ai/katherinee_ugc/f071acce-2acf-4e2f-87fb-4e240c6d3d33",

    },
  ];

  return (
    <section id="programas" className="relative py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programas y rutas de aprendizaje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona el enfoque que más se adapta a tu etapa
          </p>
        </div>

        <div
          className="
            flex 
            flex-wrap 
            justify-center 
            gap-8
          "
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="
                w-[85%]
                md:w-[45%]
                lg:w-[30%]
                flex
                justify-center
              "
            >
              <Card className="overflow-hidden flex flex-col hover:shadow-xl group transition-shadow w-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4" />
                      <Badge variant="secondary">{program.level}</Badge>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => (window.location.href = program.link)}
                  >
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default ProgramsSection;
