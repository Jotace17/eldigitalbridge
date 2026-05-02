import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-navy pt-20 overflow-hidden"
    >
      {/* Background */}
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

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 relative z-10">

        {/* GRID */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">

          {/* TITLE (mobile & iPad order 1, desktop col 1) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              text-4xl md:text-5xl lg:text-6xl 
              font-bold text-navy-foreground mb-2
              items-center text-center lg:text-left
              order-1 lg:col-start-1 lg:row-start-1
            "
          >
            Tu puente hacia el éxito digital
          </motion.h1>

          {/* VIDEO (mobile & iPad order 2, desktop col 2) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="
              relative order-2
              lg:col-start-2 lg:row-start-1
            "
          >
            <Card className="overflow-hidden shadow-xl rounded-2xl mb-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1187161776?h=b223b1bd7c&title=0&byline=0&portrait=0&badge=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Visualizer Form"
                />
              </div>
            </Card>
          </motion.div>

          {/* TEXT + BUTTONS (mobile & iPad order 3, desktop of col 1 under title) */}
          <div
            className="
              text-navy-foreground order-3 
              items-center text-center lg:text-left
              lg:col-start-1 lg:row-start-2
              lg:-mt-52
            "
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl mb-6 text-navy-foreground/90"
            >
              Formamos creadores, consultores y emprendedores digitales que desean
              monetizar de forma ética, sostenible y con acompañamiento.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-center lg:justify-start">
              <Button
                size="lg"
                className="text-base lg:w-[95%]"
                onClick={() => (window.location.href = "#eventos")}
              >
                Ver próximos eventos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
