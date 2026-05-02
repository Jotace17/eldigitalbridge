import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "¿Qué ganas si das el 100% de la venta?",
      answer:
        "Una marca personal más sólida e impartir mis estrategias al mundo entero!",
    },
    {
      question: "¿Puedo hacerlo sin papeles?",
      answer:
        "Los productos digitales se venden en casi todos los países del mundo sin importar su documentación, tu puedes hacerlo con los documentos de tu país de origen y en su defecto generar un Itin (documento para pagar taxes en USA).",
    },
    {
      question: "¿Puedo hacerlo si no se de tecnología?",
      answer:
        "Les confieso que yo soy una persona poco tecnológica y aun así generé 300mil dolares en un año, las técnicas y la explicacion que damos en esta academia no requieren de profesionalismo!",
    },
    {
      question: "¿Tendré acompañamiento?",
      answer:
        "La academia tendrá clases en vivo esporádicas en inglés y español, si quieres acompañamiento más personalizado podrás adquirir tu membresía de clases con Katherine semanales!",
    },
    {
      question: "¿Funciona aunque lo esté haciendo todo el mundo?",
      answer:
        "El 97% de usuarios en redes sociales NO generan dinero con las redes ¿crees que el 3% es mucha gente? \n No todo el mundo lo está haciendo, estamos en el inicio de esta era digital y si lo dejas pasar te vas a arrepentir de no haber iniciado antes!",
    },
    {
      question: "¿Puedo hacerlo sin mostrar mi cara?",
      answer:
        "Sí, con inteligencia artificial y contenido educativo, puedes atraer a tu cliente ideal sin mostrar tu rostro en redes sociales.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas más comunes sobre nuestros programas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow bg-card"
            >
              <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline py-5 font-serif">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
