import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import popupBg from "@/assets/flyer.jpg"; {/* flyer.jpg es el nombre de la imagen */}

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem("PopupClosed");
    if (wasClosed) {
      setHasBeenClosed(true);
      return;
    }

    let triggered = false;

    const timer = setTimeout(() => {
      if (!triggered && !hasBeenClosed) {
        setIsVisible(true);
        triggered = true;
      }
    }, 5000);

    const handleScroll = () => {
      if (triggered || hasBeenClosed) return;

      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 30) {
        setIsVisible(true);
        triggered = true;
        clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    sessionStorage.setItem("PopupClosed", "true");
  };

  if (!isVisible || hasBeenClosed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div
        className="
          relative w-full max-w-4xl 
          h-[85vh] sm:h-[650px] 
          rounded-3xl overflow-hidden shadow-2xl 
          animate-[scale-in_0.4s_ease-out]
          flex flex-col
        "
      >
        {/* Background */}
        <img
          src={popupBg}
          alt="Sale"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* CONTENT FIXED AT THE BOTTOM */}
        <div className="relative z-20 mt-auto p-6 sm:p-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Descuento en masterclass                                                {/* titulo */}
          </h2>

          <p className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed">
            Cierra el año con propósito:<br />                                      {/* Linea 1 */}
            Mentalidad + mapa de sueños + plan de metas.<br />                      {/* Linea 2 */}
            Ahora 19 USD{" "}                                                       {/* precio actual */}
            <span className="line-through opacity-70">(precio real 49 USD)</span>.  {/* precio real */}
          </p>

          <Button
            size="lg"
            className="w-full md:w-auto min-w-[300px] bg-[#a6ff01] hover:bg-[#95e600] text-black font-bold text-lg py-6 px-12 rounded-xl transition-all shine-effect"
            onClick={() =>
              (window.location.href =
                "https://shop.beacons.ai/katherinee_ugc/244772ef-534e-4566-9d84-2eff12b8ef6b") // <- cambiar link del popup
            }
          >
            ¡Lo quiero ya!
          </Button>

          <p className="text-white/60 text-sm mt-6 mb-2 text-left">
            Respetamos tu decisión. Política de privacidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
